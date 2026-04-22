import type { BusinessImpactContent } from '../../content/welcomePage';

type BusinessImpactSectionProps = {
  content: BusinessImpactContent;
};

export function BusinessImpactSection({ content }: BusinessImpactSectionProps) {
  return (
    <section id="impact" aria-labelledby="impact-title">
      <h2 id="impact-title">{content.heading}</h2>
      <p>{content.summary}</p>
      <ul>
        {content.metrics.map((metric) => (
          <li key={metric.id}>
            <p>{metric.label}</p>
            <p>{metric.value}</p>
            {metric.context ? <small>{metric.context}</small> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
