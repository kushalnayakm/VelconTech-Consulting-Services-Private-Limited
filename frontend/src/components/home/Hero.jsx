import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { company } from '../../data/company';
import logoIcon from '../../assets/images/logo-icon.jpeg';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-mesh">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(246,248,247,0.2),rgba(246,248,247,0.92))]" />
      <div className="container-page relative grid items-center gap-12 pb-16 pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24 lg:pt-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="eyebrow mb-5">{company.tagline}</p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Technology That Moves Your Business Forward
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/70">
            VelconTech helps organizations advance with software, cloud, data and emerging technologies — combining
            consulting, analytics and delivery to strengthen performance in a digital world.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/services" className="btn-primary">
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Talk to Our Team
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-emerald/15 via-transparent to-copper/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-navy/10 bg-white/80 p-8 shadow-soft backdrop-blur">
            <img
              src={logoIcon}
              alt="VelconTech interlocking circuit-ring logo"
              className="mx-auto h-56 w-56 object-contain sm:h-64 sm:w-64"
            />
            <div className="mt-6 rounded-2xl bg-mist p-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-navy">
                <Sparkles className="h-4 w-4 text-emerald" />
                Data · Cloud · Emerging Technologies
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">
                From enterprise software and cybersecurity to semiconductor and PCB services, we help teams evaluate
                and adopt practical technology approaches.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
