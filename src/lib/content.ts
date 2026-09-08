export const nav = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export interface Feature {
  title: string;
  body: string;
  tag: string;
  icon: string;
  big?: boolean;
}

export const features: Feature[] = [
  {
    title: "Visual workflow orchestration",
    body: "Build reliable automated pipelines connecting triggers, business logic, and actions on an intuitive canvas — or customize steps with code when you need precision.",
    tag: "Visual Builder",
    icon: "zap",
    big: true,
  },
  {
    title: "200+ native integrations",
    body: "Connect GitHub, Slack, Linear, Jira, Postgres, Stripe, and your internal APIs with zero-maintenance webhooks.",
    tag: "Ecosystem",
    icon: "plug",
  },
  {
    title: "Custom code & data transformations",
    body: "Write JavaScript or Python directly in any workflow step to parse complex JSON payloads, query databases, or execute custom algorithms.",
    tag: "Code Flexibility",
    icon: "code",
  },
  {
    title: "Human-in-the-loop approvals",
    body: "Pause automated executions to collect review or manager signoff via interactive Slack buttons or email before resuming.",
    tag: "Governance",
    icon: "shield",
  },
  {
    title: "Resilient streaming & retries",
    body: "Sub-second webhook event ingestion paired with automated exponential backoff and dead-letter queues to safeguard against downstream outages.",
    tag: "High Availability",
    icon: "repeat",
  },
  {
    title: "Intelligent task routing",
    body: "Automatically route incidents, code reviews, and customer inquiries to the right team member based on real-time availability.",
    tag: "Smart Routing",
    icon: "users",
  },
  {
    title: "Immutable audit logging",
    body: "Every automated trigger and execution is preserved with complete payloads, execution history, and 1-click rollback.",
    tag: "Security & SOC 2",
    icon: "sliders",
  },
];

export interface Step {
  title: string;
  body: string;
  tag: string;
  badge: string;
  highlight: string;
}

export const steps: Step[] = [
  {
    title: "Connect your stack",
    body: "Authenticate your daily tools in one click — GitHub, Slack, Linear, databases, and custom APIs. Zero complex configuration.",
    tag: "01 / Connect",
    badge: "200+ Integrations",
    highlight: "OAuth 2.0 & instant webhooks",
  },
  {
    title: "Define your triggers",
    body: "Initiate workflows from webhooks, schedules, app events, or form submissions without writing polling scripts.",
    tag: "02 / Build",
    badge: "Instant triggers",
    highlight: "Visual rule builder",
  },
  {
    title: "Automate multi-step logic",
    body: "Branch conditions, transform data, route human approvals, and execute tasks across services seamlessly.",
    tag: "03 / Automate",
    badge: "Multi-step logic",
    highlight: "Visual task & approval routing",
  },
  {
    title: "Monitor and report",
    body: "Track automated executions, inspect audit trails, and review weekly summaries of team hours saved.",
    tag: "04 / Track",
    badge: "Live analytics",
    highlight: "Quantified hours saved",
  },
];

export const stats = [
  { value: "99.99", suffix: "%", label: "execution reliability & uptime" },
  { value: "10M+", suffix: "", label: "workflow runs executed monthly" },
  { value: "4.8", suffix: "hrs", label: "saved per teammate, every week" },
  { value: "500+", suffix: "", label: "pre-built automation templates" },
];

export interface SolutionWorkflow {
  name: string;
  time: string;
}

export interface Solution {
  id: string;
  role: string;
  headline: string;
  description: string;
  tools: string[];
  metric: string;
  metricLabel: string;
  workflows: SolutionWorkflow[];
}

export const solutions: Solution[] = [
  {
    id: "engineering",
    role: "Engineering Teams",
    headline: "Continuous PR triage, automated CI gates, and zero duplicate tracking.",
    description: "Connect your GitHub, GitLab, Linear, and Datadog workspaces. NOVA inspects commits, balances code review loads, resolves blockers, and updates issue boards automatically.",
    tools: ["GitHub", "GitLab", "Linear", "Datadog"],
    metric: "84% reduction",
    metricLabel: "in release cycle turnaround",
    workflows: [
      { name: "Automated PR Triage & Routing", time: "On PR Open" },
      { name: "Blast Radius & Security Pre-check", time: "Post-CI" },
      { name: "Release Broadcast to Slack", time: "On Merge" },
    ],
  },
  {
    id: "product",
    role: "Product Teams",
    headline: "Automate sprint handoffs, dependency tracking, and release notes.",
    description: "NOVA turns high-level roadmap initiatives into estimated sprint backlogs, flags scope creep before shipping, and automatically keeps design and engineering aligned.",
    tools: ["Linear", "Figma", "Jira", "Notion"],
    metric: "4.5 hrs saved",
    metricLabel: "per sprint planning cycle",
    workflows: [
      { name: "PRD to Sprint Breakdown", time: "Instant" },
      { name: "Automated Release Notes", time: "On Merge" },
      { name: "Cross-Functional Dependency Sync", time: "Continuous" },
    ],
  },
  {
    id: "operations",
    role: "Operations Teams",
    headline: "Route approvals, eliminate spreadsheets, and close loops effortlessly.",
    description: "Set up multi-stage financial and legal approval paths. NOVA requests signatures, monitors budget thresholds, and maintains an immutable audit trail.",
    tools: ["Google Workspace", "QuickBooks", "Slack", "DocuSign"],
    metric: "6 minutes",
    metricLabel: "average approval turnaround (was 4 days)",
    workflows: [
      { name: "Budget Policy Auto-Verification", time: "Instant" },
      { name: "1-Click Slack Executive Signoff", time: "On Demand" },
      { name: "Compliance & SOC 2 Audit Logging", time: "Automated" },
    ],
  },
  {
    id: "marketing",
    role: "Marketing Teams",
    headline: "Coordinate multi-channel campaigns with one live calendar.",
    description: "Align copywriters, designers, and growth managers around a unified release timeline that self-adjusts whenever product milestones change.",
    tools: ["HubSpot", "Figma", "Asana", "Typeform"],
    metric: "2.4x faster",
    metricLabel: "asset production & campaign launch",
    workflows: [
      { name: "Asset Review Routing", time: "Auto-Assigned" },
      { name: "Self-Updating Campaign Calendar", time: "Real-Time" },
      { name: "Launch Readiness Checklist", time: "Continuous" },
    ],
  },
];

