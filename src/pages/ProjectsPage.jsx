import { useReveal } from '../components/useReveal';
import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { FaMapMarkerAlt, FaHome } from 'react-icons/fa';

const statusColor = {
  Ongoing:   '#B8922A',
  Completed: '#4CAF82',
  Upcoming:  '#7A8FA6',
  Delivered: '#8A7A5C',
};

/* ── Split active vs legacy ── */
const activeProjects = projects.filter((p) => !p.legacy);
const legacyProjects = projects.filter((p) => p.legacy === true);

export default function ProjectsPage() {
  useReveal();

  return (
    <>
      <PageHero
        tag="Our Portfolio"
        title="Signature"
        em="Projects"
        subtitle="Each project is a testament to our unwavering commitment to architectural brilliance."
        image="/2026/04/anikedhya-building-corner.jpg"
      />

      {/* ══ ACTIVE PROJECTS ══ */}
      <section className="page-section">
        <div className="container">
          <div className="section-header-center reveal">
            <div className="section-tag"><span className="gold-line" />Current Portfolio</div>
            <h2 className="section-title">Ongoing & <em>Completed</em> Projects</h2>
            <p className="section-subtitle">
              Explore our signature developments — each crafted with precision, purpose and premium finishes.
            </p>
          </div>

          <div className="projects-full-grid">
            {activeProjects.map((p, i) => (
              <Link
                to={`/projects/${p.slug}`}
                key={p.slug}
                className={`proj-card reveal-scale delay-${(i % 3) + 1}`}
              >
                {/* Card image — use heroImg directly */}
                <div
                  className="proj-card__img"
                  style={{ backgroundImage: `url('${p.heroImg}')` }}
                >
                  <div
                    className="proj-card__status"
                    style={{ background: statusColor[p.status] ?? '#888' }}
                  >
                    {p.status}
                  </div>
                  <div className="proj-card__overlay" />
                </div>

                <div className="proj-card__body">
                  <div className="proj-card__tag">{p.tagline}</div>
                  <h3 className="proj-card__name">{p.name}</h3>
                  <div className="proj-card__meta">
                    <span><FaMapMarkerAlt /> {p.location}</span>
                    {p.config && <span><FaHome /> {p.config}</span>}
                  </div>
                  <div className="proj-card__actions">
                    <span className="proj-card__link">
                      View Details <span>→</span>
                    </span>
                    <span
                      className="proj-card__enquire"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/contact';
                      }}
                    >
                      Enquire
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LEGACY PROJECTS ══ */}
      <section className="page-section bg-card">
        <div className="container">
          <div className="section-header-center reveal">
            <div className="section-tag"><span className="gold-line" />Our Legacy</div>
            <h2 className="section-title">Successfully <em>Delivered</em></h2>
            <p className="section-subtitle">
              A proud record of homes built with care and communities created with vision.
            </p>
          </div>

          <div className="projects-full-grid">
            {legacyProjects.map((p, i) => (
              <div
                key={p.slug}
                className={`proj-card proj-card--legacy reveal-scale delay-${(i % 3) + 1}`}
              >
                <div
                  className="proj-card__img"
                  style={{ backgroundImage: `url('${p.heroImg}')` }}
                >
                  <div
                    className="proj-card__status"
                    style={{ background: statusColor[p.status] ?? '#4CAF82' }}
                  >
                    {p.status}
                  </div>
                  <div className="proj-card__overlay" />
                </div>
                <div className="proj-card__body">
                  <h3 className="proj-card__name">{p.name}</h3>
                  <div className="proj-card__meta">
                    <span><FaMapMarkerAlt /> {p.location}</span>
                  </div>
                  <div className="proj-card__actions">
                    <span className="proj-card__legacy-tag">Successfully Delivered ✓</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
