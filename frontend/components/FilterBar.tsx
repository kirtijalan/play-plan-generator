"use client";

import { useMemo, useState } from "react";
import type { Activity } from "../lib/types";

type Props = {
  initialActivities: Activity[];
  onFiltered: (list: Activity[]) => void;
};

const categories = ["All", "Fine Motor Skills", "Gross Motor Skills", "Social Skills", "Pretend Play"];

export default function FilterBar({ initialActivities, onFiltered }: Props) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => {
    return initialActivities.filter(a => {
      const matchesCat = cat === "All" || a.category === cat;
      const matchesQ =
        !q ||
        a.title.toLowerCase().includes(q.toLowerCase()) ||
        a.description.toLowerCase().includes(q.toLowerCase());
      return matchesCat && matchesQ;
    });
  }, [initialActivities, q, cat]);

  return (
    <div className="card p-3 sm:p-4 mb-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          className="w-full sm:flex-1 rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300"
          placeholder="Search activities (e.g., beads, role play)…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onInput={() => onFiltered(filtered)}
        />
        <select
          className="rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300"
          value={cat}
          onChange={(e) => { setCat(e.target.value); onFiltered(filtered); }}
        >
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <button
          className="rounded-xl bg-gray-100 px-3 py-2 text-sm"
          onClick={() => { setQ(""); setCat("All"); onFiltered(initialActivities); }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
