import { createContext, useContext, useState } from 'react';

const RideContext = createContext(null);

const sampleRides = [
  {
    id: 'ST-482031',
    pickup: 'Karad Bus Stand',
    drop: 'Pune Airport',
    date: '2026-05-14',
    time: '09:30',
    vehicle: 'swift-dzire',
    vehicleName: 'Swift Dzire',
    fullName: 'Arjun Mehta',
    address: 'Near Shivaji Chowk, Karad',
    phone: '9876543210',
    altPhone: '9876543211',
    passengers: 2,
    notes: 'Handle with care — have fragile luggage',
    status: 'pending',
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
  },
  {
    id: 'ST-917284',
    pickup: 'Saidpur, Karad',
    drop: 'Mahabaleshwar',
    date: '2026-05-15',
    time: '18:00',
    vehicle: 'innova',
    vehicleName: 'Toyota Innova',
    fullName: 'Priya Sharma',
    address: 'Vidyanagar, Karad',
    phone: '9812345678',
    altPhone: '9812345679',
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
