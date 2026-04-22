import type { HeroContent } from '../../content/welcomePage';

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section id="hero" aria-labelledby="hero-title">
      <h1 id="hero-title">{content.heading}</h1>
      <p>{content.subheading}</p>
      <ul>
        {content.highlights.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <div>
        <button type="button">{content.primaryCta}</button>
        <button type="button">{content.secondaryCta}</button>
      </div>
    </section>
  );
}
