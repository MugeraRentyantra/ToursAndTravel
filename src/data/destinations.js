// ============================================
// SWARANJALI TRAVELS — DESTINATIONS & PACKAGES
// ============================================

/**
 * Tour packages — used by both Packages page (full detail) and Home page (tile view).
 * Each entry contains everything needed for both views.
 */
export const tourPackages = [
  {
    id: 'mahabaleshwar',
    destination: 'Mahabaleshwar',
    country: 'Maharashtra, India',
    price: '₹8,500',
    duration: '3 Days / 2 Nights',
    rating: '4.8',
    tag: 'Hill Station',
    image: '/pkg-mahabaleshwar.png',
    features: ['Viewpoint Tours', 'Strawberry Farm Visit', 'Mapro Garden', 'Venna Lake Boating', 'Luxury Resort Stay'],
  },
  {
    id: 'hampi',
    destination: 'Hampi',
    country: 'Karnataka, India',
    price: '₹12,000',
    duration: '3 Days / 2 Nights',
    rating: '4.9',
    tag: 'Heritage',
    image: '/pkg-hampi.png',
    features: ['Virupaksha Temple Tour', 'Coracle Ride in Tungabhadra', 'Stone Chariot Visit', 'Sunset at Matanga Hill', 'Heritage Stay'],
  },
  {
    id: 'coorg',
    destination: 'Coorg',
    country: 'Karnataka, India',
    price: '₹10,500',
    duration: '3 Days / 2 Nights',
    rating: '4.8',
    tag: 'Coffee Capital',
    image: '/pkg-coorg.png',
    features: ['Coffee Plantation Walk', 'Abbey Falls', 'Namdroling Monastery', 'Elephant Camp Visit', 'Traditional Kodava Meal'],
  },
  {
    id: 'lonavala',
    destination: 'Lonavala',
    country: 'Maharashtra, India',
    price: '₹6,500',
    duration: '2 Days / 1 Night',
    rating: '4.7',
    tag: 'Nature',
    image: '/pkg-lonavala.png',
    features: ["Tiger's Point Visit", 'Bhushi Dam', 'Karla Caves', 'Chikki Shopping', 'Scenic Valley Views'],
  },
  {
    id: 'mysore',
    destination: 'Mysore',
    country: 'Karnataka, India',
    price: '₹9,000',
    duration: '2 Days / 1 Night',
    rating: '4.8',
    tag: 'Royal',
    image: '/pkg-mysore.png',
    features: ['Mysore Palace Lighting', 'Brindavan Gardens', 'Chamundi Hills', 'Sand Sculpture Museum', 'Silk Saree Shopping'],
  },
  {
    id: 'gokarna',
    destination: 'Gokarna',
    country: 'Karnataka, India',
    price: '₹11,500',
    duration: '3 Days / 2 Nights',
    rating: '4.9',
    tag: 'Beaches',
    image: '/pkg-gokarna.png',
    features: ['Om Beach Trek', 'Mahabaleshwar Temple Visit', 'Beachside Camping', 'Water Sports', 'Sunset at Half Moon Beach'],
  },
  {
    id: 'matheran',
    destination: 'Matheran',
    country: 'Maharashtra, India',
    price: '₹5,500',
    duration: '2 Days / 1 Night',
    rating: '4.6',
    tag: 'Eco-Friendly',
    image: '/pkg-matheran.png',
    features: ['Toy Train Ride', 'Panorama Point View', 'Eco-friendly Trekking', 'Horse Riding', 'Heritage Stay'],
  },
];

/**
 * Pilgrimage / Darshan packages — huge demand in Maharashtra.
 */
export const pilgrimagePackages = [
  {
    id: 'ashtavinayak',
    destination: 'Ashtavinayak Darshan',
    country: 'Maharashtra, India',
    price: '₹9,500',
    duration: '3 Days / 2 Nights',
    rating: '4.9',
    tag: 'Pilgrimage',
    badge: 'Most Popular',
    image: '/pkg-ashtavinayak.png',
    features: ['All 8 Ganpati Temples', 'Comfortable AC Vehicle', 'Driver + Guide', 'Hotel Accommodation', 'Prasad at Each Temple'],
  },
  {
    id: 'shirdi',
    destination: 'Shirdi Sai Baba',
    country: 'Maharashtra, India',
    price: '₹4,500',
    duration: '2 Days / 1 Night',
    rating: '4.8',
    tag: 'Pilgrimage',
    badge: 'Quick Trip',
    image: '/pkg-shirdi.png',
    features: ['Sai Baba Mandir Darshan', 'Shani Shingnapur Visit', 'Nashik Trimbakeshwar (Optional)', 'AC Vehicle', 'Hotel Stay'],
  },
  {
    id: 'pandharpur',
    destination: 'Pandharpur Vitthal',
    country: 'Maharashtra, India',
    price: '₹3,500',
    duration: '1 Day',
    rating: '4.7',
    tag: 'Pilgrimage',
    badge: 'Day Trip',
    image: '/pkg-pandharpur.png',
    features: ['Vitthal-Rukmini Mandir', 'Chandrabhaga River Visit', 'AC Vehicle with Driver', 'Same-Day Return', 'Flexible Timing'],
  },
  {
    id: 'kolhapur-tuljapur',
    destination: 'Kolhapur & Tuljapur',
    country: 'Maharashtra, India',
    price: '₹5,000',
    duration: '2 Days / 1 Night',
    rating: '4.8',
    tag: 'Pilgrimage',
    badge: 'Shakti Peeth',
    image: '/pkg-kolhapur-tuljapur.png',
    features: ['Mahalakshmi Temple Darshan', 'Tulja Bhavani Darshan', 'Jyotiba Temple Visit', 'AC Vehicle', 'Hotel Stay'],
  },
  {
    id: 'jyotirlinga',
    destination: 'Jyotirlinga Tour',
    country: 'Maharashtra, India',
    price: '₹14,000',
    duration: '4 Days / 3 Nights',
    rating: '4.9',
    tag: 'Pilgrimage',
    badge: 'Premium',
    image: '/pkg-jyotirlinga.png',
    features: ['Bhimashankar', 'Trimbakeshwar', 'Grishneshwar', 'Aundha Nagnath', 'Parli Vaijnath'],
  },
];

/**
 * Combined destinations for home page tiles (simplified view).
 */
export const homeDestinations = tourPackages.map(({ destination, country, image, tag }) => ({
  name: destination,
  country,
  img: image,
  tag,
}));
