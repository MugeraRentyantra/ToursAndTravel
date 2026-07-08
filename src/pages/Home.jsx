import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import QuickBookingWidget from '../components/QuickBookingWidget';
import FAQ from '../components/FAQ';
import { homeDestinations } from '../data/destinations';
import { faqs } from '../data/faq';
import { contactInfo, getWhatsAppLink } from '../data/contact';
import { galleryItems } from '../data/gallery';
import '../styles/Home.css';
import '../styles/About.css';
import '../styles/Contact.css';
import '../styles/Gallery.css';

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

const milestones = [
  { year: '2018', title: 'Company Founded', desc: 'Swaranjali Travels started with 2 cars and a vision to provide reliable, comfortable rides from Karad.' },
  { year: '2020', title: 'Fleet Expansion', desc: 'Grew to 8+ vehicles including Innova Crysta, Tempo Traveller, and multiple sedan options.' },
  { year: '2022', title: 'Tour Packages Launched', desc: 'Introduced curated tour packages to popular destinations across Maharashtra and Karnataka.' },
  { year: '2025', title: '500+ Happy Trips', desc: 'Crossed the milestone of 500+ successful trips with 10,000+ satisfied travelers.' },
];

const contactInitialForm = {
  name: '', email: '', phone: '', subject: '', message: '',
};

function validateContact(form) {
  const errs = {};
  if (!form.name.trim()) errs.name = 'Full name is required.';
  if (!form.email.trim()) errs.email = 'Email address is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address.';
  if (!form.phone.trim()) errs.phone = 'Phone number is required.';
  else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) errs.phone = 'Enter a valid 10-digit phone number.';
  if (!form.subject.trim()) errs.subject = 'Subject is required.';
  if (!form.message.trim()) errs.message = 'Message is required.';
  else if (form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters.';
  return errs;
}

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

