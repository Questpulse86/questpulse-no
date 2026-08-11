const GATEWAY_URL = "https://connector-gateway.lovable.dev/hubspot";

type LeadInput = {
  name: string;
  email: string;
  company?: string;
  role?: string;
  inquiryType: string;
  message?: string;
};

/**
 * Sends a lead to HubSpot CRM through the Lovable connector gateway.
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

  const [firstname, ...rest] = lead.name.split(" ");
  const properties: Record<string, string> = {
    email: lead.email,
    firstname: firstname ?? lead.name,
    lastname: rest.join(" "),
    company: lead.company ?? "",
    jobtitle: lead.role ?? "",
    message: [`Type: ${lead.inquiryType}`, lead.message ?? ""].filter(Boolean).join("\n"),
  };

  try {
    const response = await fetch(`${GATEWAY_URL}/crm/v3/objects/contacts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": hubspotKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ properties }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(`HubSpot sync failed [${response.status}]: ${body}`);
      return { synced: false, error: `HubSpot ${response.status}: ${body.slice(0, 400)}` };
    }
    return { synced: true, error: null };
  } catch (error) {
    console.error("HubSpot sync threw", error);
    return { synced: false, error: error instanceof Error ? error.message : "Ukjent feil" };
  }
}
