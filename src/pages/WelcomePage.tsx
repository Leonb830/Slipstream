import {
  anchorNavItems,
  businessImpactContent,
  capabilitiesIntegrationsContent,
  finalCtaContent,
  footerPromiseContent,
  heroContent,
  missionOutcomesContent,
  roadmapContent,
  solutionOverviewContent,
  useCasesContent
} from '../content/welcomePage';
import { BusinessImpactSection } from '../components/sections/BusinessImpactSection';
import { CapabilitiesIntegrationsSection } from '../components/sections/CapabilitiesIntegrationsSection';
import { FooterPromiseSection } from '../components/sections/FooterPromiseSection';
import { HeroSection } from '../components/sections/HeroSection';
import { MissionOutcomesSection } from '../components/sections/MissionOutcomesSection';
import { RoadmapSection } from '../components/sections/RoadmapSection';
import { SolutionOverviewTimeline } from '../components/sections/SolutionOverviewTimeline';
import { UseCasesSection } from '../components/sections/UseCasesSection';

export function WelcomePage() {
  return (
    <main>
      <nav aria-label="Section navigation">
        <ul>
          {anchorNavItems.map((item) => (
            <li key={item.id}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <HeroSection content={heroContent} />
      <MissionOutcomesSection content={missionOutcomesContent} />
      <SolutionOverviewTimeline content={solutionOverviewContent} />
      <CapabilitiesIntegrationsSection content={capabilitiesIntegrationsContent} />
      <BusinessImpactSection content={businessImpactContent} />
      <RoadmapSection content={roadmapContent} />
      <UseCasesSection content={useCasesContent} />
      <FooterPromiseSection content={footerPromiseContent} />

      <section id="final-cta" aria-labelledby="final-cta-title">
        <h2 id="final-cta-title">{finalCtaContent.heading}</h2>
        <p>{finalCtaContent.body}</p>
        <div>
          <button type="button">{finalCtaContent.primaryCta}</button>
          <button type="button">{finalCtaContent.secondaryCta}</button>
        </div>
      </section>
    </main>
  );
}
