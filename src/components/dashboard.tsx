import { motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Crown, Plus, Sparkles } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { stats, revenueSeries, decrees, activities } from "@/lib/mock-data";

const statusTone: Record<string, string> = {
  Sealed: "bg-gold/15 text-gold-foreground ring-1 ring-gold/40",
  Pending: "bg-secondary text-secondary-foreground ring-1 ring-border",
  Review: "bg-primary/10 text-primary ring-1 ring-primary/30",
  Draft: "bg-muted text-muted-foreground ring-1 ring-border",
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
} as const;
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 220, damping: 24 } },
} as const;


export function Dashboard() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl bg-royal-gradient p-8 text-royal-foreground shadow-[var(--shadow-royal)] sm:p-10"
      >
        <div className="absolute inset-0 opacity-30 shimmer" aria-hidden />
        <div className="relative grid gap-6 sm:flex sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-gold ring-1 ring-gold/40">
              <Crown className="size-3" aria-hidden /> The Throne Room
            </div>
            <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Good morrow, <span className="text-gradient-gold">Your Majesty</span>
            </h1>
            <p className="mt-3 max-w-md text-sm text-royal-foreground/80">
              Your realm prospers. Revenue is up 12.4% this fortnight, and three new decrees await your seal.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-[var(--shadow-gold)]">
              <Plus className="size-4" /> New Decree
            </Button>
            <Button variant="outline" className="border-gold/40 bg-transparent text-royal-foreground hover:bg-gold/10">
              <Sparkles className="size-4" /> Summon Insight
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={item}>
            <Card className="group relative overflow-hidden border-border/60 bg-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-royal)]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <CardHeader className="pb-2">
                <CardTitle className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {s.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <p className="font-display text-3xl text-foreground">{s.value}</p>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
                      s.trend === "up"
                        ? "bg-gold/15 text-gold-foreground ring-1 ring-gold/40"
                        : "bg-destructive/10 text-destructive ring-1 ring-destructive/30"
                    }`}
                  >
                    {s.trend === "up" ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                    {s.delta}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      {/* Chart + Activity */}
      <section className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-border/60">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="font-display text-xl">Treasury Flow</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">Revenue vs. expenses across the realm</p>
            </div>
            <div className="flex gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5"><span className="size-2 rounded-full bg-primary" /> Revenue</span>
              <span className="inline-flex items-center gap-1.5"><span className="size-2 rounded-full bg-gold" /> Expenses</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueSeries} margin={{ left: -16, right: 8, top: 8, bottom: 0 }}>
                  <defs>
                    <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.32 0.13 295)" stopOpacity={0.6} />
                      <stop offset="100%" stopColor="oklch(0.32 0.13 295)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="exp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.78 0.13 82)" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="oklch(0.78 0.13 82)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.02 285)" />
                  <XAxis dataKey="month" stroke="oklch(0.48 0.04 280)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="oklch(0.48 0.04 280)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      background: "white",
                      border: "1px solid oklch(0.9 0.02 285)",
                      borderRadius: 12,
                      fontSize: 12,
                    }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="oklch(0.32 0.13 295)" strokeWidth={2} fill="url(#rev)" />
                  <Area type="monotone" dataKey="expenses" stroke="oklch(0.78 0.13 82)" strokeWidth={2} fill="url(#exp)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader>
            <CardTitle className="font-display text-xl">Court Activity</CardTitle>
            <p className="text-xs text-muted-foreground mt-1">Recent happenings in your court</p>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              {activities.map((a, i) => (
                <li key={i} className="flex gap-3">
                  <div className="grid size-9 shrink-0 place-items-center rounded-full bg-royal-gradient text-[11px] font-semibold text-gold">
                    {a.who.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm">
                      <span className="font-medium text-foreground">{a.who}</span>{" "}
                      <span className="text-muted-foreground">{a.what}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{a.when}</p>
                  </div>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* Decrees table */}
      <section className="mt-6">
        <Card className="border-border/60">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="font-display text-xl">Royal Decrees</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">Latest motions awaiting your attention</p>
            </div>
            <Button variant="outline" size="sm" className="border-gold/40 text-foreground hover:bg-gold/10">
              View ledger
            </Button>
          </CardHeader>
          <CardContent className="px-0">
            <Table>
              <TableHeader>
                <TableRow className="border-border/60">
                  <TableHead className="text-xs uppercase tracking-[0.12em] text-muted-foreground">ID</TableHead>
                  <TableHead className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Title</TableHead>
                  <TableHead className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Steward</TableHead>
                  <TableHead className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Status</TableHead>
                  <TableHead className="text-xs uppercase tracking-[0.12em] text-muted-foreground text-right">Filed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {decrees.map((d) => (
                  <TableRow key={d.id} className="border-border/60 transition-colors hover:bg-accent/40">
                    <TableCell className="font-mono text-xs text-muted-foreground">{d.id}</TableCell>
                    <TableCell className="font-medium">{d.title}</TableCell>
                    <TableCell className="text-muted-foreground">{d.owner}</TableCell>
                    <TableCell>
                      <Badge className={statusTone[d.status]} variant="outline">{d.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground">{d.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <footer className="mt-10 pb-6 text-center text-xs text-muted-foreground">
        <div className="crown-divider mx-auto mb-4 max-w-xs" />
        Regalia · Crafted with care for the modern court
      </footer>
    </div>
  );
}
