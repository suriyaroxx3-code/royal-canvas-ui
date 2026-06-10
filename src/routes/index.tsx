import { createFileRoute } from "@tanstack/react-router";
import { RoyalShell } from "@/components/royal-shell";
import { Dashboard } from "@/components/dashboard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Regalia — Royal Operations Suite" },
      {
        name: "description",
        content:
          "A premium, royal-themed SaaS dashboard prototype with refined components, micro-interactions, and accessibility.",
      },
      { property: "og:title", content: "Regalia — Royal Operations Suite" },
      { property: "og:description", content: "A premium, royal-themed SaaS dashboard prototype." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <RoyalShell>
      <Dashboard />
    </RoyalShell>
  );
}
