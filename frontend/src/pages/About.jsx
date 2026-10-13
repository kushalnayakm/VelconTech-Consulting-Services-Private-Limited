import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  Check,
  Clock3,
  Eye,
  Handshake,
  Landmark,
  Layers,
  LineChart,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  UsersRound,
} from 'lucide-react'
import SEO from '../components/common/SEO'
import SectionHeading from '../components/common/SectionHeading'
import CtaBand from '../components/common/CtaBand'
import { company } from '../data/company'
import { projects } from '../data/projects'
import { getPortfolioServices } from '../data/services'

const portfolioServices = getPortfolioServices()

const featureCards = [
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: company.values[0].description,
    accent: 'emerald',
  },
  {
    icon: Layers,
    title: 'End-to-End Expertise',
    description:
      'Bringing Business, Technology, Services, and Process together to maximize the end-user experience in the digital world.',
    accent: 'teal',
  },
  {
    icon: Sparkles,
    title: 'Innovation Focused',
    description: company.values[3].description,
    accent: 'copper',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable & Scalable',
    description: company.values[2].description,
    accent: 'navy',
  },
]

const whoWeServe = [
  {
    title: 'Businesses',
    description:
      'Building capabilities that support operational efficiency and business growth.',
    icon: Building2,
    accent: 'emerald',
  },
  {
    title: 'Institutions',
    description: 'Supporting digital transformation and technology adoption.',
    icon: Landmark,
    accent: 'teal',
  },
  {
    title: 'Government Organizations',
    description:
      'Supporting technology-enabled services and process improvement.',
    icon: UsersRound,
    accent: 'copper',
  },
  {
    title: 'Other Entities',
    description: 'Providing technology consulting and customized solutions.',
    icon: Layers,
    accent: 'navy',
  },
]

const whyItems = [
  {
    icon: Settings2,
    title: company.values[1].title,
    description: company.values[1].description,
    accent: 'teal',
  },
  {
    icon: LineChart,
    title: company.values[0].title,
    description: company.values[0].description,
    accent: 'emerald',
  },
  {
    icon: Handshake,
    title: company.values[2].title,
    description: company.values[2].description,
    accent: 'copper',
  },
  {
    icon: Clock3,
    title: company.values[3].title,
    description: company.values[3].description,
    accent: 'navy',
  },
]

