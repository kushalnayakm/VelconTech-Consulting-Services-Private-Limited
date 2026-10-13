import { getPortfolioServices } from '../../data/services';
import ServiceIcon from '../services/ServiceIcon';

const portfolioPills = getPortfolioServices().map((service) => ({
  label: service.title,
  icon: service.icon,
  slug: service.slug,
}));

const rowOne = portfolioPills.slice(0, 6);
const rowTwo = portfolioPills.slice(6, 12);

function TickerPill({ item }) {
  return (
    <span className="tech-ticker__pill">
      <span className="tech-ticker__icon" aria-hidden="true">
        <ServiceIcon name={item.icon} className="tech-ticker__icon-svg" />
      </span>
      <span className="tech-ticker__label">{item.label}</span>
    </span>
  );
}

function TickerRow({ items, direction }) {
  const loop = [...items, ...items];

  return (
    <div className={`tech-ticker__viewport tech-ticker__viewport--${direction}`}>
      <div className={`tech-ticker__track tech-ticker__track--${direction}`}>
        {loop.map((item, index) => (
          <div
            key={`${item.slug}-${direction}-${index}`}
            className="tech-ticker__item"
            aria-hidden={index >= items.length ? true : undefined}
          >
            <TickerPill item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesOverview() {
  return (
    <section className="tech-ticker" aria-label="Technology capabilities ticker">
      <TickerRow items={rowOne} direction="rtl" />
      <TickerRow items={rowTwo} direction="ltr" />
    </section>
  );
}
