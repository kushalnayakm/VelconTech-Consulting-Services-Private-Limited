import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { company } from '../../data/company';
import logoIcon from '../../assets/images/logo-icon.jpeg';
import ServiceIcon from '../services/ServiceIcon';

const ecosystemCards = [
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions for a smarter future.',
    icon: 'BrainCircuit',
    to: '/services/ai-and-machine-learning',
    position: 'tl',
    side: 'left',
    accent: 'emerald',
  },
  {
    id: 'it',
    title: 'Information Technology',
    description: 'Modern IT solutions for connected businesses.',
    icon: 'Cloud',
    to: '/services/cloud-computing',
    position: 'tr',
    side: 'right',
    accent: 'emerald',
  },
  {
    id: 'infra',
    title: 'IT Infrastructure',
    description: 'Scalable and secure infrastructure solutions.',
    icon: 'Server',
    to: '/services/networking-and-infrastructure',
    position: 'ml',
    side: 'left',
    accent: 'emerald',
  },
  {
    id: 'software',
    title: 'Software Development',
    description: 'Custom software built for business needs.',
    icon: 'Code2',
    to: '/services/web-and-mobile-application-development',
    position: 'mr',
    side: 'right',
    accent: 'emerald',
  },
  {
    id: 'data',
    title: 'Data Engineering & Analytics',
    description: 'Turn data into actionable insights.',
    icon: 'Database',
    to: '/services/data-management-and-analytics',
    position: 'bl',
    side: 'left',
    accent: 'copper',
  },
  {
    id: 'consulting',
    title: 'IT Consulting',
    description: 'Strategic guidance for digital growth.',
    icon: 'Briefcase',
    to: '/services/it-consulting-and-outsourcing',
    position: 'br',
    side: 'right',
    accent: 'copper',
  },
];

const floatDelay = {
  tl: '0s',
  tr: '0.5s',
  ml: '1s',
  mr: '0.25s',
  bl: '0.75s',
  br: '1.25s',
};

const connectorPaths = [
  { d: 'M260 230 C210 175, 155 115, 118 72', accent: 'emerald' },
  { d: 'M260 230 C310 175, 365 115, 402 72', accent: 'emerald' },
  { d: 'M260 230 C200 230, 145 230, 95 230', accent: 'emerald' },
  { d: 'M260 230 C320 230, 375 230, 425 230', accent: 'emerald' },
  { d: 'M260 230 C210 285, 155 345, 118 388', accent: 'copper' },
  { d: 'M260 230 C310 285, 365 345, 402 388', accent: 'copper' },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-section relative overflow-x-hidden bg-hero-mesh">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(246,248,247,0.2),rgba(246,248,247,0.92))]" />
      <div className="container-page relative grid items-center gap-10 pb-12 pt-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:pb-16 lg:pt-28">
        <div>
          <p className="eyebrow mb-3">{company.tagline}</p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
            <span className="text-emerald">Technology</span> That Moves Your Business{' '}
            <span className="text-emerald">Forward</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-navy/70 sm:text-lg">
            VelconTech helps organizations advance with software, cloud, data and emerging technologies — combining
            consulting, analytics and delivery to strengthen performance in a digital world.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/services" className="btn-primary">
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Talk to Our Team
            </Link>
          </div>
        </div>

        <aside className="hero-ecosystem" aria-label="VelconTech technology ecosystem">
          <div className="hero-ecosystem__glow" aria-hidden="true" />
          <div className="hero-ecosystem__canvas">
            <svg
              className="hero-ecosystem__svg"
              viewBox="0 0 520 460"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid meet"
            >
              {connectorPaths.map((path) => (
                <path
                  key={path.d}
                  className={`hero-ecosystem__path hero-ecosystem__path--${path.accent}`}
                  d={path.d}
                  pathLength="1"
                />
              ))}

              {!reduceMotion
                ? connectorPaths.map((path, index) => (
                    <circle
                      key={`node-${index}`}
                      className={`hero-ecosystem__node hero-ecosystem__node--${path.accent}`}
                      r={index % 2 === 0 ? 3.5 : 3}
                      cx="0"
                      cy="0"
                    >
                      <animateMotion
                        dur={`${7.4 + index * 0.4}s`}
                        begin={`${index * 0.4}s`}
                        repeatCount="indefinite"
                        path={path.d}
                      />
                    </circle>
                  ))
                : null}
            </svg>

            <div className="hero-ecosystem__layout">
              <motion.div
                className="hero-ecosystem__core"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="hero-ecosystem__rings" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="hero-ecosystem__core-panel">
                  <img
                    src={logoIcon}
                    alt="VelconTech"
                    className="hero-ecosystem__logo"
                    width={96}
                    height={96}
                  />
                </div>
              </motion.div>

              {ecosystemCards.map((card, index) => {
                const ArrowIcon = card.side === 'left' ? ArrowRight : ArrowLeft;

                return (
                  <motion.div
                    key={card.id}
                    className={`hero-ecosystem__card hero-ecosystem__card--${card.position}`}
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.45,
                      delay: reduceMotion ? 0 : 0.08 + index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div
                      className="hero-ecosystem__card-float"
                      style={{ '--float-delay': floatDelay[card.position] }}
                    >
                      <Link
                        to={card.to}
                        className={`hero-ecosystem__card-link hero-ecosystem__card-link--${card.side} hero-ecosystem__card-link--${card.accent}`}
                      >
                        {card.side === 'right' ? (
                          <span className="hero-ecosystem__card-arrow" aria-hidden="true">
                            <ArrowIcon className="hero-ecosystem__card-arrow-icon" />
                          </span>
                        ) : null}

                        {card.side === 'left' ? (
                          <span className="hero-ecosystem__card-icon" aria-hidden="true">
                            <ServiceIcon name={card.icon} className="hero-ecosystem__card-icon-svg" />
                          </span>
                        ) : null}

                        <span className="hero-ecosystem__card-body">
                          <span className="hero-ecosystem__card-title">{card.title}</span>
                          <span className="hero-ecosystem__card-desc">{card.description}</span>
                        </span>

                        {card.side === 'right' ? (
                          <span className="hero-ecosystem__card-icon" aria-hidden="true">
                            <ServiceIcon name={card.icon} className="hero-ecosystem__card-icon-svg" />
                          </span>
                        ) : null}

                        {card.side === 'left' ? (
                          <span className="hero-ecosystem__card-arrow" aria-hidden="true">
                            <ArrowIcon className="hero-ecosystem__card-arrow-icon" />
                          </span>
                        ) : null}
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
