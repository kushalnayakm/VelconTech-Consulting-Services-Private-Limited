import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="card-surface group block p-6 transition hover:-translate-y-1 hover:shadow-soft"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">{project.category}</p>
      <h3 className="mt-3 font-display text-xl font-semibold text-navy group-hover:text-emerald">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-navy/65">{project.summary}</p>
    </Link>
  );
}
