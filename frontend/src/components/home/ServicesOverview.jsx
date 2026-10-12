import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import ServiceCard from '../services/ServiceCard';
import { services } from '../../data/services';

export default function ServicesOverview() {
  const featuredServices = services.slice(0, 6);

  return (
    <section className="section-pad bg-white/60">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Services"
            title="Capabilities across consulting and delivery"
            description="Explore the service areas described in our company profile — from cloud and enterprise software to semiconductor, PCB and component engineering."
          />
        </motion.div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/services" className="btn-secondary">
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
}
