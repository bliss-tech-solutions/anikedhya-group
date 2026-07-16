import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Amenities", href: "/amenities" },
  { label: "Location", href: "/location" },
  { label: "Contact Us", href: "/contact" },
  { label: "News & Media", href: "/event" },
  { label: "Career", href: "/career" },
];

const properties = [
  // Ongoing
  {
    label: "Anikedhya Emperors",
    href: "/projects/anikedhya-emperors",
  },

  // Anikedhya Completed
  { label: "Anikedhya Atlantis", href: "/projects/anikedhya-atlantis" },
  { label: "Anikedhya Capitol", href: "/projects/anikedhya-capitol" },
  { label: "Anikedhya Capitol 2", href: "/projects/anikedhya-capitol-2" },
  { label: "Anikedhya Alteza", href: "/projects/anikedhya-alteza" },

  // Siddharth
  { label: "Siddharth Icon", href: "/projects/siddharth-icon" },
  { label: "Siddharth Residency", href: "/projects/siddharth-residency" },
  { label: "Siddharth Bungalows", href: "/projects/siddharth-bunglows" },
  { label: "Siddharth Status", href: "/projects/siddharth-status" },
  { label: "Siddharth Homes", href: "/projects/siddharth-homes" },
  { label: "Siddharth Square", href: "/projects/siddharth-square" },

  // Others
  { label: "Devasya Homes", href: "/projects/devasya-homes" },
  { label: "Shree Mangaldeep", href: "/projects/shree-mangaldeep-apartments" },
  { label: "Sneh Greens", href: "/projects/sneh-greens" },
  { label: "Sneh Residency", href: "/projects/sneh-residency" },
];

const contactInfo = [
  { icon: <FaMapMarkerAlt />, label: "Gota, Ahmedabad, Gujarat - 382481" },
  { icon: <FaPhoneAlt />, label: "+91 85 11 85 88 35" },
  { icon: <FaPhoneAlt />, label: "+91 85 11 85 88 76" },
  { icon: <FaEnvelope />, label: "anikedhyamarketing@gmail.com" },
];

const socials = [
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/anikedhyagroup/",
    label: "Instagram",
  },
  // { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
  {
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/anikedhyagroupofficial",
    label: "Facebook",
  },
  // { icon: <FaYoutube />, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand Column */}
          <div className="footer__col footer__col--brand">
            <div className="footer__brand-name">
              <Link to="/" className="footer__logo-link">
                <img
                  src="/Anikedhya_Golden_Logo.png"
                  alt="Anikedhya Group"
                  className="footer__logo-img"
                />
              </Link>
            </div>
            <p className="footer__brand-desc">
              Crafting extraordinary living spaces since 2008. Anikedhya Group
              stands as a symbol of luxury, trust, and architectural brilliance
              across India's most prestigious addresses.
            </p>
            <div className="footer__social">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="footer__social-link"
                  aria-label={s.label}
                  target="_black"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <div className="footer__col-title">Quick Links</div>
            <ul className="footer__links">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties - Two Column Grid */}
          <div className="footer__col footer__col--properties">
            <div className="footer__col-title">Properties</div>
            <ul className="footer__links footer__links--grid">
              {properties.map((p) => (
                <li key={p.label}>
                  <Link to={p.href}>
                    <span className="footer__link-label">{p.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <div className="footer__col-title">Contact US</div>
            <ul className="footer__contact-list">
              {contactInfo.map((c) => (
                <li key={c.label} className="footer__contact-item">
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span>{c.icon}</span>
                    <span>{c.label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} <span>Anikedhya Group</span>. All
            rights reserved.
          </p>
          <p className="footer__copy">
            <a
              href="https://www.blisssolution.in/"
              target="_blank"
              rel="noreferrer"
              className="Link"
            >
              Designed &amp; Developed by{" "}
              <span style={{ marginLeft: "8px" }}>
                <img
                  src="/BlissWhiteLogo.webp"
                  alt="the bliss solution"
                  style={{ height: "20px", width: "auto" }}
                />
              </span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
