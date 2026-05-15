import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/packages', label: 'Tour Packages' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
    { to: '/booking', label: 'Book a Ride' },
  ];

  const services = [
    'Airport Transfers',
    'City Tours',
    'Corporate Rides',
    'Adventure Packages',
    'Honeymoon Packages',
    'Group Tours',
  ];

  const contacts = [
    { icon: '📍', text: '42 Travel Lane, New Delhi, India 110001' },
    { icon: '📞', text: '+91 98765 43210' },
    { icon: '✉️', text: 'hello@wanderlust.travel' },
    { icon: '🕐', text: 'Mon–Sat: 9:00 AM – 8:00 PM' },
  ];

  return (
    <footer className="footer">
      <div className="footer__main container">
        <div className="footer__col footer__col--brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-icon">✈</span>
            <span>Wanderlust<span className="text-gold"> Travel</span></span>
          </Link>
          <p className="footer__tagline">
            Your trusted partner for extraordinary journeys. We craft unforgettable travel experiences across the globe.
          </p>
          <div className="footer__socials">
            {['facebook', 'instagram', 'twitter', 'youtube'].map((s) => (
              <a key={s} href="#" className="footer__social" aria-label={s}>
                {s === 'facebook' && '𝒇'}
                {s === 'instagram' && '📷'}
                {s === 'twitter' && '𝕏'}
                {s === 'youtube' && '▶'}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__list">
            {quickLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="footer__link">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Our Services</h4>
          <ul className="footer__list">
            {services.map((s) => (
              <li key={s}>
                <span className="footer__link">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Get in Touch</h4>
          <ul className="footer__contact-list">
            {contacts.map(({ icon, text }) => (
              <li key={text} className="footer__contact-item">
                <span className="footer__contact-icon">{icon}</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {currentYear} Wanderlust Travel & Rides. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">Privacy Policy</a>
            <a href="#" className="footer__bottom-link">Terms of Service</a>
            <a href="#" className="footer__bottom-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
