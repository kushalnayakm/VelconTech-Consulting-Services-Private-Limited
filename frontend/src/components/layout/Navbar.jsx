import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '../../data/company';
import logoIcon from '../../assets/images/logo-icon.jpeg';

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
    <header className={`site-navbar ${scrolled || open ? 'site-navbar--solid' : ''}`}>
      <div className="container-page site-navbar__inner">
        <Link to="/" className="site-brand" onClick={() => setOpen(false)} aria-label="VelconTech home">
          <img
            src={logoIcon}
            alt=""
            className="site-brand__logo"
            width={80}
            height={80}
          />
          <span className="site-brand__text">
            <span className="site-brand__name">VelconTech</span>
            <span className="site-brand__legal">Consulting Services Private Limited</span>
            <span className="site-brand__tagline">Where Technology Customizes</span>
          </span>
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
          className="inline-flex rounded-xl border border-navy/10 bg-white p-2.5 text-navy lg:hidden"
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
                    `rounded-xl px-4 py-3 text-base font-medium transition hover:bg-navy/5 ${
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
