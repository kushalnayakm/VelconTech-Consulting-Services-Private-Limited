import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { company } from '../../data/company';

const whyChoose = [
  'Focus on Data, Cloud and Emerging Technologies',
  'Bring Business, Technology, Services and Process together',
  'Process consulting for definition, implementation, audit and training',
  'Partnership-led engagement with a dynamic, result-oriented team',
];

export default function AboutPreview() {
  return (
    <section className="section-pad bg-white/70">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="About VelconTech"
            title="Consulting, analytics and technology services"
            description={company.about[0]}
          />
          <p className="body-muted mt-4">{company.about[1]}</p>
          <Link to="/about" className="btn-primary mt-8">
            About Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="card-surface p-8">
          <h3 className="font-display text-2xl font-semibold text-navy">Why Choose Us</h3>
          <ul className="mt-6 space-y-4">
            {whyChoose.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-navy/75">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
