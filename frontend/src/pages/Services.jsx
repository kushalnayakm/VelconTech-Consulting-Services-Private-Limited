import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import CtaBand from '../components/common/CtaBand';
import ServiceCard from '../components/services/ServiceCard';
import { services } from '../data/services';

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Explore VelconTech services across cloud, enterprise software, cybersecurity, data, semiconductor, PCB and IT consulting."
        path="/services"
      />
      <PageHero
        eyebrow="Services"
        title="Technology services for modern organizations"
        description="Browse our service catalog drawn from the VelconTech company profile — spanning software, cloud, data, security and engineering support."
      />

      <section className="section-pad">
        <div className="container-page grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <CtaBand
        title="Need help selecting the right service?"
        description="Share your objectives with our team and we will help you map the next conversation."
      />
    </>
  );
}
