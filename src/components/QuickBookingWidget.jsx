import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuickBookingWidget.css';

export default function QuickBookingWidget({ addToast }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('outstation'); // 'outstation' or 'local'
  const [tripType, setTripType] = useState('one-way'); // 'one-way' or 'round-trip'
  const [pickup, setPickup] = useState('');
  const [destinations, setDestinations] = useState(['']); // array of destinations for outstation
  const [phone, setPhone] = useState('');

  // Local/Airport specific state
  const [localDrop, setLocalDrop] = useState('');

  const handleAddDestination = () => {
    if (destinations.length < 4) {
      setDestinations([...destinations, '']);
    } else if (addToast) {
      addToast('Maximum 4 destination cities can be added.', 'warning');
    }
  };

  const handleRemoveDestination = (index) => {
    const updated = [...destinations];
    updated.splice(index, 1);
    setDestinations(updated);
  };

  const handleDestinationChange = (index, value) => {
    const updated = [...destinations];
    updated[index] = value;
    setDestinations(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!pickup.trim()) {
      if (addToast) addToast('Please enter a pickup city.', 'error');
      return;
    }

    if (activeTab === 'outstation') {
      const validDestinations = destinations.filter(d => d.trim() !== '');
      if (validDestinations.length === 0) {
        if (addToast) addToast('Please enter at least one destination city.', 'error');
        return;
      }
    } else {
      if (!localDrop.trim()) {
        if (addToast) addToast('Please enter a drop location.', 'error');
        return;
      }
    }

    const cleanPhone = phone.replace(/\s/g, '');
    if (!cleanPhone) {
      if (addToast) addToast('Please enter your mobile number.', 'error');
      return;
    }
    if (!/^\d{10}$/.test(cleanPhone)) {
      if (addToast) addToast('Please enter a valid 10-digit mobile number.', 'error');
      return;
    }

    // Prepare state for Booking Page
    const dropLocation = activeTab === 'outstation' 
      ? destinations.filter(d => d.trim() !== '').join(' to ')
      : localDrop;

    navigate('/booking', {
      state: {
        pickup: pickup.trim(),
        drop: dropLocation,
        phone: cleanPhone,
        tripType: activeTab === 'outstation' ? `${tripType} (outstation)` : 'local/airport',
      }
    });

    if (addToast) {
      addToast('Redirecting to confirm your vehicle and details...', 'success');
    }
  };

  return (
    <div className="quick-booking-card">
      <div className="quick-booking-card__header">
        All India Cab Service
      </div>
      <form className="quick-booking-card__body" onSubmit={handleSubmit}>
        {/* Main Tabs */}
        <div className="quick-booking-card__tabs">
          <button
            type="button"
            className={`quick-booking-card__tab ${activeTab === 'outstation' ? 'active' : ''}`}
            onClick={() => setActiveTab('outstation')}
          >
            Outstation
          </button>
          <button
            type="button"
            className={`quick-booking-card__tab ${activeTab === 'local' ? 'active' : ''}`}
            onClick={() => setActiveTab('local')}
          >
            Local / Airport
          </button>
        </div>

        {/* Sub options for Outstation */}
        {activeTab === 'outstation' && (
          <div className="quick-booking-card__sub-options">
            <button
              type="button"
              className={`trip-type-pill ${tripType === 'round-trip' ? 'selected' : ''}`}
              onClick={() => setTripType('round-trip')}
            >
              <span className="radio-dot round-trip-dot"></span>
              Round Trip
            </button>
            <button
              type="button"
              className={`trip-type-pill ${tripType === 'one-way' ? 'selected' : ''}`}
              onClick={() => setTripType('one-way')}
            >
              <span className="radio-dot one-way-dot"></span>
              One Way Trip
            </button>
          </div>
        )}

        {/* Form Inputs Container */}
        <div className="quick-booking-card__inputs">
          {/* Pickup City */}
          <div className="quick-input-group">
            <input
              type="text"
              placeholder="Enter pickup city"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="quick-input"
              required
            />
            <span className="quick-input-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </span>
          </div>

          {/* Destination Cities (Outstation) or Local Drop */}
          {activeTab === 'outstation' ? (
            destinations.map((dest, idx) => (
              <div key={idx} className="quick-input-group destination-group">
                <input
                  type="text"
                  placeholder={idx === 0 ? "Enter destination city" : `Enter destination city ${idx + 1}`}
                  value={dest}
                  onChange={(e) => handleDestinationChange(idx, e.target.value)}
                  className="quick-input"
                  required={idx === 0}
                />
                <span className="quick-input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                {idx > 0 && (
                  <button 
                    type="button" 
                    className="remove-destination-btn" 
                    onClick={() => handleRemoveDestination(idx)}
                    title="Remove destination"
                  >
                    &times;
                  </button>
                )}
              </div>
            ))
          ) : (
            <div className="quick-input-group">
              <input
                type="text"
                placeholder="Enter destination / airport / local address"
                value={localDrop}
                onChange={(e) => setLocalDrop(e.target.value)}
                className="quick-input"
                required
              />
              <span className="quick-input-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
            </div>
          )}

          {/* Add More City Button (Outstation only) */}
          {activeTab === 'outstation' && (
            <button
              type="button"
              className="add-city-btn"
              onClick={handleAddDestination}
            >
              <span>+ Add More City</span>
              <span className="add-city-btn__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </span>
            </button>
          )}

          {/* Mobile Number */}
          <div className="quick-input-group phone-group">
            <span className="phone-prefix">+ 91</span>
            <input
              type="tel"
              placeholder="Enter mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
              className="quick-input phone-input"
              required
            />
            <span className="quick-input-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="check-price-btn">
          Check Price & Book Cab
        </button>
      </form>
    </div>
  );
}
