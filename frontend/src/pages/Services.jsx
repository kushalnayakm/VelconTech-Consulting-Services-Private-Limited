import { motion, useReducedMotion } from 'framer-motion';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import CtaBand from '../components/common/CtaBand';
import ServiceCard from '../components/services/ServiceCard';
import { getPortfolioServices, services } from '../data/services';

export default function Services() {
  const portfolio = getPortfolioServices();
  const additional = services.filter((service) => !service.portfolio);
  const reduceMotion = useReducedMotion();

  const gridMotion = reduceMotion
    ? {}
    : {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, amount: 0.08 },
        variants: {
          hidden: {},
          visible: { transition: { staggerChildren: 0.06 } },
        },
      };

  const cardMotion = reduceMotion
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, y: 16 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
        },
      };

  return (
    <>
      <SEO
        title="Services"
        description="Explore VelconTech technology services across AI, data, cloud, networking, enterprise applications, cybersecurity, semiconductor, PCB and IT consulting."
        path="/services"
      />
      <PageHero
        eyebrow="Our Services"
        title="Our Technology Services"
        description="Engineering reliable solutions across technology and industry."
      />

      <section className="services-showcase services-showcase--page" aria-labelledby="services-portfolio-heading">
        <div className="container-page services-showcase__container">
          <div className="services-showcase__intro services-showcase__intro--page">
            <h2 id="services-portfolio-heading" className="sr-only">
              Complete service portfolio
            </h2>
          </div>

          <motion.div className="services-showcase__grid services-showcase__grid--page" {...gridMotion}>
            {portfolio.map((service) => (
              <motion.div key={service.slug} {...cardMotion}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>

          {additional.length > 0 ? (
            <div className="services-showcase__additional">
              <h2 className="services-showcase__additional-title">Additional Capabilities</h2>
              <p className="services-showcase__additional-copy">
                Supporting offerings that complement our core technology services portfolio.
              </p>
              <motion.div className="services-showcase__grid services-showcase__grid--page" {...gridMotion}>
                {additional.map((service) => (
                  <motion.div key={service.slug} {...cardMotion}>
                    <ServiceCard service={service} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ) : null}
        </div>
      </section>

      <CtaBand
        title="Need help selecting the right service?"
        description="Share your objectives with our team and we will help you map the next conversation."
      />
    </>
  );
}
