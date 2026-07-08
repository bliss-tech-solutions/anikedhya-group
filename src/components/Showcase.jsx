import { Link } from 'react-router-dom';
import { FaTrophy, FaStar } from 'react-icons/fa';

const awards = [
  {
    icon: <FaTrophy />,
    title: 'Best Luxury Developer 2024',
    sub: 'Times Real Estate Awards',
  },
  {
    icon: <FaStar />,
    title: 'CRISIL DA1 Rating',
    sub: "India's Highest Developer Grade",
  },
];

export default function Showcase() {
  return (
    <section className="showcase" id="showcase">
      <div className="container">
        <div className="showcase__inner">

          <div className="showcase__visual reveal-left">
            <img
              src="/2026/04/anikedhya-balcony-view.jpg"
              alt="Anikedhya Emperors balcony view"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,18,8,0.35) 0%, rgba(26,18,8,0.55) 100%)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 60%, rgba(201,168,76,0.12), transparent 60%)' }} />
            <div style={{ position: 'absolute', top: '40px', right: '40px', width: '80px', height: '80px', border: '1px solid rgba(201,168,76,0.2)', borderRight: 'none', borderBottom: 'none' }} />
            <div style={{ position: 'absolute', bottom: '100px', left: '40px', width: '60px', height: '60px', border: '1px solid rgba(201,168,76,0.2)', borderLeft: 'none', borderTop: 'none' }} />
            <div className="showcase__visual-text">
              <p className="showcase__visual-quote">
                "The finest architecture is not built with stone alone, but with the dreams of those who will call it home."
              </p>
              <span className="showcase__visual-author">Anikedhya Group Philosophy</span>
            </div>
          </div>

          <div className="showcase__content reveal-right">
            <span className="section-tag">
              <span className="gold-line" />
              Why Choose Us
            </span>
            <h2 className="section-title">
              A Name Synonymous<br />with <em>Excellence</em>
            </h2>
            <p className="section-subtitle">
              Fifteen years of delivering landmark projects on time, within budget,
              and beyond expectations. Our track record speaks for itself.
            </p>

            <div className="showcase__numbers">
              {/* <div className="showcase__num-item">
                <div className="showcase__num-value">50+</div>
                <div className="showcase__num-label">Projects Delivered</div>
              </div> */}
              <div className="showcase__num-item">
                <div className="showcase__num-value">100%</div>
                <div className="showcase__num-label">On-Time Delivery</div>
              </div>
              <div className="showcase__num-item">
                <div className="showcase__num-value">4.9★</div>
                <div className="showcase__num-label">Customer Rating</div>
              </div>
              {/* <div className="showcase__num-item">
                <div className="showcase__num-value">25+</div>
                <div className="showcase__num-label">Industry Awards</div>
              </div> */}
            </div>

            <div className="showcase__awards">
              {awards.map((a) => (
                <div className="showcase__award" key={a.title}>
                  <span className="showcase__award-icon">{a.icon}</span>
                  <div className="showcase__award-text">
                    <strong>{a.title}</strong>
                    {a.sub}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '36px' }}>
              <Link to="/contact" className="btn-primary">
                <span>Book a Visit</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
