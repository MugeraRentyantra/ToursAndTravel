// ============================================
// SWARANJALI TRAVELS — VEHICLE FLEET DATA
// ============================================

export const vehicles = [
  {
    id: 'innova',
    name: 'Toyota Innova',
    type: 'SUV',
    seats: 7,
    ac: true,
    image: '/vehicles/innova.png',
    amenities: ['AC', 'Music System', 'Spacious Interiors', 'Luggage Space', 'USB Charging'],
    description: 'The iconic 7-seater SUV — perfect for family trips and group travel with ample luggage space.',
  },
  {
    id: 'innova-crysta',
    name: 'Innova Crysta',
    type: 'SUV',
    seats: 7,
    ac: true,
    image: '/vehicles/innova-crysta.png',
    amenities: ['AC', 'Music System', 'Spacious Interiors', 'Luggage Space', 'USB Charging', 'Reclining Seats'],
    description: 'Premium upgrade of the Innova — refined comfort, captain seats, and a smoother ride.',
  },
  {
    id: 'swift',
    name: 'Maruti Swift',
    type: 'Hatchback',
    seats: 4,
    ac: true,
    image: '/vehicles/swift.png',
    amenities: ['AC', 'Music System', 'Comfortable Seats', 'Luggage Space'],
    description: 'Compact, fun-to-drive hatchback — ideal for city rides and short trips.',
  },
  {
    id: 'swift-dzire',
    name: 'Swift Dzire',
    type: 'Sedan',
    seats: 4,
    ac: true,
    image: '/vehicles/swift-dzire.png',
    amenities: ['AC', 'Music System', 'Comfortable Seats', 'Spacious Boot'],
    description: 'India\'s favourite sedan — smooth ride, spacious boot, perfect for outstation trips.',
  },
  {
    id: 'i10',
    name: 'Hyundai i10',
    type: 'Hatchback',
    seats: 4,
    ac: true,
    image: '/vehicles/i10.png',
    amenities: ['AC', 'Music System', 'Comfortable Seats', 'Compact & Agile'],
    description: 'Affordable and nimble — great for solo travelers and couples on short rides.',
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller',
    type: 'Traveller',
    seats: 14,
    ac: true,
    image: '/vehicles/tempo-traveller.png',
    amenities: ['AC', 'Music System', 'Push-back Seats', 'Large Luggage Space', 'USB Charging', 'First Aid Kit'],
    description: 'The ultimate group travel machine — pushback seats, generous legroom, and massive boot.',
  },
  {
    id: 'toyota-rumion',
    name: 'Toyota Rumion',
    type: 'MPV',
    seats: 7,
    ac: true,
    image: '/vehicles/toyota-rumion.png',
    amenities: ['AC', 'Music System', 'Spacious Interiors', 'USB Charging', 'Comfortable Seats'],
    description: 'Toyota\'s versatile MPV — spacious, reliable, and great for family outings.',
  },
  {
    id: 'kia-carens',
    name: 'Kia Carens',
    type: 'MPV',
    seats: 6,
    ac: true,
    image: '/vehicles/kia-carens.png',
    amenities: ['AC', 'Music System', 'Ventilated Seats', 'Spacious Interiors', 'USB Charging'],
    description: 'Modern MPV with premium features — ventilated seats, sunroof-ready, and loaded with tech.',
  },
];

export const vehicleTypes = ['All', 'Hatchback', 'Sedan', 'SUV', 'MPV', 'Traveller'];

export const bookingCharges = [
  { daysBefore: '15+ days', advance: '10%' },
  { daysBefore: '10 days', advance: '20%' },
  { daysBefore: 'Last few days', advance: '25%' },
];

export const cancellationPolicy = {
  charge: '20%',
  description: '20% cancellation charges apply on all cancellations.',
};
