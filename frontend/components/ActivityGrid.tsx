"use client";

import { useEffect, useState } from "react";
import type { Activity } from "../lib/types";
import { ActivityCard } from "./ActivityCard";
import FilterBar from "./FilterBar";

export default function ActivityGrid({ activities }: { activities: Activity[] }) {
  const [list, setList] = useState<Activity[]>(activities);

  useEffect(() => setList(activities), [activities]);

  return (
    <>
      <FilterBar initialActivities={activities} onFiltered={setList} />
      <div className="grid gap-4 sm:grid-cols-2">
        {list.map(a => <ActivityCard key={a.title} {...a} />)}
      </div>
    </>
  );
}
