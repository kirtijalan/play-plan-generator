import { fetchActivities } from "../lib/api";
import ActivityGrid from "../components/ActivityGrid";

export default async function Page() {
  const activities = await fetchActivities();

  return (
    <main className="container-app py-8">
      <section className="mb-6 text-center">
        <h1 className="text-3xl font-bold">Today’s Play Plan</h1>
        <p className="text-sm text-gray-600 mt-1">
          Curated ideas by learning focus — motor skills, social skills, pretend play.
        </p>
      </section>

      <ActivityGrid activities={activities} />
    </main>
  );
}
