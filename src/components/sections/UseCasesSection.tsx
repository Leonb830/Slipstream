import type { UseCasesContent } from '../../content/welcomePage';

type UseCasesSectionProps = {
  content: UseCasesContent;
};

export function UseCasesSection({ content }: UseCasesSectionProps) {
  return (
    <section id="use-cases" aria-labelledby="use-cases-title">
      <h2 id="use-cases-title">{content.heading}</h2>
      <ul>
        {content.useCases.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
}
