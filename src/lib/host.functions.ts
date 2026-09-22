import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

/** Leser vertsnavnet forespørselen kom inn på (kun server). */
export const getRequestHost = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const request = getRequest();
    return (request.headers.get("host") ?? "").toLowerCase();
  } catch {
    return "";
  }
});

export function isDchubHost(host: string) {
  return host.includes("digitalcoachub");
}

export async function resolveHost() {
  if (typeof window !== "undefined") return window.location.host.toLowerCase();
  return await getRequestHost();
}
