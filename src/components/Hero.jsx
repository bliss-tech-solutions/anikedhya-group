import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const SLIDES = [
  {
    id: 1,
    src: '/2026/04/anikedhya-aerial.jpg',
    alt: 'Anikedhya Emperors — Aerial View',
    label: 'Anikedhya Emperors',
  },
  {
    id: 2,
    src: '/2026/04/anikedhya-building-front.jpg',
    alt: 'Anikedhya Emperors — Building Front',
    label: 'Premium Architecture',
  },
  {
    id: 3,
    src: '/2026/04/anikedhya-living-room.jpg',
    alt: 'Anikedhya — Luxury Living Room',
    label: 'Luxury Interiors',
  },
  {
    id: 4,
    src: '/2026/04/anikedhya-rooftop-gazebo.jpg',
    alt: 'Anikedhya — Rooftop Gazebo',
    label: 'World-Class Amenities',
  },
  {
    id: 5,
    src: '/2026/04/anikedhya-balcony-view.jpg',
    alt: 'Anikedhya — Balcony Views',
    label: 'Breathtaking Views',
  },
];

const SLIDE_DURATION = 5000;
const FADE_DURATION  = 1200;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [next,    setNext]    = useState(null);
  const [fading,  setFading]  = useState(false);

  const currentRef = useRef(0);
  const fadingRef  = useRef(false);
  const timerRef   = useRef(null);

  // Keep refs in sync with state
  currentRef.current = current;
  fadingRef.current  = fading;

  // ── Safe slide getter — never returns undefined ──
  const getSlide = (idx) => SLIDES[idx] ?? SLIDES[0];

  // ── Transition helper ──
  const transitionTo = (idx) => {
    if (fadingRef.current) return;
    const safeIdx = ((idx % SLIDES.length) + SLIDES.length) % SLIDES.length;

    setNext(safeIdx);
    setFading(true);
    fadingRef.current = true;

    setTimeout(() => {
      setCurrent(safeIdx);
      currentRef.current = safeIdx;
      setNext(null);
      setFading(false);
      fadingRef.current = false;
    }, FADE_DURATION);
  };

  // ── Auto-play — runs once on mount ──
  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (fadingRef.current) return;
      const nextIdx = (currentRef.current + 1) % SLIDES.length;
      transitionTo(nextIdx);
    }, SLIDE_DURATION);

    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Manual dot click ──
  const goTo = (idx) => {
    if (idx === currentRef.current || fadingRef.current) return;
    clearInterval(timerRef.current);
    transitionTo(idx);

    // Restart auto-play after manual navigation
    timerRef.current = setInterval(() => {
      if (fadingRef.current) return;
      const nextIdx = (currentRef.current + 1) % SLIDES.length;
      transitionTo(nextIdx);
    }, SLIDE_DURATION);
  };

  // ── Safe current slide (never undefined) ──
  const currentSlide = getSlide(current);

  return (
    <section className="hero" id="hero">

      {/* ── SLIDER BACKGROUND ── */}
      <div className="hero__slider" aria-hidden="true">
        {SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={[
              'hero__slide',
              idx === current && !fading ? 'hero__slide--active'   : '',
              idx === current &&  fading ? 'hero__slide--leaving'  : '',
              idx === next               ? 'hero__slide--entering' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            style={{ backgroundImage: `url(${slide.src})` }}
            role="img"
            aria-label={slide.alt}
          />
        ))}
        <div className="hero__slider-overlay" />
      </div>

      <div className="hero__grid" />
      <div className="hero__glow" />

      {/* ── MAIN CONTENT ── */}
      <div className="container">
        <div className="hero__content">

          <div className="hero__eyebrow">
            <span className="hero__eyebrow-line" />
            {/* ✅ Uses safe currentSlide — never undefined */}
            <span className="hero__eyebrow-text">{currentSlide.label}</span>
          </div>

          <h1 className="hero__title">
            Where Luxury
            <strong>Meets Legacy</strong>
          </h1>

          <p className="hero__desc">
            Crafting extraordinary living spaces that transcend the ordinary.
            Anikedhya Group redefines premium real estate with unparalleled
            architecture, timeless design, and enduring value.
          </p>

          <div className="hero__actions">
            <Link to="/projects" className="btn-primary">
              <span>Explore Projects</span>
              <span className="arrow">→</span>
            </Link>
            <Link
              to="/contact"
              className="btn-outline"
              style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.45)' }}
            >
              <span>Enquire Now</span>
            </Link>
          </div>

          {/* ── SLIDE DOTS ── */}
          <div className="hero__dots" role="tablist" aria-label="Slide navigation">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                role="tab"
                aria-selected={idx === current}
                aria-label={`Go to slide ${idx + 1}: ${slide.alt}`}
                className={[
                  'hero__dot',
                  idx === current ? 'hero__dot--active' : '',
                ].join(' ')}
                onClick={() => goTo(idx)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="hero__stats">
        <div className="container">
          <div className="hero__stats-inner">
            <div className="hero__stat">
              <div className="hero__stat-number">G+14</div>
              <div className="hero__stat-label">Storeys</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-number">20+</div>
              <div className="hero__stat-label">World Class Amenities</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-number">3 BHK</div>
              <div className="hero__stat-label">Appartment &amp; Shops</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div className="hero__scroll">
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line" />
      </div>

      {/* ── SLIDE PROGRESS BAR ── */}
      <div className="hero__progress" aria-hidden="true">
        <div
          className="hero__progress-bar"
          style={{ animationDuration: `${SLIDE_DURATION}ms` }}
          key={current}
        />
      </div>

    </section>
  );
}