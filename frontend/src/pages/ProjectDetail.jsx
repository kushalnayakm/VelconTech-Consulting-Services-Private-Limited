import { useEffect, useId, useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MonitorPlay,
  X,
} from 'lucide-react';
import SEO from '../components/common/SEO';
import CtaBand from '../components/common/CtaBand';
import { getProjectBySlug, projects } from '../data/projects';
import inventoryImage from '../assets/images/inventory.jpeg';
import softwareImage from '../assets/images/erp.jpeg';
import dataImage from '../assets/images/images.jpeg';
import cloudImage from '../assets/images/CC.jpeg';
import cybersecurityImage from '../assets/images/cs.jpeg';
import semiconductorImage from '../assets/images/semicontor.jpeg';

const categoryImages = {
  Operations: inventoryImage,
  'Finance & Operations': softwareImage,
  'Data Applications': dataImage,
  'Project Monitoring': cloudImage,
  'Document Management': softwareImage,
  'Digital Transactions': cloudImage,
  Mobile: softwareImage,
  'Public Sector': cybersecurityImage,
  Semiconductor: semiconductorImage,
};

const categoryTone = {
  Operations: 'emerald',
  'Finance & Operations': 'copper',
  'Data Applications': 'navy',
  'Project Monitoring': 'emerald',
  'Document Management': 'navy',
  'Digital Transactions': 'emerald',
  Mobile: 'copper',
  'Public Sector': 'emerald',
};

