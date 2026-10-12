import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import ProjectCard from '../projects/ProjectCard';
import { projects } from '../../data/projects';

export default function FeaturedProjects() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Featured project work"
          description="Selected initiatives from our company profile spanning operations, data applications, payments and monitoring systems."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-8">
          <Link to="/projects" className="btn-secondary">
            Browse projects
          </Link>
        </div>
      </div>
    </section>
  );
}
