export const stats = [
  { label: "Total Students", value: "24,318", delta: "+8.2%", trend: "up" as const, hint: "vs last month" },
  { label: "Active Batches", value: "186", delta: "+12", trend: "up" as const, hint: "this quarter" },
  { label: "Placement Rate", value: "92.4%", delta: "+3.1%", trend: "up" as const, hint: "rolling 90d" },
  { label: "Course Completion", value: "78.6%", delta: "-1.2%", trend: "down" as const, hint: "vs last month" },
];

export const revenueSeries = [
  { month: "Jan", enrollments: 1240, completions: 820 },
  { month: "Feb", enrollments: 1480, completions: 990 },
  { month: "Mar", enrollments: 1620, completions: 1100 },
  { month: "Apr", enrollments: 1810, completions: 1280 },
  { month: "May", enrollments: 2040, completions: 1450 },
  { month: "Jun", enrollments: 2280, completions: 1690 },
  { month: "Jul", enrollments: 2510, completions: 1880 },
  { month: "Aug", enrollments: 2390, completions: 1820 },
  { month: "Sep", enrollments: 2720, completions: 2080 },
];

export const decrees = [
  { id: "BATCH-3041", title: "Full-Stack Web Dev · Cohort 14", owner: "Priya Sharma", status: "Active", date: "Sep 12" },
  { id: "BATCH-3042", title: "Data Science Internship · Q4", owner: "Rahul Verma", status: "Enrolling", date: "Sep 14" },
  { id: "BATCH-3043", title: "AI/ML Specialization · Advanced", owner: "Ananya Iyer", status: "Review", date: "Sep 15" },
  { id: "BATCH-3044", title: "Cloud DevOps Bootcamp", owner: "Karan Mehta", status: "Active", date: "Sep 17" },
  { id: "BATCH-3045", title: "Product Management Track", owner: "Sneha Kapoor", status: "Draft", date: "Sep 18" },
];

export const activities = [
  { who: "Priya Sharma", what: "submitted React capstone project", when: "2m ago" },
  { who: "Rahul Verma", what: "completed AI Foundations assessment", when: "1h ago" },
  { who: "Ananya Iyer", what: "earned Cloud Practitioner certificate", when: "3h ago" },
  { who: "Karan Mehta", what: "joined DevOps Bootcamp live session", when: "Yesterday" },
];

import type { Assignment } from "@/models/assignments";

export const assignments: Assignment[] = [
  { id: "ASG-2001", title: "Build a REST API with Node.js", description: "Design and implement a production-ready REST API with auth and tests.", assignedTo: "Priya Sharma", assignedBy: "Mentor Arjun", status: "In Progress", priority: "High", dueDate: "Oct 20, 2026", createdDate: "Oct 05, 2026", tags: ["Backend", "Node.js"] },
  { id: "ASG-2002", title: "Data cleaning case study", description: "Clean and analyze a real-world e-commerce dataset.", assignedTo: "Rahul Verma", assignedBy: "Mentor Neha", status: "Pending", priority: "High", dueDate: "Oct 25, 2026", createdDate: "Oct 08, 2026", tags: ["Data", "Python"] },
  { id: "ASG-2003", title: "Deploy a Next.js app", description: "Ship a Next.js project to Vercel with CI/CD.", assignedTo: "Ananya Iyer", assignedBy: "Mentor Sahil", status: "Completed", priority: "Medium", dueDate: "Oct 18, 2026", createdDate: "Oct 01, 2026", completedDate: "Oct 17, 2026", tags: ["Frontend", "DevOps"] },
  { id: "ASG-2004", title: "ML model evaluation report", description: "Train and benchmark three classification models.", assignedTo: "Karan Mehta", assignedBy: "Mentor Divya", status: "In Progress", priority: "Critical", dueDate: "Oct 22, 2026", createdDate: "Oct 10, 2026", tags: ["ML", "Report"] },
  { id: "ASG-2005", title: "Resume + ATS optimization", description: "Refine resume with measurable impact and ATS-friendly format.", assignedTo: "Sneha Kapoor", assignedBy: "Placement Cell", status: "Review", priority: "Medium", dueDate: "Oct 19, 2026", createdDate: "Oct 12, 2026", tags: ["Placement", "Career"] },
  { id: "ASG-2006", title: "Mock interview · System Design", description: "1:1 mock interview with mentor feedback.", assignedTo: "Priya Sharma", assignedBy: "Mentor Arjun", status: "Pending", priority: "Low", dueDate: "Nov 15, 2026", createdDate: "Oct 14, 2026", tags: ["Interview", "System Design"] },
];
