import { Link, Navigate, useParams } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/common/SEO';
import ApplicationForm from '../components/careers/ApplicationForm';
import { getJobBySlug } from '../data/jobs';
import applyHeroIllustration from '../assets/images/se-role.png';

export default function JobApply() {
  const { slug } = useParams();
  const job = getJobBySlug(slug);
  const reduceMotion = useReducedMotion();

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  return (
    <>
      <SEO
        title={`Apply — ${job.title}`}
        description={`Apply for the ${job.title} role at VelconTech.`}
        path={`/careers/${job.slug}/apply`}
      />

      <section className="apply-hero">
        <div className="apply-hero__bg" aria-hidden="true">
          <div className="apply-hero__glow apply-hero__glow--a" />
          <div className="apply-hero__glow apply-hero__glow--b" />
          <svg className="apply-hero__curves" viewBox="0 0 1200 420" fill="none" preserveAspectRatio="none">
            <path
              d="M-40 280 C 180 210, 340 340, 560 260 S 900 130, 1240 200"
              stroke="rgba(8,127,98,0.14)"
              strokeWidth="1.25"
            />
            <path
              d="M-20 340 C 240 300, 420 390, 680 320 S 980 230, 1240 290"
              stroke="rgba(184,115,75,0.14)"
              strokeWidth="1.1"
            />
            <circle cx="190" cy="108" r="3.5" fill="rgba(8,127,98,0.28)" />
            <circle cx="1020" cy="92" r="2.5" fill="rgba(184,115,75,0.32)" />
            <circle cx="1120" cy="210" r="4" fill="rgba(8,127,98,0.16)" />
          </svg>
        </div>

        <div className="container-page apply-hero__inner">
          <motion.div
            className="apply-hero__copy"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="apply-hero__eyebrow">
              <span className="apply-hero__eyebrow-line" aria-hidden="true" />
              Careers
            </p>
            <h1 className="apply-hero__title">
              Apply for <span className="apply-hero__accent">{job.title}</span>
            </h1>
            <p className="apply-hero__description">
              Complete the form below. Your application details and resume will be emailed to our recruitment
              address.
            </p>
            <Link to={`/careers/${job.slug}`} className="apply-hero__back">
              <ArrowLeft className="apply-hero__back-icon" aria-hidden="true" />
              Back to role
            </Link>
          </motion.div>

          <motion.div
            className="apply-hero__visual"
            initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="apply-hero__orb" aria-hidden="true" />
            <img
              src={applyHeroIllustration}
              alt=""
              className="apply-hero__image"
              width={520}
              height={420}
              decoding="async"
            />
          </motion.div>
        </div>
      </section>

      <section className="apply-body">
        <div className="container-page apply-body__inner">
          <ApplicationForm job={job} />
        </div>
      </section>
    </>
  );
}
