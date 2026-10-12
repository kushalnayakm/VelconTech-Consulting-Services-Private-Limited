import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import CtaBand from '../components/common/CtaBand';
import { services } from '../data/services';
import { company } from '../data/company';

const solutionThemes = [
  {
    title: 'Digital Business & Automation',
    description:
      'Support automation, service delivery and digital business initiatives with consulting and application capabilities.',
    links: ['enterprise-software-solutions', 'it-consulting-and-outsourcing', 'development-tools-and-platforms'],
  },
  {
    title: 'Data, Cloud & Emerging Tech',
    description:
      'Strengthen decision-making and platforms around data management, analytics, cloud services and AI-related tooling.',
    links: ['cloud-computing', 'data-management-and-analytics', 'cybersecurity'],
  },
  {
    title: 'Engineering & Product Enablement',
    description:
      'Extend delivery with semiconductor, PCB and component engineering services alongside software and collaboration tools.',
    links: ['semiconductor-services', 'pcb-services', 'component-engineering'],
  },
];

export default function Solutions() {
  return (
    <>
      <SEO
        title="Solutions"
        description="VelconTech solution themes spanning digital business, data and cloud, and engineering enablement."
        path="/solutions"
      />
      <PageHero
        eyebrow="Solutions"
        title="Practical technology approaches for complex challenges"
        description="We bring Business, Technology, Services and Process together to maximize end-user experience in the digital world."
      />

      <section className="section-pad">
        <div className="container-page space-y-6">
          <p className="body-muted max-w-3xl text-lg">{company.about[1]}</p>
          <div className="grid gap-6 lg:grid-cols-3">
            {solutionThemes.map((theme) => (
              <article key={theme.title} className="card-surface flex h-full flex-col p-7">
                <h2 className="font-display text-2xl font-semibold text-navy">{theme.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/65">{theme.description}</p>
                <ul className="mt-6 space-y-2">
                  {theme.links.map((slug) => {
                    const service = services.find((item) => item.slug === slug);
                    if (!service) return null;
                    return (
                      <li key={slug}>
                        <Link className="text-sm font-semibold text-emerald hover:underline" to={`/services/${slug}`}>
                          {service.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </article>
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
