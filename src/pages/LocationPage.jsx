import { useReveal } from "../components/useReveal";
import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";
import {
  FaBuilding,
  FaHospital,
  FaPlaneDeparture,
  FaSchool,
  FaShoppingBag,
  FaTrain,
} from "react-icons/fa";

const points = [
  {
    icon: <FaTrain />,
    name: "Ahmedabad Railway Station",
    detail: "Major railway connectivity across Gujarat and India.",
    distance: "20 Min",
  },
  {
    icon: <FaHospital />,
    name: "Zydus Hospital",
    detail: "One of Ahmedabad's leading multi-specialty hospitals.",
    distance: "10 Min",
  },
  {
    icon: <FaShoppingBag />,
    name: "D-Mart, Malls & Retail Zones",
    detail: "Shopping, restaurants and entertainment nearby.",
    distance: "5 Min",
  },
  {
    icon: <FaPlaneDeparture />,
    name: "Sardar Vallabhbhai Patel Airport",
    detail: "Quick access to domestic and international flights.",
    distance: "20 Min",
  },
  {
    icon: <FaSchool />,
    name: "Schools & Colleges",
    detail: "Top-rated educational institutions within easy reach.",
    distance: "8 Min",
  },
  {
    icon: <FaBuilding />,
    name: "SG Highway Business Hubs",
    detail: "Proximity to Ahmedabad's corporate and commercial corridors.",
    distance: "15 Min",
  },
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
              <div className="reveal" style={{ marginBottom: "32px" }}>
                <span className="section-tag">
                  <span className="gold-line" />
                  Proximity Map
                </span>
                <h2 className="section-title">
                  Everything is
                  <br />
                  <em>Close By</em>
                </h2>
                <p className="section-subtitle" style={{ marginBottom: "0" }}>
                  Anikedhya Emperors sits at the heart of Gota Ahmedabad's
                  fastest-growing premium suburb with seamless access to every
                  destination that matters.
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
                  <iframe
                    title="Anikedhya Emperors Location"
                    src="https://www.google.com/maps?q=Anikedhya+Emperors,+Gota,+Ahmedabad&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="location__cta-box">
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "18px",
                      color: "var(--text-head)",
                      marginBottom: "4px",
                    }}
                  >
                    Gota, Ahmedabad
                  </div>
                  <div style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                    Gujarat, India
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/VX7ijeJDzyNkrXTW8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: "12px 24px", fontSize: "10px" }}
                >
                  <span>Get Directions</span>
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
