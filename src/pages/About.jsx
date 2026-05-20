import '../styles/About.css';

const team = [
  {
    name: 'Dhananjay',
    role: 'Founder & CEO',
    bio: '8+ years of experience in travel and transport across Maharashtra. Passionate about making travel safe and accessible for all.',
    img: null,
    initial: 'D',
    color: '#c9a84c',
  },
  {
    name: 'Yogesh',
    role: 'Head of Operations',
    bio: 'Manages the entire fleet and driver team. Ensures every trip runs smoothly from pickup to drop.',
    img: null,
    initial: 'Y',
    color: '#0a7ea4',
  },
  {
    name: 'Namira',
    role: 'Customer Relations',
    bio: 'The friendly voice behind every booking. Dedicated to ensuring every traveler has a wonderful experience.',
    img: null,
    initial: 'N',
    color: '#10b981',
  },
];

const milestones = [
  { year: '2018', title: 'Company Founded', desc: 'Swaranjali Travels started with 2 cars and a vision to provide reliable, comfortable rides from Karad.' },
  { year: '2020', title: 'Fleet Expansion', desc: 'Grew to 8+ vehicles including Innova Crysta, Tempo Traveller, and multiple sedan options.' },
  { year: '2022', title: 'Tour Packages Launched', desc: 'Introduced curated tour packages to popular destinations across Maharashtra and Karnataka.' },
  { year: '2025', title: '500+ Happy Trips', desc: 'Crossed the milestone of 500+ successful trips with 10,000+ satisfied travelers.' },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container about-hero__inner">
          <span className="section-badge">🌐 Our Story</span>
          <h1 className="section-title">We Are Swaranjali Travels</h1>
          <div className="divider" />
          <p className="section-subtitle">
            प्रवास तुमचा जबाबदारी आमची — Your journey is our responsibility.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding">
        <div className="container about-story">
          <div className="about-story__text">
            <span className="section-badge">Our Mission</span>
            <h2 className="section-title">Safe, Comfortable Travel for Everyone</h2>
            <div className="divider left" />
            <p>
              At Swaranjali Travels, we believe that every journey should be safe, comfortable, and worry-free. Founded in Karad, Maharashtra, we've been providing premium ride services with professional drivers to thousands of travelers across the state.
            </p>
            <p style={{ marginTop: '1rem' }}>
              We are not just a car rental company — we are your travel partner. From the moment you book to the moment you arrive, our dedicated team ensures every detail is handled with care. Every vehicle comes with a verified, experienced driver at no extra cost.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Our fleet includes everything from compact hatchbacks for city rides to spacious Tempo Travellers for group pilgrimages and tours. Whatever your travel need, Swaranjali Travels has you covered.
            </p>
          </div>
          <div className="about-story__visual">
            <div className="about-story__card about-story__card--1">
              <span className="about-story__card-icon"><img src="/logo.png" alt="" className="badge-logo" style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#fff' }} /></span>
              <h4>8+ Vehicles</h4>
              <p>From Swift to Tempo Traveller</p>
            </div>
            <div className="about-story__card about-story__card--2">
              <span className="about-story__card-icon">⭐</span>
              <h4>4.9 / 5 Rating</h4>
              <p>From 500+ satisfied travelers</p>
            </div>
            <div className="about-story__card about-story__card--3">
              <span className="about-story__card-icon">🧑‍✈️</span>
              <h4>Driver Included</h4>
              <p>With every single booking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding milestones-section">
        <div className="container">
          <div className="text-center">
            <span className="section-badge">📅 Timeline</span>
            <h2 className="section-title light">Our Journey So Far</h2>
            <div className="divider" />
          </div>
          <div className="milestones">
            {milestones.map(({ year, title, desc }) => (
              <div key={year} className="milestone">
                <div className="milestone__year">{year}</div>
                <div className="milestone__connector">
                  <div className="milestone__dot" />
                  <div className="milestone__line" />
                </div>
                <div className="milestone__content">
                  <h3 className="milestone__title">{title}</h3>
                  <p className="milestone__desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <span className="section-badge">👥 Meet the Team</span>
            <h2 className="section-title">The People Behind Swaranjali Travels</h2>
            <div className="divider" />
            <p className="section-subtitle">Dedicated professionals who make every journey memorable.</p>
          </div>
          <div className="team-grid">
            {team.map(({ name, role, bio, initial, color }) => (
              <div key={name} className="team-card">
                <div className="team-card__avatar" style={{ background: `linear-gradient(135deg, ${color}22, ${color}44)`, border: `2px solid ${color}44` }}>
                  <span style={{ color }}>{initial}</span>
                </div>
                <h3 className="team-card__name">{name}</h3>
                <p className="team-card__role">{role}</p>
                <p className="team-card__bio">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
