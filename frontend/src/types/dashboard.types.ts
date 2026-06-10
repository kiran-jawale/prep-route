// types/dashboard.types.ts

import type { TestStatus } from "./test.types";

export type DashboardFilter =
  | "all"
  | TestStatus;

export interface DashboardStats {
  total: number;
  live: number;
  draft: number;
  scheduled: number;
  expired: number;
}