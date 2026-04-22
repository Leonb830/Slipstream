import type { CapabilitiesIntegrationsContent } from '../../content/welcomePage';

type CapabilitiesIntegrationsSectionProps = {
  content: CapabilitiesIntegrationsContent;
};

export function CapabilitiesIntegrationsSection({ content }: CapabilitiesIntegrationsSectionProps) {
  return (
    <section id="capabilities" aria-labelledby="capabilities-title">
      <h2 id="capabilities-title">{content.heading}</h2>
      <div>
        <h3>Capabilities</h3>
        <ul>
          {content.capabilities.map((capability) => (
            <li key={capability.id}>{capability.text}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Integrations</h3>
        <ul>
          {content.integrations.map((integration) => (
            <li key={integration.id}>{integration.text}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
