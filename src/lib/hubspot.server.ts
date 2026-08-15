const GATEWAY_URL = "https://connector-gateway.lovable.dev/hubspot";

type LeadInput = {
  name: string;
  email: string;
  company?: string;
  role?: string;
  inquiryType: string;
  message?: string;
};

const inquiryLabels: Record<string, string> = {
  demo: "Demo",
  pilot: "Pilot",
  partner: "Partner",
  investor: "Investor",
};

function buildProperties(lead: LeadInput): Record<string, string> {
  const trimmed = lead.name.trim();
  const parts = trimmed.split(/\s+/);
  const firstname = parts.length > 1 ? parts.slice(0, -1).join(" ") : trimmed;
  const lastname = parts.length > 1 ? (parts[parts.length - 1] ?? "") : "";

  const properties: Record<string, string> = {
    email: lead.email.trim().toLowerCase(),
    firstname,
    hs_lead_status: "NEW",
    lifecyclestage: "lead",
  };
  if (lastname) properties["lastname"] = lastname;
  if (lead.company?.trim()) properties["company"] = lead.company.trim();
  if (lead.role?.trim()) properties["jobtitle"] = lead.role.trim();
  return properties;
}

function buildNoteBody(lead: LeadInput): string {
  const lines = [
    `Henvendelse fra questpulse.no: ${inquiryLabels[lead.inquiryType] ?? lead.inquiryType}`,
    lead.message?.trim() ?? "",
  ].filter(Boolean);
  return lines.join("\n\n");
}

function gatewayHeaders(lovableKey: string, hubspotKey: string) {
  return {
    Authorization: `Bearer ${lovableKey}`,
    "X-Connection-Api-Key": hubspotKey,
    "Content-Type": "application/json",
  };
}

/**
 * Creates a HubSpot note with the message and inquiry type, associated to the contact.
 * Note-to-contact association type id 202 is the HubSpot-defined default.
 */
async function createContactNote(
  headers: Record<string, string>,
  contactId: string,
  lead: LeadInput,
): Promise<string | null> {
  try {
    const response = await fetch(`${GATEWAY_URL}/crm/v3/objects/notes`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        properties: {
          hs_timestamp: new Date().toISOString(),
          hs_note_body: buildNoteBody(lead),
        },
        associations: [
          {
            to: { id: contactId },
            types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 202 }],
          },
        ],
      }),
    });
    if (response.ok) return null;
    const body = await response.text();
    console.error(`HubSpot note failed [${response.status}]: ${body}`);
    return `HubSpot note ${response.status}: ${body.slice(0, 400)}`;
  } catch (error) {
    console.error("HubSpot note threw", error);
    return error instanceof Error ? error.message : "Ukjent feil";
  }
}

/**
 * Sends a lead to HubSpot CRM through the Lovable connector gateway.
 * Creates the contact, or updates it when the email already exists, and logs
 * the message plus inquiry type as an associated note.
 * Returns quietly when HubSpot is not connected yet, so no lead is ever lost.
 */
export async function syncLeadToHubspot(
  lead: LeadInput,
): Promise<{ synced: boolean; error: string | null }> {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const hubspotKey = process.env["HUBSPOT_API_KEY"];
  if (!lovableKey || !hubspotKey) {
    return { synced: false, error: "HubSpot er ikke koblet til" };
  }

  const headers = gatewayHeaders(lovableKey, hubspotKey);
  const properties = buildProperties(lead);

  try {
    const response = await fetch(`${GATEWAY_URL}/crm/v3/objects/contacts`, {
      method: "POST",
      headers,
      body: JSON.stringify({ properties }),
    });

    if (response.ok) {
      const created = (await response.json()) as { id?: string };
      const noteError = created.id ? await createContactNote(headers, created.id, lead) : null;
      return { synced: true, error: noteError };
    }

    const body = await response.text();

    // Existing contact with this email: update it instead of failing.
    if (response.status === 409) {
      const existingId = body.match(/Existing ID:\s*(\d+)/)?.[1];
      if (existingId) {
        const update = await fetch(`${GATEWAY_URL}/crm/v3/objects/contacts/${existingId}`, {
          method: "PATCH",
          headers,
          body: JSON.stringify({ properties }),
        });
        if (update.ok) {
          const noteError = await createContactNote(headers, existingId, lead);
          return { synced: true, error: noteError };
        }
        const updateBody = await update.text();
        console.error(`HubSpot update failed [${update.status}]: ${updateBody}`);
        return {
          synced: false,
          error: `HubSpot ${update.status}: ${updateBody.slice(0, 400)}`,
        };
      }
    }

    console.error(`HubSpot sync failed [${response.status}]: ${body}`);
    return { synced: false, error: `HubSpot ${response.status}: ${body.slice(0, 400)}` };
  } catch (error) {
    console.error("HubSpot sync threw", error);
    return { synced: false, error: error instanceof Error ? error.message : "Ukjent feil" };
  }
}
