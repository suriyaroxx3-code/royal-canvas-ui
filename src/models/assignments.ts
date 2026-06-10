/**
 * Assignments Model
 * Represents tasks and duties assigned within the Royal Operations Suite
 */

export type AssignmentStatus = "Pending" | "In Progress" | "Completed" | "Overdue" | "Review";
export type AssignmentPriority = "Low" | "Medium" | "High" | "Critical";

export interface Assignment {
  id: string;
  title: string;
  description?: string;
  assignedTo: string;
  assignedBy: string;
  status: AssignmentStatus;
  priority: AssignmentPriority;
  dueDate: string;
  createdDate: string;
  completedDate?: string;
  tags?: string[];
}
