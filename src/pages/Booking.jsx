import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRides } from '../context/RideContext';
import { vehicles } from '../data/vehicles';
import PolicySection from '../components/PolicySection';
import '../styles/Booking.css';

const today = new Date().toISOString().split('T')[0];

const initialForm = {
  pickup: '', drop: '', date: '', time: '',
  vehicle: 'swift-dzire', fullName: '', address: '',
  phone: '', altPhone: '',
  passengers: 1, notes: '',
};

function validate(form) {
  const errs = {};
  if (!form.pickup.trim()) errs.pickup = 'Pickup location is required.';
  if (!form.drop.trim()) errs.drop = 'Drop location is required.';
  if (!form.date) errs.date = 'Date is required.';
  if (!form.time) errs.time = 'Time is required.';
  if (!form.fullName.trim()) errs.fullName = 'Full name is required.';
  if (!form.address.trim()) errs.address = 'Address is required.';
  if (!form.phone.trim()) errs.phone = 'Contact number is required.';
  else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) errs.phone = 'Enter a valid 10-digit number.';
  if (!form.altPhone.trim()) errs.altPhone = 'Alternate contact is required.';
  else if (!/^\d{10}$/.test(form.altPhone.replace(/\s/g, ''))) errs.altPhone = 'Enter a valid 10-digit number.';
  return errs;
}

function generateId() {
  return 'ST-' + Math.floor(100000 + Math.random() * 900000);
}

export default function Booking({ addToast }) {
  const { addRide } = useRides();
  const location = useLocation();
  const preselectedVehicle = location.state?.vehicleId || 'swift-dzire';

  const [form, setForm] = useState({
    ...initialForm,
    vehicle: preselectedVehicle,
    pickup: location.state?.pickup || '',
    drop: location.state?.drop || '',
    phone: location.state?.phone || '',
    notes: location.state?.tripType ? `Trip type: ${location.state.tripType}` : '',
  });
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(null);

  const selectedVehicle = vehicles.find((v) => v.id === form.vehicle) || vehicles[0];

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
      vehicleName: selectedVehicle.name,
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
            <p className="confirmation__sub">Your ride has been successfully booked with Swaranjali Travels.</p>
            <div className="confirmation__id">
              Booking ID: <strong>{confirmed.id}</strong>
            </div>
            <div className="confirmation__details">
              <div className="confirmation__row"><span>Pickup</span><span>{confirmed.pickup}</span></div>
              <div className="confirmation__row"><span>Drop</span><span>{confirmed.drop}</span></div>
              <div className="confirmation__row"><span>Date & Time</span><span>{confirmed.date} at {confirmed.time}</span></div>
              <div className="confirmation__row"><span>Vehicle</span><span>{confirmed.vehicleName}</span></div>
              <div className="confirmation__row"><span>Passengers</span><span>{confirmed.passengers}</span></div>
              <div className="confirmation__row"><span>Name</span><span>{confirmed.fullName}</span></div>
              <div className="confirmation__row"><span>Address</span><span>{confirmed.address}</span></div>
              <div className="confirmation__row"><span>Contact</span><span>{confirmed.phone}</span></div>
              <div className="confirmation__row"><span>Alt. Contact</span><span>{confirmed.altPhone}</span></div>
              <div className="confirmation__row confirmation__row--highlight">
                <span>🧑‍✈️ Driver</span><span>Included ✓</span>
              </div>
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
          <span className="section-badge"><img src="/logo.png" alt="" className="badge-logo" /> Swaranjali Travels</span>
          <h1 className="section-title">Book Your Ride</h1>
          <div className="divider" />
          <p className="section-subtitle">Safe, comfortable, and always on time — प्रवास तुमचा जबाबदारी आमची</p>
        </div>
      </section>

      {/* Driver Included Banner */}
      <section className="booking-driver-banner">
        <div className="container">
          <div className="booking-driver-banner__inner">
            <span>🧑‍✈️</span>
            <span>✅ Professional driver included with every booking — no extra charges!</span>
          </div>
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
                  <input id="pickup" name="pickup" className={`form-input${errors.pickup ? ' error' : ''}`} placeholder="e.g. Karad Bus Stand" value={form.pickup} onChange={handleChange} />
                  {errors.pickup && <span className="form-error">{errors.pickup}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="drop">Drop Location *</label>
                  <input id="drop" name="drop" className={`form-input${errors.drop ? ' error' : ''}`} placeholder="e.g. Pune Airport" value={form.drop} onChange={handleChange} />
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
              <h3 className="booking-form__section-title"><img src="/logo.png" alt="" className="badge-logo" /> Choose Your Vehicle</h3>
              <div className="vehicle-selector">
                {vehicles.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    className={`vehicle-card${form.vehicle === v.id ? ' vehicle-card--selected' : ''}`}
                    onClick={() => handleVehicle(v.id)}
                  >
                    <div className="vehicle-card__image-container">
                      <img src={v.image} alt={v.name} className="vehicle-card__img" onError={(e) => { e.target.src = '/suv.png'; }} />
                    </div>
                    <span className="vehicle-card__label">{v.name}</span>
                    <span className="vehicle-card__desc">{v.type} · {v.seats} seater</span>
                    <span className="vehicle-card__seats">{v.ac ? '❄️ AC' : 'Non-AC'}</span>
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
                  <label className="form-label" htmlFor="address">Address *</label>
                  <input id="address" name="address" className={`form-input${errors.address ? ' error' : ''}`} placeholder="Your full address" value={form.address} onChange={handleChange} />
                  {errors.address && <span className="form-error">{errors.address}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Contact Number *</label>
                  <input id="phone" name="phone" type="tel" className={`form-input${errors.phone ? ' error' : ''}`} placeholder="10-digit mobile number" value={form.phone} onChange={handleChange} />
                  {errors.phone && <span className="form-error">{errors.phone}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="altPhone">Alternate Contact Number *</label>
                  <input id="altPhone" name="altPhone" type="tel" className={`form-input${errors.altPhone ? ' error' : ''}`} placeholder="Alternate 10-digit number" value={form.altPhone} onChange={handleChange} />
                  {errors.altPhone && <span className="form-error">{errors.altPhone}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="passengers">Passengers</label>
                  <input id="passengers" name="passengers" type="number" min={1} max={selectedVehicle.seats} className="form-input" value={form.passengers} onChange={handleChange} />
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

          {/* Policy Section */}
          <PolicySection />
        </div>
      </section>
    </div>
  );
}
