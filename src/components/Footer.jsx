import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Amenities', href: '/amenities' },
  { label: 'Location', href: '/location' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'News & Media', href: '/event' },
  { label: 'Career', href: '/career' },

];

const properties = [
  { label: 'Anikedhya Emperors', href: '/projects/anikedhya-emperors' },
  { label: 'ANIKEDHYA ALTEZA', href: '/projects/anikedhya-alteza' },
  { label: 'Anikedhya Atlantis', href: '/projects/anikedhya-atlantis' },
   { label: 'Anikedhya Capitol', href: '/projects/anikedhya-capitol' }
];

const contactInfo = [
  { label: 'Gota, Ahmedabad, Gujarat' },
  { label: '+91 85118 58835' },
  { label: 'anikedhyamarketing@gmail.com' },
];

const socials = [
  { icon: '𝕏', href: '#', label: 'Twitter' },
  { icon: 'in', href: '#', label: 'LinkedIn' },
  { icon: 'f', href: '#', label: 'Facebook' },
  { icon: '▶', href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">

          <div>
            <div className="footer__brand-name"> <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
              <img src="/logo_n.png" alt="Anikedhya Group" className="navbar__logo-img" />
            </Link></div>

            <p className="footer__brand-desc">
              Crafting extraordinary living spaces since 2008. Anikdhya Group
              stands as a symbol of luxury, trust, and architectural brilliance
              across India's most prestigious addresses.
            </p>
            <div className="footer__social">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="footer__social-link" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="footer__col-title">Quick Links</div>
            <ul className="footer__links">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Properties</div>
            <ul className="footer__links">
              {properties.map((p) => (
                <li key={p.label}>
                  <Link to={p.href}>{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Contact</div>
            <ul className="footer__links" style={{ gap: '10px' }}>
              {contactInfo.map((c) => (
                <li key={c.label} style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px' }}>
                  {c.label}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '8px' }}>
                RERA Registered
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--gold)' }}>
                P51700055555
              </div>
            </div>
          </div>

        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} <span>Anikdhya Group</span>. All rights reserved.
          </p>
          <p className="footer__copy">
            <a href="https://www.blisssolution.in/" target="_blank" rel="noreferrer" className="Link">
              Designed &amp; Developed by <span>TBS</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
