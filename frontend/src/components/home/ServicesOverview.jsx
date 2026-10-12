import { Link } from 'react-router-dom';
import { Briefcase, CircuitBoard, Cpu, Layers } from 'lucide-react';

const serviceStrip = [
  {
    title: 'Semiconductor Services',
    icon: Cpu,
    to: '/services/semiconductor-services',
    items: ['Design Verification', 'DFT', 'ATE Services', 'Production Support'],
  },
  {
    title: 'PCB Services',
    icon: CircuitBoard,
    to: '/services/pcb-services',
    items: ['PCB Board Design', 'Manufacturing', 'Board Testing'],
  },
  {
    title: 'Component Engineering Services',
    icon: Layers,
    to: '/services/component-engineering',
    items: [
      'Part Selection',
      'BOM Scrubbing',
      'Alternative Part Selection',
      'RoHS Compliance',
      'REACH Compliance',
      'Life Cycle Data',
    ],
  },
  {
    title: 'IT Consulting and Outsourcing Services',
    icon: Briefcase,
    to: '/services/it-consulting-and-outsourcing',
    items: [
      'Consulting',
      'Application Management',
      'Process Improvement',
      'Technology Strategy',
      'Data Analytics',
    ],
  },
];

function ServiceTickerCard({ service }) {
  const Icon = service.icon;
  return (
    <Link to={service.to} className="services-ticker__card">
      <div className="services-ticker__card-head">
        <span className="services-ticker__icon" aria-hidden="true">
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="services-ticker__card-title">{service.title}</h3>
      </div>
      <ul className="services-ticker__list">
        {service.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Link>
  );
}

export default function ServicesOverview() {
  const loop = [...serviceStrip, ...serviceStrip];

  return (
    <section className="services-ticker" aria-labelledby="our-services-heading">
      <div className="container-page">
        <div className="services-ticker__intro">
          <div className="services-ticker__accent" aria-hidden="true" />
          <div>
            <h2 id="our-services-heading" className="services-ticker__title">
              OUR SERVICES
            </h2>
            <p className="services-ticker__subtitle">
              Engineering reliable solutions across technology and industry.
            </p>
          </div>
        </div>
      </div>

      <div className="services-ticker__viewport" aria-label="Services moving continuously">
        <div className="services-ticker__track">
          {loop.map((service, index) => (
            <div
              key={`${service.title}-${index}`}
              className="services-ticker__item"
              aria-hidden={index >= serviceStrip.length ? true : undefined}
            >
              <ServiceTickerCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
