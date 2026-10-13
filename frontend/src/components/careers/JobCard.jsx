import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  MapPin,
  ShieldCheck,
  WalletCards,
  Workflow,
} from 'lucide-react';

const departmentMeta = {
  Technology: { icon: Code2, tone: 'emerald' },
  Finance: { icon: WalletCards, tone: 'copper' },
  Operations: { icon: Workflow, tone: 'navy' },
  'Data & AI': { icon: Database, tone: 'emerald' },
  Cybersecurity: { icon: ShieldCheck, tone: 'navy' },
  Cloud: { icon: Cloud, tone: 'emerald' },
};

export default function JobCard({ job }) {
  const meta = departmentMeta[job.department] || { icon: BriefcaseBusiness, tone: 'emerald' };
  const Icon = meta.icon;

  return (
    <article className={`job-card job-card--${meta.tone}`}>
      <Link to={`/careers/${job.slug}`} className="job-card__corner" aria-label={`Open ${job.title}`}>
        <ArrowUpRight className="job-card__corner-icon" aria-hidden="true" />
      </Link>

      <div className="job-card__icon" aria-hidden="true">
        <Icon />
      </div>

      <p className="job-card__department">{job.department}</p>
      <h3 className="job-card__title">{job.title}</h3>
      <p className="job-card__summary">{job.summary}</p>

      <div className="job-card__meta">
        <span className="job-card__meta-item">
          <MapPin className="job-card__meta-icon" aria-hidden="true" />
          {job.location}
        </span>
        <span className="job-card__meta-item">{job.type}</span>
      </div>

      <div className="job-card__actions">
        <Link to={`/careers/${job.slug}`} className="job-card__btn job-card__btn--secondary">
          View role
        </Link>
        <Link to={`/careers/${job.slug}/apply`} className="job-card__btn job-card__btn--primary">
          Apply Now
          <ArrowRight className="job-card__btn-icon" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
