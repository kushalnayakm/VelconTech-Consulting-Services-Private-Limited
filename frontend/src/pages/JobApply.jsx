import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import ApplicationForm from '../components/careers/ApplicationForm';
import { getJobBySlug } from '../data/jobs';

export default function JobApply() {
  const { slug } = useParams();
  const job = getJobBySlug(slug);

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  return (
    <>
      <SEO
        title={`Apply — ${job.title}`}
        description={`Apply for the ${job.title} role at VelconTech.`}
        path={`/careers/${job.slug}/apply`}
      />
      <PageHero
        eyebrow="Application"
        title={`Apply for ${job.title}`}
        description="Complete the form below. Your application details and resume will be emailed to our recruitment address."
      >
        <Link to={`/careers/${job.slug}`} className="btn-secondary">
          <ArrowLeft className="h-4 w-4" />
          Back to role
        </Link>
      </PageHero>

      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <ApplicationForm job={job} />
        </div>
      </section>
    </>
  );
}
