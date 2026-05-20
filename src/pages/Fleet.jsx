import { useState } from 'react';
import { vehicles, vehicleTypes } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';
import '../styles/Fleet.css';

export default function Fleet() {
  const [activeType, setActiveType] = useState('All');

  const filtered = activeType === 'All'
    ? vehicles
    : vehicles.filter((v) => v.type === activeType);

  return (
    <div className="fleet-page">
      {/* Hero */}
      <section className="fleet-hero">
        <div className="container fleet-hero__inner">
          <span className="section-badge"><img src="/logo.png" alt="" className="badge-logo" /> Our Fleet</span>
          <h1 className="section-title">Choose Your Perfect Ride</h1>
          <div className="divider" />
          <p className="section-subtitle">
            From compact sedans to spacious travellers — all vehicles come with an experienced, professional driver.
          </p>
        </div>
      </section>

      {/* Driver included banner */}
      <section className="fleet-driver-banner">
        <div className="container">
          <div className="fleet-driver-banner__inner">
            <span className="fleet-driver-banner__icon">🧑‍✈️</span>
            <div>
              <strong>Professional Driver Included</strong> with every booking — no extra charges!
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="section-padding">
        <div className="container">
          <div className="fleet-tabs">
            {vehicleTypes.map((type) => (
              <button
                key={type}
                className={`fleet-tab${activeType === type ? ' fleet-tab--active' : ''}`}
                onClick={() => setActiveType(type)}
              >
                {type}
                {type !== 'All' && (
                  <span className="fleet-tab__count">
                    {vehicles.filter((v) => v.type === type).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Vehicle Grid */}
          <div className="fleet-grid">
            {filtered.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="fleet-empty">
              <span><img src="/logo.png" alt="" className="badge-logo" style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#fff' }} /></span>
              <p>No vehicles found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
