import type { MissionOutcomesContent } from '../../content/welcomePage';

type MissionOutcomesSectionProps = {
  content: MissionOutcomesContent;
};

export function MissionOutcomesSection({ content }: MissionOutcomesSectionProps) {
  return (
    <section id="mission" aria-labelledby="mission-title">
      <h2 id="mission-title">{content.heading}</h2>
      <p>{content.mission}</p>
      <ul>
        {content.outcomes.map((outcome) => (
          <li key={outcome.id}>{outcome.text}</li>
        ))}
      </ul>
    </section>
  );
}
