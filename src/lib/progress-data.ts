import type {
  MentorSummary,
  StudentProgress,
  ProgressTrendPoint,
  SkillBreakdown,
} from "@/models/progress";

export const progressOverview = [
  { label: "Active Students", value: "186", delta: "+8.1%", trend: "up" as const },
  { label: "Active Mentors", value: "14", delta: "+2", trend: "up" as const },
  { label: "Avg Course Progress", value: "67%", delta: "+5.4%", trend: "up" as const },
  { label: "Sessions This Week", value: "92", delta: "-3.0%", trend: "down" as const },
];

export const progressTrend: ProgressTrendPoint[] = [
  { week: "Wk 1", students: 38, mentors: 52 },
  { week: "Wk 2", students: 44, mentors: 55 },
  { week: "Wk 3", students: 49, mentors: 58 },
  { week: "Wk 4", students: 53, mentors: 60 },
  { week: "Wk 5", students: 58, mentors: 64 },
  { week: "Wk 6", students: 62, mentors: 68 },
  { week: "Wk 7", students: 67, mentors: 73 },
  { week: "Wk 8", students: 71, mentors: 76 },
];

export const skillBreakdown: SkillBreakdown[] = [
  { skill: "Diplomacy", mastery: 78 },
  { skill: "Strategy", mastery: 64 },
  { skill: "Finance", mastery: 71 },
  { skill: "Rhetoric", mastery: 58 },
  { skill: "Law", mastery: 82 },
];

export const mentors: MentorSummary[] = [
  {
    id: "MNT-001",
    name: "Lady Adelaide",
    cohort: "Treasury Apprentices",
    studentsCount: 18,
    avgProgress: 74,
    sessionsCompleted: 142,
    satisfaction: 4.8,
  },
  {
    id: "MNT-002",
    name: "Duke Cassian",
    cohort: "Strategic Command",
    studentsCount: 22,
    avgProgress: 61,
    sessionsCompleted: 168,
    satisfaction: 4.6,
  },
  {
    id: "MNT-003",
    name: "Dame Iris",
    cohort: "Scholars of Law",
    studentsCount: 15,
    avgProgress: 88,
    sessionsCompleted: 121,
    satisfaction: 4.9,
  },
  {
    id: "MNT-004",
    name: "Sir Aldwin",
    cohort: "Diplomatic Corps",
    studentsCount: 19,
    avgProgress: 55,
    sessionsCompleted: 99,
    satisfaction: 4.3,
  },
  {
    id: "MNT-005",
    name: "Lord Edric",
    cohort: "Maritime Trade",
    studentsCount: 12,
    avgProgress: 69,
    sessionsCompleted: 87,
    satisfaction: 4.5,
  },
];

export const studentProgress: StudentProgress[] = [
  {
    id: "STU-1042",
    name: "Elara Voss",
    mentor: "Lady Adelaide",
    course: "Royal Treasury Fundamentals",
    progress: 92,
    standing: "Excelling",
    modulesCompleted: 11,
    modulesTotal: 12,
    lastActive: "2h ago",
  },
  {
    id: "STU-1043",
    name: "Tomas Greer",
    mentor: "Duke Cassian",
    course: "Strategic Command Tactics",
    progress: 48,
    standing: "At Risk",
    modulesCompleted: 5,
    modulesTotal: 10,
    lastActive: "3d ago",
  },
  {
    id: "STU-1044",
    name: "Bryn Sorel",
    mentor: "Dame Iris",
    course: "Foundations of Royal Law",
    progress: 100,
    standing: "Excelling",
    modulesCompleted: 8,
    modulesTotal: 8,
    lastActive: "Yesterday",
  },
  {
    id: "STU-1045",
    name: "Wren Halloway",
    mentor: "Sir Aldwin",
    course: "Diplomatic Negotiation",
    progress: 34,
    standing: "Behind",
    modulesCompleted: 3,
    modulesTotal: 9,
    lastActive: "5d ago",
  },
  {
    id: "STU-1046",
    name: "Idris Calder",
    mentor: "Lord Edric",
    course: "Maritime Trade Law",
    progress: 70,
    standing: "On Track",
    modulesCompleted: 7,
    modulesTotal: 10,
    lastActive: "1h ago",
  },
  {
    id: "STU-1047",
    name: "Marielle Shaw",
    mentor: "Lady Adelaide",
    course: "Royal Treasury Fundamentals",
    progress: 64,
    standing: "On Track",
    modulesCompleted: 7,
    modulesTotal: 12,
    lastActive: "6h ago",
  },
];

export const standingTone: Record<string, string> = {
  Excelling: "bg-gold/15 text-gold-foreground ring-1 ring-gold/40",
  "On Track": "bg-primary/10 text-primary ring-1 ring-primary/30",
  "At Risk": "bg-destructive/10 text-destructive ring-1 ring-destructive/30",
  Behind: "bg-muted text-muted-foreground ring-1 ring-border",
};
