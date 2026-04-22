import { ReactNode } from 'react';

type SectionProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export function Section({ title, description, children }: SectionProps) {
  return (
    <section className="section">
      <div className="section__heading">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {children ? <div className="section__content">{children}</div> : null}
    </section>
  );
}
