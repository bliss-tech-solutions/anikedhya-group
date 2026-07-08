import { useReveal } from '../components/useReveal';
import PageHero from '../components/PageHero';

const items = [
  { bg: 'gi-bg-1', h: 'gi-h-1', label: 'Grand Lobby Entrance', cat: 'Common Areas' },
  { bg: 'gi-bg-2', h: 'gi-h-2', label: 'Rooftop Gazebo', cat: 'Amenities' },
  { bg: 'gi-bg-3', h: 'gi-h-3', label: 'Master Bedroom', cat: 'Interior' },
  { bg: 'gi-bg-4', h: 'gi-h-4', label: 'Landscaped Garden', cat: 'Common Areas' },
  { bg: 'gi-bg-5', h: 'gi-h-5', label: 'Balcony Views', cat: 'Interior' },
  { bg: 'gi-bg-6', h: 'gi-h-6', label: 'Modular Kitchen', cat: 'Interior' },
  { bg: 'gi-bg-7', h: 'gi-h-7', label: 'Living Room', cat: 'Interior' },
  { bg: 'gi-bg-8', h: 'gi-h-8', label: 'Balcony Sitting Area', cat: 'Interior' },
  { bg: 'gi-bg-1', h: 'gi-h-2', label: 'Building Entrance Gate', cat: 'Exterior' },
  { bg: 'gi-bg-2', h: 'gi-h-3', label: 'Rooftop Retreat', cat: 'Amenities' },
  { bg: 'gi-bg-3', h: 'gi-h-1', label: 'Aerial View', cat: 'Exterior' },
  { bg: 'gi-bg-4', h: 'gi-h-4', label: 'Chess Court', cat: 'Amenities' },
];

export default function GalleryPage() {
  useReveal();

  return (
    <>
      <PageHero
        tag="Visual Journey"
        title="Inside Our"
        em="Masterpieces"
        subtitle="A curated visual tour through the spaces that define elevated living."
        image="/2026/04/anikedhya-balcony-view.jpg"
      />

      <section className="page-section">
        <div className="container">

          <div className="gallery__masonry">
            {items.map((item, i) => (
              <div key={`${item.label}-${i}`} className={`gallery__item reveal delay-${(i % 4) + 1}`}>
                <div className={`gallery__item-placeholder ${item.bg} ${item.h}`} />
                <div className="gallery__item-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
