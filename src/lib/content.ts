export const nav = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const trustedBy = [
  { name: "Google", icon: "logos:google-icon", url: "https://google.com" },
  { name: "Microsoft", icon: "logos:microsoft-icon", url: "https://microsoft.com" },
  { name: "Apple", icon: "logos:apple", url: "https://apple.com" },
  { name: "Amazon", icon: "logos:amazon-pay", url: "https://amazon.com" },
  { name: "Meta", icon: "logos:meta-icon", url: "https://meta.com" },
  { name: "Notion", icon: "logos:notion-icon", url: "https://notion.so" },
  { name: "GitHub", icon: "logos:github-icon", url: "https://github.com" },
  { name: "Slack", icon: "logos:slack-icon", url: "https://slack.com" },
  { name: "Spotify", icon: "logos:spotify-icon", url: "https://spotify.com" },
  { name: "Netflix", icon: "logos:netflix-icon", url: "https://netflix.com" },
  { name: "Airbnb", icon: "logos:airbnb-icon", url: "https://airbnb.com" },
  { name: "Salesforce", icon: "logos:salesforce", url: "https://salesforce.com" },
];

export const features = [
  {
    title: "Task automation",
    body: "Turn a repeated three-step process into a rule once, and NOVA runs it the same way every time.",
    big: true,
  },
  {
    title: "Smart scheduling",
    body: "NOVA reads everyone's calendar and workload before it proposes a meeting time.",
  },
  {
    title: "Live project boards",
    body: "Every board updates the moment someone finishes a task, so status meetings get shorter.",
  },
  {
    title: "Automated summaries",
    body: "Long threads get compressed into a few lines, with the decision highlighted.",
  },
  {
    title: "Workload balancing",
    body: "See who's overloaded before a deadline slips, not after.",
  },
  {
    title: "Custom workflows",
    body: "Build a workflow by dragging steps into order — no code required.",
  },
  {
    title: "Integrations",
    body: "Connect the tools your team already uses; NOVA fits into existing habits.",
  },
];

export const steps = [
  {
    title: "Connect your tools",
    body: "Link your calendar, chat and file storage. NOVA reads what's already there — nothing to re-enter.",
  },
  {
    title: "Set up your workflows",
    body: "Describe a process once, or pick a template. NOVA turns it into a repeatable rule.",
  },
  {
    title: "Let automation run",
    body: "Routine steps happen on their own: reminders sent, boards updated, summaries written.",
  },
  {
    title: "Review and adjust",
    body: "Weekly digests show what ran, what needs a human decision, and where time was saved.",
  },
];

export const stats = [
  { value: "6.4", suffix: "hrs", label: "saved per person, per week" },
  { value: "312", suffix: "", label: "teams running on NOVA" },
  { value: "94", suffix: "%", label: "of routine tasks automated" },
  { value: "2.1", suffix: "×", label: "faster project turnaround" },
];

export const solutions = [
  {
    title: "Product teams",
    body: "Turn a roadmap into sprints automatically, and let NOVA flag scope creep before it ships.",
  },
  {
    title: "Marketing teams",
    body: "Coordinate campaigns across channels with one calendar that updates itself.",
  },
  {
    title: "Operations teams",
    body: "Route approvals, chase signatures and close the loop without a spreadsheet.",
  },
  {
    title: "Engineering teams",
    body: "Sync tickets across repos and standups so nothing gets tracked twice.",
  },
];

export const testimonials = [
  {
    quote:
      "We cut our weekly status meeting from an hour to twelve minutes. The board already says what happened.",
    name: "Priya Nandan",
    role: "Head of Product, Halcyon Foods",
  },
  {
    quote:
      "NOVA caught a scheduling conflict across three time zones before any of us noticed it.",
    name: "Tomas Reyes",
    role: "Operations Lead, Redline Logistics",
  },
  {
    quote:
      "Our onboarding checklist used to live in someone's head. Now it runs itself, the same way, every time.",
    name: "Freya Lindqvist",
    role: "People Ops, Nordlicht Studio",
  },
];

export const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "For a small team trying automation for the first time.",
    features: [
      "Up to 5 members",
      "3 active workflows",
      "Live project boards",
      "Community support",
    ],
    highlighted: false,
  },
  {
    name: "Team",
    price: "$18",
    period: "per member / month",
    description: "For teams ready to automate the daily busywork.",
    features: [
      "Unlimited members",
      "Unlimited workflows",
      "Smart scheduling",
      "Workload balancing",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "billed annually",
    description: "For organizations with custom security and scale needs.",
    features: [
      "Everything in Team",
      "Single sign-on",
      "Audit logs",
      "Dedicated onboarding",
      "99.9% uptime SLA",
    ],
    highlighted: false,
  },
];

export const faqs = [
  {
    question: "How long does it take to set up NOVA?",
    answer:
      "Most teams connect their tools and launch their first workflow within an afternoon. Templates cover the most common processes, so you rarely start from a blank page.",
  },
  {
    question: "Does NOVA replace our project management tool?",
    answer:
      "It can, but it doesn't have to. NOVA connects to the tools you already use and adds automation and reporting on top, so you can migrate at your own pace.",
  },
  {
    question: "What happens to our data if we cancel?",
    answer:
      "You can export every board, workflow and report at any time. After cancellation, we keep your data for 30 days before deleting it permanently.",
  },
  {
    question: "Can NOVA handle approvals that need a human decision?",
    answer:
      "Yes. Workflows can pause at any step and route to a specific person for approval, with reminders sent automatically until it's resolved.",
  },
  {
    question: "Is there a limit to how many workflows we can automate?",
    answer:
      "Starter includes three active workflows. Team and Enterprise plans include unlimited workflows, so you can automate as many processes as make sense for your team.",
  },
  {
    question: "Do you offer discounts for nonprofits or students?",
    answer:
      "Yes. Verified nonprofits and educational teams receive 40% off the Team plan. Reach out to our support team with your verification to get started.",
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
    { label: "Status", href: "#" },
  ],
};
