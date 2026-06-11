import { motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, GraduationCap, ArrowLeftRight } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  progressOverview,
  progressTrend,
  skillBreakdown,
  mentors,
  studentProgress,
  standingTone,
} from "@/lib/progress-data";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
} as const;
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 220, damping: 24 } },
} as const;

export function AnalyticsDashboard() {
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
              <GraduationCap className="size-3" aria-hidden /> The Academy Ledger
            </div>
            <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Progress <span className="text-gradient-gold">Across the Realm</span>
            </h1>
            <p className="mt-3 max-w-md text-sm text-royal-foreground/80">
              Track how mentors and students are advancing through their studies, week over week.
            </p>
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
        {progressOverview.map((s) => (
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
                    {s.trend === "up" ? (
                      <ArrowUpRight className="size-3" />
                    ) : (
                      <ArrowDownRight className="size-3" />
                    )}
                    {s.delta}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      {/* Trend + Skill mastery */}
      <section className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-border/60">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="font-display text-xl">Progress Trend</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">
                Average completion across mentors and students
              </p>
            </div>
            <div className="flex gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-primary" /> Students
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-gold" /> Mentors
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={progressTrend} margin={{ left: -16, right: 8, top: 8, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.02 285)" />
                  <XAxis
                    dataKey="week"
                    stroke="oklch(0.48 0.04 280)"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="oklch(0.48 0.04 280)"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    unit="%"
                  />
                  <Tooltip
                    contentStyle={{
                      background: "white",
                      border: "1px solid oklch(0.9 0.02 285)",
                      borderRadius: 12,
                      fontSize: 12,
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="students"
                    stroke="oklch(0.32 0.13 295)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="mentors"
                    stroke="oklch(0.78 0.13 82)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader>
            <CardTitle className="font-display text-xl">Skill Mastery</CardTitle>
            <p className="text-xs text-muted-foreground mt-1">Course-wide average mastery</p>
          </CardHeader>
          <CardContent>
            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={skillBreakdown}
                  layout="vertical"
                  margin={{ left: -16, right: 16, top: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.02 285)" />
                  <XAxis
                    type="number"
                    domain={[0, 100]}
                    stroke="oklch(0.48 0.04 280)"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    unit="%"
                  />
                  <YAxis
                    type="category"
                    dataKey="skill"
                    stroke="oklch(0.48 0.04 280)"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    width={80}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "white",
                      border: "1px solid oklch(0.9 0.02 285)",
                      borderRadius: 12,
                      fontSize: 12,
                    }}
                  />
                  <Bar dataKey="mastery" fill="oklch(0.32 0.13 295)" radius={[0, 6, 6, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Mentor leaderboard */}
      <section className="mt-6">
        <Card className="border-border/60">
          <CardHeader>
            <CardTitle className="font-display text-xl">Mentor Performance</CardTitle>
            <p className="text-xs text-muted-foreground mt-1">
              Course size, average student progress, and engagement
            </p>
          </CardHeader>
          <CardContent className="px-0">
            <Table>
              <TableHeader>
                <TableRow className="border-border/60">
                  <TableHead className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    Mentor
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    Course
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    Students
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    Avg Progress
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    Sessions
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-[0.12em] text-muted-foreground text-right">
                    Satisfaction
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mentors.map((m) => (
                  <TableRow
                    key={m.id}
                    className="border-border/60 transition-colors hover:bg-accent/40"
                  >
                    <TableCell className="font-medium">{m.name}</TableCell>
                    <TableCell className="text-muted-foreground">{m.course}</TableCell>
                    <TableCell className="text-muted-foreground">{m.studentsCount}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={m.avgProgress} className="h-1.5 w-24" />
                        <span className="text-xs text-muted-foreground">{m.avgProgress}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{m.sessionsCompleted}</TableCell>
                    <TableCell className="text-right text-muted-foreground">
                      {m.satisfaction.toFixed(1)} / 5
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      {/* Student progress table */}
      <section className="mt-6">
        <Card className="border-border/60">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="font-display text-xl">Student Progress</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">
                Course completion and standing for active students
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <ArrowLeftRight className="size-3.5" /> Updated moments ago
            </span>
          </CardHeader>
          <CardContent className="px-0">
            <Table>
              <TableHeader>
                <TableRow className="border-border/60">
                  <TableHead className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    Student
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    Mentor
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    Course
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    Progress
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    Standing
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-[0.12em] text-muted-foreground text-right">
                    Last Active
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {studentProgress.map((s) => (
                  <TableRow
                    key={s.id}
                    className="border-border/60 transition-colors hover:bg-accent/40"
                  >
                    <TableCell className="font-medium">{s.name}</TableCell>
                    <TableCell className="text-muted-foreground">{s.mentor}</TableCell>
                    <TableCell className="text-muted-foreground">{s.course}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={s.progress} className="h-1.5 w-24" />
                        <span className="text-xs text-muted-foreground">
                          {s.modulesCompleted}/{s.modulesTotal}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={standingTone[s.standing]} variant="outline">
                        {s.standing}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground">
                      {s.lastActive}
                    </TableCell>
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
