import { Link, Navigate, useParams } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageSquareText,
} from 'lucide-react';
import SEO from '../components/common/SEO';
import ServiceIcon from '../components/services/ServiceIcon';
import CtaBand from '../components/common/CtaBand';
import { getServiceBySlug, services } from '../data/services';
import aiImage from '../assets/images/blog-hero-ai-analytics.webp';
import dataImage from '../assets/images/images.jpeg';
import cloudImage from '../assets/images/CC.jpeg';
import securityImage from '../assets/images/cs.jpeg';
import erpImage from '../assets/images/erp.jpeg';
import inventoryImage from '../assets/images/inventory.jpeg';
import semiconductorImage from '../assets/images/semicontor.jpeg';
import careerImage from '../assets/images/carrer.png';
import roleImage from '../assets/images/se-role.png';

const serviceImages = {
  'ai-and-machine-learning': aiImage,
  'data-management-and-analytics': dataImage,
  'cloud-computing': cloudImage,
  'networking-and-infrastructure': cloudImage,
  'enterprise-software-solutions': erpImage,
  'web-and-mobile-application-development': roleImage,
  cybersecurity: securityImage,
  'software-testing-and-quality-engineering': roleImage,
  'it-consulting-and-outsourcing': careerImage,
  'semiconductor-services': semiconductorImage,
  'pcb-services': semiconductorImage,
  'component-engineering': inventoryImage,
  'development-tools-and-platforms': roleImage,
  'communication-and-collaboration': careerImage,
  'financial-technology': erpImage,
  'consumer-software': roleImage,
};

const serviceCategories = {
  'ai-and-machine-learning': 'Data & Intelligence',
  'data-management-and-analytics': 'Data & Intelligence',
  'cloud-computing': 'Cloud & Platforms',
  'networking-and-infrastructure': 'Infrastructure',
  'enterprise-software-solutions': 'Enterprise Systems',
  'web-and-mobile-application-development': 'Digital Products',
  cybersecurity: 'Security',
  'software-testing-and-quality-engineering': 'Quality Engineering',
  'it-consulting-and-outsourcing': 'Consulting',
  'semiconductor-services': 'Hardware Engineering',
  'pcb-services': 'Hardware Engineering',
  'component-engineering': 'Hardware Engineering',
  'development-tools-and-platforms': 'Delivery Enablement',
  'communication-and-collaboration': 'Workplace Technology',
  'financial-technology': 'Industry Solutions',
  'consumer-software': 'Industry Solutions',
};

const relatedGroups = {
  'ai-and-machine-learning': [
    'data-management-and-analytics',
    'cloud-computing',
    'software-testing-and-quality-engineering',
  ],
  'data-management-and-analytics': [
    'ai-and-machine-learning',
    'cloud-computing',
    'enterprise-software-solutions',
  ],
  'cloud-computing': [
    'networking-and-infrastructure',
    'cybersecurity',
    'web-and-mobile-application-development',
  ],
  'networking-and-infrastructure': [
    'cloud-computing',
    'cybersecurity',
    'it-consulting-and-outsourcing',
  ],
  'enterprise-software-solutions': [
    'web-and-mobile-application-development',
    'data-management-and-analytics',
    'it-consulting-and-outsourcing',
  ],
  'web-and-mobile-application-development': [
    'cloud-computing',
    'software-testing-and-quality-engineering',
    'ai-and-machine-learning',
  ],
  cybersecurity: [
    'networking-and-infrastructure',
    'cloud-computing',
    'software-testing-and-quality-engineering',
  ],
  'software-testing-and-quality-engineering': [
    'web-and-mobile-application-development',
    'cybersecurity',
    'cloud-computing',
  ],
  'it-consulting-and-outsourcing': [
    'enterprise-software-solutions',
    'data-management-and-analytics',
    'cloud-computing',
  ],
  'semiconductor-services': ['pcb-services', 'component-engineering', 'software-testing-and-quality-engineering'],
  'pcb-services': ['semiconductor-services', 'component-engineering', 'networking-and-infrastructure'],
  'component-engineering': ['pcb-services', 'semiconductor-services', 'enterprise-software-solutions'],
};

