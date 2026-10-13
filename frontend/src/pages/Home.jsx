import SEO from '../components/common/SEO';
import CtaBand from '../components/common/CtaBand';
import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import TrustedPartners from '../components/home/TrustedPartners';
import FeaturedProjects from '../components/home/FeaturedProjects';
import LatestArticles from '../components/home/LatestArticles';
import { trustedClients } from '../data/company';

export default function Home() {
  const loopClients = [...trustedClients, ...trustedClients];

  return (
    <>
      <SEO
        title="Home"
        description="VelconTech Consulting Services Private Limited — technology consulting across software, cloud, data and emerging technologies."
        path="/"
      />
      <Hero />
      <ServicesOverview />
      <TrustedPartners />
      <FeaturedProjects />

      <section className="clients-section" aria-labelledby="trusted-clients-heading">
        <div className="container-page">
          <div className="clients-section__intro">
            <div className="clients-section__accent" aria-hidden="true" />
            <div>
              <h2 id="trusted-clients-heading" className="clients-section__title">
                Our Trusted Clients
              </h2>
              <p className="clients-section__subtitle">Trusted Relationships, Meaningful Solutions</p>
            </div>
          </div>
        </div>

        <div className="clients-marquee" aria-label="Client logos scrolling continuously">
          <div className="clients-marquee__track">
            {loopClients.map((client, index) => (
              <div
                className="clients-marquee__item"
                key={`${client.id}-${index}`}
                aria-hidden={index >= trustedClients.length ? true : undefined}
              >
                <img src={client.logo} alt={client.alt} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <LatestArticles />
      <CtaBand />
    </>
  );
}
