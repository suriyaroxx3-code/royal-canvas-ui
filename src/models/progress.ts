/**
 * Progress Analytics Model
 * Represents mentor and student progress tracking within the Royal Academy
 */

export type StudentStanding = "On Track" | "At Risk" | "Excelling" | "Behind";

export interface MentorSummary {
  id: string;
  name: string;
  cohort: string;
  studentsCount: number;
  avgProgress: number;
  sessionsCompleted: number;
  satisfaction: number;
}

export interface StudentProgress {
  id: string;
  name: string;
  mentor: string;
  course: string;
  progress: number;
  standing: StudentStanding;
  modulesCompleted: number;
  modulesTotal: number;
  lastActive: string;
}

export interface ProgressTrendPoint {
  week: string;
  students: number;
  mentors: number;
}

export interface SkillBreakdown {
  skill: string;
  mastery: number;
}