const helpThemes = {
  'ai-and-machine-learning': [
    {
      title: 'Practical Model Delivery',
      description: 'Move from experimentation to production with models that support real business workflows.',
      icon: 'BrainCircuit',
    },
    {
      title: 'Intelligent Automation',
      description: 'Apply NLP and generative capabilities where they reduce effort and improve decisions.',
      icon: 'Workflow',
    },
    {
      title: 'Responsible Integration',
      description: 'Embed AI into existing systems with clear ownership, monitoring and governance.',
      icon: 'ShieldCheck',
    },
  ],
  'data-management-and-analytics': [
    {
      title: 'Reliable Data Pipelines',
      description: 'Build dependable pipelines that move, transform and prepare data for everyday use.',
      icon: 'Database',
    },
    {
      title: 'Clear Business Insights',
      description: 'Turn analytics and reporting into decision-ready views for teams and leaders.',
      icon: 'BarChart3',
    },
    {
      title: 'Trusted Data Quality',
      description: 'Strengthen governance, consistency and confidence across critical data assets.',
      icon: 'ClipboardCheck',
    },
  ],
  'cloud-computing': [
    {
      title: 'Scalable Cloud Foundations',
      description: 'Design architectures that support growth, resilience and efficient operations.',
      icon: 'Cloud',
    },
    {
      title: 'Automated Delivery',
      description: 'Improve release quality with CI/CD, observability and platform automation.',
      icon: 'GitBranch',
    },
    {
      title: 'Optimized Operations',
      description: 'Monitor performance and refine cloud environments for cost and reliability.',
      icon: 'Server',
    },
  ],
  default: [
    {
      title: 'Focused Discovery',
      description: 'Clarify requirements, constraints and outcomes before delivery begins.',
      icon: 'Briefcase',
    },
    {
      title: 'Reliable Delivery',
      description: 'Implement practical solutions with clear milestones and measurable progress.',
      icon: 'Workflow',
    },
    {
      title: 'Ongoing Support',
      description: 'Maintain, optimize and evolve capabilities as business needs change.',
      icon: 'ShieldCheck',
    },
  ],
};

function getRelatedServices(service) {
  const preferred = relatedGroups[service.slug] || [];
  const preferredItems = preferred
    .map((slug) => services.find((item) => item.slug === slug))
    .filter(Boolean);
  if (preferredItems.length >= 3) return preferredItems.slice(0, 3);

  const fallback = services.filter((item) => item.slug !== service.slug && !preferred.includes(item.slug));
  return [...preferredItems, ...fallback].slice(0, 3);
}

