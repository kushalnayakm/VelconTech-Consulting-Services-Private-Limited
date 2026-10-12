import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { company, navLinks } from '../../data/company';
import logoFull from '../../assets/images/logo-full.jpeg';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled || open ? 'border-b border-navy/10 bg-white/90 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex items-center justify-between gap-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logoFull}
            alt={`${company.shortName} logo`}
            className="h-12 w-auto max-w-[220px] object-contain sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-navy/5 text-emerald' : 'text-navy/75 hover:bg-navy/5 hover:text-navy'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/contact" className="btn-primary">
            Talk to Our Team
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex rounded-xl border border-navy/10 bg-white/80 p-2.5 text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-navy/10 bg-white lg:hidden"
            aria-label="Mobile"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-medium ${
                      isActive ? 'bg-emerald/10 text-emerald' : 'text-navy'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/contact" className="btn-primary mt-2" onClick={() => setOpen(false)}>
                Talk to Our Team
              </Link>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
