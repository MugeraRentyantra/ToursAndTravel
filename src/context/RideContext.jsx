import { createContext, useContext, useState } from 'react';

const RideContext = createContext(null);

const sampleRides = [
  {
    id: 'WL-482031',
    pickup: 'Chhatrapati Shivaji Maharaj International Airport, T2',
    drop: 'The Taj Mahal Palace, Mumbai',
    date: '2026-05-14',
    time: '09:30',
    vehicle: 'Sedan',
    fullName: 'Arjun Mehta',
    phone: '9876543210',
    passengers: 2,
    notes: 'Handle with care — have fragile luggage',
    status: 'pending',
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
  },
  {
    id: 'WL-917284',
    pickup: 'Kempegowda International Airport, Bangalore',
    drop: 'Electronic City, Phase 1',
    date: '2026-05-15',
    time: '18:00',
    vehicle: 'SUV',
    fullName: 'Priya Sharma',
    phone: '9812345678',
    passengers: 4,
    notes: 'Please ensure AC is on',
    status: 'pending',
    createdAt: new Date(Date.now() - 1000 * 60 * 20).toISOString(),
  },
];

export function RideProvider({ children }) {
  const [rides, setRides] = useState(sampleRides);

  const addRide = (ride) => {
    setRides((prev) => [ride, ...prev]);
  };

  const updateStatus = (id, status) => {
    setRides((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r))
    );
  };

  return (
    <RideContext.Provider value={{ rides, addRide, updateStatus }}>
      {children}
    </RideContext.Provider>
  );
}

export function useRides() {
  const ctx = useContext(RideContext);
  if (!ctx) throw new Error('useRides must be used within RideProvider');
  return ctx;
}

export default RideContext;
