import { useReveal } from "../components/useReveal";
import PageHero from "../components/PageHero";
import { useState } from "react";
import {
  FaBuilding,
  FaHandshake,
  FaGlobe,
  FaChartLine,
  FaShieldAlt,
  FaStar,
  FaPhone,
  FaMap,
} from "react-icons/fa";
import { MdEmail, MdVerified } from "react-icons/md";
import {
  HiOutlineCurrencyRupee,
  HiOutlineOfficeBuilding,
  HiOutlineLightBulb,
} from "react-icons/hi";

// ── Associate Logo Card ──
function AssociateLogo({ associate }) {
  const [status, setStatus] = useState("idle");

  if (status === "error") {
    return (
      <div className="ca-logo-item">
        <div className="ca-logo-fallback">
          <span>{associate.name.charAt(0)}</span>
        </div>
        <span className="ca-logo-item__tooltip">{associate.name}</span>
      </div>
    );
  }

  return (
    <div className="ca-logo-item">
      <img
        src={associate.logo}
        alt={associate.name}
        loading="lazy"
        decoding="async"
        className={status === "loaded" ? "ca-logo-visible" : "ca-logo-loading"}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
      />
      <span className="ca-logo-item__tooltip">{associate.name}</span>
    </div>
  );
}

// ── Data ──
const associates = [
  {
    name: "HDFC Bank",
    logo: "/Associate Logo/HDFC.png",
    category: "Banking",
  },
  {
    name: "SBI Bank",
    logo: "/Associate Logo/SBI.png",
    category: "Banking",
  },
  {
    name: "ICICI Bank",
    logo: "/Associate Logo/ICICI.png",
    category: "Banking",
  },
  {
    name: "Axis Bank",
    logo: "/Associate Logo/Axis.png",
    category: "Banking",
  },
  {
    name: "Kotak Mahindra",
    logo: "/Associate Logo/Kotak.png",
    category: "Banking",
  },
  {
    name: "LIC Housing Finance",
    logo: "/Associate Logo/LIC.png",
    category: "Finance",
  },
  {
    name: "Bajaj Finserv",
    logo: "/Associate Logo/Bajaj.png",
    category: "Finance",
  },
  {
    name: "PNB Housing",
    logo: "/Associate Logo/PNB.png",
    category: "Finance",
  },
  {
    name: "Tata Capital",
    logo: "/Associate Logo/Tata.png",
    category: "Finance",
  },
  {
    name: "Mahindra Finance",
    logo: "/Associate Logo/Mahindra.png",
    category: "Finance",
  },
  {
    name: "JLL India",
    logo: "/Associate Logo/JLL.png",
    category: "Consultancy",
  },
  {
    name: "Knight Frank",
    logo: "/Associate Logo/KnightFrank.png",
    category: "Consultancy",
  },
  {
    name: "CBRE India",
    logo: "/Associate Logo/CBRE.png",
    category: "Consultancy",
  },
  {
    name: "Anarock",
    logo: "/Associate Logo/Anarock.png",
    category: "Consultancy",
  },
  {
    name: "PropTiger",
    logo: "/Associate Logo/PropTiger.png",
    category: "Technology",
  },
  {
    name: "NoBroker",
    logo: "/Associate Logo/NoBroker.png",
    category: "Technology",
  },
  {
    name: "Housing.com",
    logo: "/Associate Logo/Housing.png",
    category: "Technology",
  },
  {
    name: "99acres",
    logo: "/Associate Logo/99acres.png",
    category: "Technology",
  },
  {
    name: "MagicBricks",
    logo: "/Associate Logo/MagicBricks.png",
    category: "Technology",
  },
  {
    name: "Square Yards",
    logo: "/Associate Logo/SquareYards.png",
    category: "Technology",
  },
];

const categories = ["All", "Banking", "Finance", "Consultancy", "Technology"];

