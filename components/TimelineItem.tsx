interface TimelineItemProps {
  year: string;
  milestone: string;
  detail: string;
}

export function TimelineItem({ year, milestone, detail }: TimelineItemProps) {
  return (
    <div className="timeline-item">
      <strong style={{ display: "block", color: "#2c4cff", fontSize: "1.1rem" }}>{year}</strong>
      <h3 style={{ margin: "0.1rem 0", fontSize: "1.2rem" }}>{milestone}</h3>
      <p style={{ margin: 0, color: "#4b4e73" }}>{detail}</p>
    </div>
  );
}
