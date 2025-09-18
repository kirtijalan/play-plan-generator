import type { Activity } from "./types";

export async function fetchActivities(): Promise<Activity[]> {
  const base = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";
  const res = await fetch(`${base}/activities`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch activities");
  return res.json();
}
