import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ServiceIcon from './ServiceIcon';

export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="card-surface group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">
        <ServiceIcon name={service.icon} />
      </div>
      <h3 className="font-display text-xl font-semibold text-navy group-hover:text-emerald">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/65">{service.short}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald">
        Learn more <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
