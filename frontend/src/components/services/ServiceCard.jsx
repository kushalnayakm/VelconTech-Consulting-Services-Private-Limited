import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ServiceIcon from './ServiceIcon';

export default function ServiceCard({ service }) {
  const visualName = service.visual || service.icon;

  return (
    <article className="service-card">
      <div className="service-card__content">
        <div className="service-card__header">
          <div className="service-card__icon" aria-hidden="true">
            <ServiceIcon name={service.icon} className="service-card__icon-svg" />
          </div>
          <h3 className="service-card__title">{service.title}</h3>
        </div>

        <ul className="service-card__list">
          {service.offerings.map((item) => (
            <li key={item}>
              <CheckCircle2 className="service-card__check" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Link to={`/services/${service.slug}`} className="service-card__cta">
          <span>Learn More</span>
          <ArrowRight className="service-card__cta-arrow" aria-hidden="true" />
        </Link>
      </div>

      <div className="service-card__visual" aria-hidden="true">
        <ServiceIcon name={visualName} className="service-card__visual-icon" />
      </div>
    </article>
  );
}
