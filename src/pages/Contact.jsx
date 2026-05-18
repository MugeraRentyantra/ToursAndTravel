import { useState } from 'react';
import '../styles/Contact.css';

const initialForm = {
  name: '', email: '', phone: '', subject: '', message: '',
};

function validate(form) {
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

const contactInfo = [
  { icon: '📍', label: 'Address', value: 'Proton Office, Saidpur, Karad' },
  { icon: '📞', label: 'Phone', value: '+91 98765 43210' },
  { icon: '✉️', label: 'Email', value: 'proton@gmail.com' },
  { icon: '🕐', label: 'Working Hours', value: 'Mon – Sat: 10:00 AM – 6:00 PM' },
];

export default function Contact({ addToast }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm(initialForm);
      setErrors({});
      addToast('Message sent! We\'ll get back to you within 24 hours.', 'success');
    }, 800);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container contact-hero__inner">
          <span className="section-badge">📬 Get In Touch</span>
          <h1 className="section-title">Contact Swaranjali Travels</h1>
          <div className="divider" />
          <p className="section-subtitle">Have a question or ready to book your next ride? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container contact-layout">
          {/* Info Column */}
          <div className="contact-info">
            <h2 className="contact-info__title">Let's Connect</h2>
            <p className="contact-info__sub">
              Our friendly team is available Monday to Saturday to help you book the perfect ride or answer any questions.
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
            <div className="contact-map">
              <div className="contact-map__placeholder">
                <span>🗺️</span>
                <p>Karad, Maharashtra, India</p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-wrap">
            <h2 className="contact-form-wrap__title">Send Us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name *</label>
                  <input id="name" name="name" className={`form-input${errors.name ? ' error' : ''}`} placeholder="Your full name" value={form.name} onChange={handleChange} />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" className={`form-input${errors.email ? ' error' : ''}`} placeholder="your@email.com" value={form.email} onChange={handleChange} />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>
              </div>
              <div className="contact-form__row">
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number *</label>
                  <input id="phone" name="phone" type="tel" className={`form-input${errors.phone ? ' error' : ''}`} placeholder="9876543210" value={form.phone} onChange={handleChange} />
                  {errors.phone && <span className="form-error">{errors.phone}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject *</label>
                  <input id="subject" name="subject" className={`form-input${errors.subject ? ' error' : ''}`} placeholder="Ride Booking Enquiry" value={form.subject} onChange={handleChange} />
                  {errors.subject && <span className="form-error">{errors.subject}</span>}
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows={5} className={`form-input${errors.message ? ' error' : ''}`} placeholder="Tell us about your travel plans or questions..." value={form.message} onChange={handleChange} />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>
              <button type="submit" className="btn btn-primary btn-lg contact-form__submit" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Message ✈'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
