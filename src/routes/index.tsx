import { createFileRoute } from "@tanstack/react-router";
import { RoyalShell } from "@/components/royal-shell";
import { Dashboard } from "@/components/dashboard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Dvein SkillHub" },
      {
        name: "description",
        content:
          "Enterprise dashboard for Dvein SkillHub — AI-powered LMS, placements, and skill development.",
      },
      { property: "og:title", content: "Dashboard — Dvein SkillHub" },
      { property: "og:description", content: "Enterprise LMS dashboard with AI insights." },
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
