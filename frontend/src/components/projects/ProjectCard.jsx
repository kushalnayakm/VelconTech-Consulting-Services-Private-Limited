import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categoryTone = {
  Operations: 'emerald',
  'Finance & Operations': 'copper',
  'Data Applications': 'navy',
  'Project Monitoring': 'emerald',
  'Document Management': 'navy',
  'Digital Transactions': 'emerald',
  Mobile: 'copper',
  'Public Sector': 'emerald',
};

export default function ProjectCard({ project }) {
  const tone = categoryTone[project.category] || 'emerald';

  return (
    <Link to={`/projects/${project.slug}`} className={`project-card project-card--${tone}`}>
      <p className="project-card__category">{project.category}</p>
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__summary">{project.summary}</p>
      <span className="project-card__link">
        View project
        <ArrowRight className="project-card__link-icon" aria-hidden="true" />
      </span>
    </Link>
  );
}
