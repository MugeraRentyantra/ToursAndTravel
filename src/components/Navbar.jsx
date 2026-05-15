import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/packages', label: 'Packages' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
    { to: '/driver', label: 'Driver' },
  ];

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} ref={menuRef}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <span className="navbar__logo-icon">✈</span>
          <span className="navbar__logo-text">
            Wanderlust<span className="navbar__logo-accent"> Travel</span>
          </span>
        </Link>

        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' navbar__link--active' : ''}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/booking"
              className="btn btn-primary btn-sm navbar__cta"
              onClick={() => setMenuOpen(false)}
            >
              Book a Ride
            </Link>
          </li>
        </ul>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__overlay" onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  );
}
