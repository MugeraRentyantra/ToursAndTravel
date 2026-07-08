import { useState } from 'react';
import '../styles/FAQ.css';

export default function FAQ({ faqs, title = 'Frequently Asked Questions', badge = '❓ FAQ' }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <section className="faq-section section-padding">
      <div className="container">
        <div className="text-center">
          <span className="section-badge">{badge}</span>
          <h2 className="section-title">{title}</h2>
          <div className="divider" />
        </div>
        <div className="faq-list">
          {visibleFaqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item${openIndex === i ? ' faq-item--open' : ''}`}
            >
              <button
                className="faq-item__question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{item.question}</span>
                <span className="faq-item__icon">{openIndex === i ? '−' : '+'}</span>
              </button>
              <div className="faq-item__answer-wrap">
                <p className="faq-item__answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {faqs.length > 3 && (
          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setShowAll(!showAll);
                setOpenIndex(null); // Reset open states when toggling list size
              }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              {showAll ? 'Show Less ▴' : 'View All Questions ▾'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
