import { useState } from 'react';
import { vehicles, vehicleTypes } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';
import PageHero from '../components/PageHero';
import { galleryItems, galleryCategories } from '../data/gallery';
import '../styles/Fleet.css';
import '../styles/Gallery.css';

export default function Fleet() {
  const [activeType, setActiveType] = useState('All');
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  // Filter vehicles
  const filteredVehicles = activeType === 'All'
    ? vehicles
    : vehicles.filter((v) => v.type === activeType);

  // Filter gallery
  const filteredGallery = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const closeLightbox = () => setLightbox(null);

  const navigateLightbox = (dir) => {
    const currentIndex = filteredGallery.findIndex((item) => item.id === lightbox.id);
    const nextIndex = (currentIndex + dir + filteredGallery.length) % filteredGallery.length;
    setLightbox(filteredGallery[nextIndex]);
  };

  return (
    <div className="fleet-page">
      <PageHero
        badge="Our Fleet & Gallery"
        title="Our Vehicles & Travel Gallery"
        subtitle="From compact sedans to spacious travellers — all vehicles come with an experienced, professional driver. Browse our fleet and view real trip photos below."
      />

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

      {/* Fleet Section */}
      <section className="section-padding" style={{ paddingBottom: '0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-xl)' }}>
            <span className="section-badge">🚗 Premium Fleet</span>
            <h2 className="section-title">Choose Your Perfect Ride</h2>
            <div className="divider" />
          </div>

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
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          {filteredVehicles.length === 0 && (
            <div className="fleet-empty">
              <span><img src="/logo.png" alt="" className="badge-logo" style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#fff' }} /></span>
              <p>No vehicles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding gallery-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-xl)' }}>
            <span className="section-badge">📸 Trip Diary</span>
            <h2 className="section-title">Real Journey Photos</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Photos from our popular outstations, pilgrimages, and happy tourist groups across Maharashtra & Karnataka.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="gallery-tabs">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                className={`gallery-tab${activeCategory === cat ? ' gallery-tab--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="gallery-tab__count">
                    {galleryItems.filter((i) => i.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="gallery-grid">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="gallery-item"
                onClick={() => setLightbox(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="gallery-item__img"
                  loading="lazy"
                />
                <div className="gallery-item__overlay">
                  <span className="gallery-item__category">{item.category}</span>
                  <h3 className="gallery-item__title">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div className="gallery-empty">
              <p>No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox__close" onClick={closeLightbox}>✕</button>
            <button className="lightbox__nav lightbox__nav--prev" onClick={() => navigateLightbox(-1)}>‹</button>
            <img src={lightbox.src} alt={lightbox.title} className="lightbox__img" />
            <button className="lightbox__nav lightbox__nav--next" onClick={() => navigateLightbox(1)}>›</button>
            <div className="lightbox__caption">
              <span className="lightbox__cat">{lightbox.category}</span>
              <h3>{lightbox.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
