import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CareersPreview() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page max-w-3xl">
        <p className="eyebrow mb-3">Careers</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">Build with VelconTech</h2>
        <p className="body-muted mt-4 text-lg">Explore opportunities to grow your career with our team.</p>
        <Link to="/careers" className="btn-primary mt-7">
          Explore Careers
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
