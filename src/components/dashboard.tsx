import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Plus,
  Sparkles,
  TrendingUp,
  Users,
  GraduationCap,
  Briefcase,
  BookOpen,
} from "lucide-react";
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
  Active: "bg-success/10 text-success ring-1 ring-success/25",
  Enrolling: "bg-electric/10 text-electric ring-1 ring-electric/25",
  Review: "bg-warning/15 text-warning-foreground ring-1 ring-warning/30",
  Draft: "bg-muted text-muted-foreground ring-1 ring-border",
};

const statIcons = [Users, GraduationCap, Briefcase, BookOpen];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
} as const;
const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 260, damping: 26 } },
} as const;

export function Dashboard() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-success animate-pulse" />
            All systems operational
          </div>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-[34px]">
            Good morning, <span className="text-gradient-brand">Aarav</span>
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Here's what's happening across your learning ecosystem today.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="h-9 gap-2 text-xs">
            <Sparkles className="size-3.5 text-electric" /> Ask AI
          </Button>
          <Button className="h-9 gap-2 text-xs bg-foreground text-background hover:bg-foreground/90">
            <Plus className="size-3.5" /> New Batch
          </Button>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((s, i) => {
          const Icon = statIcons[i];
          return (
            <motion.div key={s.label} variants={item}>
              <Card className="group relative overflow-hidden border-border/80 bg-card shadow-soft transition-all duration-200 hover:shadow-elevated hover:-translate-y-px">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div className="grid size-9 place-items-center rounded-lg bg-accent text-electric">
                      <Icon className="size-4" />
                    </div>
                    <span
                      className={`inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 text-[11px] font-semibold ${
                        s.trend === "up"
                          ? "bg-success/10 text-success"
                          : "bg-destructive/10 text-destructive"
                      }`}
                    >
                      {s.trend === "up" ? (
                        <ArrowUpRight className="size-3" />
                      ) : (
                        <ArrowDownRight className="size-3" />
                      )}
                      {s.delta}
                    </span>
                  </div>
                  <p className="mt-4 text-xs font-medium text-muted-foreground">{s.label}</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <p className="font-display text-2xl font-semibold tracking-tight text-foreground">
                      {s.value}
                    </p>
                  </div>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{s.hint}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.section>

      {/* Chart + Activity */}
      <section className="mt-5 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-border/80 shadow-soft">
          <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
            <div>
              <CardTitle className="font-display text-base font-semibold">Enrollment & Completion</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">
                Last 9 months · across all programs
              </p>
            </div>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-primary" /> Enrollments
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-electric" /> Completions
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueSeries} margin={{ left: -16, right: 8, top: 8, bottom: 0 }}>
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.36 0.16 270)" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="oklch(0.36 0.16 270)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.66 0.19 245)" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="oklch(0.66 0.19 245)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0.006 250)" />
                  <XAxis dataKey="month" stroke="oklch(0.5 0.02 255)" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="oklch(0.5 0.02 255)" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      background: "white",
                      border: "1px solid oklch(0.92 0.006 250)",
                      borderRadius: 10,
                      fontSize: 12,
                      boxShadow: "0 8px 24px -12px rgba(0,0,0,0.12)",
                    }}
                  />
                  <Area type="monotone" dataKey="enrollments" stroke="oklch(0.36 0.16 270)" strokeWidth={2} fill="url(#g1)" />
                  <Area type="monotone" dataKey="completions" stroke="oklch(0.66 0.19 245)" strokeWidth={2} fill="url(#g2)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/80 shadow-soft">
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-base font-semibold">Recent Activity</CardTitle>
            <p className="text-xs text-muted-foreground mt-1">Live feed from your cohorts</p>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              {activities.map((a, i) => (
                <li key={i} className="flex gap-3">
                  <div className="grid size-8 shrink-0 place-items-center rounded-full bg-accent text-[10px] font-semibold text-electric ring-1 ring-electric/20">
                    {a.who.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm leading-snug">
                      <span className="font-medium text-foreground">{a.who}</span>{" "}
                      <span className="text-muted-foreground">{a.what}</span>
                    </p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">{a.when}</p>
                  </div>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* AI Insight strip */}
      <section className="mt-5">
        <Card className="border-electric/20 bg-gradient-to-br from-electric/5 via-card to-card shadow-soft">
          <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="grid size-9 place-items-center rounded-lg bg-brand-gradient text-white">
                <TrendingUp className="size-4" />
              </div>
              <div>
                <p className="text-sm font-semibold">AI Insight · Dropout risk detected</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  12 students in <span className="font-medium text-foreground">Data Science · Q4</span> show declining engagement. Recommend a re-engagement nudge.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="h-8 text-xs">Dismiss</Button>
              <Button size="sm" className="h-8 text-xs bg-electric text-electric-foreground hover:bg-electric/90">
                Review students
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Batches table */}
      <section className="mt-5">
        <Card className="border-border/80 shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <div>
              <CardTitle className="font-display text-base font-semibold">Active Batches</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">
                Cohorts running across programs
              </p>
            </div>
            <Button variant="outline" size="sm" className="h-8 text-xs">
              View all
            </Button>
          </CardHeader>
          <CardContent className="px-0">
            <Table>
              <TableHeader>
                <TableRow className="border-border/80 hover:bg-transparent">
                  <TableHead className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">ID</TableHead>
                  <TableHead className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Program</TableHead>
                  <TableHead className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Mentor</TableHead>
                  <TableHead className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Status</TableHead>
                  <TableHead className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground text-right">Updated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {decrees.map((d) => (
                  <TableRow key={d.id} className="border-border/60 transition-colors hover:bg-accent/40">
                    <TableCell className="font-mono text-[11px] text-muted-foreground">{d.id}</TableCell>
                    <TableCell className="font-medium text-sm">{d.title}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{d.owner}</TableCell>
                    <TableCell>
                      <Badge className={statusTone[d.status]} variant="outline">
                        {d.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground text-sm">{d.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <footer className="mt-10 pb-6 text-center text-xs text-muted-foreground">
        Dvein SkillHub · Enterprise Learning Management
      </footer>
    </div>
  );
}
