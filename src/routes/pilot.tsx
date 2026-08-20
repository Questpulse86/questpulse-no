import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/pilot")({
  beforeLoad: () => {
    throw redirect({ to: "/enterprise-evaluering", statusCode: 301 });
  },
});
