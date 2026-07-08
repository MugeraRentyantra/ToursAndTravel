import { useNavigate } from 'react-router-dom';
import '../styles/PackageCard.css';

export default function PackageCard({ pkg }) {
  const navigate = useNavigate();

  return (
    <div className="pkg-card">
      <div className="pkg-card__img-wrap">
        <img src={pkg.image} alt={pkg.destination} className="pkg-card__img" loading="lazy" />
        <div className="pkg-card__badge">{pkg.badge || 'Popular'}</div>
        <div className="pkg-card__overlay" />
      </div>

      <div className="pkg-card__body">
        <div className="pkg-card__header">
          <div>
            <h3 className="pkg-card__title">{pkg.destination}</h3>
            <p className="pkg-card__location">
              <span className="pkg-card__location-icon">📍</span>
              {pkg.country}
            </p>
          </div>
          <div className="pkg-card__price-wrap">
            <span className="pkg-card__price-label">Starting from</span>
            <span className="pkg-card__price">{pkg.price}</span>
          </div>
        </div>

        <div className="pkg-card__meta">
          <span className="pkg-card__meta-item">
            <span>🗓</span> {pkg.duration}
          </span>
          <span className="pkg-card__meta-item">
            <span>⭐</span> {pkg.rating}
          </span>
        </div>

        <ul className="pkg-card__features">
          {pkg.features.slice(0, 4).map((f) => (
            <li key={f} className="pkg-card__feature">
              <span className="pkg-card__feature-check">✓</span>
              {f}
            </li>
          ))}
        </ul>

        <button
          className="btn btn-primary pkg-card__btn"
          onClick={() => navigate('/booking', {
            state: {
              drop: pkg.destination,
              notes: `Package: ${pkg.destination} (${pkg.duration})`,
            }
          })}
        >
          Book Now →
        </button>
      </div>
    </div>
  );
}
