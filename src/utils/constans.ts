import { Priority, Filter } from "../types/todo";

export const PRIORITIES: Priority[] = ["low", "medium", "high"];
export const FILTERS: Filter[] = ["all", "active", "completed"];

export const PRIORITY_STYLES = {
  high: "bg-red-100 text-red-700",
  medium: "bg-yellow-100 text-yellow-700",
  low: "bg-green-100 text-green-700",
} as const;
