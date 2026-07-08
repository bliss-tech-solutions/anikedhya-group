import { useParams, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useReveal } from '../components/useReveal';
import { projects } from '../data/projects';
import { iconMap } from "../data/iconMap";

const statusColor = {
  Ongoing: '#B8922A',
  Completed: '#4CAF82',
  Upcoming: '#7A8FA6',
};

export default function ProjectDetailPage() {
  useReveal();
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [activeImg, setActiveImg] = useState(0);

  if (!project) return <Navigate to="/projects" replace />;

  const {
    name, tagline, location, heroImg, status, config, storeys,
    units, area, possession, rera, brochure,
    description, highlights, gallery, amenities,
  } = project;

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="pd-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="pd-hero__overlay" />
        <div className="container">
          <div className="pd-hero__content">
            <Link to="/projects" className="pd-back">
              ← All Projects
            </Link>
            <div
              className="pd-hero__status"
              style={{ background: statusColor[status] }}
            >
              {status}
            </div>
            <h1 className="pd-hero__title">{name}</h1>
            <p className="pd-hero__tagline">{tagline}</p>
            <p className="pd-hero__location">📍 {location}</p>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="page-section">
        <div className="container">
          <div className="pd-main">

            {/* Left: description + highlights + amenities */}
            <div className="pd-main__left reveal">
              <span className="section-tag">
                <span className="gold-line" />
                About the Project
              </span>
              <h2 className="section-title" style={{ fontSize: 'clamp(26px,3.5vw,40px)' }}>
                {name}
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '32px', maxWidth: '100%' }}>
                {description}
              </p>

              {/* Highlights */}
              <div className="pd-highlights">
                <h3 className="pd-sub-heading">Key Highlights</h3>
                <ul className="pd-hl-list">
                  {highlights.map((h) => (
                    <li key={h} className="pd-hl-item">
                      <span className="pd-hl-dot" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Amenities chips — supports both data shapes:
                  { icon, name } objects (most projects) and
                  plain strings (e.g. Capitol 2) */}
              <div className="pd-amenities-wrap">
                <h3 className="pd-sub-heading">Amenities</h3>
                <div className="pd-amenity-chips">
                  {amenities.map((a, i) => {
                    const isObj = typeof a === 'object' && a !== null;
                    const key = isObj ? a.name : a;
                    const IconComp = isObj && typeof a.icon === 'string' ? iconMap[a.icon] : null;
                    return (
                      <span key={key ?? i} className="pd-chip">
                        {IconComp && (
                          <span className="pd-chip__icon" style={{ marginRight: 6 }}>
                            <IconComp />
                          </span>
                        )}
                        {isObj ? a.name : a}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* RERA */}
              <div className="pd-rera">
                <span className="pd-rera__label">RERA Reg. No.</span>
                <span className="pd-rera__value">{rera}</span>
              </div>
            </div>

            {/* Right: gallery + CTA card */}
            <div className="pd-main__right">

              {/* Gallery */}
              <div className="pd-gallery reveal-right">
                <div className="pd-gallery__main">
                  <img
                    src={gallery[activeImg]?.src}
                    alt={gallery[activeImg]?.label}
                  />
                </div>
                {gallery.length > 1 && (
                  <div className="pd-gallery__thumbs">
                    {gallery.map((g, i) => (
                      <button
                        key={g.src}
                        className={`pd-gallery__thumb${i === activeImg ? ' active' : ''}`}
                        onClick={() => setActiveImg(i)}
                        aria-label={g.label}
                        style={{ backgroundImage: `url(${g.src})` }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* CTA card */}
              <div className="pd-cta-card reveal-right delay-2">
                <div className="pd-cta-card__title">Interested in this project?</div>
                <p className="pd-cta-card__sub">
                  Get in touch with our sales team for pricing, floor plans, and a personal site visit.
                </p>
                <div className="pd-cta-card__btns">
                  <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <span>Book a Site Visit</span>
                    <span className="arrow">→</span>
                  </Link>

                  {brochure ? (
                    <a
                      href={brochure}
                      download
                      className="pd-brochure-btn"
                      aria-label="Download Brochure"
                    >
                      <span className="pd-brochure-btn__icon">⬇</span>
                      Download Brochure
                    </a>
                  ) : (
                    <Link to="/contact" className="pd-brochure-btn pd-brochure-btn--disabled">
                      <span className="pd-brochure-btn__icon">📄</span>
                      Request Brochure
                    </Link>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Back to projects ── */}
      <section className="pd-footer-strip">
        <div className="container">
          <Link to="/projects" className="btn-outline">
            ← Back to All Projects
          </Link>
        </div>
      </section>
    </>
  );
}