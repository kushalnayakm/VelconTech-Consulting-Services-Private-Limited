import { motion, useReducedMotion } from 'framer-motion';
import {
  Building2,
  Code2,
  Compass,
  Eye,
  FileCode2,
  Landmark,
  Network,
  Server,
  Smartphone,
  Terminal,
} from 'lucide-react';
import SEO from '../components/common/SEO';
import CtaBand from '../components/common/CtaBand';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const audience = [
  {
    title: 'Businesses',
    description: 'Building capabilities that support operational efficiency and business growth.',
    icon: Building2,
  },
  {
    title: 'Institutions',
    description: 'Supporting digital transformation and technology adoption.',
    icon: Landmark,
  },
  {
    title: 'Government Organizations',
    description: 'Supporting technology-enabled services and process improvement.',
    icon: Network,
  },
  {
    title: 'Other Entities',
    description: 'Providing technology consulting and customized solutions.',
    icon: Compass,
  },
];

const technologies = [
  {
    name: 'Flutter',
    useCase: 'Cross-platform mobile applications.',
    advantages: 'High performance, rich UI widgets and a single codebase.',
    icon: Smartphone,
  },
  {
    name: 'React Native',
    useCase: 'Cross-platform mobile applications.',
    advantages: 'Large community, JavaScript-based development and flexibility.',
    icon: Code2,
  },
  {
    name: 'Java',
    useCase: 'Native Android applications.',
    advantages: 'Strong control over application functionality and access to Android features.',
    icon: Terminal,
  },
  {
    name: 'HTML / CSS / JavaScript',
    useCase: 'Website and frontend development.',
    advantages: 'Fundamental web technologies with broad browser support.',
    icon: FileCode2,
  },
  {
    name: 'Node.js',
    useCase: 'Web servers and real-time applications.',
    advantages: 'JavaScript outside the browser and a large ecosystem.',
    icon: Server,
  },
  {
    name: 'Python',
    useCase: 'Web development, data science and scripting.',
    advantages: 'Readable syntax, ease of learning and versatility.',
    icon: Code2,
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  const motionProps = reduceMotion
    ? {}
    : {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.4, ease: 'easeOut' },
        variants: fadeUp,
      };

  const stagger = reduceMotion
    ? {}
    : {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, amount: 0.12 },
        variants: {
          hidden: {},
          visible: { transition: { staggerChildren: 0.07 } },
        },
      };

  const item = reduceMotion
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, y: 14 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
        },
      };

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about VelconTech Consulting Services Private Limited — mission, vision, who we serve and technologies we master."
        path="/about"
      />

      <div className="about-shell">
        <section className="about-band about-band--mist">
          <div className="about-wrap">
            <motion.div className="about-intro" {...motionProps}>
              <p className="eyebrow">About Us</p>
              <div className="about-intro__grid">
                <div className="about-intro__main">
                  <div className="about-intro__accent" aria-hidden="true" />
                  <div>
                    <h1 className="about-intro__title">About VelconTech</h1>
                    <p className="about-intro__subtitle">Consulting, Analytics and Technology Services</p>
                    <div className="about-intro__copy">
                      <p>
                        VelconTech is a consulting, analytics and technology services firm focused on Data, Cloud and
                        Emerging Technologies. Our uniqueness lies in bringing Business, Technology, Services and Process
                        together to maximize the end-user experience in today&apos;s digital world.
                      </p>
                      <p>
                        We work with clients on challenging problems in Automation, Service Delivery, Digital Business,
                        AI and NLP, increasing innovation velocity to deliver NextGen Services.
                      </p>
                      <p>
                        VelconTech also provides process consulting services for process definition, implementation,
                        auditing and training.
                      </p>
                    </div>
                  </div>
                </div>
                <aside className="about-intro__aside" aria-hidden="true">
                  <div className="about-intro__panel">
                    <span>Data</span>
                    <span>Cloud</span>
                    <span>AI &amp; NLP</span>
                    <span>Automation</span>
                    <span>Digital Business</span>
                    <span>Process Consulting</span>
                  </div>
                </aside>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="about-band about-band--white">
          <div className="about-wrap">
            <div className="about-mv">
              <motion.article
                className="about-mv__card"
                {...motionProps}
                transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.04 }}
              >
                <div className="about-mv__icon" aria-hidden="true">
                  <Compass className="h-5 w-5" />
                </div>
                <h2 className="about-mv__heading">Our Mission</h2>
                <div className="about-mv__copy">
                  <p>
                    Our mission is to help our clients make distinctive, lasting and substantial improvements in their
                    performance, while building a great firm that attracts, develops, excites and retains exceptional
                    people.
                  </p>
                  <p>
                    We believe we succeed when our clients succeed. Solving the hardest problems requires the best
                    people, and we believe talented people are drawn to meaningful challenges. We build our firm around
                    that belief. These two parts of our mission reinforce one another and make our firm strong and
                    enduring.
                  </p>
                </div>
              </motion.article>

              <motion.article
                className="about-mv__card"
                {...motionProps}
                transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.1 }}
              >
                <div className="about-mv__icon" aria-hidden="true">
                  <Eye className="h-5 w-5" />
                </div>
                <h2 className="about-mv__heading">Our Vision</h2>
                <div className="about-mv__copy">
                  <p>
                    We aim to develop strong partnerships with our clients and support organizations facing today&apos;s
                    economic challenges. We help them strengthen their businesses by evaluating and adopting advanced
                    management approaches and innovative solutions.
                  </p>
                  <p>Our dynamic, results-oriented workforce brings a fresh perspective to every challenge.</p>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        <section className="about-band about-band--mist" aria-labelledby="who-we-serve-heading">
          <div className="about-wrap">
            <motion.div className="about-serve" {...motionProps}>
              <p className="about-serve__eyebrow">Who We Serve</p>
              <h2 id="who-we-serve-heading" className="about-serve__title">
                Who We Serve
              </h2>
              <div className="about-serve__panel">
                {audience.map((itemAudience) => {
                  const Icon = itemAudience.icon;
                  return (
                    <article key={itemAudience.title} className="about-serve__item">
                      <div className="about-serve__icon" aria-hidden="true">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="about-serve__name">{itemAudience.title}</h3>
                      <p className="about-serve__text">{itemAudience.description}</p>
                    </article>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="about-band about-band--white" aria-labelledby="technologies-heading">
          <div className="about-wrap">
            <motion.div className="about-tech__intro" {...motionProps}>
              <p className="eyebrow">Capabilities</p>
              <h2 id="technologies-heading" className="about-tech__title">
                Technologies We Master
              </h2>
              <p className="about-tech__subtitle">
                Building reliable digital solutions with modern technologies and development platforms.
              </p>
            </motion.div>

            <motion.div className="about-tech__grid" {...stagger}>
              {technologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <motion.article key={tech.name} className="about-tech__card" {...item}>
                    <div className="about-tech__badge" aria-hidden="true">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="about-tech__name">{tech.name}</h3>
                    <p className="about-tech__label">Use case</p>
                    <p className="about-tech__text">{tech.useCase}</p>
                    <p className="about-tech__label">Advantages</p>
                    <p className="about-tech__text">{tech.advantages}</p>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>
      </div>

      <CtaBand />
    </>
  );
}
