export const projects = [
  {
    slug: 'inventory-management-system',
    title: 'Inventory Management System',
    category: 'Operations',
    summary:
      'A system to track inventory levels, automate reordering, and generate reports for analysis.',
    description:
      'Develop an inventory management system to track inventory levels, automate reordering, and generate reports for analysis. The work also includes implementing data analytics to analyze sales data, forecast demand and optimize stock levels, and automating inventory tasks such as data entry, order processing and warehouse management.',
    highlights: [
      'Track inventory levels with reporting for analysis',
      'Automate reordering and inventory-related workflows',
      'Analyze sales data to forecast demand and optimize stock',
      'Automate data entry, order processing and warehouse tasks',
    ],
  },
  {
    slug: 'vendor-management-system',
    title: 'Vendor Management System',
    category: 'Operations',
    summary:
      'Vendor Management System (VMS) software to automate tasks, track performance and improve communication.',
    description:
      'Development of a Vendor Management System (VMS) to automate tasks, track performance data and improve communication. The solution helps establish key performance indicators (KPIs) to track vendor performance and identify areas for improvement. Automating routine tasks like purchase orders, invoices and performance reports can save time and improve efficiency.',
    highlights: [
      'Automate vendor-related operational tasks',
      'Track performance data and communication',
      'Establish KPIs for vendor performance',
      'Automate purchase orders, invoices and performance reports',
    ],
  },
  {
    slug: 'order-and-portfolio-management',
    title: 'Order and Portfolio Management',
    category: 'Finance & Operations',
    summary:
      'Order Management System and portfolio tools with data analytics to support investment decisions.',
    description:
      'Order Management System (OMS) work to automate order placement, routing and execution, alongside portfolio management tools for comprehensive portfolio analysis and performance tracking. VelconTech’s data expertise also helps analyze market data and trends to inform investment decisions within an overall portfolio strategy.',
    highlights: [
      'Automate order placement, routing and execution',
      'Integrate portfolio management software for analysis',
      'Track portfolio performance comprehensively',
      'Apply market data analytics to investment decisions',
    ],
  },
  {
    slug: 'janashakthi-database-mobile-web',
    title: 'Janashakthi Database, Mobile and Web Application',
    category: 'Data Applications',
    summary:
      'Database-backed mobile and web application for bulk data handling and information management.',
    description:
      'Janashakthi database, mobile and web application focused on adding bulk data to the database, retrieving information, inserting new records, modifying existing information, deleting information, and organizing and managing data in the database.',
    highlights: [
      'Bulk data addition to the database',
      'Retrieve, insert, modify and delete records',
      'Organize and manage application data',
      'Mobile and web application access',
    ],
  },
  {
    slug: 'sos-web-application',
    title: 'SOS Web Application',
    category: 'Project Monitoring',
    summary:
      'Status monitoring application to track project status with respect to time and cost.',
    description:
      'SOS web application for status monitoring — track project status with respect to time and cost. Multiple projects can be monitored through a single web application, with task management, time tracking, budget management, reporting and analytics, and automated status report generation.',
    highlights: [
      'Monitor multiple projects in one web application',
      'Track status against time and cost',
      'Task management and time tracking',
      'Budget management with reporting and automated status reports',
    ],
  },
  {
    slug: 'ifm-file-management-application',
    title: 'IFM File Management Application',
    category: 'Document Management',
    summary:
      'File management application for uploading, storing and organizing project documents with analytics.',
    description:
      'IFM file management applications offer document management features — upload, store and organize files related to project manuals, maintenance records and compliance reports with a real-time analytics solution.',
    highlights: [
      'Upload, store and organize project documents',
      'Support project manuals and maintenance records',
      'Manage compliance reports',
      'Real-time analytics for document-related workflows',
    ],
  },
  {
    slug: 'online-application-and-payment-processing',
    title: 'Online Application and Payment Processing',
    category: 'Digital Transactions',
    summary:
      'Web platform for electronic applications and secure online payments with receipt generation.',
    description:
      'A web-based platform where users can submit applications electronically and complete secure online transactions using credit cards, debit cards or digital wallets. Capabilities include user interface design, workflow management, data security, payment gateway integration, fraud prevention, and receipt generation with a unique transaction key for future reference.',
    highlights: [
      'Electronic application submission',
      'Secure online payment processing',
      'Payment gateway integration and fraud prevention',
      'Receipt generation with unique transaction keys',
    ],
  },
  {
    slug: 'social-media-mobile-application',
    title: 'Social Media Mobile Application',
    category: 'Mobile',
    summary:
      'Social mobile experience with profiles, feeds, messaging, notifications and content discovery.',
    description:
      'Social media mobile application featuring secured login and user profiles, content sharing, following and followers, likes and comments, messaging, notifications, a personalized news feed, search, and hashtags for content categorization and discovery.',
    highlights: [
      'Secured login and user profiles',
      'Content sharing, likes, comments and messaging',
      'Followers, notifications and personalized news feed',
      'Search and hashtag-based discovery',
    ],
  },
  {
    slug: 'vote-status-monitoring-application',
    title: 'Vote Status Monitoring Application',
    category: 'Public Sector',
    summary:
      'Constituency-specific booth-level vote status monitoring for real-time trend analysis.',
    description:
      'Vote status monitoring web and mobile applications for constituency-specific, booth-level vote status monitoring and real-time vote status trend analysis.',
    highlights: [
      'Constituency-specific monitoring',
      'Booth-level vote status tracking',
      'Web and mobile application access',
      'Real-time vote status trend analysis',
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
