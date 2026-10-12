import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

export default function JobCard({ job }) {
  return (
    <article className="card-surface flex h-full flex-col p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">{job.department}</p>
      <h2 className="mt-3 font-display text-2xl font-semibold text-navy">{job.title}</h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/65">{job.summary}</p>
      <div className="mt-5 flex flex-wrap gap-3 text-sm text-navy/70">
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-mist px-3 py-1.5">
          <MapPin className="h-4 w-4 text-copper" />
          {job.location}
        </span>
        <span className="rounded-lg bg-mist px-3 py-1.5">{job.type}</span>
      </div>
      <p className="mt-4 text-sm text-navy/75">
        <span className="font-semibold text-navy">Qualification:</span> {job.qualification}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link to={`/careers/${job.slug}`} className="btn-secondary">
          View role
        </Link>
        <Link to={`/careers/${job.slug}/apply`} className="btn-primary">
          Apply Now
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
