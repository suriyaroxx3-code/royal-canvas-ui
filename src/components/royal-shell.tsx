import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  ClipboardList,
  Award,
  BarChart3,
  Users,
  Sparkles,
  Search,
  Bell,
  Command,
  Settings,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navGroups = [
  {
    label: "Overview",
    items: [
      { to: "/", label: "Dashboard", icon: LayoutDashboard },
      { to: "/analytics", label: "Analytics", icon: BarChart3 },
    ],
  },
  {
    label: "Learning",
    items: [
      { to: "/courses", label: "Courses", icon: BookOpen },
      { to: "/assignments", label: "Assignments", icon: ClipboardList },
      { to: "/assessments", label: "Assessments", icon: GraduationCap },
    ],
  },
  {
    label: "People",
    items: [
      { to: "/students", label: "Students", icon: Users },
      { to: "/mentors", label: "Mentors", icon: Sparkles },
      { to: "/placements", label: "Placements", icon: Briefcase },
    ],
  },
  {
    label: "System",
    items: [
      { to: "/certificate", label: "Certificates", icon: Award },
      { to: "/settings", label: "Settings", icon: Settings },
    ],
  },
];

export function RoyalShell({ children }: { children: React.ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="flex min-h-dvh w-full bg-background">
      <aside
        aria-label="Primary navigation"
        className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground md:flex"
      >
        <div className="flex items-center gap-2.5 px-5 pt-6 pb-5">
          <div className="grid size-9 place-items-center rounded-xl bg-brand-gradient text-white shadow-soft">
            <span className="text-sm font-bold tracking-tight">D</span>
          </div>
          <div className="min-w-0">
            <p className="font-display text-[15px] font-semibold leading-none tracking-tight">
              Dvein <span className="text-gradient-brand">SkillHub</span>
            </p>
            <p className="text-[10px] tracking-[0.18em] text-muted-foreground uppercase mt-1.5">
              Enterprise LMS
            </p>
          </div>
        </div>

        <div className="px-3">
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-lg border border-sidebar-border bg-card/60 px-3 py-2 text-xs text-muted-foreground transition hover:border-electric/40 hover:text-foreground"
          >
            <Search className="size-3.5" />
            <span className="flex-1 text-left">Quick search…</span>
            <kbd className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-mono">⌘K</kbd>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {navGroups.map((group) => (
            <div key={group.label} className="mb-5">
              <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">
                {group.label}
              </p>
              <ul className="space-y-0.5">
                {group.items.map((item) => {
                  const active = path === item.to;
                  const Icon = item.icon;
                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="group relative flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium text-sidebar-foreground/75 outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                        aria-current={active ? "page" : undefined}
                      >
                        {active && (
                          <motion.span
                            layoutId="nav-active"
                            className="absolute inset-0 rounded-lg bg-sidebar-accent ring-1 ring-electric/20"
                            transition={{ type: "spring", stiffness: 400, damping: 32 }}
                          />
                        )}
                        <Icon className={`relative size-4 ${active ? "text-electric" : ""}`} aria-hidden />
                        <span className={`relative ${active ? "text-foreground" : ""}`}>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="m-3 rounded-xl border border-border bg-card p-3.5 shadow-soft">
          <div className="flex items-center gap-2">
            <div className="grid size-7 place-items-center rounded-lg bg-brand-gradient text-white">
              <Sparkles className="size-3.5" />
            </div>
            <p className="font-display text-sm font-semibold">AI Assistant</p>
          </div>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            Ask anything — code help, learning paths, interview prep.
          </p>
          <Button size="sm" className="mt-3 w-full h-8 text-xs bg-foreground text-background hover:bg-foreground/90">
            Open Assistant
          </Button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-md sm:px-6">
          <div className="md:hidden grid size-8 place-items-center rounded-lg bg-brand-gradient text-white">
            <span className="text-xs font-bold">D</span>
          </div>
          <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground">
            <span>Workspace</span>
            <span className="text-border">/</span>
            <span className="text-foreground font-medium">Dashboard</span>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex h-9 text-xs gap-2 text-muted-foreground">
              <Command className="size-3.5" /> Shortcuts
            </Button>
            <Button variant="ghost" size="icon" aria-label="Notifications" className="relative h-9 w-9">
              <Bell className="size-4" />
              <span className="absolute right-2 top-2 size-1.5 rounded-full bg-electric ring-2 ring-background" aria-hidden />
            </Button>
            <div className="flex items-center gap-2 rounded-full border border-border bg-card pl-1 pr-3 py-1">
              <div className="grid size-7 place-items-center rounded-full bg-brand-gradient text-[11px] font-semibold text-white">
                AK
              </div>
              <div className="hidden sm:block leading-tight">
                <p className="text-xs font-semibold">Aarav Kumar</p>
                <p className="text-[10px] text-muted-foreground">Super Admin</p>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
