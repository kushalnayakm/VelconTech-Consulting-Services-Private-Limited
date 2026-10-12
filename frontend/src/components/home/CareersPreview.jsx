import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import { jobs } from '../../data/jobs';

export default function CareersPreview() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Careers"
          title="Build with VelconTech"
          description="Explore current openings and apply by email through our careers forms."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {jobs.map((job) => (
            <Link key={job.slug} to={`/careers/${job.slug}`} className="card-surface block p-6 transition hover:shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">{job.department}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-navy">{job.title}</h3>
              <p className="mt-3 text-sm text-navy/65">{job.summary}</p>
              <p className="mt-4 text-sm font-medium text-navy/80">Qualification: {job.qualification}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
