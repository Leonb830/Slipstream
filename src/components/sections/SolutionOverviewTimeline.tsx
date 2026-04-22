import type { SolutionOverviewContent } from '../../content/welcomePage';

type SolutionOverviewTimelineProps = {
  content: SolutionOverviewContent;
};

export function SolutionOverviewTimeline({ content }: SolutionOverviewTimelineProps) {
  return (
    <section id="solution" aria-labelledby="solution-title">
      <h2 id="solution-title">{content.heading}</h2>
      <p>{content.description}</p>
      <ol>
        {content.timelineSteps.map((step) => (
          <li key={step.id}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <p>
              <strong>Owner:</strong> {step.owner}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