function projectVisual(project) {
  return project.coverImage || categoryImages[project.category] || null;
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const reduceMotion = useReducedMotion();
  const [demoOpen, setDemoOpen] = useState(false);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previouslyFocused = useRef(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    setDemoOpen(false);
  }, [slug]);

  useEffect(() => {
    if (!demoOpen) return undefined;

    previouslyFocused.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const frame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        setDemoOpen(false);
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);

    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused.current instanceof HTMLElement) {
        previouslyFocused.current.focus();
      }
    };
  }, [demoOpen]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 3);
  const heroImage = projectVisual(project);
  const tone = categoryTone[project.category] || 'emerald';

  return (
    <>
      <SEO title={project.title} description={project.summary} path={`/projects/${project.slug}`} />

      <section className="project-detail__hero">
        <div className="project-detail__hero-bg" aria-hidden="true">
          <div className="project-detail__hero-glow" />
          <svg className="project-detail__hero-curves" viewBox="0 0 1200 360" fill="none" preserveAspectRatio="none">
            <path
              d="M520 60 C 700 20, 880 110, 1040 70 S 1200 30, 1280 55"
              stroke="rgba(8,127,98,0.14)"
              strokeWidth="1.25"
            />
            <path
              d="M560 150 C 760 110, 920 200, 1080 160 S 1220 120, 1280 145"
              stroke="rgba(184,115,75,0.12)"
              strokeWidth="1.1"
            />
            <circle cx="1120" cy="58" r="3" fill="rgba(8,127,98,0.24)" />
            <circle cx="1210" cy="140" r="2.5" fill="rgba(184,115,75,0.28)" />
          </svg>
        </div>

        <div className="container-page project-detail__hero-inner">
          <motion.div
            className="project-detail__hero-copy"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className={`project-detail__category project-detail__category--${tone}`}>
              <span className="project-detail__category-line" aria-hidden="true" />
              {project.category}
            </p>
            <h1 className="project-detail__title">{project.title}</h1>
            <p className="project-detail__summary">{project.summary}</p>

            <div className="project-detail__actions">
              <Link to="/projects" className="project-detail__btn project-detail__btn--secondary">
                <ArrowLeft className="project-detail__btn-icon" aria-hidden="true" />
                All Projects
              </Link>
              <button
                type="button"
                className="project-detail__btn project-detail__btn--primary"
                onClick={() => setDemoOpen(true)}
              >
                <MonitorPlay className="project-detail__btn-icon" aria-hidden="true" />
                Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.div
            className="project-detail__hero-visual"
            initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              delay: reduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="project-detail__hero-orb" aria-hidden="true" />
            <div className="project-detail__hero-frame">
              {heroImage ? (
                <img
                  src={heroImage}
                  alt=""
                  className="project-detail__hero-image"
                  width={420}
                  height={320}
                  decoding="async"
                />
              ) : (
                <div className="project-detail__hero-fallback" aria-hidden="true">
                  <MonitorPlay />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="project-detail__body">
        <div className="container-page project-detail__layout">
          <article className="project-detail__card project-detail__card--main">
            <h2 className="project-detail__section-title">Project overview</h2>
            <p className="project-detail__overview">{project.description}</p>

            <div className="project-detail__divider" aria-hidden="true" />

            <h3 className="project-detail__section-title project-detail__section-title--sub">Highlights</h3>
            <ul className="project-detail__highlights">
              {project.highlights.map((item) => (
                <li key={item} className="project-detail__highlight">
                  <span className="project-detail__highlight-icon" aria-hidden="true">
                    <CheckCircle2 />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="project-detail__card project-detail__card--side">
            <h2 className="project-detail__section-title">Project information</h2>
            <dl className="project-detail__meta">
              <div className="project-detail__meta-row">
                <dt>Category</dt>
                <dd>
                  <span className={`project-detail__pill project-detail__pill--${tone}`}>{project.category}</span>
                </dd>
              </div>
              <div className="project-detail__meta-row">
                <dt>Project type</dt>
                <dd>
                  <span className="project-detail__pill">Custom solution</span>
                </dd>
              </div>
              <div className="project-detail__meta-row">
                <dt>Delivery focus</dt>
                <dd>
                  <span className="project-detail__pill">Consulting &amp; build</span>
                </dd>
              </div>
              <div className="project-detail__meta-row">
                <dt>Status</dt>
                <dd>
                  <span className="project-detail__pill project-detail__pill--emerald">Featured case study</span>
                </dd>
              </div>
            </dl>

            <p className="project-detail__side-note">
              Interested in similar work? Contact VelconTech to discuss your requirements.
            </p>
            <Link to="/contact" className="project-detail__btn project-detail__btn--primary project-detail__btn--full">
              Talk to Our Team
            </Link>
          </aside>
        </div>
      </section>

      <section className="project-detail__related">
        <div className="container-page">
          <h2 className="project-detail__section-title">Related projects</h2>
          <div className="project-detail__related-grid">
            {related.map((item) => {
              const thumb = projectVisual(item);
              const itemTone = categoryTone[item.category] || 'emerald';
              return (
                <Link key={item.slug} to={`/projects/${item.slug}`} className="project-detail__related-card">
                  <span className="project-detail__related-thumb" aria-hidden="true">
                    {thumb ? (
                      <img src={thumb} alt="" className="project-detail__related-image" loading="lazy" />
                    ) : (
                      <MonitorPlay className="project-detail__related-fallback" />
                    )}
                  </span>
                  <span className="project-detail__related-copy">
                    <span className={`project-detail__related-category project-detail__related-category--${itemTone}`}>
                      {item.category}
                    </span>
                    <span className="project-detail__related-title">{item.title}</span>
                    <span className="project-detail__related-summary">{item.summary}</span>
                    <span className="project-detail__related-link">
                      View project
                      <ArrowRight className="project-detail__related-link-icon" aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />

      <AnimatePresence>
        {demoOpen ? (
          <motion.div
            className="project-demo-modal"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            <button
              type="button"
              className="project-demo-modal__overlay"
              aria-label="Close demo dialog"
              onClick={() => setDemoOpen(false)}
            />
            <motion.div
              ref={dialogRef}
              className="project-demo-modal__dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              aria-describedby={descriptionId}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98, y: 6 }}
              transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                ref={closeButtonRef}
                type="button"
                className="project-demo-modal__close"
                aria-label="Close"
                onClick={() => setDemoOpen(false)}
              >
                <X aria-hidden="true" />
              </button>

              <span className="project-demo-modal__icon" aria-hidden="true">
                <MonitorPlay />
              </span>
              <h2 id={titleId} className="project-demo-modal__title">
                Demo Coming Soon
              </h2>
              <p id={descriptionId} className="project-demo-modal__message">
                We&apos;re preparing an interactive demo of this project. Please check back soon.
              </p>
              <button
                type="button"
                className="project-detail__btn project-detail__btn--primary project-detail__btn--full"
                onClick={() => setDemoOpen(false)}
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
