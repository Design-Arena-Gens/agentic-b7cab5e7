import {
  callToAction,
  departmentOverview,
  engagementHighlights,
  flagshipPrograms,
  keyMetrics,
  strategicObjectives,
  timeline
} from "@/lib/presentation/content";
import { MetricCard } from "@/components/MetricCard";
import { ProgramCard } from "@/components/ProgramCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TimelineItem } from "@/components/TimelineItem";

const downloadLink = "/api/presentation";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div>
          <h1>{departmentOverview.name}</h1>
          <p>
            Pairing breakthrough science with strategic communication to deliver policy-ready insights,
            global partnerships, and resilient solutions for the decade ahead.
          </p>
        </div>
        <div className="actions">
          <a className="button" href={downloadLink}>
            <span role="img" aria-label="download">
              ⬇️
            </span>
            Download Presentation (PPTX)
          </a>
          <a className="button" href="#engagement">
            Explore Highlights
          </a>
        </div>
      </section>

      <section className="section" id="overview">
        <SectionHeading index={1} title="Mission & Strategic Narrative" subtitle="Why STSC leads the future intersection of science and communication" />
        <div className="grid two">
          <div className="card">
            <h3>Mission</h3>
            <p>{departmentOverview.mission}</p>
          </div>
          <div className="card">
            <h3>Vision</h3>
            <p>{departmentOverview.vision}</p>
          </div>
        </div>
        <div className="tag-list" style={{ marginTop: "1.5rem" }}>
          {departmentOverview.values.map((value) => (
            <div key={value} className="tag">
              {value}
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="metrics">
        <SectionHeading index={2} title="Key Impact Metrics" subtitle="Momentum in learners, partnerships, research, and inclusion" />
        <div className="grid two">
          {keyMetrics.map((metric) => (
            <MetricCard key={metric.label} value={metric.value} label={metric.label} detail={metric.detail} />
          ))}
        </div>
      </section>

      <section className="section" id="strategy">
        <SectionHeading index={3} title="Strategic Objectives" subtitle="Three pillars guiding the STSC strategic plan" />
        <div className="grid">
          {strategicObjectives.map((item) => (
            <div key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="highlight">Focus: {item.focusAreas.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="programs">
        <SectionHeading index={4} title="Flagship Programs" subtitle="Signature experiences delivering measurable impact" />
        <div className="grid">
          {flagshipPrograms.map((program) => (
            <ProgramCard key={program.name} name={program.name} summary={program.summary} impact={program.impact} />
          ))}
        </div>
      </section>

      <section className="section" id="timeline">
        <SectionHeading index={5} title="Growth Timeline" subtitle="Milestones accelerating our strategic trajectory" />
        <div className="timeline">
          {timeline.map((event) => (
            <TimelineItem key={event.year} year={event.year} milestone={event.milestone} detail={event.detail} />
          ))}
        </div>
      </section>

      <section className="section" id="engagement">
        <SectionHeading index={6} title="Engagement Highlights" subtitle="Amplifying impact with partners, communities, and alumni" />
        <div className="grid">
          {engagementHighlights.map((item) => (
            <div key={item} className="card">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="cta">
        <SectionHeading index={7} title="Partner With STSC" subtitle="Let’s co-design the next wave of strategic innovation" />
        <div className="grid two">
          <div className="card">
            <h3>Invitation</h3>
            <p>{callToAction.invitation}</p>
          </div>
          <div className="card">
            <h3>Connect</h3>
            <p>
              <strong>Email:</strong> {callToAction.contact.email}
              <br />
              <strong>Phone:</strong> {callToAction.contact.phone}
              <br />
              <strong>Address:</strong> {callToAction.contact.address}
            </p>
          </div>
        </div>
        <div className="actions" style={{ marginTop: "2rem" }}>
          <a className="button" href={downloadLink}>
            Download Full Deck
          </a>
        </div>
      </section>

      <footer className="footer">
        Crafted for the <strong>STSC Department</strong> — bridging science, technology, and strategic communication.
      </footer>
    </main>
  );
}
