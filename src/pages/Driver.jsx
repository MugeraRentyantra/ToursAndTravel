import { useState, useEffect } from 'react';
import { useRides } from '../context/RideContext';
import RideCard from '../components/RideCard';
import '../styles/Driver.css';

const DRIVER_PIN = '1234';
const SESSION_KEY = 'driverAuth';

const TABS = ['All', 'Pending', 'Accepted', 'Declined'];

export default function Driver({ addToast }) {
  const { rides } = useRides();
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(SESSION_KEY) === 'true');
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const handleLogin = (e) => {
    e.preventDefault();
    if (pin === DRIVER_PIN) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setAuthed(true);
      setPinError('');
    } else {
      setPinError('Invalid PIN. Please try again.');
      setPin('');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthed(false);
    setPin('');
    setActiveTab('All');
  };

  const handleStatusChange = (id, status) => {
    addToast(`Ride ${status === 'accepted' ? 'accepted ✓' : 'declined ✕'} successfully.`, status === 'accepted' ? 'success' : 'error');
  };

  const stats = {
    total: rides.length,
    pending: rides.filter((r) => r.status === 'pending').length,
    accepted: rides.filter((r) => r.status === 'accepted').length,
    declined: rides.filter((r) => r.status === 'declined').length,
  };

  const filteredRides = activeTab === 'All'
    ? rides
    : rides.filter((r) => r.status === activeTab.toLowerCase());

  if (!authed) {
    return (
      <div className="driver-page driver-page--locked">
        <div className="pin-screen">
          <div className="pin-screen__icon">🔐</div>
          <h2 className="pin-screen__title">Driver Dashboard</h2>
          <p className="pin-screen__sub">Enter your 4-digit PIN to access the dashboard</p>
          <form className="pin-form" onSubmit={handleLogin}>
            <input
              id="driver-pin"
              type="password"
              inputMode="numeric"
              pattern="\d{4}"
              maxLength={4}
              className={`pin-form__input${pinError ? ' error' : ''}`}
              placeholder="••••"
              value={pin}
              onChange={(e) => { setPin(e.target.value); setPinError(''); }}
              autoFocus
            />
            {pinError && <span className="pin-form__error">{pinError}</span>}
            <button type="submit" className="btn btn-primary btn-lg pin-form__btn">
              Unlock Dashboard
            </button>
          </form>
          <p className="pin-screen__hint">Hint: Default PIN is 1234</p>
        </div>
      </div>
    );
  }

  return (
    <div className="driver-page">
      {/* Header */}
      <div className="driver-header">
        <div className="container driver-header__inner">
          <div>
            <h1 className="driver-header__title">Driver Dashboard</h1>
            <p className="driver-header__sub">Manage all ride requests in real-time</p>
          </div>
          <button className="btn btn-secondary btn-sm driver-header__logout" onClick={handleLogout}>
            🔓 Logout
          </button>
        </div>
      </div>

      <div className="section-padding-sm">
        <div className="container">
          {/* Stats */}
          <div className="driver-stats">
            {[
              { label: 'Total Rides', value: stats.total, color: 'var(--navy)', bg: 'rgba(10,22,40,0.06)', icon: '🚗' },
              { label: 'Pending', value: stats.pending, color: 'var(--gold-dark)', bg: 'rgba(201,168,76,0.12)', icon: '⏳' },
              { label: 'Accepted', value: stats.accepted, color: '#065f46', bg: 'rgba(16,185,129,0.12)', icon: '✅' },
              { label: 'Declined', value: stats.declined, color: '#991b1b', bg: 'rgba(239,68,68,0.12)', icon: '❌' },
            ].map(({ label, value, color, bg, icon }) => (
              <div key={label} className="driver-stat" style={{ '--stat-color': color, '--stat-bg': bg }}>
                <span className="driver-stat__icon">{icon}</span>
                <span className="driver-stat__value" style={{ color }}>{value}</span>
                <span className="driver-stat__label">{label}</span>
              </div>
            ))}
          </div>

          {/* Filter Tabs */}
          <div className="driver-tabs">
            {TABS.map((tab) => {
              const count = tab === 'Pending' ? stats.pending : null;
              return (
                <button
                  key={tab}
                  className={`driver-tab${activeTab === tab ? ' driver-tab--active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                  {count !== null && count > 0 && (
                    <span className="driver-tab__badge">{count}</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Ride List */}
          {filteredRides.length === 0 ? (
            <div className="driver-empty">
              <span className="driver-empty__icon">🚦</span>
              <p>No {activeTab !== 'All' ? activeTab.toLowerCase() : ''} rides found.</p>
            </div>
          ) : (
            <div className="driver-rides">
              {filteredRides.map((ride) => (
                <RideCard key={ride.id} ride={ride} onStatusChange={handleStatusChange} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