const associateTypes = [
  {
    icon: <FaBuilding />,
    title: "Banking & Home Loan Partners",
    desc: "We are associated with leading nationalised and private banks offering seamless home loan assistance to our buyers at competitive interest rates.",
    count: "10+",
    label: "Banking Partners",
  },
  {
    icon: <HiOutlineOfficeBuilding />,
    title: "Real Estate Consultancies",
    desc: "Our tie-ups with top-tier real estate consultancies ensure professional advisory, market intelligence and large-scale distribution for our projects.",
    count: "8+",
    label: "Consulting Firms",
  },
  {
    icon: <FaGlobe />,
    title: "Digital Property Portals",
    desc: "Strategic listings and partnerships with India's most visited property portals give our projects maximum online visibility and qualified leads.",
    count: "6+",
    label: "Online Portals",
  },
  {
    icon: <HiOutlineLightBulb />,
    title: "Construction & Material Brands",
    desc: "We source materials from premium construction and lifestyle brands ensuring superior build quality and finishes across all our projects.",
    count: "15+",
    label: "Brand Associates",
  },
];

const advantages = [
  {
    icon: <HiOutlineCurrencyRupee />,
    title: "Hassle-Free Home Loans",
    desc: "Our banking associates offer pre-approved loan facilities, doorstep documentation and special interest rates exclusively for Anikedhya buyers.",
  },
  {
    icon: <MdVerified />,
    title: "Verified & Trusted Network",
    desc: "Every company associate undergoes a thorough vetting process. We partner only with organisations that share our values of trust and transparency.",
  },
  {
    icon: <FaChartLine />,
    title: "Market Intelligence",
    desc: "Partnerships with leading consultancies give us real-time market data, enabling us to price, position and deliver projects with precision.",
  },
  {
    icon: <FaShieldAlt />,
    title: "End-to-End Support",
    desc: "From purchase to possession, our associate ecosystem ensures you receive legal, financial and lifestyle support at every step.",
  },
  {
    icon: <FaStar />,
    title: "Premium Brand Association",
    desc: "Association with globally recognised brands reflects our commitment to delivering world-class quality in every aspect of your home.",
  },
  {
    icon: <FaHandshake />,
    title: "Synergistic Partnerships",
    desc: "Our associates are carefully chosen to create synergies that directly benefit our customers with better pricing, faster service and superior experience.",
  },
];

const faqs = [
  {
    q: "How does Anikedhya Group select its company associates?",
    a: "Every associate is selected through a rigorous evaluation process based on their market reputation, service quality, financial stability and alignment with our customer-first values. We prioritise partners who can deliver measurable benefit to our buyers.",
  },
  {
    q: "How do banking associations benefit homebuyers?",
    a: "Our banking partnerships enable pre-approved loan facilities, faster loan processing, reduced documentation, special interest rates and dedicated relationship managers for Anikedhya homebuyers — making the financing journey smooth and stress-free.",
  },
  {
    q: "Can I choose my own bank for a home loan?",
    a: "Absolutely. While we have preferred banking associates who offer exclusive benefits, buyers are free to arrange financing from any financial institution of their choice. Our team will coordinate with your bank for all required documentation.",
  },
  {
    q: "Do your construction material associations affect quality?",
    a: "Yes, positively. Our material and brand associations ensure that only certified, premium-grade materials are used across our projects. These partnerships come with quality guarantees and product warranties that protect your investment.",
  },
  {
    q: "How can a company become an associate of Anikedhya Group?",
    a: "Organisations interested in becoming an associate partner can reach out to us through the enquiry form below. Our business development team will review your profile and revert within 5 working days.",
  },
  {
    q: "Are associate agreements exclusive?",
    a: "Most of our associate relationships are non-exclusive, allowing us to partner with multiple organisations within the same segment to give our customers maximum choice and competitive options.",
  },
];

const stats = [
  { num: "30+", label: "Company Associates" },
  { num: "10+", label: "Banking Partners" },
  { num: "6+", label: "Digital Portals" },
  { num: "5+", label: "Years of Trust" },
];

