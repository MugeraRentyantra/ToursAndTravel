import PackageCard from '../components/PackageCard';
import PageHero from '../components/PageHero';
import { tourPackages, pilgrimagePackages } from '../data/destinations';
import '../styles/Packages.css';

export default function Packages() {
  return (
    <div className="packages-page">
      <PageHero
        badge="🌏 Discover MH & KA"
        title="Our Tour Packages"
        subtitle="Handcrafted journeys to the most stunning destinations across Maharashtra and Karnataka — each package designed to create lasting memories."
      />

      {/* Tour Packages Section */}
      <section className="section-padding" style={{ paddingBottom: '0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
            <span className="section-badge">🚗 Scenic Tours</span>
            <h2 className="section-title">Popular Holiday Destinations</h2>
            <div className="divider" />
          </div>
          <div className="packages-grid">
            {tourPackages.map((pkg) => (
              <PackageCard key={pkg.destination} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Pilgrimage / Darshan Packages Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
            <span className="section-badge">🙏 Darshan Tours</span>
            <h2 className="section-title">Holy Pilgrimage Packages</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Convenient and hassle-free darshan tours to the most sacred temples of Maharashtra and nearby states.
            </p>
          </div>
          <div className="packages-grid">
            {pilgrimagePackages.map((pkg) => (
              <PackageCard key={pkg.destination} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
