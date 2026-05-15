import PackageCard from '../components/PackageCard';
import '../styles/Packages.css';

const packages = [
  {
    destination: 'Mahabaleshwar',
    country: 'Maharashtra, India',
    price: '₹8,500',
    duration: '3 Days / 2 Nights',
    rating: '4.8',
    image: '/pkg-mahabaleshwar.png',
    features: ['Viewpoint Tours', 'Strawberry Farm Visit', 'Mapro Garden', 'Venna Lake Boating', 'Luxury Resort Stay'],
  },
  {
    destination: 'Hampi',
    country: 'Karnataka, India',
    price: '₹12,000',
    duration: '3 Days / 2 Nights',
    rating: '4.9',
    image: '/pkg-hampi.png',
    features: ['Virupaksha Temple Tour', 'Coracle Ride in Tungabhadra', 'Stone Chariot Visit', 'Sunset at Matanga Hill', 'Heritage Stay'],
  },
  {
    destination: 'Coorg',
    country: 'Karnataka, India',
    price: '₹10,500',
    duration: '3 Days / 2 Nights',
    rating: '4.8',
    image: '/pkg-coorg.png',
    features: ['Coffee Plantation Walk', 'Abbey Falls', 'Namdroling Monastery', 'Elephant Camp Visit', 'Traditional Kodava Meal'],
  },
  {
    destination: 'Lonavala',
    country: 'Maharashtra, India',
    price: '₹6,500',
    duration: '2 Days / 1 Night',
    rating: '4.7',
    image: '/pkg-lonavala.png',
    features: ["Tiger's Point Visit", 'Bhushi Dam', 'Karla Caves', 'Chikki Shopping', 'Scenic Valley Views'],
  },
  {
    destination: 'Mysore',
    country: 'Karnataka, India',
    price: '₹9,000',
    duration: '2 Days / 1 Night',
    rating: '4.8',
    image: '/pkg-mysore.png',
    features: ['Mysore Palace Lighting', 'Brindavan Gardens', 'Chamundi Hills', 'Sand Sculpture Museum', 'Silk Saree Shopping'],
  },
  {
    destination: 'Gokarna',
    country: 'Karnataka, India',
    price: '₹11,500',
    duration: '3 Days / 2 Nights',
    rating: '4.9',
    image: '/pkg-gokarna.png',
    features: ['Om Beach Trek', 'Mahabaleshwar Temple Visit', 'Beachside Camping', 'Water Sports', 'Sunset at Half Moon Beach'],
  },
  {
    destination: 'Matheran',
    country: 'Maharashtra, India',
    price: '₹5,500',
    duration: '2 Days / 1 Night',
    rating: '4.6',
    image: '/pkg-matheran.png',
    features: ['Toy Train Ride', 'Panorama Point View', 'Eco-friendly Trekking', 'Horse Riding', 'Heritage Stay'],
  },
];

export default function Packages() {
  return (
    <div className="packages-page">
      <section className="packages-hero">
        <div className="container packages-hero__inner">
          <span className="section-badge">🌏 Discover MH & KA</span>
          <h1 className="section-title">Our Tour Packages</h1>
          <div className="divider" />
          <p className="section-subtitle">
            Handcrafted journeys to the most stunning destinations across Maharashtra and Karnataka — each package designed to create lasting memories.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="packages-grid">
            {packages.map((pkg) => (
              <PackageCard key={pkg.destination} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
