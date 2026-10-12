import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import CtaBand from '../components/common/CtaBand';
import { getProjectBySlug, projects } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <>
      <SEO title={project.title} description={project.summary} path={`/projects/${project.slug}`} />
      <PageHero eyebrow={project.category} title={project.title} description={project.summary}>
        <Link to="/projects" className="btn-secondary">
          <ArrowLeft className="h-4 w-4" />
          All projects
        </Link>
      </PageHero>

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Project overview</h2>
            <p className="body-muted mt-4 text-lg">{project.description}</p>
            <h3 className="mt-10 font-display text-xl font-semibold text-navy">Highlights</h3>
            <ul className="mt-5 space-y-3">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-navy/75">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="card-surface h-fit p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">Category</p>
            <p className="mt-2 font-medium text-navy">{project.category}</p>
            <p className="mt-6 text-sm leading-relaxed text-navy/65">
              Interested in similar work? Contact VelconTech to discuss your requirements.
            </p>
            <Link to="/contact" className="btn-primary mt-6 w-full">
              Talk to Our Team
            </Link>
          </aside>
        </div>
      </section>

      <section className="section-pad bg-white/70">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold text-navy">More projects</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} to={`/projects/${item.slug}`} className="card-surface p-5">
                <h3 className="font-display text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-navy/65">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
