export const jobs = [
  {
    slug: 'software-application-developer',
    title: 'Software Application Developer',
  },
  {
    slug: 'accountant',
    title: 'Accountant',
  },
];

export function findJob({ slug, title }) {
  return jobs.find(
    (job) =>
      (slug && job.slug === slug) ||
      (title && job.title.toLowerCase() === String(title).toLowerCase()),
  );
}
