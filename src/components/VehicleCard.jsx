import '../styles/VehicleCard.css';
import { useNavigate } from 'react-router-dom';

const amenityIcons = {
  'AC': '❄️',
  'Music System': '🎵',
  'Spacious Interiors': '🪑',
  'Luggage Space': '🧳',
  'USB Charging': '🔌',
  'Reclining Seats': '💺',
  'Comfortable Seats': '💺',
  'Spacious Boot': '🧳',
  'Compact & Agile': '⚡',
  'Push-back Seats': '💺',
  'Large Luggage Space': '🧳',
  'First Aid Kit': '🩺',
  'Ventilated Seats': '🌬️',
};

export default function VehicleCard({ vehicle }) {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate('/booking', { state: { vehicleId: vehicle.id } });
  };

  return (
    <div className="v-card">
      <div className="v-card__img-wrap">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="v-card__img"
          loading="lazy"
          onError={(e) => {
            e.target.src = '/suv.png';
          }}
        />
        <div className="v-card__badges">
          <span className="v-card__type-badge">{vehicle.type}</span>
          <span className={`v-card__ac-badge ${vehicle.ac ? 'v-card__ac-badge--ac' : 'v-card__ac-badge--nonac'}`}>
            {vehicle.ac ? '❄️ AC' : 'Non-AC'}
          </span>
        </div>
      </div>

      <div className="v-card__body">
        <div className="v-card__header">
          <h3 className="v-card__name">{vehicle.name}</h3>
          <div className="v-card__seats">
            <span className="v-card__seats-icon">👥</span>
            <span>{vehicle.seats} Seater</span>
          </div>
        </div>

        <p className="v-card__desc">{vehicle.description}</p>

        <div className="v-card__amenities">
          {vehicle.amenities.map((amenity) => (
            <span key={amenity} className="v-card__amenity">
              <span className="v-card__amenity-icon">{amenityIcons[amenity] || '✓'}</span>
              {amenity}
            </span>
          ))}
        </div>

        <div className="v-card__driver-badge">
          <span>🧑‍✈️</span>
          <span>Driver Included</span>
        </div>

        <button className="btn btn-primary v-card__btn" onClick={handleBook}>
          Book Now →
        </button>
      </div>
    </div>
  );
}
