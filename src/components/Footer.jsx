import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/packages', label: 'Tour Packages' },
    { to: '/fleet', label: 'Our Fleet' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
    { to: '/booking', label: 'Book a Ride' },
  ];

  const services = [
    'Airport Transfers',
    'Outstation Rides',
    'Corporate Rides',
    'Wedding Transport',
    'Pilgrimage Tours',
    'Group Tours',
  ];

  const contacts = [
    { icon: '📍', text: 'Proton Office, Saidpur, Karad' },
    { icon: '📞', text: '+91 98765 43210' },
    { icon: '✉️', text: 'proton@gmail.com' },
    { icon: '🕐', text: 'Mon–Sat: 10:00 AM – 6:00 PM' },
  ];

  return (
    <footer className="footer">
      <div className="footer__main container">
        <div className="footer__col footer__col--brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-icon">🚗</span>
            <span>Swaranjali<span className="text-gold"> Travels</span></span>
          </Link>
          <p className="footer__tagline">
            प्रवास तुमचा जबाबदारी आमची
          </p>
          <p className="footer__tagline-sub">
            Your trusted partner for safe, comfortable travel across Maharashtra & Karnataka.
          </p>
          <div className="footer__socials">
            <a href="https://facebook.com/swaranjalitravels" className="footer__social" aria-label="facebook" target="_blank" rel="noopener noreferrer">
              𝒇
            </a>
            <a href="https://instagram.com/swaranjalitravels" className="footer__social" aria-label="instagram" target="_blank" rel="noopener noreferrer">
              📷
            </a>
            <a href="https://twitter.com/swaranjalitravels" className="footer__social" aria-label="twitter" target="_blank" rel="noopener noreferrer">
              𝕏
            </a>
            <a href="https://youtube.com/@swaranjalitravels" className="footer__social" aria-label="youtube" target="_blank" rel="noopener noreferrer">
              ▶
            </a>
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
          <p>© {currentYear} Swaranjali Travels. All rights reserved.</p>
          <div className="footer__bottom-links">
            <Link to="/booking" className="footer__bottom-link">Booking Policy</Link>
            <a href="#" className="footer__bottom-link">Privacy Policy</a>
            <a href="#" className="footer__bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
