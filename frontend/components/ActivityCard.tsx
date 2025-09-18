type Props = { title: string; duration: string; materials?: string[] };
export function ActivityCard({ title, duration, materials = [] }: Props) {
  return (
    <article style={{ border: "1px solid #eee", padding: 16, borderRadius: 12 }}>
      <h3>{title}</h3>
      <p>Duration: {duration}</p>
      {materials.length > 0 && (
        <ul>
          {materials.map((m) => <li key={m}>{m}</li>)}
        </ul>
      )}
    </article>
  );
}
