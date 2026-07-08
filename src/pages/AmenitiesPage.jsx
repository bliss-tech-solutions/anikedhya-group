import { useReveal } from '../components/useReveal';
import PageHero from '../components/PageHero';
import {
  FaDumbbell,
  FaTableTennisPaddleBall,
  FaFilm,
  FaLeaf,
  FaChess,
  FaUmbrellaBeach,
  FaBuilding,
  FaElevator,
  FaBolt,
  FaCloudRain,
  FaWheelchair,
} from 'react-icons/fa6';
import { FaShieldAlt } from 'react-icons/fa';

const amenities = [
  {
    icon: <FaDumbbell />,
    name: 'State-of-the-Art Gym',
    desc: 'Premium fitness equipment, boxing, cardio & strength training zones.',
    img: '/anikedhya-gym.jpg',
  },
  {
    icon: <FaTableTennisPaddleBall />,
    name: 'Table Tennis Lounge',
    desc: 'Dedicated indoor sports lounge with professional-grade equipment.',
    img: '/anikedhya-table-tennis.jpg',
  },
  {
    icon: <FaFilm />,
    name: 'Open-Air Home Theatre',
    desc: 'Lush garden amphitheatre with outdoor cinema experience under the stars.',
    img: '/anikedhya-outdoor-theater.jpg',
  },
  {
    icon: <FaLeaf />,
    name: 'Landscaped Gardens',
    desc: 'Manicured green spaces and serene walking pathways for daily tranquillity.',
    img: '/anikedhya-garden.jpg',
  },
  {
    icon: <FaChess />,
    name: 'Rooftop Chess Court',
    desc: 'Sky-high recreation with a premium chess setup and panoramic views.',
    img: '/anikedhya-rooftop-chess.jpg',
  },
  {
    icon: <FaUmbrellaBeach />,
    name: 'Rooftop Gazebo',
    desc: 'An elegant sky retreat to unwind and soak in Ahmedabad skyline.',
    img: '/anikedhya-rooftop-gazebo.jpg',
  },
  {
    icon: <FaBuilding />,
    name: 'Grand Lobby & Entrance',
    desc: 'A statement entrance with premium marble, designer lighting & security.',
    img: '/anikedhya-entrance.jpg',
  },
  {
    icon: <FaElevator />,
    name: 'High-Speed Elevators',
    desc: 'Multiple high-speed lifts for smooth and swift vertical movement.',
    img: null,
  },
  {
    icon: <FaShieldAlt />,
    name: '24×7 Security',
    desc: 'CCTV surveillance, intercom system, and trained security personnel.',
    img: null,
  },
  {
    icon: <FaBolt />,
    name: 'Power Backup',
    desc: 'Uninterrupted 100% power backup for all common areas and residences.',
    img: null,
  },
  {
    icon: <FaCloudRain />,
    name: 'Rainwater Harvesting',
    desc: 'Sustainable water management with integrated harvesting infrastructure.',
    img: null,
  },
  {
    icon: <FaWheelchair />,
    name: 'Barrier-Free Access',
    desc: 'Thoughtfully designed ramps and access points for all residents.',
    img: null,
  },
];

export default function AmenitiesPage() {
  useReveal();
  return (
    <>
      <PageHero
        tag="World-Class Living"
        title="Amenities That"
        em="Inspire Life"
        subtitle="Over 40 world-class amenities thoughtfully designed to elevate every day."
        image="/anikedhya-gym.jpg"
      />

      {/* Feature amenities with images */}
      <section className="page-section">
        <div className="container">
          <div className="reveal" style={{ marginBottom: '48px' }}>
            <span className="section-tag">
              <span className="gold-line" />
              Featured Spaces
            </span>
            <h2 className="section-title">Spaces That<br /><em>Elevate Life</em></h2>
          </div>
          <div className="amenities-featured">
            {amenities.filter(a => a.img).map((a, i) => (
              <div className={`amenity-feat reveal-scale delay-${(i % 3) + 1}`} key={a.name}>
                <div className="amenity-feat__img">
                  <img src={a.img} alt={a.name} />
                  <div className="amenity-feat__overlay" />
                  <div className="amenity-feat__icon">{a.icon}</div>
                </div>
                <div className="amenity-feat__body">
                  <h3 className="amenity-feat__name">{a.name}</h3>
                  <p className="amenity-feat__desc">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full list */}
      <section className="page-section bg-card">
        <div className="container">
          <div className="reveal" style={{ marginBottom: '48px' }}>
            <span className="section-tag">
              <span className="gold-line" />
              All Amenities
            </span>
            <h2 className="section-title">Everything You<br /><em>Could Desire</em></h2>
          </div>
          <div className="amenities-list-full">
            {amenities.map((a, i) => (
              <div className={`amenity-row reveal delay-${(i % 4) + 1}`} key={a.name}>
                <div className="amenity-row__icon">{a.icon}</div>
                <div>
                  <div className="amenity-row__name">{a.name}</div>
                  <div className="amenity-row__desc">{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
