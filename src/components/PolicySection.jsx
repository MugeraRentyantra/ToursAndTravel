import { bookingCharges, cancellationPolicy } from '../data/vehicles';
import '../styles/PolicySection.css';

export default function PolicySection() {
  return (
    <div className="policy-section">
      <h3 className="policy-section__title">📋 Booking & Cancellation Policy</h3>

      {/* Booking Charges */}
      <div className="policy-card">
        <h4 className="policy-card__heading">
          <span className="policy-card__icon">💳</span>
          Booking Charges (Advance Payment)
        </h4>
        <p className="policy-card__sub">
          Advance payment is required based on how far in advance you book:
        </p>
        <div className="policy-table-wrap">
          <table className="policy-table">
            <thead>
              <tr>
                <th>Days Before Ride</th>
                <th>Advance Required</th>
              </tr>
            </thead>
            <tbody>
              {bookingCharges.map(({ daysBefore, advance }) => (
                <tr key={daysBefore}>
                  <td>{daysBefore}</td>
                  <td>
                    <span className="policy-table__highlight">{advance}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cancellation Policy */}
      <div className="policy-card policy-card--warning">
        <h4 className="policy-card__heading">
          <span className="policy-card__icon">⚠️</span>
          Cancellation & Refund Policy
        </h4>
        <div className="policy-card__alert">
          <span className="policy-card__alert-icon">ℹ️</span>
          <p>
            <strong>{cancellationPolicy.charge} cancellation charges</strong> apply on all
            cancellations, regardless of when the cancellation is made.
          </p>
        </div>
      </div>

      {/* Driver Policy */}
      <div className="policy-card policy-card--success">
        <h4 className="policy-card__heading">
          <span className="policy-card__icon">🧑‍✈️</span>
          Driver Policy
        </h4>
        <p className="policy-card__text">
          A <strong>professional driver is always included</strong> with every booking at no extra
          charge. All our drivers are verified, experienced, and trained for safe, comfortable rides.
        </p>
      </div>
    </div>
  );
}
