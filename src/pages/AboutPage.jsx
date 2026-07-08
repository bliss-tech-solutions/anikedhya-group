import { useReveal } from '../components/useReveal';
import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';
import { FaLandmark, FaGem, FaHandshake, FaLeaf } from 'react-icons/fa';

const values = [
  {
    icon: <FaLandmark />,
    title: 'Legacy Architecture',
    text: 'Designs that stand the test of time, blending heritage with contemporary vision.',
  },
  {
    icon: <FaGem />,
    title: 'Premium Quality',
    text: 'Only the finest materials and master craftsmen grace every one of our projects.',
  },
  {
    icon: <FaHandshake />,
    title: 'Client First',
    text: 'Every decision is made with your vision, lifestyle, and aspirations in mind.',
  },
  {
    icon: <FaLeaf />,
    title: 'Sustainable Living',
    text: 'Eco-conscious construction for a greener, healthier tomorrow.',
  },
];

const milestones = [
  { year: '2008', event: 'Founded in Ahmedabad with a vision for luxury real estate.' },
  { year: '2012', event: 'Delivered first landmark project in Gota 200+ families housed.' },
  { year: '2016', event: 'Expanded to commercial & mixed-use developments.' },
  { year: '2020', event: 'Won "Best Luxury Developer" at Times Real Estate Awards.' },
  { year: '2024', event: 'Launched Anikedhya Emperors our most iconic G+14 tower.' },
];

export default function AboutPage() {
  useReveal();
  return (
    <>
      <PageHero
        tag="Our Story"
        title="Building Dreams,"
        em="Creating Legacies"
        subtitle="15+ years of architectural excellence in Ahmedabad's most sought-after addresses."
        image="/2026/04/anikedhya-aerial.jpg"
      />

      {/* Story Section */}
      <section className="page-section bg-card">
        <div className="container">
          <div className="about__grid">

            <div className="about__image-wrap reveal-left">
              <div className="about__image-placeholder">
                <img
                  src="/2026/04/anikedhya-building-front.jpg"
                  alt="Anikedhya Emperors Building"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(26,20,18,0.25) 100%)' }} />
              </div>
              <div className="about__image-accent" />
            </div>

            <div className="about__text reveal-right">
              <span className="section-tag">
                <span className="gold-line" />
                Who We Are
              </span>
              <h2 className="section-title">A Trusted Name in<br /><em>Luxury Living</em></h2>
              <p className="section-subtitle" style={{ marginBottom: '16px' }}>
                Since 2017, Anikedhya Group has emerged as a progressive force in the
                infrastructure landscape, driven by a vision to shape enduring urban
                environments.
              </p>
              <p className="section-subtitle" style={{ marginBottom: '16px' }}>
                Built on the pillars of trust, precision, and uncompromising quality,
                the group has consistently delivered excellence across every project.
                With a portfolio of 14+ landmark developments, each creation reflects
                thoughtful planning, architectural finesse, and long-term value.
              </p>
              <p className="section-subtitle" style={{ marginBottom: '32px' }}>
                Our approach blends innovation with functionality, ensuring spaces that
                are not only structurally sound but also future-ready. Committed to
                redefining cityscapes, Anikedhya Group continues to craft developments
                that stand as symbols of strength, sophistication, and lasting impact.
              </p>
              <Link to="/contact" className="btn-primary">
                <span>Get in Touch</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="page-section">
        <div className="container">
          <div className="section-header-center reveal">
            <span className="section-tag" style={{ justifyContent: 'center' }}>
              <span className="gold-line" />Our Values<span className="gold-line" style={{ background: 'linear-gradient(270deg,var(--gold),transparent)' }} />
            </span>
            <h2 className="section-title" style={{ textAlign: 'center' }}>What We <em>Stand For</em></h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className={`value-card reveal delay-${i + 1}`} key={v.title}>
                <div className="value-card__icon">{v.icon}</div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="page-section bg-card">
        <div className="container">
          <div className="reveal" style={{ marginBottom: '48px' }}>
            <span className="section-tag">
              <span className="gold-line" />
              Our Journey
            </span>
            <h2 className="section-title">Milestones That<br /><em>Define Us</em></h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div className={`timeline__item reveal delay-${(i % 3) + 1}`} key={m.year}>
                <div className="timeline__year">{m.year}</div>
                <div className="timeline__dot" />
                <div className="timeline__event">{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
