import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CtaBand({
  title = 'Ready to move your technology forward?',
  description = 'Talk with VelconTech about software, cloud, data, cybersecurity and emerging technology initiatives.',
  primaryTo = '/contact',
  primaryLabel = 'Contact Us',
  secondaryTo = '/services',
  secondaryLabel = 'Explore Services',
}) {
  return (
    <section className="section-pad">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[1.75rem] bg-navy px-7 py-9 text-white shadow-soft sm:px-10 sm:py-10"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-emerald/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 left-10 h-56 w-56 rounded-full bg-copper/25 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-3 text-base leading-relaxed text-white/75">{description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to={primaryTo} className="btn-primary">
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={secondaryTo}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
