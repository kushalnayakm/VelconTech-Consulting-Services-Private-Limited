import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page max-w-3xl">
        <p className="eyebrow mb-3">About</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">About VelconTech</h2>
        <p className="body-muted mt-4 text-lg">
          VelconTech is a consulting, analytics and technology services firm focused on Data, Cloud and Emerging
          Technologies — bringing Business, Technology, Services and Process together to maximize the end-user
          experience in today&apos;s digital world.
        </p>
        <Link to="/about" className="btn-primary mt-7">
          About Us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