export default function Home({ addToast }) {
  const [contactForm, setContactForm] = useState(contactInitialForm);
  const [contactErrors, setContactErrors] = useState({});
  const [contactSubmitting, setContactSubmitting] = useState(false);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((p) => ({ ...p, [name]: value }));
    if (contactErrors[name]) setContactErrors((p) => ({ ...p, [name]: '' }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const errs = validateContact(contactForm);
    if (Object.keys(errs).length) { setContactErrors(errs); return; }
    setContactSubmitting(true);

    const waMessage = `*Swaranjali Travels — New Contact Enquiry*
---------------------------------------
*Name:* ${contactForm.name}
*Email:* ${contactForm.email}
*Phone:* ${contactForm.phone}
*Subject:* ${contactForm.subject}

*Message:*
${contactForm.message}`;

    const waLink = getWhatsAppLink(waMessage);

    setTimeout(() => {
      setContactSubmitting(false);
      setContactForm(contactInitialForm);
      setContactErrors({});
      addToast('Redirecting to WhatsApp to send message...', 'success');
      window.open(waLink, '_blank');
    }, 400);
  };

  return (
    <div className="home">
      {/* ── Hero ── */}
      <section className="hero" style={{ backgroundImage: 'url(/hero.png)' }}>
        <div className="hero__overlay" />
        <div className="hero__inner container">
          <div className="hero__content">
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
            </div>
          </div>
          <div className="hero__widget">
            <QuickBookingWidget addToast={addToast} />
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
            {homeDestinations.map((dest) => (
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

      {/* ── Festival & Seasonal Offers ── */}
      <section className="section-padding seasonal-offers" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-badge">🎉 Special Discounts</span>
            <h2 className="section-title">Festival & Seasonal Offers</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Celebrate the joy of traveling during festivals with Swaranjali Travels. Enjoy special discount rates on group tours and outstation rides.
            </p>
          </div>

          <div className="offers-grid">
            <div className="offer-card offer-card--ganpati">
              <div className="offer-card__badge">🌺 Ganpati Special</div>
              <div className="offer-card__content">
                <h3 className="offer-card__title">Ganesh Utsav Darshan</h3>
                <p className="offer-card__desc">Book your ride back home to Karad or plan an Ashtavinayak tour. Flat 10% off on all booking advances.</p>
                <div className="offer-card__footer">
                  <span className="offer-card__code">Use Code: <strong>GANPATI10</strong></span>
                  <Link to="/booking" state={{ notes: 'Ganpati Special Offer (10% Off)' }} className="btn btn-primary btn-sm">Book Now</Link>
                </div>
              </div>
            </div>

            <div className="offer-card offer-card--diwali">
              <div className="offer-card__badge">🪔 Diwali Festival</div>
              <div className="offer-card__content">
                <h3 className="offer-card__title">Diwali Homecoming</h3>
                <p className="offer-card__desc">Pre-book family trips to Pune or Mumbai during the festival of lights. Save up to ₹1,500 on round trips.</p>
                <div className="offer-card__footer">
                  <span className="offer-card__code">Use Code: <strong>DIWALI15</strong></span>
                  <Link to="/booking" state={{ notes: 'Diwali Homecoming Offer' }} className="btn btn-primary btn-sm">Book Now</Link>
                </div>
              </div>
            </div>

            <div className="offer-card offer-card--summer">
              <div className="offer-card__badge">☀️ Summer Special</div>
              <div className="offer-card__content">
                <h3 className="offer-card__title">Hill Station Escapes</h3>
                <p className="offer-card__desc">Beat the summer heat! Book premium 3-day packages to Mahabaleshwar or Coorg at flat discounted rates.</p>
                <div className="offer-card__footer">
                  <span className="offer-card__code">Promo: <strong>SUMMERBEAT</strong></span>
                  <Link to="/booking" state={{ notes: 'Summer Special Escape Offer' }} className="btn btn-primary btn-sm">Book Now</Link>
                </div>
              </div>
            </div>
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

      {/* ── Our Story (About Us) ── */}
      <section className="section-padding about-section" style={{ background: 'var(--white)' }}>
        <div className="container about-story">
          <div className="about-story__text">
            <span className="section-badge">Our Mission</span>
            <h2 className="section-title">Safe, Comfortable Travel for Everyone</h2>
            <div className="divider left" />
            <p>
              At Swaranjali Travels, we believe that every journey should be safe, comfortable, and worry-free. Founded in Karad, Maharashtra, we've been providing premium ride services with professional drivers to thousands of travelers across the state.
            </p>
            <p style={{ marginTop: '1rem' }}>
              We are not just a car rental company — we are your travel partner. From the moment you book to the moment you arrive, our dedicated team ensures every detail is handled with care. Every vehicle comes with a verified, experienced driver at no extra cost.
            </p>
          </div>
          <div className="about-story__visual">
            <div className="about-story__card about-story__card--1">
              <span className="about-story__card-icon"><img src="/logo.png" alt="" className="badge-logo" style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#fff' }} /></span>
              <h4>8+ Vehicles</h4>
              <p>From Swift to Tempo Traveller</p>
            </div>
            <div className="about-story__card about-story__card--2">
              <span className="about-story__card-icon">⭐</span>
              <h4>4.9 / 5 Rating</h4>
              <p>From 500+ satisfied travelers</p>
            </div>
            <div className="about-story__card about-story__card--3">
              <span className="about-story__card-icon">💰</span>
              <h4>Best Rates</h4>
              <p>Transparent pricing, no hidden costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Milestones */}
      <section className="section-padding milestones-section">
        <div className="container">
          <div className="text-center">
            <span className="section-badge">📅 Timeline</span>
            <h2 className="section-title light">Our Journey So Far</h2>
            <div className="divider" />
          </div>
          <div className="milestones" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {milestones.map(({ year, title, desc }) => (
              <div key={year} className="milestone">
                <div className="milestone__year">{year}</div>
                <div className="milestone__connector">
                  <div className="milestone__dot" />
                  <div className="milestone__line" />
                </div>
                <div className="milestone__content">
                  <h3 className="milestone__title">{title}</h3>
                  <p className="milestone__desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Preview ── */}
      <section className="section-padding home-gallery-preview">
        <div className="container">
          <div className="text-center">
            <span className="section-badge">📸 Gallery Preview</span>
            <h2 className="section-title">Our Journey in Pictures</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Take a look at some of the beautiful journeys and premium vehicles in our fleet.
            </p>
          </div>
          <div className="gallery-grid">
            {galleryItems.slice(0, 6).map((item) => (
              <div key={item.id} className="gallery-item">
                <img src={item.src} alt={item.title} className="gallery-item__img" loading="lazy" />
                <div className="gallery-item__overlay">
                  <span className="gallery-item__category">{item.category}</span>
                  <h3 className="gallery-item__title">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link to="/fleet" className="btn btn-primary">
              Explore Full Gallery & Fleet →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-padding testimonials" style={{ background: 'var(--navy)', color: 'var(--white)' }}>
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

      {/* ── Contact Details & Google Map Section ── */}
      <section className="section-padding contact-section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-badge">📬 Contact Us</span>
            <h2 className="section-title">Get in Touch</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Ready to book or have questions? Send us a WhatsApp inquiry or visit our office in Karad.
            </p>
          </div>

          <div className="contact-layout">
            {/* Info Column */}
            <div className="contact-info">
              <h2 className="contact-info__title">Let's Connect</h2>
              <p className="contact-info__sub">
                Our friendly team is available to help you book the perfect ride or answer any questions.
              </p>
              <div className="contact-info__list">
                {contactInfo.map(({ icon, label, value }) => (
                  <div key={label} className="contact-info__item">
                    <span className="contact-info__icon">{icon}</span>
                    <div>
                      <p className="contact-info__label">{label}</p>
                      <p className="contact-info__value">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="contact-map" style={{ padding: 0, overflow: 'hidden' }}>
                <iframe
                  title="Swaranjali Travels Karad Office"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.7735392683935!2d74.1751147758368!3d17.280456583584852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc181c002242137%3A0xe54d3106bd41785f!2sSaidapur%2C%20Karad%2C%20Maharashtra%20415124!5e0!3m2!1sen!2sin!4v1719840000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '250px', display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form Column */}
            <div className="contact-form-wrap">
              <h2 className="contact-form-wrap__title">Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleContactSubmit} noValidate>
                <div className="contact-form__row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input id="name" name="name" className={`form-input${contactErrors.name ? ' error' : ''}`} placeholder="Your full name" value={contactForm.name} onChange={handleContactChange} />
                    {contactErrors.name && <span className="form-error">{contactErrors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input id="email" name="email" type="email" className={`form-input${contactErrors.email ? ' error' : ''}`} placeholder="your@email.com" value={contactForm.email} onChange={handleContactChange} />
                    {contactErrors.email && <span className="form-error">{contactErrors.email}</span>}
                  </div>
                </div>
                <div className="contact-form__row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number *</label>
                    <input id="phone" name="phone" type="tel" className={`form-input${contactErrors.phone ? ' error' : ''}`} placeholder="9876543210" value={contactForm.phone} onChange={handleContactChange} />
                    {contactErrors.phone && <span className="form-error">{contactErrors.phone}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">Subject *</label>
                    <input id="subject" name="subject" className={`form-input${contactErrors.subject ? ' error' : ''}`} placeholder="Ride Booking Enquiry" value={contactForm.subject} onChange={handleContactChange} />
                    {contactErrors.subject && <span className="form-error">{contactErrors.subject}</span>}
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows={5} className={`form-input${contactErrors.message ? ' error' : ''}`} placeholder="Tell us about your travel plans or questions..." value={contactForm.message} onChange={handleContactChange} />
                  {contactErrors.message && <span className="form-error">{contactErrors.message}</span>}
                </div>
                <button type="submit" className="btn btn-primary btn-lg contact-form__submit" disabled={contactSubmitting}>
                  {contactSubmitting ? 'Sending...' : 'Send Message ✈'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Frequently Asked Questions ── */}
      <FAQ faqs={faqs} />
    </div>
  );
}
