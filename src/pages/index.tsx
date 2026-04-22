import { Section } from '../components/Section';

export default function LandingPage() {
  return (
    <div className="layout">
      <header className="hero">
        <p className="eyebrow">Slipstream</p>
        <h1>AI-powered deal orchestration built for speed.</h1>
        <p>
          Move from proposal to decision faster with automated intake, smart
          routing, and clear AI-powered approval insights.
        </p>
      </header>

      <main>
        <Section
          title="What Slipstream unlocks"
          description="A single system for approvals, risk visibility, and deal velocity."
        >
          <ul className="feature-list">
            <li>Automated extraction of key deal context</li>
            <li>Policy-aware routing to the right approvers</li>
            <li>Clear summaries, risk flags, and recommendation support</li>
          </ul>
        </Section>
      </main>
    </div>
  );
}
