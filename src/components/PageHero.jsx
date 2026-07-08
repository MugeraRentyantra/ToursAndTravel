import '../styles/PageHero.css';

/**
 * Reusable page hero banner.
 * @param {{ badge: string, title: string, subtitle: string, light?: boolean }} props
 */
export default function PageHero({ badge, title, subtitle, light = false }) {
  return (
    <section className={`page-hero${light ? ' page-hero--light' : ''}`}>
      <div className="container page-hero__inner">
        {badge && <span className="section-badge">{badge}</span>}
        <h1 className="section-title">{title}</h1>
        <div className="divider" />
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
