export const jobs = [
  {
    slug: 'software-application-developer',
    title: 'Software Application Developer',
    department: 'Technology',
    location: 'Bangalore, Karnataka, India',
    type: 'Full-time',
    qualification: 'BE or MCA can apply.',
    summary:
      'Build and maintain software applications while collaborating with the development team on requirements, APIs and troubleshooting.',
    responsibilities: [
      'Develop and maintain software applications.',
      'Understand user and business requirements.',
      'Write clean, maintainable code.',
      'Work with APIs and integrations.',
      'Debug and troubleshoot software.',
      'Collaborate with the development team.',
    ],
    preferredSkills: [
      'Programming fundamentals',
      'HTML, CSS and JavaScript',
      'Web development',
      'REST APIs',
      'SQL fundamentals',
      'Git and debugging',
    ],
  },
  {
    slug: 'accountant',
    title: 'Accountant',
    department: 'Finance',
    location: 'Bangalore, Karnataka, India',
    type: 'Full-time',
    qualification: 'B.Com or MBA.',
    summary:
      'Support accounting operations including records, invoices, reconciliations and financial documentation.',
    responsibilities: [
      'Maintain accounting records.',
      'Assist with accounts payable and receivable.',
      'Prepare invoices and reconcile accounts.',
      'Maintain financial documentation.',
      'Assist with bank reconciliation and reports.',
      'Support bookkeeping and expense tracking.',
    ],
    preferredSkills: [
      'Accounting fundamentals',
      'Excel',
      'Bookkeeping and reconciliation',
      'Financial documentation',
      'Accounting software familiarity',
    ],
  },
];

export function getJobBySlug(slug) {
  return jobs.find((job) => job.slug === slug);
}
