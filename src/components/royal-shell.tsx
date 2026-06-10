import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Crown, LayoutDashboard, Scroll, Users, Coins, Settings, Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Throne Room", icon: LayoutDashboard },
  { to: "/decrees", label: "Decrees", icon: Scroll },
  { to: "/court", label: "Court", icon: Users },
  { to: "/treasury", label: "Treasury", icon: Coins },
  { to: "/settings", label: "Settings", icon: Settings },
];

export function RoyalShell({ children }: { children: React.ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="flex min-h-dvh w-full">
      <aside
        aria-label="Primary navigation"
        className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col bg-royal-gradient text-sidebar-foreground md:flex"
      >
        <div className="flex items-center gap-3 px-6 pt-7 pb-6">
          <div className="grid size-10 place-items-center rounded-xl bg-gold/15 ring-1 ring-gold/40">
            <Crown className="size-5 text-gold" aria-hidden />
          </div>
          <div>
            <p className="font-display text-xl leading-none">Regalia</p>
            <p className="text-[11px] tracking-[0.18em] text-gold/80 uppercase mt-1">Royal Suite</p>
          </div>
        </div>
        <div className="crown-divider mx-6" />
        <nav className="flex-1 px-3 py-5">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const active = path === item.to;
              const Icon = item.icon;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground/80 outline-none transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground focus-visible:ring-2 focus-visible:ring-gold"
                    aria-current={active ? "page" : undefined}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg bg-gold/15 ring-1 ring-gold/40"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <Icon className="relative size-4" aria-hidden />
                    <span className="relative">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="m-4 rounded-xl border border-gold/30 bg-sidebar-accent/40 p-4">
          <p className="font-display text-sm text-gold">Ascend to Imperial</p>
          <p className="mt-1 text-xs text-sidebar-foreground/70">Unlock advanced courtly analytics and unlimited heralds.</p>
          <Button size="sm" className="mt-3 w-full bg-gold text-gold-foreground hover:bg-gold/90">
            Upgrade
          </Button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border/60 bg-background/80 px-4 backdrop-blur-md sm:px-6">
          <div className="md:hidden">
            <Crown className="size-5 text-primary" aria-hidden />
          </div>
          <div className="relative ml-auto hidden max-w-md flex-1 sm:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
            <input
              type="search"
              placeholder="Seek decrees, subjects, ledgers…"
              aria-label="Search"
              className="h-10 w-full rounded-full border border-input bg-card/60 pl-9 pr-4 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/40"
            />
          </div>
          <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
            <Bell className="size-4" />
            <span className="absolute right-2 top-2 size-1.5 rounded-full bg-gold" aria-hidden />
          </Button>
          <div className="flex items-center gap-2 rounded-full bg-card px-2 py-1 ring-1 ring-border">
            <div className="grid size-7 place-items-center rounded-full bg-royal-gradient text-[11px] font-semibold text-gold">EM</div>
            <span className="pr-2 text-sm font-medium hidden sm:inline">Her Majesty</span>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
