import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { company, navLinks } from '../../data/company';
import { services } from '../../data/services';
import logoIcon from '../../assets/images/logo-icon.jpeg';

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-white">
      <div className="container-page section-pad !pb-8 !pt-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoIcon} alt="" className="h-12 w-12 rounded-full bg-white object-contain p-1" />
              <div>
                <p className="font-display text-xl font-bold">{company.shortName}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-white/60">{company.tagline}</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Consulting, analytics and technology services focused on Data, Cloud and Emerging Technologies.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold">Explore</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link className="transition hover:text-white" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold">Services</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link className="transition hover:text-white" to={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link className="font-medium text-copper-200 transition hover:text-white" to="/services">
                  View all services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold">Contact</h2>
            <ul className="mt-4 space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper-200" aria-hidden="true" />
                <span>
                  {company.registeredOffice.lines.slice(1).map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-copper-200" aria-hidden="true" />
                <a className="hover:text-white" href={`tel:${company.phone}`}>
                  {company.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-copper-200" aria-hidden="true" />
                <a className="hover:text-white" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link className="hover:text-white" to="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="hover:text-white" to="/terms">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
