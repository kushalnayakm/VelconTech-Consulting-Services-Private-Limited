export const services = [
  {
    slug: 'cloud-computing',
    title: 'Cloud Computing',
    short:
      'Flexible cloud infrastructure, platforms and managed services that help organizations scale securely.',
    summary:
      'Cloud computing services spanning infrastructure, platforms, applications and serverless functions — with storage and backup options tailored to business needs.',
    offerings: [
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Software as a Service (SaaS)',
      'Functions as a Service (FaaS)',
      'Storage and Backup Services',
    ],
    icon: 'Cloud',
  },
  {
    slug: 'enterprise-software-solutions',
    title: 'Enterprise Software Solutions',
    short:
      'Business systems that unify customers, operations, people and supply chains with actionable insight.',
    summary:
      'Enterprise software solutions that connect core business processes and analytics so teams can operate with clarity and control.',
    offerings: [
      'Customer Relationship Management (CRM)',
      'Enterprise Resource Planning (ERP)',
      'Human Resource Management (HRM)',
      'Supply Chain Management (SCM)',
      'Business Intelligence (BI) and Analytics',
    ],
    icon: 'Building2',
  },
  {
    slug: 'development-tools-and-platforms',
    title: 'Development Tools and Platforms',
    short:
      'Modern development environments, version control, CI/CD and API management for delivery teams.',
    summary:
      'Development tools and platforms that help engineering teams build, integrate and ship software with consistency.',
    offerings: [
      'Integrated Development Environments (IDEs)',
      'Version Control Systems (e.g., Git)',
      'Continuous Integration / Continuous Deployment (CI/CD) tools',
      'API Management',
    ],
    icon: 'Code2',
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    short:
      'Protect endpoints, networks and identities with monitoring, encryption and threat intelligence.',
    summary:
      'Cybersecurity services designed to strengthen defenses across devices, networks, identities and data.',
    offerings: [
      'Endpoint Protection',
      'Network Security',
      'Identity and Access Management (IAM)',
      'Threat Intelligence and Monitoring',
      'Data Encryption',
    ],
    icon: 'Shield',
  },
  {
    slug: 'data-management-and-analytics',
    title: 'Data Management and Analytics',
    short:
      'Databases, warehouses, visualization and AI platforms that turn data into decisions.',
    summary:
      'Data management and analytics capabilities spanning databases, big data, warehousing, visualization and machine learning platforms.',
    offerings: [
      'Database Management Systems (DBMS)',
      'Big Data Solutions',
      'Data Warehousing',
      'Data Visualization Tools',
      'Machine Learning and AI Platforms',
    ],
    icon: 'Database',
  },
  {
    slug: 'communication-and-collaboration',
    title: 'Communication and Collaboration',
    short:
      'Email, team collaboration, video conferencing and project tools that keep people aligned.',
    summary:
      'Communication and collaboration tools that support everyday teamwork across distributed and on-site organizations.',
    offerings: [
      'Email Services',
      'Team Collaboration Platforms (Slack, Teams)',
      'Video Conferencing (e.g., Zoom, Webex)',
      'Project Management Tools',
    ],
    icon: 'MessagesSquare',
  },
  {
    slug: 'financial-technology',
    title: 'Financial Technology',
    short:
      'Payment processing, online banking, personal finance and blockchain-oriented solutions.',
    summary:
      'Financial technology services covering digital payments, banking experiences and related finance platforms.',
    offerings: [
      'Payment Processing',
      'Online Banking Solutions',
      'Personal Finance Management',
      'Data Visualization Tools',
      'Blockchain and Cryptocurrency Solutions',
    ],
    icon: 'Wallet',
  },
  {
    slug: 'consumer-software',
    title: 'Consumer Software',
    short:
      'Operating systems, productivity suites, creative tools and entertainment software experiences.',
    summary:
      'Consumer software capabilities across operating systems, productivity, creative tooling and entertainment.',
    offerings: [
      'Operating Systems (OS)',
      'Office Productivity Suites',
      'Graphic Design and Video Editing Software',
      'Gaming and Entertainment Software',
    ],
    icon: 'Smartphone',
  },
  {
    slug: 'semiconductor-services',
    title: 'Semiconductor Services',
    short:
      'Design verification, DFT, ATE services and production support for semiconductor programs.',
    summary:
      'Semiconductor services that support design verification, testability and production readiness.',
    offerings: [
      'Design Verification',
      'DFT',
      'ATE Services',
      'Production Support',
    ],
    icon: 'Cpu',
  },
  {
    slug: 'pcb-services',
    title: 'PCB Services',
    short:
      'PCB board design, manufacturing support and board testing for hardware programs.',
    summary:
      'PCB services covering board design, manufacturing and testing workflows.',
    offerings: ['PCB Board Design', 'Manufacturing', 'Board Testing'],
    icon: 'CircuitBoard',
  },
  {
    slug: 'component-engineering',
    title: 'Component Engineering',
    short:
      'Part selection, BOM scrubbing, alternatives and lifecycle data with compliance support.',
    summary:
      'Component engineering services that help teams select parts, clean BOMs and manage lifecycle and compliance data.',
    offerings: [
      'Part Selection',
      'BOM Scrubbing',
      'Alternative Part Selection',
      'RoHS Compliance',
      'REACH Compliance',
      'Life Cycle Data',
    ],
    icon: 'Layers',
  },
  {
    slug: 'it-consulting-and-outsourcing',
    title: 'IT Consulting and Outsourcing',
    short:
      'Consulting, application management, process improvement, technology strategy and analytics.',
    summary:
      'IT consulting and outsourcing services that align technology strategy with applications, processes and analytics.',
    offerings: [
      'Consulting',
      'Application Management',
      'Process Improvement',
      'Technology Strategy',
      'Data Analytics',
    ],
    icon: 'Briefcase',
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}
