import type { FooterPromiseContent } from '../../content/welcomePage';

type FooterPromiseSectionProps = {
  content: FooterPromiseContent;
};

export function FooterPromiseSection({ content }: FooterPromiseSectionProps) {
  return (
    <section id="promise" aria-labelledby="promise-title">
      <h2 id="promise-title">{content.heading}</h2>
      <p>{content.promise}</p>
      <ul>
        {content.bullets.map((bullet) => (
          <li key={bullet.id}>{bullet.text}</li>
        ))}
      </ul>
    </section>
  );
}
