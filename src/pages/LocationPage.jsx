import { useReveal } from '../components/useReveal';
import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';

const points = [
  { icon: '🚆', name: 'Ahmedabad Railway Station',              detail: 'Major railway connectivity across Gujarat and India.',           distance: '20 Min' },
  { icon: '🏥', name: 'Zydus Hospital',                         detail: "One of Ahmedabad's leading multi-specialty hospitals.",           distance: '10 Min' },
  { icon: '🛍️', name: 'D-Mart, Malls & Retail Zones',          detail: 'Shopping, restaurants and entertainment nearby.',                 distance: '5 Min'  },
  { icon: '✈️', name: 'Sardar Vallabhbhai Patel Airport',       detail: 'Quick access to domestic and international flights.',            distance: '20 Min' },
  { icon: '🏫', name: 'Schools & Colleges',                     detail: 'Top-rated educational institutions within easy reach.',           distance: '8 Min'  },
  { icon: '🏢', name: 'SG Highway Business Hubs',               detail: 'Proximity to Ahmedabad\'s corporate and commercial corridors.',  distance: '15 Min' },
];

export default function LocationPage() {
  useReveal();
  return (
    <>
      <PageHero
        tag="Prime Location"
        title="Connected to Every"
        em="Essential Destination"
        subtitle="Strategically located in Gota, Anikedhya Emperors offers unmatched city connectivity."
        image="/2026/04/anikedhya-aerial-view.jpg"
      />

      <section className="page-section">
        <div className="container">
          <div className="location__grid">
            {/* Points */}
            <div>
              <div className="reveal" style={{ marginBottom: '32px' }}>
                <span className="section-tag">
                  <span className="gold-line" />
                  Proximity Map
                </span>
                <h2 className="section-title">Everything is<br /><em>Close By</em></h2>
                <p className="section-subtitle" style={{ marginBottom: '0' }}>
                  Anikedhya Emperors sits at the heart of Gota — Ahmedabad's fastest-growing premium suburb — with seamless access to every destination that matters.
                </p>
              </div>
              <div className="location__points reveal">
                {points.map((p) => (
                  <div className="location__point" key={p.name}>
                    <div className="location__point-icon">{p.icon}</div>
                    <div className="location__point-info">
                      <div className="location__point-name">{p.name}</div>
                      <div className="location__point-detail">{p.detail}</div>
                    </div>
                    <div className="location__point-distance">{p.distance}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map visual */}
            <div className="reveal-right">
              <div className="location__map-wrap">
                <div className="location__map">
                  <div className="location__map-pin">
                    <div className="location__map-pin-dot" />
                    <div className="location__map-pin-label">Anikedhya Emperors</div>
                  </div>
                  {[
                    { top: '18%', left: '30%' }, { top: '30%', left: '72%' },
                    { top: '65%', left: '28%' }, { top: '78%', left: '65%' },
                    { top: '22%', left: '58%' }, { top: '70%', left: '45%' },
                  ].map((pos, i) => (
                    <div key={i} style={{ position: 'absolute', top: pos.top, left: pos.left, width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(184,146,42,0.5)' }} />
                  ))}
                  <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.25 }}>
                    {[['30%','18%'],['72%','30%'],['28%','65%'],['65%','78%']].map(([x, y], i) => (
                      <line key={i} x1={x} y1={y} x2="50%" y2="50%" stroke="#B8922A" strokeWidth="0.5" strokeDasharray="4,4" />
                    ))}
                  </svg>
                </div>
              </div>

              <div className="location__cta-box">
                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--text-head)', marginBottom: '4px' }}>Gota, Ahmedabad</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Gujarat, India</div>
                </div>
                <Link to="/contact" className="btn-primary" style={{ padding: '12px 24px', fontSize: '10px' }}>
                  <span>Get Directions</span>
                  <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
