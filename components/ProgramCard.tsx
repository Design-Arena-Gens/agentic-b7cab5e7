interface ProgramCardProps {
  name: string;
  summary: string;
  impact: string;
}

export function ProgramCard({ name, summary, impact }: ProgramCardProps) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{summary}</p>
      <p className="highlight">{impact}</p>
    </div>
  );
}