const stats = [
  {
    icon: Users,
    value: String(company.customersAndPartners.length),
    label: 'Clients & Partners',
  },
  {
    icon: LineChart,
    value: String(projects.length),
    label: 'Featured Projects',
  },
  {
    icon: Layers,
    value: String(portfolioServices.length),
    label: 'Service Capabilities',
  },
  {
    icon: Building2,
    value: String(company.salesPresence.length),
    label: 'Global Presence Regions',
  },
]

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn about VelconTech Consulting Services Private Limited, our mission, vision, and the organizations we serve."
        path="/about"
      />

      <section className="about-hero" aria-labelledby="about-hero-heading">
        <div className="about-hero__glow about-hero__glow--one" aria-hidden="true" />
        <div className="about-hero__glow about-hero__glow--two" aria-hidden="true" />
        <div className="about-hero__dots" aria-hidden="true" />
        <div className="about-hero__curve" aria-hidden="true" />

        <div className="container-page about-hero__shell">
          <div className="about-hero__grid">
            <div className="about-hero__copy">
              <p className="about-kicker">
                <span>About Us</span>
              </p>
              <h1 id="about-hero-heading" className="about-hero__title">
                Technology with Real-World <em>Impact</em>
              </h1>
              <p className="about-hero__lead">{company.intro}</p>
              <div className="about-hero__actions">
                <a href="#about-mission" className="btn-primary about-hero__cta">
                  Our Journey
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <Link to="/contact" className="btn-secondary about-hero__cta-secondary">
                  Talk to Our Team
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="about-feature-grid" role="list">
              {featureCards.map((card) => {
                const Icon = card.icon
                return (
                  <article
                    key={card.title}
                    className={`about-feature-card about-feature-card--${card.accent}`}
                    role="listitem"
                  >
                    <span className="about-feature-card__icon" aria-hidden="true">
                      <Icon size={18} strokeWidth={2} />
                    </span>
                    <div>
                      <h2>{card.title}</h2>
                      <p>{card.description}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="about-mission"
        className="about-mvv"
        aria-labelledby="about-mvv-heading"
      >
        <div className="container-page about-mvv__shell">
          <h2 id="about-mvv-heading" className="sr-only">
            Mission, vision, and values
          </h2>
          <div className="about-mvv__grid">
            <article className="about-mvv-card about-mvv-card--mission">
              <span className="about-mvv-card__icon" aria-hidden="true">
                <Target size={22} strokeWidth={1.9} />
              </span>
              <h3>Our Mission</h3>
              <p>{company.mission}</p>
            </article>

            <article className="about-mvv-card about-mvv-card--vision">
              <span className="about-mvv-card__icon" aria-hidden="true">
                <Eye size={22} strokeWidth={1.9} />
              </span>
              <h3>Our Vision</h3>
              <p>{company.about[2]}</p>
            </article>

            <article className="about-mvv-card about-mvv-card--values">
              <span className="about-mvv-card__icon" aria-hidden="true">
                <Sparkles size={22} strokeWidth={1.9} />
              </span>
              <h3>Our Values</h3>
              <ul className="about-values-list">
                {company.values.map((value) => (
                  <li key={value.title}>
                    <Check size={14} strokeWidth={2.4} aria-hidden="true" />
                    <span>{value.title}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="about-stats" aria-labelledby="about-stats-heading">
        <div className="container-page">
          <h2 id="about-stats-heading" className="sr-only">
            Company overview
          </h2>
          <div className="about-stats__panel">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="about-stats__item">
                  <span className="about-stats__icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <div>
                    <p className="about-stats__value">{stat.value}</p>
                    <p className="about-stats__label">{stat.label}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="about-serve" aria-labelledby="about-serve-heading">
        <div className="container-page about-serve__shell">
          <div className="about-serve__heading">
            <p className="about-kicker">
              <span>Who We Serve</span>
            </p>
            <h2 id="about-serve-heading" className="about-serve__title">
              Who We Serve
            </h2>
          </div>

          <div className="about-serve__grid">
            {whoWeServe.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className={`about-serve-card about-serve-card--${item.accent}`}
                >
                  <span className="about-serve-card__icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.9} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="about-why" aria-labelledby="about-why-heading">
        <div className="container-page about-why__shell">
          <div className="about-why__grid">
            <div className="about-why__copy">
              <p className="about-kicker">
                <span>Why VelconTech</span>
              </p>
              <h2 id="about-why-heading" className="about-why__title">
                More than a service provider, a <em>technology partner.</em>
              </h2>
              <p className="about-why__lead">{company.about[1]}</p>
              <Link to="/contact" className="btn-primary about-why__cta">
                Talk to Our Team
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="about-why__features">
              {whyItems.map((item) => {
                const Icon = item.icon
                return (
                  <article
                    key={item.title}
                    className={`about-why-item about-why-item--${item.accent}`}
                  >
                    <span className="about-why-item__icon" aria-hidden="true">
                      <Icon size={18} strokeWidth={2} />
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="about-tech" aria-labelledby="about-tech-heading">
        <div className="container-page about-tech__shell">
          <SectionHeading
            eyebrow="Capabilities"
            title="Technologies We Work With"
            description="A practical stack spanning cloud, data, AI, and enterprise application delivery."
          />
          <div className="about-tech__grid">
            {company.technologies.map((tech) => (
              <article key={tech.name} className="about-tech__card">
                <h3 className="about-tech__name">{tech.name}</h3>
                <p className="about-tech__label">Use case</p>
                <p className="about-tech__text">{tech.useCase}</p>
                <p className="about-tech__label">Advantages</p>
                <p className="about-tech__text">{tech.advantages}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to build with VelconTech?"
        description="Share your goals and we will help you shape a clear, practical next step."
      />
    </>
  )
}