function getHelpCards(service) {
  return helpThemes[service.slug] || helpThemes.default.map((item, index) => ({
    ...item,
    icon: index === 0 ? service.icon : item.icon,
  }));
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const reduceMotion = useReducedMotion();

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const related = getRelatedServices(service);
  const helpCards = getHelpCards(service);
  const heroImage = serviceImages[service.slug] || dataImage;
  const category = serviceCategories[service.slug] || 'Technology Services';
  const mid = Math.ceil(service.offerings.length / 2);
  const offeringColumns = [service.offerings.slice(0, mid), service.offerings.slice(mid)];

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.32, delay, ease: 'easeOut' },
        };

  return (
    <>
      <SEO title={service.title} description={service.summary} path={`/services/${service.slug}`} />

      <section className="service-detail__hero">
        <div className="service-detail__hero-bg" aria-hidden="true">
          <div className="service-detail__hero-glow" />
          <svg className="service-detail__hero-curves" viewBox="0 0 1200 420" fill="none" preserveAspectRatio="none">
            <path
              d="M520 70 C 700 20, 880 120, 1040 80 S 1180 40, 1280 70"
              stroke="rgba(8,127,98,0.14)"
              strokeWidth="1.2"
            />
            <path
              d="M560 170 C 760 110, 920 210, 1080 160 S 1220 110, 1280 150"
              stroke="rgba(184,115,75,0.12)"
              strokeWidth="1.1"
            />
            <circle cx="1120" cy="78" r="3" fill="rgba(22,184,166,0.28)" />
            <circle cx="1210" cy="180" r="2.5" fill="rgba(184,115,75,0.28)" />
          </svg>
        </div>

        <div className="container-page service-detail__hero-inner">
          <motion.div className="service-detail__hero-copy" {...fadeUp(0)}>
            <nav className="service-detail__breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link to="/services">Services</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{service.title}</span>
            </nav>

            <p className="service-detail__category">
              <span className="service-detail__category-line" aria-hidden="true" />
              {category}
            </p>

            <h1 className="service-detail__title">{service.title}</h1>
            <p className="service-detail__summary">{service.summary}</p>

            <div className="service-detail__actions">
              <Link to="/contact" state={{ service: service.title }} className="service-detail__btn service-detail__btn--primary">
                Contact Us
                <ArrowRight className="service-detail__btn-icon" aria-hidden="true" />
              </Link>
              <Link to="/services" className="service-detail__btn service-detail__btn--secondary">
                <ArrowLeft className="service-detail__btn-icon" aria-hidden="true" />
                All Services
              </Link>
            </div>
          </motion.div>

          <motion.div className="service-detail__hero-visual" {...fadeUp(0.06)}>
            <div className="service-detail__visual-panel service-detail__visual-panel--back" aria-hidden="true" />
            <div className="service-detail__visual-panel service-detail__visual-panel--mid" aria-hidden="true" />
            <div className="service-detail__visual-frame">
              <img src={heroImage} alt="" className="service-detail__hero-image" />
              <div className="service-detail__visual-badge" aria-hidden="true">
                <ServiceIcon name={service.icon} className="service-detail__visual-badge-icon" />
              </div>
            </div>
            <span className="service-detail__visual-dot service-detail__visual-dot--teal" aria-hidden="true" />
            <span className="service-detail__visual-dot service-detail__visual-dot--copper" aria-hidden="true" />
          </motion.div>
        </div>
      </section>

      <section className="service-detail__body">
        <div className="container-page service-detail__overview">
          <motion.article className="service-detail__card service-detail__card--main" {...fadeUp(0.08)}>
            <h2 className="service-detail__section-title">What this service covers</h2>
            <p className="service-detail__overview-copy">{service.short}</p>
            <div className="service-detail__divider" aria-hidden="true" />
            <div className="service-detail__checklist">
              {offeringColumns.map((column, columnIndex) => (
                <ul key={columnIndex} className="service-detail__checklist-col">
                  {column.map((item) => (
                    <li key={item}>
                      <span className="service-detail__check" aria-hidden="true">
                        <CheckCircle2 />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </motion.article>

          <motion.aside className="service-detail__card service-detail__card--side" {...fadeUp(0.12)}>
            <div className="service-detail__side-icon" aria-hidden="true">
              <MessageSquareText />
            </div>
            <h2 className="service-detail__section-title">Discuss this capability</h2>
            <p className="service-detail__side-copy">
              Tell us about your goals and we will connect you with the right conversation on {service.title}.
            </p>
            <Link to="/contact" state={{ service: service.title }} className="service-detail__btn service-detail__btn--primary service-detail__btn--full">
              Contact Us
              <ArrowRight className="service-detail__btn-icon" aria-hidden="true" />
            </Link>
          </motion.aside>
        </div>
      </section>

      <section className="service-detail__help">
        <div className="container-page">
          <motion.div className="service-detail__help-intro" {...fadeUp(0.04)}>
            <h2 className="service-detail__section-title">How we help</h2>
            <p className="service-detail__help-copy">
              Practical ways VelconTech supports teams adopting {service.title.toLowerCase()}.
            </p>
          </motion.div>

          <div className="service-detail__help-grid">
            {helpCards.map((item, index) => (
              <motion.article key={item.title} className="service-detail__help-card" {...fadeUp(0.06 + index * 0.04)}>
                <div className={`service-detail__help-icon service-detail__help-icon--${index % 3 === 1 ? 'teal' : index % 3 === 2 ? 'copper' : 'emerald'}`} aria-hidden="true">
                  <ServiceIcon name={item.icon} className="service-detail__help-icon-svg" />
                </div>
                <h3 className="service-detail__help-title">{item.title}</h3>
                <p className="service-detail__help-text">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail__related">
        <div className="container-page">
          <h2 className="service-detail__section-title">Related services</h2>
          <div className="service-detail__related-grid">
            {related.map((item) => (
              <Link key={item.slug} to={`/services/${item.slug}`} className="service-detail__related-card">
                <span className="service-detail__related-thumb" aria-hidden="true">
                  <img src={serviceImages[item.slug] || dataImage} alt="" className="service-detail__related-image" loading="lazy" />
                </span>
                <span className="service-detail__related-copy">
                  <span className="service-detail__related-title">{item.title}</span>
                  <span className="service-detail__related-summary">{item.short}</span>
                  <span className="service-detail__related-link">
                    Explore
                    <ArrowRight className="service-detail__related-arrow" aria-hidden="true" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need help selecting the right service?"
        description="Share your objectives with our team and we will help you map the next conversation."
      />
    </>
  );
}
