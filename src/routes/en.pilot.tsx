import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/en/pilot")({
  beforeLoad: () => {
    throw redirect({ to: "/en/enterprise-evaluation", statusCode: 301 });
  },
});
