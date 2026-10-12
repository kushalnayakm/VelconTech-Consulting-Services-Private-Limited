import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import { getJobBySlug } from '../data/jobs';

export default function JobDetail() {
  const { slug } = useParams();
  const job = getJobBySlug(slug);

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  return (
    <>
      <SEO title={job.title} description={job.summary} path={`/careers/${job.slug}`} />
      <PageHero eyebrow={job.department} title={job.title} description={job.summary}>
        <div className="flex flex-wrap gap-3">
          <Link to="/careers" className="btn-secondary">
            <ArrowLeft className="h-4 w-4" />
            All careers
          </Link>
          <Link to={`/careers/${job.slug}/apply`} className="btn-primary">
            Apply Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">Official qualification</h2>
              <p className="mt-3 rounded-2xl bg-mist px-5 py-4 text-navy/80">{job.qualification}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">Responsibilities</h2>
              <ul className="mt-5 space-y-3">
                {job.responsibilities.map((item) => (
                  <li key={item} className="flex gap-3 text-navy/75">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">Preferred skills</h2>
              <p className="mt-2 text-sm text-navy/60">
                Suggested preferred skills are listed separately from the official qualification requirement.
              </p>
              <ul className="mt-5 space-y-3">
                {job.preferredSkills.map((item) => (
                  <li key={item} className="flex gap-3 text-navy/75">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="card-surface h-fit p-7">
            <h3 className="font-display text-xl font-semibold text-navy">Role details</h3>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-navy">Location</dt>
                <dd className="mt-1 text-navy/70">{job.location}</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Employment type</dt>
                <dd className="mt-1 text-navy/70">{job.type}</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Department</dt>
                <dd className="mt-1 text-navy/70">{job.department}</dd>
              </div>
            </dl>
            <Link to={`/careers/${job.slug}/apply`} className="btn-primary mt-8 w-full">
              Apply Now
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-navy/55">
              Applications are emailed to our recruitment address with your resume attached. We do not store
              applications in a database or persistent file store.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
