import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

// Top-level nav structure — items with `children` become dropdowns
const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  {
    label: "Explore",
    children: [
      { label: "Gallery", href: "/gallery" },
      { label: "Amenities", href: "/amenities" },
      { label: "Location", href: "/location" },
      { label: "Events", href: "/event" },
      { label: "Career", href: "/career" },
      { label: "Channel Partner", href: "/channel-partner" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // desktop hover/click
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null); // mobile accordion
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu automatically on route change
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setMobileOpenDropdown(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Check if any child of a dropdown is active (for parent highlight)
  const isDropdownActive = (children) =>
    children?.some((c) => location.pathname === c.href);

  return (
    <>
      <nav
        className={`navbar${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}
      >
        <div className="container">
          <div className="navbar__inner">
            <Link
              to="/"
              className="navbar__logo"
              onClick={() => setMenuOpen(false)}
            >
              <img
                src={`${scrolled ? "/logo.png" : "/Anikedhya_Golden_Logo.png"}`}
                alt="Anikedhya Group"
                className="navbar__logo-img"
              />
            </Link>

            <ul className="navbar__links" ref={dropdownRef}>
              {links.map((l) => {
                // Dropdown item
                if (l.children) {
                  const isOpen = openDropdown === l.label;
                  const activeParent = isDropdownActive(l.children);
                  return (
                    <li
                      key={l.label}
                      className={`has-dropdown${isOpen ? " open" : ""}`}
                      onMouseEnter={() => setOpenDropdown(l.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        type="button"
                        className={`dropdown-trigger${activeParent ? " nav-active" : ""}`}
                        onClick={() => setOpenDropdown(isOpen ? null : l.label)}
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                      >
                        {l.label}
                        <svg
                          className={`dropdown-caret${isOpen ? " rotated" : ""}`}
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M2 3.5L5 6.5L8 3.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      <ul className="dropdown-menu">
                        {l.children.map((c) => (
                          <li key={c.href}>
                            <NavLink
                              to={c.href}
                              className={({ isActive }) =>
                                isActive ? "nav-active" : ""
                              }
                              onClick={() => setOpenDropdown(null)}
                            >
                              {c.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }

                // Regular link
                return (
                  <li key={l.href}>
                    <NavLink
                      to={l.href}
                      end={l.href === "/"}
                      className={({ isActive }) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {l.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              className={`navbar__hamburger${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop overlay behind the menu — closes on tap */}
      <div
        className={`mobile-menu__backdrop${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button
          type="button"
          className="mobile-menu__close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        <nav className="mobile-menu__nav">
          {links.map((l) => {
            // Mobile accordion for dropdown items
            if (l.children) {
              const isOpen = mobileOpenDropdown === l.label;
              return (
                <div
                  key={l.label}
                  className={`mobile-dropdown${isOpen ? " open" : ""}`}
                >
                  <button
                    type="button"
                    className="mobile-dropdown__trigger"
                    onClick={() =>
                      setMobileOpenDropdown(isOpen ? null : l.label)
                    }
                    aria-expanded={isOpen}
                  >
                    {l.label}
                    <svg
                      className={`dropdown-caret${isOpen ? " rotated" : ""}`}
                      width="12"
                      height="12"
                      viewBox="0 0 10 10"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 3.5L5 6.5L8 3.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div className="mobile-dropdown__panel">
                    {l.children.map((c) => (
                      <NavLink
                        key={c.href}
                        to={c.href}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          isActive ? "nav-active" : ""
                        }
                      >
                        {c.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }

            // Regular mobile link
            return (
              <NavLink
                key={l.href}
                to={l.href}
                end={l.href === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                {l.label}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </>
  );
}
