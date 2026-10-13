import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  BriefcaseBusiness,
  Lightbulb,
  MapPin,
  RefreshCcw,
  Rocket,
  Search,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';
import SEO from '../components/common/SEO';
import CtaBand from '../components/common/CtaBand';
import JobCard from '../components/careers/JobCard';
import { jobs } from '../data/jobs';
import careersHeroImage from '../assets/images/carrer.png';

const BENEFITS = [
  { label: 'Innovative Work Culture', icon: Lightbulb },
  { label: 'Learning & Growth', icon: TrendingUp },
  { label: 'Work on Real Projects', icon: Rocket },
  { label: 'Make a Positive Impact', icon: Sparkles },
];

function uniqueValues(items, key) {
  return [...new Set(items.map((item) => item[key]).filter(Boolean))].sort();
}

export default function Careers() {
  const reduceMotion = useReducedMotion();
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('All');
  const [type, setType] = useState('All');
  const [department, setDepartment] = useState('All');

  const locations = useMemo(() => uniqueValues(jobs, 'location'), []);
  const types = useMemo(() => uniqueValues(jobs, 'type'), []);
  const departments = useMemo(() => uniqueValues(jobs, 'department'), []);

  const filteredJobs = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return jobs.filter((job) => {
      const matchesQuery =
        !needle ||
        [job.title, job.department, job.location, job.summary, job.type]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(needle));
      const matchesLocation = location === 'All' || job.location === location;
      const matchesType = type === 'All' || job.type === type;
      const matchesDepartment = department === 'All' || job.department === department;
      return matchesQuery && matchesLocation && matchesType && matchesDepartment;
    });
  }, [query, location, type, department]);

  const resetFilters = () => {
    setQuery('');
    setLocation('All');
    setType('All');
    setDepartment('All');
  };

  return (
    <>
      <SEO
        title="Careers"
        description="Explore open roles at VelconTech Consulting Services Private Limited and apply online."
        path="/careers"
      />

      <section className="careers-hero">
        <div className="careers-hero__bg" aria-hidden="true">
          <div className="careers-hero__glow careers-hero__glow--a" />
          <div className="careers-hero__glow careers-hero__glow--b" />
          <svg className="careers-hero__curves" viewBox="0 0 1200 480" fill="none" preserveAspectRatio="none">
            <path
              d="M-40 300 C 180 220, 340 360, 560 280 S 920 140, 1240 210"
              stroke="rgba(8,127,98,0.14)"
              strokeWidth="1.25"
            />
            <path
              d="M-20 360 C 240 310, 420 400, 680 330 S 980 240, 1240 300"
              stroke="rgba(184,115,75,0.14)"
              strokeWidth="1.1"
            />
            <circle cx="210" cy="110" r="3.5" fill="rgba(8,127,98,0.28)" />
            <circle cx="980" cy="96" r="2.5" fill="rgba(184,115,75,0.32)" />
          </svg>
        </div>

        <div className="container-page careers-hero__inner">
          <motion.div
            className="careers-hero__copy"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="careers-hero__eyebrow">
              <span className="careers-hero__eyebrow-line" aria-hidden="true" />
              Careers
            </p>
            <h1 className="careers-hero__title">
              Join a team solving{' '}
              <span className="careers-hero__accent">hard technology</span> problems
            </h1>
            <p className="careers-hero__description">
              Be part of a team that builds innovative solutions, works on real-world challenges, and creates
              impact across industries.
            </p>

            <ul className="careers-hero__benefits">
              {BENEFITS.map(({ label, icon: Icon }) => (
                <li key={label} className="careers-hero__benefit">
                  <span className="careers-hero__benefit-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="careers-hero__visual"
            initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="careers-hero__orb" aria-hidden="true" />
            <motion.div
              className="careers-hero__media"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 5.8, repeat: Infinity, ease: 'easeInOut' }
              }
            >
              <img
                src={careersHeroImage}
                alt="VelconTech team collaborating around a laptop"
                className="careers-hero__image"
                width={640}
                height={480}
                decoding="async"
              />

              {/* Live floating cards sit over the photo composition from carrer.png */}
              <motion.div
                className="careers-hero__float careers-hero__float--a"
                aria-hidden="true"
                animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
                transition={
                  reduceMotion ? undefined : { duration: 4.4, repeat: Infinity, ease: 'easeInOut' }
                }
              >
                <span className="careers-hero__float-icon careers-hero__float-icon--copper">
                  <Lightbulb />
                </span>
                <span>Work on Real Problems</span>
              </motion.div>
              <motion.div
                className="careers-hero__float careers-hero__float--b"
                aria-hidden="true"
                animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }
                }
              >
                <span className="careers-hero__float-icon careers-hero__float-icon--navy">
                  <TrendingUp />
                </span>
                <span>Grow Your Career</span>
              </motion.div>
              <motion.div
                className="careers-hero__float careers-hero__float--c"
                aria-hidden="true"
                animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 5.1, repeat: Infinity, ease: 'easeInOut', delay: 0.35 }
                }
              >
                <span className="careers-hero__float-icon careers-hero__float-icon--emerald">
                  <Users />
                </span>
                <span>Be Part of Something Bigger</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="careers-body">
        <div className="container-page">
          <form
            className="careers-toolbar"
            onSubmit={(event) => event.preventDefault()}
            role="search"
            aria-label="Search open roles"
          >
            <label className="careers-toolbar__search">
              <span className="sr-only">Search job title, keyword or location</span>
              <Search className="careers-toolbar__search-icon" aria-hidden="true" />
              <input
                className="careers-toolbar__search-input"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search job title, keyword or location..."
              />
            </label>

            <button type="submit" className="careers-toolbar__search-btn">
              <Search className="h-4 w-4" aria-hidden="true" />
              Search
            </button>

            <label className="careers-toolbar__select">
              <span className="sr-only">Location</span>
              <MapPin className="careers-toolbar__select-icon" aria-hidden="true" />
              <select value={location} onChange={(event) => setLocation(event.target.value)}>
                <option value="All">All locations</option>
                {locations.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className="careers-toolbar__select">
              <span className="sr-only">Job type</span>
              <BriefcaseBusiness className="careers-toolbar__select-icon" aria-hidden="true" />
              <select value={type} onChange={(event) => setType(event.target.value)}>
                <option value="All">All job types</option>
                {types.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className="careers-toolbar__select">
              <span className="sr-only">Department</span>
              <Users className="careers-toolbar__select-icon" aria-hidden="true" />
              <select value={department} onChange={(event) => setDepartment(event.target.value)}>
                <option value="All">All departments</option>
                {departments.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <button type="button" className="careers-toolbar__reset" onClick={resetFilters}>
              <RefreshCcw className="h-4 w-4" aria-hidden="true" />
              Reset
            </button>
          </form>

          <div className="careers-openings__head">
            <div>
              <h2 className="careers-openings__title">Current Openings</h2>
              <p className="careers-openings__subtitle">
                Explore opportunities to build your career with VelconTech.
              </p>
            </div>
            <p className="careers-openings__count">
              {filteredJobs.length === 1 ? '1 opening' : `${filteredJobs.length} openings`}
            </p>
          </div>

          {filteredJobs.length ? (
            <div className="careers-openings__grid">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.slug}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.4,
                    delay: reduceMotion ? 0 : Math.min(index * 0.06, 0.3),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <JobCard job={job} />
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="careers-openings__empty">No openings match your search or filters.</p>
          )}
        </div>
      </section>

      <CtaBand
        title="Do not see the right role?"
        description="You can still reach the team through our contact form for general inquiries."
        primaryTo="/contact"
        primaryLabel="Contact Us"
        secondaryTo="/about"
        secondaryLabel="About VelconTech"
      />
    </>
  );
}
