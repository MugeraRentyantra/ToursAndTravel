import { useRides } from '../context/RideContext';
import '../styles/RideCard.css';

export default function RideCard({ ride, onStatusChange }) {
  const { updateStatus } = useRides();

  const handleAction = (status) => {
    updateStatus(ride.id, status);
    if (onStatusChange) onStatusChange(ride.id, status);
  };

  const statusLabels = { pending: 'Pending', accepted: 'Accepted', declined: 'Declined' };

  const formatTime = (iso) => {
    const d = new Date(iso);
    return d.toLocaleString('en-IN', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit', hour12: true,
    });
  };

  const vehicleIcons = {
    'innova': '🚐',
    'innova-crysta': '🚐',
    'swift': '🚗',
    'swift-dzire': '🚙',
    'i10': '🚗',
    'tempo-traveller': '🚌',
    'toyota-rumion': '🚐',
    'kia-carens': '🚐',
  };

  return (
    <div className={`ride-card ride-card--${ride.status}`}>
      <div className="ride-card__head">
        <div className="ride-card__id-wrap">
          <span className="ride-card__id">{ride.id}</span>
          <span className={`ride-card__status ride-card__status--${ride.status}`}>
            {statusLabels[ride.status]}
          </span>
        </div>
        <span className="ride-card__time">{formatTime(ride.createdAt)}</span>
      </div>

      <div className="ride-card__route">
        <div className="ride-card__loc">
          <span className="ride-card__loc-dot ride-card__loc-dot--from" />
          <div>
            <span className="ride-card__loc-label">Pickup</span>
            <p className="ride-card__loc-text">{ride.pickup}</p>
          </div>
        </div>
        <div className="ride-card__route-line" />
        <div className="ride-card__loc">
          <span className="ride-card__loc-dot ride-card__loc-dot--to" />
          <div>
            <span className="ride-card__loc-label">Drop</span>
            <p className="ride-card__loc-text">{ride.drop}</p>
          </div>
        </div>
      </div>

      <div className="ride-card__meta">
        <span className="ride-card__meta-item">
          🗓 {ride.date} · {ride.time}
        </span>
        <span className="ride-card__meta-item">
          {vehicleIcons[ride.vehicle] || '🚗'} {ride.vehicleName || ride.vehicle}
        </span>
        <span className="ride-card__meta-item">
          👥 {ride.passengers} passenger{ride.passengers !== 1 ? 's' : ''}
        </span>
      </div>

      {ride.notes && (
        <p className="ride-card__notes">
          <span>📝</span> {ride.notes}
        </p>
      )}

      <div className="ride-card__customer">
        <span className="ride-card__customer-name">👤 {ride.fullName}</span>
        <span className="ride-card__customer-phone">📞 {ride.phone}</span>
        {ride.altPhone && <span className="ride-card__customer-phone">📱 {ride.altPhone} (alt)</span>}
        {ride.address && <span className="ride-card__customer-phone">📍 {ride.address}</span>}
      </div>

      {ride.status === 'pending' && (
        <div className="ride-card__actions">
          <button
            className="ride-card__btn ride-card__btn--accept"
            onClick={() => handleAction('accepted')}
          >
            ✓ Accept
          </button>
          <button
            className="ride-card__btn ride-card__btn--decline"
            onClick={() => handleAction('declined')}
          >
            ✕ Decline
          </button>
        </div>
      )}
    </div>
  );
}
