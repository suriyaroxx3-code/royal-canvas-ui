import { createFileRoute } from "@tanstack/react-router";
import { RoyalShell } from "@/components/royal-shell";
import { AnalyticsDashboard } from "@/components/ui/analytics-dashboard";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Regalia — Academy Analytics" },
      {
        name: "description",
        content: "Track mentor and student progress across the Royal Academy.",
      },
    ],
  }),
  component: AnalyticsPage,
});

function AnalyticsPage() {
  return (
    <RoyalShell>
      <AnalyticsDashboard />
    </RoyalShell>
  );
}
