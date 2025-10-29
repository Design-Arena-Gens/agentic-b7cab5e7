interface MetricCardProps {
  value: string;
  label: string;
  detail: string;
}

export function MetricCard({ value, label, detail }: MetricCardProps) {
  return (
    <div className="card">
      <h3>{value}</h3>
      <p className="highlight">{label}</p>
      <p>{detail}</p>
    </div>
  );
}
