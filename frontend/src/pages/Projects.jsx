import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import CtaBand from '../components/common/CtaBand';
import ProjectCard from '../components/projects/ProjectCard';
import { projects } from '../data/projects';

const PREFERRED_CATEGORIES = [
  'All',
  'Operations',
  'Finance & Operations',
  'Data Applications',
  'Project Monitoring',
  'Document Management',
  'Digital Transactions',
  'Mobile',
  'Public Sector',
];

export default function Projects() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const reduceMotion = useReducedMotion();

  const categories = useMemo(() => {
    const available = new Set(projects.map((project) => project.category));
    const preferred = PREFERRED_CATEGORIES.filter(
      (item) => item === 'All' || available.has(item),
    );
    const extras = [...available]
      .filter((item) => !PREFERRED_CATEGORIES.includes(item))
      .sort((a, b) => a.localeCompare(b));
    return [...preferred, ...extras];
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = category === 'All' || project.category === category;
      const haystack = `${project.title} ${project.summary} ${project.category}`.toLowerCase();
      const matchesQuery = !needle || haystack.includes(needle);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <>
      <SEO
        title="Projects"
        description="Browse VelconTech project work including inventory, vendor, payment, monitoring and mobile applications."
        path="/projects"
      />

      <section className="projects-hero">
        <div className="projects-hero__bg" aria-hidden="true">
          <div className="projects-hero__glow" />
          <svg className="projects-hero__curves" viewBox="0 0 1200 240" fill="none" preserveAspectRatio="none">
            <path
              d="M520 40 C 680 10, 820 90, 980 60 S 1160 20, 1280 50"
              stroke="rgba(8,127,98,0.16)"
              strokeWidth="1.25"
            />
            <path
              d="M560 110 C 720 70, 860 150, 1020 120 S 1180 80, 1280 110"
              stroke="rgba(8,127,98,0.12)"
              strokeWidth="1.1"
            />
            <path
              d="M600 180 C 760 150, 900 210, 1060 180 S 1200 150, 1280 175"
              stroke="rgba(184,115,75,0.12)"
              strokeWidth="1"
            />
            <circle cx="1080" cy="48" r="3" fill="rgba(8,127,98,0.24)" />
            <circle cx="1180" cy="120" r="2.5" fill="rgba(184,115,75,0.28)" />
          </svg>
        </div>

        <div className="container-page projects-hero__inner">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="projects-hero__eyebrow">
              Projects
              <span className="projects-hero__eyebrow-line" aria-hidden="true" />
            </p>
            <h1 className="projects-hero__title">Selected project work</h1>
            <p className="projects-hero__description">
              Explore practical technology solutions built for real-world challenges.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="projects-body">
        <div className="container-page">
          <div className="projects-toolbar">
            <label className="projects-toolbar__search">
              <span className="sr-only">Search projects</span>
              <Search className="projects-toolbar__search-icon" aria-hidden="true" />
              <input
                className="projects-toolbar__search-input"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search projects..."
              />
            </label>

            <div className="projects-toolbar__filters" role="group" aria-label="Project categories">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`projects-toolbar__filter${category === item ? ' is-active' : ''}`}
                  aria-pressed={category === item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {filtered.length ? (
            <div className="projects-grid">
              {filtered.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.4,
                    delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.28),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="projects-empty">No projects match your search.</p>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
