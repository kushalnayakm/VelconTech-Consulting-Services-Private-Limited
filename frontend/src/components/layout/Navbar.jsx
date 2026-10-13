import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '../../data/company';
import logoIcon from '../../assets/images/logo-icon.jpeg';

function linkClassName({ isActive }) {
  return `site-nav-link${isActive ? ' is-active' : ''}`;
}

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
            width={60}
            height={60}
          />
          <span className="site-brand__text">
            <span className="site-brand__name">VelconTech</span>
            <span className="site-brand__legal">Consulting Services Private Limited</span>
            <span className="site-brand__tagline">Where Technology Customizes</span>
          </span>
        </Link>

        <nav className="site-navbar__nav" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={linkClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-navbar__actions">
          <Link to="/contact" className="site-navbar__cta">
            Talk to Our Team
          </Link>
        </div>

        <button
          type="button"
          className="site-navbar__menu-btn"
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
            className="site-navbar__mobile"
            aria-label="Mobile"
          >
            <div className="container-page site-navbar__mobile-inner">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `site-nav-link site-nav-link--mobile${isActive ? ' is-active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/contact" className="site-navbar__cta site-navbar__cta--mobile" onClick={() => setOpen(false)}>
                Talk to Our Team
              </Link>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
