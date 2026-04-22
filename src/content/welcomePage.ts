export type BulletItem = {
  id: string;
  text: string;
};

export type MetricItem = {
  id: string;
  label: string;
  value: string;
  context?: string;
};

export type TimelineStep = {
  id: string;
  title: string;
  description: string;
  owner: string;
};

export type AnchorNavItem = {
  id: string;
  label: string;
  href: string;
};

export type HeroContent = {
  heading: string;
  subheading: string;
  highlights: BulletItem[];
  primaryCta: string;
  secondaryCta: string;
};

export type MissionOutcomesContent = {
  heading: string;
  mission: string;
  outcomes: BulletItem[];
};

export type SolutionOverviewContent = {
  heading: string;
  description: string;
  timelineSteps: TimelineStep[];
};

export type CapabilitiesIntegrationsContent = {
  heading: string;
  capabilities: BulletItem[];
  integrations: BulletItem[];
};

export type BusinessImpactContent = {
  heading: string;
  summary: string;
  metrics: MetricItem[];
};

export type RoadmapContent = {
  heading: string;
  phases: TimelineStep[];
};

export type UseCasesContent = {
  heading: string;
  useCases: BulletItem[];
};

export type FooterPromiseContent = {
  heading: string;
  promise: string;
  bullets: BulletItem[];
};

export type FinalCtaContent = {
  heading: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
};

export const anchorNavItems: AnchorNavItem[] = [
  { id: 'mission', label: 'Mission', href: '#mission' },
  { id: 'solution', label: 'Solution', href: '#solution' },
  { id: 'capabilities', label: 'Capabilities', href: '#capabilities' },
  { id: 'impact', label: 'Business Impact', href: '#impact' },
  { id: 'roadmap', label: 'Roadmap', href: '#roadmap' },
  { id: 'use-cases', label: 'Use Cases', href: '#use-cases' }
];

export const heroContent: HeroContent = {
  heading: 'Deal orchestration that keeps revenue moving',
  subheading:
    'Slipstream unifies intake, review, and approvals so teams can close complex deals faster with less friction.',
  highlights: [
    { id: 'hero-1', text: 'Centralized decision context for every deal' },
    { id: 'hero-2', text: 'AI-assisted summaries, risk flags, and routing' },
    { id: 'hero-3', text: 'Real-time visibility from request to approval' }
  ],
  primaryCta: 'Book Demo',
  secondaryCta: 'See It in Action'
};

export const missionOutcomesContent: MissionOutcomesContent = {
  heading: 'Mission & outcomes',
  mission:
    'Help high-growth teams remove approval bottlenecks while preserving compliance and decision quality.',
  outcomes: [
    { id: 'outcome-1', text: 'Shorter approval cycles with consistent governance' },
    { id: 'outcome-2', text: 'Less manual follow-up across sales, legal, and finance' },
    { id: 'outcome-3', text: 'Higher confidence in every high-stakes deal decision' }
  ]
};

export const solutionOverviewContent: SolutionOverviewContent = {
  heading: 'Solution overview timeline',
  description: 'From intake to resolution, every step is captured in a shared operating flow.',
  timelineSteps: [
    {
      id: 'step-1',
      title: 'Capture',
      description: 'Pull requests from CRM, CPQ, and email into a single deal workspace.',
      owner: 'Sales Ops'
    },
    {
      id: 'step-2',
      title: 'Analyze',
      description: 'Summarize deal context and detect policy or margin risk before review.',
      owner: 'AI + RevOps'
    },
    {
      id: 'step-3',
      title: 'Route',
      description: 'Assign approvers based on dynamic thresholds, product lines, and region rules.',
      owner: 'Workflow Engine'
    },
    {
      id: 'step-4',
      title: 'Decide',
      description: 'Coordinate approvals with full audit history and clear decision rationale.',
      owner: 'Cross-functional team'
    }
  ]
};

export const capabilitiesIntegrationsContent: CapabilitiesIntegrationsContent = {
  heading: 'Capabilities & integrations',
  capabilities: [
    { id: 'cap-1', text: 'Configurable approval workflows and exception handling' },
    { id: 'cap-2', text: 'LLM summaries with deterministic policy checks' },
    { id: 'cap-3', text: 'End-to-end status tracking and escalation alerts' }
  ],
  integrations: [
    { id: 'int-1', text: 'CRM: Salesforce, HubSpot' },
    { id: 'int-2', text: 'Collaboration: Slack, Microsoft Teams' },
    { id: 'int-3', text: 'Finance + ERP: NetSuite, SAP, custom APIs' }
  ]
};

export const businessImpactContent: BusinessImpactContent = {
  heading: 'Business impact',
  summary: 'Translate process improvements into measurable revenue and productivity gains.',
  metrics: [
    { id: 'metric-1', label: 'Approval cycle time', value: '-35%', context: 'Average reduction' },
    { id: 'metric-2', label: 'Manual touchpoints', value: '-42%', context: 'Per enterprise deal' },
    { id: 'metric-3', label: 'Win rate lift', value: '+8%', context: 'For exception deals' }
  ]
};

export const roadmapContent: RoadmapContent = {
  heading: 'Roadmap',
  phases: [
    {
      id: 'phase-1',
      title: 'Phase 1: Foundation',
      description: 'Core intake, routing, and approval audit trail for pilot teams.',
      owner: 'Q2'
    },
    {
      id: 'phase-2',
      title: 'Phase 2: Intelligence',
      description: 'Risk scoring, summary quality controls, and recommendation tuning.',
      owner: 'Q3'
    },
    {
      id: 'phase-3',
      title: 'Phase 3: Scale',
      description: 'Workflow builder, role templates, and deeper multi-system integrations.',
      owner: 'Q4'
    }
  ]
};

export const useCasesContent: UseCasesContent = {
  heading: 'Use cases',
  useCases: [
    { id: 'case-1', text: 'Discount and non-standard pricing approvals' },
    { id: 'case-2', text: 'Legal and contract exception routing' },
    { id: 'case-3', text: 'Credit, payment-term, and risk sign-off workflows' }
  ]
};

export const footerPromiseContent: FooterPromiseContent = {
  heading: 'A single source of truth for every decision',
  promise: 'Slipstream keeps teams aligned so high-value deals never stall in hidden approval queues.',
  bullets: [
    { id: 'promise-1', text: 'Transparent ownership at every stage' },
    { id: 'promise-2', text: 'Policy confidence without process drag' },
    { id: 'promise-3', text: 'A repeatable path to faster, cleaner closes' }
  ]
};

export const finalCtaContent: FinalCtaContent = {
  heading: 'Ready to accelerate your approval cycle?',
  body: 'See how Slipstream connects teams, enforces policy, and keeps revenue momentum high.',
  primaryCta: 'Book Demo',
  secondaryCta: 'See It in Action'
};
