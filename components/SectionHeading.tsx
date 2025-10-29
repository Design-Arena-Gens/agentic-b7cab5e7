interface SectionHeadingProps {
  index: number;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  const displayIndex = index.toString().padStart(2, "0");
  return (
    <div className="section-header">
      <span>{displayIndex}</span>
      <div>
        <h2>{title}</h2>
        {subtitle && <p style={{ margin: "0", color: "#60628f" }}>{subtitle}</p>}
      </div>
    </div>
  );
}
