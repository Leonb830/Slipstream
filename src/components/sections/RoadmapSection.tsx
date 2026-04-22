import type { RoadmapContent } from '../../content/welcomePage';

type RoadmapSectionProps = {
  content: RoadmapContent;
};

export function RoadmapSection({ content }: RoadmapSectionProps) {
  return (
    <section id="roadmap" aria-labelledby="roadmap-title">
      <h2 id="roadmap-title">{content.heading}</h2>
      <ol>
        {content.phases.map((phase) => (
          <li key={phase.id}>
            <h3>{phase.title}</h3>
            <p>{phase.description}</p>
            <p>{phase.owner}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
