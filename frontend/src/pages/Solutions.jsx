import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import {
  Check,
  ClipboardList,
  Code2,
  Headphones,
  PencilRuler,
  Search,
  Workflow,
} from 'lucide-react';
import SEO from '../components/common/SEO';
import CtaBand from '../components/common/CtaBand';
import { services } from '../data/services';
import { company } from '../data/company';

const solutionThemes = [
  {
    title: 'Digital Business & Automation',
    description:
      'Support automation, service delivery and digital business initiatives with consulting and application capabilities.',
    links: ['enterprise-software-solutions', 'it-consulting-and-outsourcing', 'web-and-mobile-application-development'],
  },
  {
    title: 'Data, Cloud & Emerging Tech',
    description:
      'Strengthen decision-making and platforms around data management, analytics, cloud services and AI-related tooling.',
    links: ['cloud-computing', 'data-management-and-analytics', 'ai-and-machine-learning'],
  },
  {
    title: 'Engineering & Product Enablement',
    description:
      'Extend delivery with semiconductor, PCB and component engineering services alongside software and collaboration tools.',
    links: ['semiconductor-services', 'pcb-services', 'component-engineering'],
  },
];

const deliverySteps = [
  {
    id: 'understand',
    number: '01',
    title: 'Understand',
    description: 'Discover business needs, requirements, and challenges.',
    icon: Search,
  },
  {
    id: 'design',
    number: '02',
    title: 'Design',
    description: 'Plan the right solution strategy.',
    icon: PencilRuler,
  },
  {
    id: 'implement',
    number: '03',
    title: 'Implement',
    description: 'Build and implement the solution.',
    icon: Code2,
  },
  {
    id: 'integrate',
    number: '04',
    title: 'Integrate',
    description: 'Connect everything.',
    icon: Workflow,
  },
  {
    id: 'support',
    number: '05',
    title: 'Support',
    description: 'Maintain, support, and optimize.',
    icon: Headphones,
  },
];

const STEP_INTERVAL_MS = 2200;
const RESUME_DELAY_MS = 3200;

export default function Solutions() {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef(null);
  const resumeTimerRef = useRef(null);
  const inView = useInView(timelineRef, { amount: 0.35, once: false });

  const stepCount = deliverySteps.length;
  const progressScale = stepCount > 1 ? activeStep / (stepCount - 1) : 0;

  const goToStep = useCallback((index) => {
    setActiveStep(index);
    setAutoPlay(false);
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = window.setTimeout(() => {
      setAutoPlay(true);
    }, RESUME_DELAY_MS);
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (reduceMotion || !autoPlay || !inView) return undefined;

    const timer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % stepCount);
    }, STEP_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [autoPlay, inView, reduceMotion, stepCount]);

  return (
    <>
      <SEO
        title="Solutions"
        description="VelconTech solution themes spanning digital business, data and cloud, and engineering enablement."
        path="/solutions"
      />

      <section className="solutions-hero">
        <div className="solutions-hero__bg" aria-hidden="true">
          <div className="solutions-hero__glow" />
          <svg className="solutions-hero__curves" viewBox="0 0 1200 260" fill="none" preserveAspectRatio="none">
            <path
              d="M540 50 C 700 20, 860 100, 1020 70 S 1180 30, 1280 55"
              stroke="rgba(18,59,93,0.08)"
              strokeWidth="1.25"
            />
            <path
              d="M580 130 C 760 90, 900 170, 1060 140 S 1200 100, 1280 125"
              stroke="rgba(8,127,98,0.12)"
              strokeWidth="1.1"
            />
            <circle cx="1100" cy="52" r="3" fill="rgba(22,184,166,0.28)" />
            <circle cx="1200" cy="130" r="2.5" fill="rgba(184,115,75,0.26)" />
          </svg>
        </div>

        <div className="solutions-hero__inner">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: 'easeOut' }}
          >
            <p className="solutions-hero__eyebrow">
              Our Approach
              <span className="solutions-hero__eyebrow-line" aria-hidden="true" />
            </p>
            <h1 className="solutions-hero__title">
              From Strategy to <span className="solutions-hero__accent">Successful Delivery</span>
            </h1>
            <p className="solutions-hero__description">
              A structured approach to building, integrating, and supporting reliable technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="solutions-body">
        <div className="solutions-body__approach">
          <motion.div
            ref={timelineRef}
            className="solutions-timeline"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, delay: reduceMotion ? 0 : 0.04, ease: 'easeOut' }}
          >
            <div className="solutions-timeline__track" aria-hidden="true">
              <div className="solutions-timeline__rail" />
              <div
                className="solutions-timeline__progress"
                style={{
                  transform: `scaleX(${inView || reduceMotion ? progressScale : 0})`,
                }}
              />
            </div>

            <ol className="solutions-timeline__steps" role="list">
              {deliverySteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeStep;
                const isCompleted = index < activeStep;
                const stateClass = isActive ? ' is-active' : isCompleted ? ' is-completed' : ' is-upcoming';

                return (
                  <li key={step.id} className={`solutions-timeline__step${stateClass}`}>
                    <button
                      type="button"
                      className="solutions-timeline__button"
                      onClick={() => goToStep(index)}
                      aria-pressed={isActive}
                      aria-current={isActive ? 'step' : undefined}
                    >
                      <span className="solutions-timeline__icon" aria-hidden="true">
                        {isCompleted ? <Check strokeWidth={2.5} /> : <Icon />}
                      </span>
                      <span className="solutions-timeline__marker" aria-hidden="true">
                        <span className="solutions-timeline__marker-dot" />
                      </span>
                      <span className="solutions-timeline__meta">
                        <span className="solutions-timeline__number">Step {step.number}</span>
                        <span className="solutions-timeline__label">{step.title}</span>
                      </span>
                      <span className="solutions-timeline__copy">{step.description}</span>
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className="solutions-timeline__active-copy" aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={deliverySteps[activeStep].id}
                  className="solutions-timeline__active-inner"
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.2, ease: 'easeOut' }}
                >
                  <span className="solutions-timeline__active-label">
                    Step {deliverySteps[activeStep].number} — {deliverySteps[activeStep].title}
                  </span>
                  {deliverySteps[activeStep].description}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="solutions-timeline__pill">
              <span className="solutions-timeline__pill-dot" aria-hidden="true" />
              Building success together at every step
            </div>
          </motion.div>
        </div>

        <div className="container-page solutions-themes">
          <p className="solutions-themes__intro">{company.about[1]}</p>
          <div className="solutions-themes__grid">
            {solutionThemes.map((theme, index) => (
              <motion.article
                key={theme.title}
                className="solutions-theme-card"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                  delay: reduceMotion ? 0 : 0.1 + Math.min(index * 0.05, 0.2),
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="solutions-theme-card__icon" aria-hidden="true">
                  <ClipboardList />
                </div>
                <h2 className="solutions-theme-card__title">{theme.title}</h2>
                <p className="solutions-theme-card__description">{theme.description}</p>
                <ul className="solutions-theme-card__links">
                  {theme.links.map((slug) => {
                    const service = services.find((item) => item.slug === slug);
                    if (!service) return null;
                    return (
                      <li key={slug}>
                        <Link className="solutions-theme-card__link" to={`/services/${slug}`}>
                          {service.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Looking for a tailored solution conversation?"
        description="Share your business context and we will help you explore the relevant VelconTech service areas."
        secondaryTo="/projects"
        secondaryLabel="See Projects"
      />
    </>
  );
}
