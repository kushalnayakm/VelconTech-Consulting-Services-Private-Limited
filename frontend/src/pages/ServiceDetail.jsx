import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import ServiceIcon from '../components/services/ServiceIcon';
import CtaBand from '../components/common/CtaBand';
import { getServiceBySlug, services } from '../data/services';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <SEO title={service.title} description={service.summary} path={`/services/${service.slug}`} />
      <PageHero eyebrow="Service" title={service.title} description={service.summary}>
        <Link to="/services" className="btn-secondary">
          <ArrowLeft className="h-4 w-4" />
          All services
        </Link>
      </PageHero>

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">
              <ServiceIcon name={service.icon} className="h-7 w-7" />
            </div>
            <h2 className="font-display text-2xl font-semibold text-navy">What this service covers</h2>
            <ul className="mt-6 space-y-3">
              {service.offerings.map((item) => (
                <li key={item} className="flex gap-3 text-navy/75">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="card-surface h-fit p-7">
            <h3 className="font-display text-xl font-semibold text-navy">Discuss this capability</h3>
            <p className="mt-3 text-sm leading-relaxed text-navy/65">
              Tell us about your goals and we will connect you with the right conversation on {service.title}.
            </p>
            <Link to="/contact" state={{ service: service.title }} className="btn-primary mt-6 w-full">
              Contact Us
            </Link>
          </aside>
        </div>
      </section>

      <section className="section-pad bg-white/70">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold text-navy">Related services</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} to={`/services/${item.slug}`} className="card-surface p-5 transition hover:shadow-soft">
                <h3 className="font-display text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-navy/65">{item.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
