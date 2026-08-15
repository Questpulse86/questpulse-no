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

  const messageLines = [
    `Henvendelse fra questpulse.no: ${inquiryLabels[lead.inquiryType] ?? lead.inquiryType}`,
    lead.message?.trim() ?? "",
  ].filter(Boolean);

  const properties: Record<string, string> = {
    email: lead.email.trim().toLowerCase(),
    firstname,
    message: messageLines.join("\n\n"),
    hs_lead_status: "NEW",
    lifecyclestage: "lead",
  };
  if (lastname) properties["lastname"] = lastname;
  if (lead.company?.trim()) properties["company"] = lead.company.trim();
  if (lead.role?.trim()) properties["jobtitle"] = lead.role.trim();
  return properties;
}

function gatewayHeaders(lovableKey: string, hubspotKey: string) {
  return {
    Authorization: `Bearer ${lovableKey}`,
    "X-Connection-Api-Key": hubspotKey,
    "Content-Type": "application/json",
  };
}

/**
 * Sends a lead to HubSpot CRM through the Lovable connector gateway.
 * Creates the contact, or updates it when the email already exists.
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

    if (response.ok) return { synced: true, error: null };

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
        if (update.ok) return { synced: true, error: null };
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