export default function CompanyAssociates() {
  useReveal();
  const [openFaq, setOpenFaq] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    city: "",
    sector: "",
    website: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const filteredAssociates =
    activeCategory === "All"
      ? associates
      : associates.filter((a) => a.category === activeCategory);

  return (
    <>
      <PageHero
        tag="Our Ecosystem"
        title="Company"
        em="Associates"
        subtitle="A powerful network of trusted organisations that strengthen every dimension of the Anikedhya homebuying experience."
        image="/2026/04/anikedhya-aerial.jpg"
      />

      {/* ── Stats Bar ── */}
      <div className="cp-stats-bar">
        <div className="container">
          <div className="cp-stats-inner">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`cp-stat reveal${i > 0 ? ` delay-${i}` : ""}`}
              >
                <div className="cp-stat__num">{s.num}</div>
                <div className="cp-stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── About Our Associates ── */}
      <section className="page-section">
        <div className="container">
          <div className="ca-about-wrap">
            <div className="ca-about-text reveal-left">
              <div className="section-tag">
                <span className="gold-line" />
                About Our Network
              </div>
              <h2 className="section-title">
                Partnerships Built on <em>Trust & Excellence</em>
              </h2>
              <p className="ca-about-para">
                At Anikedhya Group, we believe that the quality of your home
                extends far beyond its walls. Our carefully curated ecosystem of
                company associates — spanning banking, finance, real estate
                consultancy, digital platforms and construction brands — ensures
                that every touchpoint of your homebuying journey is backed by
                expertise and integrity.
              </p>
              <p className="ca-about-para">
                These are not mere business arrangements. They are strategic
                alliances forged on shared values of customer-centricity,
                professionalism and the pursuit of excellence. Together, we
                deliver an experience that is seamless, transparent and
                genuinely rewarding.
              </p>
              <div className="ca-about-badges">
                <div className="ca-badge">
                  <MdVerified />
                  <span>RERA Compliant</span>
                </div>
                <div className="ca-badge">
                  <FaShieldAlt />
                  <span>ISO Certified</span>
                </div>
                <div className="ca-badge">
                  <FaStar />
                  <span>Award Winning</span>
                </div>
              </div>
            </div>
            <div className="ca-about-visual reveal-right">
              <div className="ca-visual-grid">
                {associateTypes.map((type, i) => (
                  <div key={i} className="ca-visual-card">
                    <div className="ca-visual-card__icon">{type.icon}</div>
                    <div className="ca-visual-card__count">{type.count}</div>
                    <div className="ca-visual-card__label">{type.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Associate Types ── */}
      <section className="page-section bg-card">
        <div className="container">
          <div className="section-header-center reveal">
            <div className="section-tag">
              <span className="gold-line" />
              Our Segments
            </div>
            <h2 className="section-title">
              Categories of <em>Association</em>
            </h2>
            <p className="section-subtitle">
              Our associate network spans across key sectors that directly
              impact and enhance the homebuying experience.
            </p>
          </div>
          <div className="ca-types-grid">
            {associateTypes.map((type, i) => (
              <div
                key={i}
                className={`ca-type-card reveal delay-${(i % 4) + 1}`}
              >
                <div className="ca-type-card__icon">{type.icon}</div>
                <h3 className="ca-type-card__title">{type.title}</h3>
                <p className="ca-type-card__desc">{type.desc}</p>
                <div className="ca-type-card__stat">
                  <span className="ca-type-card__num">{type.count}</span>
                  <span className="ca-type-card__stat-label">{type.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why It Matters ── */}
      <section className="page-section">
        <div className="container">
          <div className="section-header-center reveal">
            <div className="section-tag">
              <span className="gold-line" />
              Buyer Advantage
            </div>
            <h2 className="section-title">
              How Associates Benefit <em>You</em>
            </h2>
            <p className="section-subtitle">
              Our partnerships are structured to pass maximum benefit directly
              to our homebuyers at every stage of their journey.
            </p>
          </div>
          <div className="cp-benefits-grid">
            {advantages.map((adv, i) => (
              <div key={i} className={`cp-benefit reveal delay-${(i % 3) + 1}`}>
                <div className="cp-benefit__icon">{adv.icon}</div>
                <h3 className="cp-benefit__title">{adv.title}</h3>
                <p className="cp-benefit__desc">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Associate Logos Grid ── */}
      <section className="page-section bg-card">
        <div className="container">
          <div className="section-header-center reveal">
            <div className="section-tag">
              <span className="gold-line" />
              Our Associates
            </div>
            <h2 className="section-title">
              Brands That <em>Trust Us</em>
            </h2>
            <p className="section-subtitle">
              A growing network of industry leaders across banking, finance,
              technology and construction that choose to associate with
              Anikedhya Group.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="ca-filter-tabs reveal">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`ca-filter-tab${
                  activeCategory === cat ? " active" : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="cp-partners-grid reveal">
            {filteredAssociates.map((associate, i) => (
              <AssociateLogo key={i} associate={associate} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Enquiry Form ── */}
      <section className="page-section" id="enquire">
        <div className="container">
          <div className="cp-form-wrap">
            <div className="cp-form-info reveal-left">
              <div className="section-tag">
                <span className="gold-line" />
                Become an Associate
              </div>
              <h2 className="section-title">
                Partner With <em>Anikedhya</em>
              </h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                If your organisation shares our commitment to quality and
                customer satisfaction, we would love to explore a mutually
                beneficial association. Fill in the form and our team will
                connect with you within 5 working days.
              </p>
              <div className="cp-contact-items">
                <div className="cp-contact-item">
                  <div className="cp-contact-icon">
                    <FaPhone />
                  </div>
                  <div>
                    <div className="cp-contact-label">Call Us</div>
                    <div className="cp-contact-value">+91 85118 58835</div>
                  </div>
                </div>
                <div className="cp-contact-item">
                  <div className="cp-contact-icon">
                    <MdEmail />
                  </div>
                  <div>
                    <div className="cp-contact-label">Email Us</div>
                    <div className="cp-contact-value">
                      anikedhyamarketing@gmail.com
                    </div>
                  </div>
                </div>
                <div className="cp-contact-item">
                  <div className="cp-contact-icon">
                    <FaMap />
                  </div>
                  <div>
                    <div className="cp-contact-label">Visit Us</div>
                    <div className="cp-contact-value">
                      Gota, Ahmedabad, Gujarat
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cp-form-card reveal-right">
              {submitted ? (
                <div className="cp-form-success">
                  <div className="cp-form-success__icon">✓</div>
                  <h3>Enquiry Received!</h3>
                  <p>
                    Thank you for your interest. Our business development team
                    will review your profile and contact you within 5 working
                    days.
                  </p>
                  <button
                    className="btn-outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <form className="cp-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Company Name *</label>
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Your company name"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Contact Person *</label>
                      <input
                        type="text"
                        name="contactPerson"
                        placeholder="Full name"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>City *</label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Your city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Sector / Industry *</label>
                      <select
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select your sector</option>
                        <option>Banking & Finance</option>
                        <option>Real Estate Consultancy</option>
                        <option>Digital / Technology</option>
                        <option>Construction & Materials</option>
                        <option>Interior & Lifestyle</option>
                        <option>Legal & Compliance</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Company Website</label>
                    <input
                      type="url"
                      name="website"
                      placeholder="https://yourcompany.com"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>How Would You Like to Associate? *</label>
                    <textarea
                      name="message"
                      placeholder="Briefly describe your organisation and the nature of association you are proposing..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <span>Submit Enquiry</span>
                    <span className="arrow">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="page-section bg-card">
        <div className="container">
          <div className="section-header-center reveal">
            <div className="section-tag">
              <span className="gold-line" />
              FAQ
            </div>
            <h2 className="section-title">
              Frequently Asked <em>Questions</em>
            </h2>
          </div>
          <div className="cp-faq">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`cp-faq-item${openFaq === i ? " open" : ""}`}
              >
                <button
                  className="cp-faq-item__q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className="cp-faq-item__icon">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                <div className="cp-faq-item__a">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
