import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const destinations = [
  { name: 'Mahabaleshwar', country: 'Maharashtra, India', img: '/pkg-mahabaleshwar.png', tag: 'Hill Station' },
  { name: 'Hampi', country: 'Karnataka, India', img: '/pkg-hampi.png', tag: 'Heritage' },
  { name: 'Lonavala', country: 'Maharashtra, India', img: '/pkg-lonavala.png', tag: 'Nature' },
  { name: 'Coorg', country: 'Karnataka, India', img: '/pkg-coorg.png', tag: 'Coffee Capital' },
  { name: 'Matheran', country: 'Maharashtra, India', img: '/pkg-matheran.png', tag: 'Eco-Friendly' },
  { name: 'Mysore', country: 'Karnataka, India', img: '/pkg-mysore.png', tag: 'Royal' },
  { name: 'Gokarna', country: 'Karnataka, India', img: '/pkg-gokarna.png', tag: 'Beaches' },
];

const stats = [
  { value: 500, suffix: '+', label: 'Happy Trips' },
  { value: 50, suffix: '+', label: 'Destinations' },
  { value: 10, suffix: 'k+', label: 'Travelers' },
  { value: 8, suffix: '', label: 'Years Experience' },
];

const reasons = [
  { icon: '🛡️', title: 'Safety First', desc: 'Every ride is fully insured. Your safety is our highest priority, always.' },
  { icon: '🧑‍✈️', title: 'Driver Included', desc: 'Professional, verified drivers with every booking — no extra charges, no hassle.' },
  { icon: '💰', title: 'Best Value', desc: 'Transparent pricing with no hidden fees. Premium rides at honest, upfront prices.' },
  { icon: '🚗', title: 'Premium Fleet', desc: 'From Swift to Innova Crysta — well-maintained, AC vehicles for every budget.' },
];

const testimonials = [
  { name: 'Siddhant Nikam', role: 'Entrepreneur, Mumbai', text: 'Swaranjali Travels made our Mahabaleshwar trip absolutely magical. Every detail was perfect — from the comfortable Innova to the professional driver. Highly recommended!', rating: 5 },
  { name: 'Kedar Deshmukh', role: 'Software Engineer, Pune', text: 'Booked a Tempo Traveller for our group trip to Hampi. The driver was knowledgeable, the vehicle was spotless, and the trip was unforgettable!', rating: 5 },
  { name: 'Shantnau Deshmane', role: 'Doctor, Karad', text: 'Reliable, punctual, and always professional. Swaranjali Travels is my go-to for every outstation trip. The Swift Dzire is perfect for my family.', rating: 5 },
];

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          let start = 0;
          const duration = 1800;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  return (
    <div className="home">
      {/* ── Hero ── */}
      <section className="hero" style={{ backgroundImage: 'url(/hero.png)' }}>
        <div className="hero__overlay" />
        <div className="hero__content container">
          <span className="section-badge"><img src="/logo.png" alt="" className="badge-logo" /> Swaranjali Travels</span>
          <h1 className="hero__title">
            Your Journey, Our<br />
            <span className="text-gold">Responsibility</span>
          </h1>
          <p className="hero__tagline-marathi">प्रवास तुमचा जबाबदारी आमची</p>
          <p className="hero__subtitle">
            Premium rides with professional drivers across Maharashtra & Karnataka. Book your ride in minutes.
          </p>
          <div className="hero__actions">
            <Link to="/fleet" className="btn btn-primary btn-lg">
              Explore Our Fleet
            </Link>
            <Link to="/booking" className="btn btn-secondary btn-lg">
              Book a Ride →
            </Link>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <div className="hero__scroll-dot" />
        </div>
      </section>

      {/* ── Destinations ── */}
      <section className="section-padding destinations">
        <div className="container">
          <div className="text-center">
            <span className="section-badge">🌍 Top Picks</span>
            <h2 className="section-title">Popular Destinations</h2>
            <div className="divider" />
            <p className="section-subtitle">
              From the Sahyadris to the Deccan Plateau — discover the most breathtaking places across Maharashtra and Karnataka.
            </p>
          </div>
          <div className="destinations__grid">
            {destinations.map((dest) => (
              <div key={dest.name} className="dest-tile">
                <img src={dest.img} alt={dest.name} className="dest-tile__img" loading="lazy" />
                <div className="dest-tile__overlay" />
                <div className="dest-tile__content">
                  <span className="dest-tile__tag">{dest.tag}</span>
                  <h3 className="dest-tile__name">{dest.name}</h3>
                  <p className="dest-tile__country">{dest.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map(({ value, suffix, label }) => (
              <div key={label} className="stat-item">
                <span className="stat-item__number">
                  <AnimatedCounter target={value} suffix={suffix} />
                </span>
                <span className="stat-item__label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section-padding why-us">
        <div className="container">
          <div className="text-center">
            <span className="section-badge">💎 Why Us</span>
            <h2 className="section-title">Why Choose Swaranjali Travels?</h2>
            <div className="divider" />
            <p className="section-subtitle">
              We go beyond just booking rides. We deliver safe, comfortable journeys you can count on.
            </p>
          </div>
          <div className="why-us__grid">
            {reasons.map(({ icon, title, desc }) => (
              <div key={title} className="why-card">
                <div className="why-card__icon">{icon}</div>
                <h3 className="why-card__title">{title}</h3>
                <p className="why-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-padding testimonials">
        <div className="container">
          <div className="text-center">
            <span className="section-badge">💬 Testimonials</span>
            <h2 className="section-title light">What Our Travelers Say</h2>
            <div className="divider" />
          </div>
          <div className="testimonials__grid">
            {testimonials.map(({ name, role, text, rating }) => (
              <div key={name} className="testi-card">
                <div className="testi-card__stars">
                  {'★'.repeat(rating)}
                </div>
                <p className="testi-card__text">"{text}"</p>
                <div className="testi-card__author">
                  <div className="testi-card__avatar">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <p className="testi-card__name">{name}</p>
                    <p className="testi-card__role">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2 className="cta-banner__title">Ready to Start Your Journey?</h2>
            <p className="cta-banner__sub">Browse our fleet or book a ride right now.</p>
          </div>
          <div className="cta-banner__actions">
            <Link to="/fleet" className="btn btn-primary btn-lg">
              View Fleet
            </Link>
            <Link to="/booking" className="btn btn-secondary btn-lg">
              Book a Ride
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
