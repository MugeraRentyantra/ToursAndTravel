import { useState } from 'react';
import { useRides } from '../context/RideContext';
import '../styles/Booking.css';

const today = new Date().toISOString().split('T')[0];

const vehicles = [
  { id: 'Hatchback', label: 'Hatchback', icon: '🚗', image: '/hatchback.png', desc: 'Compact & affordable', seats: 'Up to 4' },
  { id: 'Sedan', label: 'Sedan', icon: '🚙', image: '/sedan.png', desc: 'Comfort & style', seats: 'Up to 4' },
  { id: 'SUV', label: 'SUV', icon: '🚐', image: '/suv.png', desc: 'Space & luxury', seats: 'Up to 7' },
  { id: 'Force-Traveller', label: 'Force-Traveller', icon: '🚌', image: '/force_traveller.png', desc: 'Space & luxury', seats: 'Up to 20' }
];

const initialForm = {
  pickup: '', drop: '', date: '', time: '',
  vehicle: 'Sedan', fullName: '', phone: '',
  passengers: 1, notes: '',
};

function validate(form) {
  const errs = {};
  if (!form.pickup.trim()) errs.pickup = 'Pickup location is required.';
  if (!form.drop.trim()) errs.drop = 'Drop location is required.';
  if (!form.date) errs.date = 'Date is required.';
  if (!form.time) errs.time = 'Time is required.';
  if (!form.fullName.trim()) errs.fullName = 'Full name is required.';
  if (!form.phone.trim()) errs.phone = 'Phone number is required.';
  else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) errs.phone = 'Enter a valid 10-digit phone number.';
  return errs;
}

function generateId() {
  return 'WL-' + Math.floor(100000 + Math.random() * 900000);
}

export default function Booking({ addToast }) {
  const { addRide } = useRides();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const handleVehicle = (id) => {
    setForm((p) => ({ ...p, vehicle: id }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }

    const ride = {
      ...form,
      id: generateId(),
      status: 'pending',
      passengers: Number(form.passengers),
      createdAt: new Date().toISOString(),
    };
    addRide(ride);
    setConfirmed(ride);
    addToast('Ride booked successfully!', 'success');
  };

  if (confirmed) {
    return (
      <div className="booking-page">
        <div className="container">
          <div className="confirmation">
            <div className="confirmation__icon">✓</div>
            <h2 className="confirmation__title">Booking Confirmed!</h2>
            <p className="confirmation__sub">Your ride has been successfully booked.</p>
            <div className="confirmation__id">
              Booking ID: <strong>{confirmed.id}</strong>
            </div>
            <div className="confirmation__details">
              <div className="confirmation__row"><span>Pickup</span><span>{confirmed.pickup}</span></div>
              <div className="confirmation__row"><span>Drop</span><span>{confirmed.drop}</span></div>
              <div className="confirmation__row"><span>Date & Time</span><span>{confirmed.date} at {confirmed.time}</span></div>
              <div className="confirmation__row"><span>Vehicle</span><span>{confirmed.vehicle}</span></div>
              <div className="confirmation__row"><span>Passengers</span><span>{confirmed.passengers}</span></div>
              <div className="confirmation__row"><span>Name</span><span>{confirmed.fullName}</span></div>
              <div className="confirmation__row"><span>Phone</span><span>{confirmed.phone}</span></div>
              {confirmed.notes && <div className="confirmation__row"><span>Notes</span><span>{confirmed.notes}</span></div>}
            </div>
            <div className="confirmation__actions">
              <button
                className="btn btn-primary"
                onClick={() => { setConfirmed(null); setForm(initialForm); }}
              >
                Book Another Ride
              </button>
              <a href="/" className="btn btn-secondary">Go Home</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <section className="booking-hero">
        <div className="container booking-hero__inner">
          <span className="section-badge">🚗 Ride Service</span>
          <h1 className="section-title">Book a Premium Ride</h1>
          <div className="divider" />
          <p className="section-subtitle">Safe, comfortable, and always on time — your journey starts here.</p>
        </div>
      </section>

      <section className="section-padding-sm">
        <div className="container">
          <form className="booking-form" onSubmit={handleSubmit} noValidate>

            {/* Route */}
            <div className="booking-form__section">
              <h3 className="booking-form__section-title">📍 Route Details</h3>
              <div className="booking-form__grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="pickup">Pickup Location *</label>
                  <input id="pickup" name="pickup" className={`form-input${errors.pickup ? ' error' : ''}`} placeholder="e.g. Airport Terminal 2" value={form.pickup} onChange={handleChange} />
                  {errors.pickup && <span className="form-error">{errors.pickup}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="drop">Drop Location *</label>
                  <input id="drop" name="drop" className={`form-input${errors.drop ? ' error' : ''}`} placeholder="e.g. The Leela Hotel" value={form.drop} onChange={handleChange} />
                  {errors.drop && <span className="form-error">{errors.drop}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="date">Date *</label>
                  <input id="date" name="date" type="date" min={today} className={`form-input${errors.date ? ' error' : ''}`} value={form.date} onChange={handleChange} />
                  {errors.date && <span className="form-error">{errors.date}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="time">Time *</label>
                  <input id="time" name="time" type="time" className={`form-input${errors.time ? ' error' : ''}`} value={form.time} onChange={handleChange} />
                  {errors.time && <span className="form-error">{errors.time}</span>}
                </div>
              </div>
            </div>

            {/* Vehicle */}
            <div className="booking-form__section">
              <h3 className="booking-form__section-title">🚗 Choose Your Vehicle</h3>
              <div className="vehicle-selector">
                {vehicles.map(({ id, label, icon, image, desc, seats }) => (
                  <button
                    key={id}
                    type="button"
                    className={`vehicle-card${form.vehicle === id ? ' vehicle-card--selected' : ''}`}
                    onClick={() => handleVehicle(id)}
                  >
                    <div className="vehicle-card__image-container">
                      <img src={image} alt={label} className="vehicle-card__img" />
                    </div>
                    <span className="vehicle-card__label">{label}</span>
                    <span className="vehicle-card__desc">{desc}</span>
                    <span className="vehicle-card__seats">{seats}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Passenger Info */}
            <div className="booking-form__section">
              <h3 className="booking-form__section-title">👤 Passenger Details</h3>
              <div className="booking-form__grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">Full Name *</label>
                  <input id="fullName" name="fullName" className={`form-input${errors.fullName ? ' error' : ''}`} placeholder="Your full name" value={form.fullName} onChange={handleChange} />
                  {errors.fullName && <span className="form-error">{errors.fullName}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number *</label>
                  <input id="phone" name="phone" type="tel" className={`form-input${errors.phone ? ' error' : ''}`} placeholder="10-digit mobile number" value={form.phone} onChange={handleChange} />
                  {errors.phone && <span className="form-error">{errors.phone}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="passengers">Passengers</label>
                  <input id="passengers" name="passengers" type="number" min={1} max={8} className="form-input" value={form.passengers} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group" style={{ marginTop: '1rem' }}>
                <label className="form-label" htmlFor="notes">Special Instructions <span style={{ fontWeight: 400, color: 'var(--text-light)' }}>(optional)</span></label>
                <textarea id="notes" name="notes" rows={3} className="form-input" placeholder="e.g. Child seat required, extra luggage, etc." value={form.notes} onChange={handleChange} />
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-lg booking-form__submit">
              Confirm Booking →
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
