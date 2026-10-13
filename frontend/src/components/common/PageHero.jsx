import { motion } from 'framer-motion';

export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden border-b border-navy/10 bg-hero-mesh">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(18,59,93,0.04),transparent_45%)]" />
      <div className="container-page relative section-pad !pb-14 !pt-28 sm:!pt-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
          <h1 className="heading-display">{title}</h1>
          {description ? <p className="body-muted mt-5 max-w-2xl text-lg">{description}</p> : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </motion.div>
      </div>
    </section>
  );
}
