import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import CtaBand from '../components/common/CtaBand';
import JobCard from '../components/careers/JobCard';
import { jobs } from '../data/jobs';

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers"
        description="Explore open roles at VelconTech Consulting Services Private Limited and apply online."
        path="/careers"
      />
      <PageHero
        eyebrow="Careers"
        title="Join a team solving hard technology problems"
        description="Current vacancies are listed below. Applications are submitted by email through our secure form — we do not store applications in a database."
      />

      <section className="section-pad">
        <div className="container-page grid gap-5 lg:grid-cols-2">
          {jobs.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>
      </section>

      <CtaBand
        title="Do not see the right role?"
        description="You can still reach the team through our contact form for general inquiries."
        primaryTo="/contact"
        primaryLabel="Contact Us"
        secondaryTo="/about"
        secondaryLabel="About VelconTech"
      />
    </>
  );
}
