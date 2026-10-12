import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import CtaBand from '../components/common/CtaBand';
import ProjectCard from '../components/projects/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const categories = useMemo(
    () => ['All', ...new Set(projects.map((project) => project.category))],
    [],
  );

  const filtered = projects.filter((project) => {
    const matchesCategory = category === 'All' || project.category === category;
    const haystack = `${project.title} ${project.summary} ${project.category}`.toLowerCase();
    const matchesQuery = !query.trim() || haystack.includes(query.trim().toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <SEO
        title="Projects"
        description="Browse VelconTech project work including inventory, vendor, payment, monitoring and mobile applications."
        path="/projects"
      />
      <PageHero
        eyebrow="Projects"
        title="Selected project work"
        description="Search and explore projects described in the VelconTech company profile."
      />

      <section className="section-pad">
        <div className="container-page">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <label className="relative block w-full max-w-md">
              <span className="sr-only">Search projects</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40" />
              <input
                className="input-field pl-10"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search projects"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                    category === item
                      ? 'bg-navy text-white'
                      : 'border border-navy/10 bg-white text-navy hover:border-navy/25'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {!filtered.length ? (
            <p className="mt-10 text-center text-navy/60">No projects match your search.</p>
          ) : null}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
