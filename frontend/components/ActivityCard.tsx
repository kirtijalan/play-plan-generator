import type { Activity } from "../lib/types";

function categoryColor(category: string) {
  const c = category.toLowerCase();
  if (c.includes("motor")) return "bg-motor/15 text-motor";
  if (c.includes("social")) return "bg-social/15 text-social";
  if (c.includes("pretend")) return "bg-pretend/15 text-pretend";
  return "bg-gray-100 text-gray-700";
}

export function ActivityCard({ title, duration, category, description, materials }: Activity) {
  return (
    <article className="card p-4 sm:p-5">
      <header className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-lg font-semibold leading-snug">{title}</h3>
        <span className={`badge ${categoryColor(category)}`}>{category}</span>
      </header>

      <p className="text-sm text-gray-700">{description}</p>

      <div className="flex items-center gap-3 mt-3 text-xs text-gray-500">
        <span>⏱ {duration}</span>
        {materials?.length > 0 && (
          <span>• Materials: {materials.join(", ")}</span>
        )}
      </div>
    </article>
  );
}
