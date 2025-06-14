export type Priority = "low" | "medium" | "high";
export type Filter = "all" | "active" | "completed";

export interface TodoItem {
  id: number;
  text: string;
  description: string;
  completed: boolean;
  priority: Priority;
}