export interface WorkflowNode {
  id: string;
  stepLabel: string;
  title: string;
  service: string;
  summary: string;
  status: "success" | "active" | "queued";
}

export interface WorkflowScenario {
  id: string;
  name: string;
  badge: string;
  description: string;
  nodes: WorkflowNode[];
}

export const workflowScenarios: WorkflowScenario[] = [
  {
    id: "release-pipeline",
    name: "Release & Deploy",
    badge: "Engineering",
    description: "Verify code, update sprint boards, and notify the team when a PR is merged.",
    nodes: [
      {
        id: "node-1",
        stepLabel: "1. Trigger",
        title: "PR Merged in GitHub",
        service: "GitHub",
        summary: "Triggers automatically when code is approved and merged into main",
        status: "success",
      },
      {
        id: "node-2",
        stepLabel: "2. Test",
        title: "Run Quality Gates",
        service: "Security Check",
        summary: "Runs test suite and verifies zero vulnerabilities before deploy",
        status: "success",
      },
      {
        id: "node-3",
        stepLabel: "3. Update",
        title: "Update Linear Board",
        service: "Linear",
        summary: "Transitions all linked project tickets to Done automatically",
        status: "success",
      },
      {
        id: "node-4",
        stepLabel: "4. Notify",
        title: "Broadcast to Slack",
        service: "Slack",
        summary: "Posts release notes directly to the team announcements channel",
        status: "success",
      },
    ],
  },
  {
    id: "customer-provisioning",
    name: "Customer Onboarding",
    badge: "Operations",
    description: "Create customer workspaces, update CRM accounts, and alert the team upon new subscription.",
    nodes: [
      {
        id: "node-1",
        stepLabel: "1. Trigger",
        title: "Customer Subscribes",
        service: "Stripe",
        summary: "Triggers the moment a customer completes checkout or upgrades",
        status: "success",
      },
      {
        id: "node-2",
        stepLabel: "2. Create",
        title: "Build Notion Hub",
        service: "Notion",
        summary: "Generates a private onboarding document with guides and templates",
        status: "success",
      },
      {
        id: "node-3",
        stepLabel: "3. Sync",
        title: "Sync CRM Account",
        service: "HubSpot",
        summary: "Updates customer lifecycle stage and records subscription tier",
        status: "success",
      },
      {
        id: "node-4",
        stepLabel: "4. Notify",
        title: "Alert Success Team",
        service: "Slack",
        summary: "Sends customer profile and kickoff brief to #customer-success",
        status: "success",
      },
    ],
  },
  {
    id: "incident-remediation",
    name: "Incident Response",
    badge: "Reliability",
    description: "Detect error spikes, page the on-call engineer, and spin up an incident room instantly.",
    nodes: [
      {
        id: "node-1",
        stepLabel: "1. Trigger",
        title: "Error Spike Detected",
        service: "Datadog",
        summary: "Monitors production error rate and triggers when thresholds exceed limits",
        status: "success",
      },
      {
        id: "node-2",
        stepLabel: "2. Escalate",
        title: "Page On-Call Engineer",
        service: "PagerDuty",
        summary: "Identifies the active on-call engineer and sends urgent page",
        status: "success",
      },
      {
        id: "node-3",
        stepLabel: "3. Collaborate",
        title: "Open Incident Channel",
        service: "Slack",
        summary: "Creates dedicated incident room and invites relevant responders",
        status: "success",
      },
      {
        id: "node-4",
        stepLabel: "4. Track",
        title: "Log Tracking Ticket",
        service: "Linear",
        summary: "Creates high-priority issue with logs and post-mortem template attached",
        status: "success",
      },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "We replaced twelve fragile Zapier zaps and a tangled cron script with NOVA. Our incident triage time dropped from 25 minutes to 30 seconds.",
    name: "Marcus Vance",
    role: "VP of Engineering",
    company: "OrbitScale",
    companyBadge: "OS",
    metric: "-98%",
    metricLabel: "incident triage time",
  },
  {
    quote:
      "The bi-directional sync between GitHub PRs and our Linear boards eliminated our Monday morning status sync entirely. Everyone just knows what’s shipping.",
    name: "Priya Nandan",
    role: "Head of Product",
    company: "Halcyon Systems",
    companyBadge: "HS",
    metric: "-80%",
    metricLabel: "status meeting overhead",
  },
  {
    quote:
      "Our cross-department invoice and contract signoffs used to take 4 days. NOVA routes them to the right lead in under a minute with complete audit trails.",
    name: "Sarah Chen",
    role: "COO",
    company: "Kinetix Labs",
    companyBadge: "KL",
    metric: "< 60s",
    metricLabel: "approval turnaround",
  },
  {
    quote:
      "The sub-second webhook triggers and automatic retry policies give us enterprise reliability without managing our own queue infrastructure.",
    name: "Tomas Reyes",
    role: "Platform Architect",
    company: "Redline Logistics",
    companyBadge: "RL",
    metric: "99.99%",
    metricLabel: "pipeline execution rate",
  },
  {
    quote:
      "Our new-hire developer onboarding used to require manual checklists across four tools. Now it executes automatically on the employee start date.",
    name: "Freya Lindqvist",
    role: "Head of People Ops",
    company: "Nordlicht Studio",
    companyBadge: "NS",
    metric: "100%",
    metricLabel: "automated compliance",
  },
];

export const plans = [
  {
    name: "Starter",
    monthlyPrice: "$0",
    annualPrice: "$0",
    period: "forever",
    description: "For individual builders and small teams automating their first workflows.",
    features: [
      "Up to 5 team members",
      "1,000 workflow runs / month",
      "5 active workflows",
      "Community support",
      "Standard integrations",
    ],
    highlighted: false,
  },
  {
    name: "Team",
    monthlyPrice: "$18",
    annualPrice: "$15",
    period: "per member / month",
    annualPeriod: "per member / month (billed annually)",
    description: "For growing teams that need reliable cross-functional automation.",
    features: [
      "Unlimited team members",
      "50,000 workflow runs / month",
      "Unlimited active workflows",
      "Intelligent task & approval routing",
      "Priority email & chat support",
      "30-day execution audit logs",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    period: "billed annually",
    description: "For organizations requiring custom scale, security, and dedicated infrastructure.",
    features: [
      "Unlimited workflow executions",
      "SAML SSO & SCIM directory sync",
      "Dedicated infrastructure & custom SLA",
      "Full HIPAA & SOC 2 compliance reports",
      "Dedicated solutions architect",
      "Custom VPC & on-prem deployment options",
    ],
    highlighted: false,
  },
];

export const faqs = [
  {
    question: "How does NOVA compare to traditional automation tools?",
    answer:
      "Traditional tools are built for simple point-to-point triggers. NOVA combines visual workflow orchestration with custom code execution (JavaScript/Python), sub-second bi-directional sync (GitHub, Linear, Jira), and native human-in-the-loop approval routing. It's engineered specifically for high-velocity software and operations teams.",
  },
  {
    question: "How long does it take to connect our existing tools?",
    answer:
      "Most teams connect their core services (GitHub, Slack, Linear, Jira, databases) and launch their first active workflow in under 15 minutes. We provide pre-built workflow templates for common patterns so you never have to start from a blank canvas.",
  },
  {
    question: "How does NOVA handle approvals that require human decisions?",
    answer:
      "Workflows can pause at any step and route interactive approval cards directly to Slack, email, or your team dashboard. Once the approver clicks approve or reject, the workflow resumes immediately with a full audit log entry.",
  },
  {
    question: "How does NOVA secure our credentials and sensitive data?",
    answer:
      "All credentials and connection tokens are encrypted with AES-256 at rest and TLS 1.3 in transit. We maintain SOC 2 Type II compliance, enforce role-based access control (RBAC), and never train AI models on customer payloads or source code.",
  },
  {
    question: "What happens if an external API or service experiences downtime?",
    answer:
      "NOVA automatically retries failed steps using intelligent exponential backoff. If a service remains unreachable, the execution is queued safely in a dead-letter state and your team is notified immediately via Slack or PagerDuty.",
  },
  {
    question: "Can we export our workflows and data if we decide to cancel?",
    answer:
      "Yes. You have full data portability. You can export all workflow configurations, rule logic, execution logs, and audit trails as standard JSON or CSV at any time with zero vendor lock-in.",
  },
];

export const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Solutions", href: "#solutions" },
    { label: "How it works", href: "#how-it-works" },
  ],
  Company: [
    { label: "About", href: "#product" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Resources: [
    { label: "FAQ", href: "#faq" },
    { label: "Documentation", href: "#" },
    { label: "Community", href: "#" },
    { label: "System Status", href: "#" },
  ],
};
