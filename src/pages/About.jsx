import '../styles/About.css';

const team = [
  {
    name: 'Dhananjay',
    role: 'Founder & CEO',
    bio: '20+ years shaping unforgettable travel experiences across 40+ countries.',
    img: null,
    initial: 'A',
    color: '#c9a84c',
  },
  {
    name: 'Yogesh',
    role: 'Head of Operations',
    bio: 'Master logistics expert ensuring every trip runs seamlessly from start to finish.',
    img: null,
    initial: 'M',
    color: '#0a7ea4',
  },
  {
    name: 'Namira',
    role: 'Lead Travel Consultant',
    bio: 'Passionate explorer who has visited 60+ destinations and loves personalizing trips.',
    img: null,
    initial: 'R',
    color: '#10b981',
  },
];

const milestones = [
  { year: '2016', title: 'Company Founded', desc: 'Started with a team of 3 and a dream to make travel accessible and extraordinary.' },
  { year: '2018', title: 'Expanded to 20 Destinations', desc: 'Grew our portfolio to cover Southeast Asia, Europe, and across India.' },
  { year: '2021', title: 'Launched Ride Services', desc: 'Added premium airport transfers and city rides to complement our tour packages.' },
  { year: '2024', title: '10,000 Happy Travelers', desc: 'A proud milestone — serving thousands of satisfied travelers and counting.' },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container about-hero__inner">
          <span className="section-badge">🌐 Our Story</span>
          <h1 className="section-title">We Are Wanderlust</h1>
          <div className="divider" />
          <p className="section-subtitle">
            Born from a passion for exploration, built on trust and excellence.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding">
        <div className="container about-story">
          <div className="about-story__text">
            <span className="section-badge">Our Mission</span>
            <h2 className="section-title">Travel Should Be Transformative</h2>
            <div className="divider left" />
            <p>
              At Wanderlust Travel & Rides, we believe that every journey has the power to change you. Founded in 2016, we've been crafting unforgettable travel experiences for thousands of adventurers, honeymooners, families, and solo explorers.
            </p>
            <p style={{ marginTop: '1rem' }}>
              We are not just a travel agency — we are your travel companion. From the moment you book to the moment you return home, our dedicated team ensures every detail is perfect, every surprise is delightful, and every memory is priceless.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Our premium ride service extends the same philosophy — reliable, comfortable, and always on time. Whether it's an airport transfer or a cross-city journey, we deliver with excellence.
            </p>
          </div>
          <div className="about-story__visual">
            <div className="about-story__card about-story__card--1">
              <span className="about-story__card-icon">🌍</span>
              <h4>50+ Destinations</h4>
              <p>Across Asia, Europe & India</p>
            </div>
            <div className="about-story__card about-story__card--2">
              <span className="about-story__card-icon">⭐</span>
              <h4>4.9 / 5 Rating</h4>
              <p>From 2000+ verified reviews</p>
            </div>
            <div className="about-story__card about-story__card--3">
              <span className="about-story__card-icon">🏆</span>
              <h4>Award Winning</h4>
              <p>Best Travel Agency 2023</p>
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
            <h2 className="section-title">The People Behind Wanderlust</h2>
            <div className="divider" />
            <p className="section-subtitle">Passionate travelers who live to create extraordinary journeys for you.</p>
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
