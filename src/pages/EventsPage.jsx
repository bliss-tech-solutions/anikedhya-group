import { useState, useEffect, useCallback } from 'react';
import PageHero from '../components/PageHero';
import { useReveal } from '../components/useReveal';
import { FaCalendar, FaMap } from 'react-icons/fa';

/* ─────────────────────────────────────────
   EVENT DATA
───────────────────────────────────────── */
const BASE = '/Events/';

// 30 photos — all .jpg
const udaipurPhotos = Array.from({ length: 29 }, (_, i) => ({
  src: `${BASE}event_image_${i + 1}.jpeg`,
  alt: `Anikedhya Udaipur Trip Photo ${i + 1}`,
}));

const events = [
  {
    id: 'udaipur-2025',
    title: 'Anikedhya Udaipur',
    subtitle: 'Channel Partner Appreciation Trip',
    date: 'April 2026',
    location: 'Udaipur, Rajasthan',
    description:
      'A grand appreciation trip to the City of Lakes celebrating our top-performing channel partners with an unforgettable Udaipur experience. Two days of luxury, bonding, and memories that last a lifetime.',
    cover: `${BASE}Unicorn-1_resized.jpg`,
    photos: udaipurPhotos,
  },
];

/* ─────────────────────────────────────────
   LIGHTBOX COMPONENT
───────────────────────────────────────── */
function Lightbox({ photos, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + photos.length) % photos.length), [photos.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % photos.length), [photos.length]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prev, next, onClose]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="ev-lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer">
      <div className="ev-lightbox__backdrop" onClick={onClose} />

      <button className="ev-lightbox__close" onClick={onClose} aria-label="Close">✕</button>

      <button className="ev-lightbox__nav ev-lightbox__nav--prev" onClick={prev} aria-label="Previous photo">‹</button>

      <div className="ev-lightbox__img-wrap">
        <img
          key={current}
          src={photos[current].src}
          alt={photos[current].alt}
          className="ev-lightbox__img"
          loading="lazy"
        />
        <div className="ev-lightbox__counter">{current + 1} / {photos.length}</div>
      </div>

      <button className="ev-lightbox__nav ev-lightbox__nav--next" onClick={next} aria-label="Next photo">›</button>
    </div>
  );
}

/* ─────────────────────────────────────────
   PHOTO GALLERY with LOAD MORE
───────────────────────────────────────── */
const PAGE_SIZE = 24;

function EventGallery({ photos }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const shownPhotos = photos.slice(0, visible);
  const hasMore = visible < photos.length;

  return (
    <div className="ev-gallery-wrap">
      <div className="ev-gallery__grid">
        {shownPhotos.map((photo, i) => (
          <button
            key={i}
            className="ev-gallery__item"
            onClick={() => setLightboxIndex(i)}
            aria-label={`Open photo ${i + 1}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="ev-gallery__img"
            />
          </button>
        ))}
      </div>

      {hasMore && (
        <div className="ev-gallery__load-more">
          <button className="btn-outline" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
            Load More Photos ({photos.length - visible} remaining)
          </button>
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
export default function EventsPage() {
  useReveal();
  const event = events[0];

  return (
    <>
      <PageHero
        tag="Events & Experiences"
        title="Creating"
        em="Memories"
        subtitle="Celebrating milestones, rewarding excellence, and building community one unforgettable event at a time."
        image={event.cover}
      />

      {/* ── Event Header ── */}
      <section className="page-section">
        <div className="container">
          <div className="ev-header reveal">
            <div className="ev-header__meta">
              <span className="ev-header__tag">
                <span className="gold-line" style={{ display: 'inline-block', marginRight: 8 }} />
                {event.subtitle}
              </span>
              <span className="ev-header__date"><FaCalendar/> {event.date}</span>
              <span className="ev-header__loc"><FaMap/> {event.location}</span>
            </div>
            <h1 className="ev-header__title">{event.title}</h1>
            <p className="ev-header__desc">{event.description}</p>
          </div>
        </div>
      </section>

      {/* ── Photo Counter ── */}
      <div className="ev-photo-bar">
        <div className="container">
          <div className="ev-photo-bar__inner">
            <span className="ev-photo-bar__count">{event.photos.length}</span>
            <span className="ev-photo-bar__label">Photos from this event</span>
          </div>
        </div>
      </div>

      {/* ── Gallery ── */}
      <section className="page-section">
        <div className="container">
          <div className="section-header-center reveal">
            <div className="section-tag"><span className="gold-line" />Photo Gallery</div>
            <h2 className="section-title">Moments from <em>Udaipur</em></h2>
            <p className="section-subtitle">
              Click any photo to view in full size. Use arrow keys or the navigation buttons to browse.
            </p>
          </div>
          <EventGallery photos={event.photos} />
        </div>
      </section>
    </>
  );
}