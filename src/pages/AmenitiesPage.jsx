import { useMemo } from 'react';
import { useReveal } from '../components/useReveal';
import PageHero from '../components/PageHero';
import { projects } from '../data/projects';
import { iconMap } from '../data/iconMap';
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

// Curated "featured" amenities — these stay hand-picked with hero images.
const featuredAmenities = [
  {
    icon: <FaDumbbell />,
    name: 'Gym',
    desc: 'Premium fitness equipment, boxing, cardio & strength training zones.',
    img: '/anikedhya-gym.jpg',
  },
  {
    icon: <FaTableTennisPaddleBall />,
    name: 'Indior Games',
    desc: 'Dedicated indoor sports lounge with professional-grade equipment.',
    img: '/anikedhya-table-tennis.jpg',
  },
  {
    icon: <FaFilm />,
    name: 'Open-Air Project Wall',
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

/**
 * Every amenity that appears anywhere across projects.js gets grouped here
 * into one canonical entry. Different projects word the same amenity
 * differently ("Gardens" / "Private Gardens" / "Landscaped Garden",
 * "Kids Play Area" / "Children Play Area" / "Kids Area", etc.) — without
 * this grouping those would all show up as separate rows even though
 * they're the same amenity. Each group lists every raw name (as written
 * in projects.js, case-insensitive) that should collapse into it, plus
 * the display name and icon (key from iconMap.js) to use for the group.
 */
const AMENITY_GROUPS = [
  { name: 'Gym', icon: 'FaDumbbell', matches: ['gym', 'gymnasium'] },
  { name: 'Indoor Games', icon: 'FaTableTennis', matches: ['indoor games', 'table tennis', 'pool table'] },
  { name: 'Chess & Carrom', icon: 'FaChess', matches: ['chess & carrom'] },
  { name: 'Multipurpose Sports Court', icon: 'FaBasketballBall', matches: ['multipurpose court', 'multipurpose play court'] },
  { name: "Mother's Hangout Sitting", icon: 'FaChair', matches: ["mother's hangout sitting"] },
  { name: 'Gazebo', icon: 'FaPagelines', matches: ['gazebo'] },
  { name: 'Yoga Deck', icon: 'FaPersonWalking', matches: ['yoga deck', 'yoga area'] },
  { name: "Children's Play Area", icon: 'MdOutlineChildCare', matches: ["children's play area", 'children play area', 'kids play area', 'kids area'] },
  { name: 'Party Lawn & Paver Lawn', icon: 'FaTree', matches: ['party lawn & paver lawn'] },
  { name: 'Senior Citizen Sit-Outs', icon: 'FaUserFriends', matches: ['senior citizen sit-outs', 'senior citizen outdoor seating', 'senior citizen sit outs'] },
  { name: '24×7 Security', icon: 'FaShieldAlt', matches: ['security cabin', '24×7 security', 'earthquake resistant rcc structure'] },
  { name: 'Pantry & Barbecue Station', icon: 'FaFire', matches: ['pantry & barbecue station'] },
  { name: 'Articulated Walkway', icon: 'FaWalking', matches: ['articulated walkway'] },
  { name: 'Easy Connectivity', icon: 'FaWalking', matches: ['easy connectivity'] },
  { name: 'Society Store', icon: 'FaStore', matches: ['society store'] },
  { name: 'Retail Showrooms', icon: 'FaStore', matches: ['retail showrooms'] },
  { name: 'Entrance Gate', icon: 'FaDoorOpen', matches: ['entrance gate'] },
  { name: 'Children Drop-Off Zone', icon: 'FaSchool', matches: ['children drop-off zone'] },
  { name: 'Top Schools & Hospitals Nearby', icon: 'FaSchool', matches: ['top schools & hospitals nearby'] },
  { name: 'Entrance Foyer', icon: 'FaArchway', matches: ['entrance foyer', 'decorative entrance foyer', 'attractive entrance foyer'] },
  { name: 'Contemporary Elevation', icon: 'FaArchway', matches: ['contemporary elevation'] },
  { name: 'Society Office', icon: 'FaBuilding', matches: ['society office'] },
  { name: 'Premium Glass Façade', icon: 'FaBuilding', matches: ['premium glass façade'] },
  { name: 'Efficient Apartment & Shop Layouts', icon: 'FaBuilding', matches: ['efficient 2 & 3 bhk apartments & shops'] },
  { name: 'Common Toilet Facility', icon: 'FaToilet', matches: ['common toilet', 'common toilet facility'] },
  { name: 'Swing Area', icon: 'FaChild', matches: ['swing area'] },
  { name: 'Open Air Projector Wall', icon: 'FaVideo', matches: ['open air projector wall'] },
  { name: '24×7 CCTV Surveillance', icon: 'FaVideo', matches: ['24×7 cctv surveillance', 'door video camera', 'cctv at main entrance'] },
  { name: 'Power Backup', icon: 'FaBolt', matches: ['dg power backup', 'power backup'] },
  { name: 'Concealed Electrical Wiring', icon: 'FaBolt', matches: ['concealed electrical wiring'] },
  { name: '24×7 Water Supply', icon: 'FaTint', matches: ['24×7 water supply'] },
  { name: 'Private Borewell Water', icon: 'FaTint', matches: ['private borewell water'] },
  { name: 'GSPC Gas Connection', icon: 'FaTint', matches: ['gspc gas connection'] },
  { name: 'Landscaped Gardens', icon: 'FaLeaf', matches: ['landscaped garden', 'landscaped gardens', 'gardens', 'private gardens', 'developed garden'] },
  { name: 'Zen Garden', icon: 'FaLeaf', matches: ['zen garden'] },
  { name: 'Fire Safety System', icon: 'FaFireExtinguisher', matches: ['fire protection system', 'fire safety system'] },
  { name: 'Letter Box Provision', icon: 'FaDoorOpen', matches: ['letter box provision'] },
  { name: 'Vastu-Compliant Layouts', icon: 'FaCompassDrafting', matches: ['vastu-compliant layouts'] },
  { name: 'Swimming Pool', icon: 'FaSwimmingPool', matches: ['swimming pool'] },
  { name: 'Open Air Theater', icon: 'FaTheaterMasks', matches: ['open air theater'] },
  { name: 'Reflection Pool', icon: 'FaWater', matches: ['reflection pool'] },
  { name: 'Water Storage Tanks', icon: 'FaWater', matches: ['underground water tank', 'overhead water tank'] },
  { name: 'Library', icon: 'FaBook', matches: ['library'] },
  { name: 'Intercom', icon: 'FaPhoneAlt', matches: ['intercom'] },
  { name: 'Kitchen & Storage for Society Use', icon: 'FaUtensils', matches: ['kitchen & storage for society use'] },
  { name: 'Granite Kitchen Platform', icon: 'FaUtensils', matches: ['granite kitchen platform'] },
  { name: 'Parking', icon: 'FaParking', matches: ['basement parking', "visitor's parking", 'covered parking', 'parking'] },
  { name: 'Jogging Track', icon: 'FaRunning', matches: ['jogging track'] },
  { name: 'High-Speed Elevators', icon: 'MdElevator', matches: ['elevators', '2 automatic lifts'] },
  { name: 'Vitrified Tile Flooring', icon: 'FaBorderAll', matches: ['vitrified tile flooring'] },
  { name: 'Premium Sanitary Fittings', icon: 'FaBath', matches: ['premium sanitary fittings'] },
];

// Reverse lookup: raw amenity name (lowercased) -> canonical group
const RAW_TO_GROUP = new Map();
AMENITY_GROUPS.forEach((group) => {
  group.matches.forEach((raw) => RAW_TO_GROUP.set(raw, group));
});

/**
 * Walks every project's amenities array and returns one entry per
 * canonical amenity — using AMENITY_GROUPS to merge differently-worded
 * duplicates. Anything found in projects.js that isn't in AMENITY_GROUPS
 * yet still gets included (deduped by its raw name), so nothing from the
 * data is ever silently dropped — it just won't be merged with anything.
 */
function getAllUniqueAmenities() {
  const seenGroups = new Set();
  const seenRaw = new Set();
  const unique = [];

  projects.forEach((project) => {
    (project.amenities || []).forEach((amenity) => {
      const key = amenity.name.trim().toLowerCase();
      const group = RAW_TO_GROUP.get(key);

      if (group) {
        if (!seenGroups.has(group.name)) {
          seenGroups.add(group.name);
          unique.push({ icon: group.icon, name: group.name });
        }
      } else if (!seenRaw.has(key)) {
        // Fallback for any amenity not yet added to AMENITY_GROUPS above
        seenRaw.add(key);
        unique.push(amenity);
      }
    });
  });

  return unique;
}

export default function AmenitiesPage() {
  useReveal();

  const allAmenities = useMemo(() => getAllUniqueAmenities(), []);

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
            {featuredAmenities.filter((a) => a.img).map((a, i) => (
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

      {/* Full list — every unique amenity pulled from all projects */}
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
            {allAmenities.map((a, i) => {
              const Icon = iconMap[a.icon];
              return (
                <div className={`amenity-row reveal delay-${(i % 4) + 1}`} key={a.name}>
                  <div className="amenity-row__icon">
                    {Icon ? <Icon /> : null}
                  </div>
                  <div>
                    <div className="amenity-row__name">{a.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}