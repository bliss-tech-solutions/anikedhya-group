import { Link } from 'react-router-dom';
import { FaLandmark, FaGem, FaHandshake, FaLeaf } from 'react-icons/fa';

const values = [
  {
    icon: <FaLandmark />,
    title: 'Legacy Architecture',
    text: 'Designs that stand the test of time, blending heritage with modernity.',
  },
  {
    icon: <FaGem />,
    title: 'Premium Quality',
    text: 'Only the finest materials and master craftsmen grace our projects.',
  },
  {
    icon: <FaHandshake />,
    title: 'Client First',
    text: 'Every decision is made with your vision and lifestyle in mind.',
  },
  {
    icon: <FaLeaf />,
    title: 'Sustainable Living',
    text: 'Eco-conscious construction for a greener, healthier tomorrow.',
  },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__image-wrap reveal-left">
            <div className="about__image-placeholder">
              <img src="/2026/04/anikedhya-building-front.jpg" alt="Anikedhya Emperors Building" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(26,20,18,0.25) 100%)' }} />
            </div>
            <div className="about__image-accent" />
          </div>
          <div className="about__text reveal-right">
            <span className="section-tag">
              <span className="gold-line" />
              Our Story
            </span>
            <h2 className="section-title">
              Building Dreams,<br /><em>Creating Legacies</em>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: '16px' }}>
              Anikedhya Emperors is a masterpiece of architectural grandeur a G+14 residential tower in the heart of Gota, designed for those who believe their home should reflect the life they've built.
            </p>
            <p className="section-subtitle" style={{ marginBottom: '32px' }}>
              With neo-classical architecture, lush green courtyards, a rooftop retreat, ground floor retail, and over 20 world-class amenities Anikedhya Emperors redefines premium living in Ahmedabad's most sought-after suburb.
            </p>
            <div className="about__values">
              {values.map((v, i) => (
                <div className={`about__value reveal delay-${i + 1}`} key={v.title}>
                  <div className="about__value-icon">{v.icon}</div>
                  <div className="about__value-title">{v.title}</div>
                  <div className="about__value-text">{v.text}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/about" className="btn-primary">
                <span>Our Story</span>
                <span className="arrow">→</span>
              </Link>
              <Link to="/projects" className="btn-outline">View Projects</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}