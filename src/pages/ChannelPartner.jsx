import { useReveal } from "../components/useReveal";
import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaAward,
  FaChartLine,
  FaHandshake,
  FaHome,
  FaMap,
  FaPhone,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  HiOutlineAcademicCap,
  HiOutlineCurrencyRupee,
  HiOutlineGift,
} from "react-icons/hi";

// ── Partner Logo Card: uses native browser lazy-loading ──
function PartnerLogo({ partner }) {
  const [status, setStatus] = useState("idle"); // "idle" | "loaded" | "error"

  if (status === "error") {
    return (
      <div className="cp-marquee-item">
        <div className="cp-marquee-fallback">
          <span>{partner.name.charAt(0)}</span>
        </div>
        <span className="cp-marquee-item__tooltip">{partner.name}</span>
      </div>
    );
  }

  return (
    <div className="cp-marquee-item">
      <img
        src={partner.logo}
        alt={partner.name}
        loading="lazy"
        decoding="async"
        className={status === "loaded" ? "cp-logo-visible" : "cp-logo-loading"}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
      />
      <span className="cp-marquee-item__tooltip">{partner.name}</span>
    </div>
  );
}

const channelPartners = [
  { name: "32", logo: "/CP Logo/32.png" },
  { name: "Amaron Group", logo: "/CP Logo/Amaron%20Group.png" },
  { name: "Amit Prajapati", logo: "/CP Logo/Amit%20Prajapati.png" },
  { name: "Anand Sharma", logo: "/CP Logo/Anand%20Sharma.png" },
  {
    name: "Anikedhya Emperors Logo",
    logo: "/CP Logo/Anikedhya%20Emperors%20Logo.png",
  },
  { name: "Anjaniya", logo: "/CP Logo/Anjaniya.png" },
  { name: "Ankit Sudani", logo: "/CP Logo/Ankit%20Sudani.png" },
  { name: "Ankit", logo: "/CP Logo/Ankit.png" },
  { name: "Anupam", logo: "/CP Logo/Anupam.png" },
  { name: "Ashishbhai", logo: "/CP Logo/Ashishbhai.png" },
  { name: "Avishkar Realty 1", logo: "/CP Logo/Avishkar%20Realty%201.png" },
  { name: "Avishkar Realty 2", logo: "/CP Logo/Avishkar%20Realty%202.png" },
  { name: "B Quick Property", logo: "/CP Logo/B%20Quick%20Property.png" },
  { name: "Bagracha", logo: "/CP Logo/Bagracha.png" },
  { name: "Bavadiya", logo: "/CP Logo/Bavadiya.png" },
  { name: "Benchmark Realty", logo: "/CP Logo/Benchmark%20Realty.png" },
  { name: "City Address", logo: "/CP Logo/City%20Address.png" },
  { name: "City Space Realty", logo: "/CP Logo/City%20Space%20Realty.png" },
  { name: "Connect Realty", logo: "/CP Logo/Connect%20Realty.png" },
  { name: "Dhaara Estate", logo: "/CP Logo/Dhaara%20Estate.png" },
  { name: "Dhaval Dadhania", logo: "/CP Logo/Dhaval%20Dadhania.png" },
  { name: "Dip Patel Dharti", logo: "/CP Logo/Dip%20Patel%20Dharti.png" },
  { name: "Disha Estate", logo: "/CP Logo/Disha%20Estate.png" },
  { name: "Fireway", logo: "/CP Logo/Fireway.png" },
  { name: "Fivecorner", logo: "/CP Logo/Fivecorner.png" },
  { name: "Gopal Patel", logo: "/CP Logo/Gopal%20Patel.png" },
  { name: "Greenacer", logo: "/CP Logo/Greenacer.png" },
  { name: "Hemang Doshi", logo: "/CP Logo/Hemang%20Doshi.png" },
  { name: "HVR", logo: "/CP Logo/HVR.png" },
  { name: "Interior Era", logo: "/CP Logo/Interior%20Era's%20logo.png" },
  { name: "Jaks Realty", logo: "/CP Logo/Jaks%20Realty.png" },
  { name: "Jalaram", logo: "/CP Logo/Jalaram.png" },
  {
    name: "Jay Dhwarkadhish Real",
    logo: "/CP Logo/Jay%20Dhwarkadhish%20Real.png",
  },
  { name: "Jay Gor", logo: "/CP Logo/Jay%20Gor.png" },
  { name: "KD Realty", logo: "/CP Logo/KD%20Realty.png" },
  { name: "Krishna Realty", logo: "/CP Logo/Krishna%20Realty.png" },
  { name: "Kuldip Earthcon", logo: "/CP Logo/Kuldip%20Earthcon.png" },
  { name: "Max Space Realty", logo: "/CP Logo/Max%20Space%20Realty.png" },
  { name: "Midtown Property", logo: "/CP Logo/Midtown%20Property.png" },
  { name: "Mihir Thakkar", logo: "/CP Logo/Mihir%20Thakkar.png" },
  { name: "Naar 2", logo: "/CP Logo/Naar%202.png" },
  { name: "Naar", logo: "/CP Logo/Naar.png" },
  { name: "Nine One Realty", logo: "/CP Logo/Nine%20One%20Realty.png" },
  { name: "Nishit", logo: "/CP Logo/Nishit.png" },
  { name: "Prashanr Bhavshar", logo: "/CP Logo/Prashanr%20Bhavshar.png" },
  {
    name: "Prashant Dushera The Realty Investments",
    logo: "/CP Logo/Prashant%20Dushera%20The%20Realty%20Investments.png",
  },
  {
    name: "Priyangbhai Urben edge",
    logo: "/CP Logo/Priyangbhai%20Urben%20edge.png",
  },
  {
    name: "Prospera Black",
    logo: "/CP Logo/Prospera%20logo%20JPG%20BLACK.jpg",
  },
  { name: "Prospera", logo: "/CP Logo/Prospera%20logo%20JPG.jpg" },
  { name: "Rahul Taneja", logo: "/CP Logo/Rahul%20Taneja.png" },
  {
    name: "Rajesh Patel H.R. Property",
    logo: "/CP Logo/Rajesh%20Patel%20H.R.%20Property.png",
  },
  {
    name: "Real home Vikash Mahale",
    logo: "/CP Logo/Real%20home%20Vikash%20Mahale.png",
  },
  { name: "Realestate world", logo: "/CP Logo/Realestate%20world.png" },
  { name: "Rudransh Realty", logo: "/CP Logo/Rudransh%20Realty.png" },
  { name: "S.K. Property", logo: "/CP Logo/S.K.%20Property.png" },
  { name: "Satkar Parikh", logo: "/CP Logo/satkar%20parikh.png" },
  {
    name: "Shailesh Thakkar Dream Facilator",
    logo: "/CP Logo/Shailesh%20Thakkar%20Dream%20Facilator.png",
  },
  { name: "Shelter 4 u", logo: "/CP Logo/Shelter%204%20u.png" },
  { name: "Shitla Estate", logo: "/CP Logo/Shitla%20Estate.png" },
  { name: "Shrut Thakkar", logo: "/CP Logo/Shrut%20Thakkar.png" },
  { name: "Sp Space Piyush", logo: "/CP Logo/Sp%20Space%20Piyush.png" },
  { name: "The Realty Atlas", logo: "/CP Logo/The%20Realty%20Atlas.png" },
  { name: "Unicorn Marketing", logo: "/CP Logo/Unicorn%20Marketing.png" },
  { name: "USA Tushar Patel", logo: "/CP Logo/USA%20Tushar%20PAtel.png" },
  { name: "Utkal Patel", logo: "/CP Logo/Utkal%20Patel.png" },
  {
    name: "Valay Vyas Square Bricks",
    logo: "/CP Logo/Valay%20Vyas%20Square%20Bricks.png",
  },
  {
    name: "Vijay Chopra 7 piller",
    logo: "/CP Logo/Vijay%20Chopra%207%20piller.png",
  },
  { name: "Vijay Solanki 2", logo: "/CP Logo/Vijay%20Solanki%202.png" },
  { name: "Vijay Solanki", logo: "/CP Logo/Vijay%20Solanki.png" },
  {
    name: "Vijaybhai Daksh Realty",
    logo: "/CP Logo/Vijaybhai%20Daksh%20Realty.png",
  },
  { name: "Vinayak Property", logo: "/CP Logo/Vinayak%20Property.png" },
  { name: "Visaamo", logo: "/CP Logo/Visaamo.png" },
  { name: "Vision", logo: "/CP Logo/Vision.png" },
  { name: "Westurn", logo: "/CP Logo/Westurn.png" },
  { name: "Yellow Bird", logo: "/CP Logo/Yellow%20Bird.png" },
  { name: "Yug Real Estate", logo: "/CP Logo/Yug%20Real%20Estate.png" },
];

const benefits = [
  {
    icon: <HiOutlineCurrencyRupee />,
    title: "Attractive Commission",
    desc: "Earn industry-leading commission structures on every successful referral and booking, paid promptly and transparently.",
  },
  {
    icon: <FaAward />,
    title: "Premium Brand to Sell",
    desc: "Associate with a trusted, award-winning luxury brand that sells itself making your conversations with clients effortless.",
  },
  {
    icon: <HiOutlineAcademicCap />,
    title: "Sales & Product Training",
    desc: "Receive comprehensive product knowledge sessions, sales toolkits, brochures and digital assets to support your sales journey.",
  },
  {
    icon: <FaHandshake />,
    title: "Dedicated Support",
    desc: "A dedicated channel partner manager is assigned to you for site visits, client meetings and query resolution.",
  },
  {
    icon: <FaChartLine />,
    title: "Real-Time Inventory",
    desc: "Access live inventory status, pricing and availability through our partner portal always stay one step ahead.",
  },
  {
    icon: <HiOutlineGift />,
    title: "Reward & Recognition",
    desc: "Top performing partners are celebrated at exclusive events, incentive trips and featured in our partner hall of fame.",
  },
];

const steps = [
  {
    num: "01",
    title: "Register",
    desc: "Fill out the channel partner registration form below with your details.",
  },
  {
    num: "02",
    title: "Onboarding",
    desc: "Our team will reach out within 48 hours to onboard you and provide all materials.",
  },
  {
    num: "03",
    title: "Site Familiarisation",
    desc: "Visit our projects, meet the team and get a first-hand experience of the product.",
  },
  {
    num: "04",
    title: "Start Earning",
    desc: "Begin referring clients, track bookings and earn commissions on every deal.",
  },
];

const projects = [
  {
    name: "Anikedhya Emperors",
    type: "Residential • Ongoing",
    config: "3 BHK Luxury Apartments",
    location: "Gota, Ahmedabad",
    img: "/2026/04/anikedhya-building-front.jpg",
    slug: "/projects/anikedhya-emperors",
  },
];

const faqs = [
  {
    q: "Who can become a channel partner?",
    a: "Any registered real estate broker, agent, or individual with a network of homebuyers can register as a channel partner with Anikedhya Group. We welcome both new entrants and experienced professionals.",
  },
  {
    q: "What documents are required for registration?",
    a: "You will need a valid ID proof (Aadhaar / PAN), address proof, a recent photograph and your RERA broker registration number (if applicable). Corporate entities must submit their GST certificate and company registration.",
  },
  {
    q: "How and when are commissions paid?",
    a: "Commissions are released within 15 working days of a successful booking and receipt of all required documentation. All payments are made via bank transfer with a formal commission letter.",
  },
  {
    q: "Is there a registration fee?",
    a: "No. Registration as an Anikedhya Group channel partner is completely free of charge. We believe in investing in our partners, not charging them.",
  },
  {
    q: "Can I sell all Anikedhya projects?",
    a: "Yes. Once onboarded, you are eligible to sell all active Anikedhya Group projects. You will receive inventory updates and pricing sheets for each project.",
  },
  {
    q: "Do you offer co-marketing support?",
    a: "Yes. We provide branded digital assets, print-ready brochures, social media creatives and project videos that you can use in your own marketing campaigns.",
  },
];

export default function ChannelPartner() {
  useReveal();
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    city: "",
    experience: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        tag="Partner With Us"
        title="Channel"
        em="Partner Programme"
        subtitle="Join Gujarat's most trusted luxury real estate brand and grow your business with Anikedhya Group."
        image="/2026/04/anikedhya-aerial.jpg"
      />

      {/* ── Stats Bar ── */}
      <div className="cp-stats-bar">
        <div className="container">
          <div className="cp-stats-inner">
            <div className="cp-stat reveal">
              <div className="cp-stat__num">500+</div>
              <div className="cp-stat__label">Active Partners</div>
            </div>
            <div className="cp-stat reveal delay-2">
              <div className="cp-stat__num">15</div>
              <div className="cp-stat__label">Days to Commission</div>
            </div>
            <div className="cp-stat reveal delay-3">
              <div className="cp-stat__num">1</div>
              <div className="cp-stat__label">Active Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Why Partner ── */}
      <section className="page-section">
        <div className="container">
          <div className="section-header-center reveal">
            <div className="section-tag">
              <span className="gold-line" />
              Why Partner With Us
            </div>
            <h2 className="section-title">
              Everything You Need to <em>Succeed</em>
            </h2>
            <p className="section-subtitle">
              We go beyond commissions we build long-term partnerships that help
              you grow a sustainable, profitable real estate business.
            </p>
          </div>
          <div className="cp-benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className={`cp-benefit reveal delay-${(i % 3) + 1}`}>
                <div className="cp-benefit__icon">{b.icon}</div>
                <h3 className="cp-benefit__title">{b.title}</h3>
                <p className="cp-benefit__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="page-section bg-card">
        <div className="container">
          <div className="section-header-center reveal">
            <div className="section-tag">
              <span className="gold-line" />
              Process
            </div>
            <h2 className="section-title">
              How It <em>Works</em>
            </h2>
          </div>
          <div className="cp-steps">
            {steps.map((s, i) => (
              <div key={i} className={`cp-step reveal delay-${i + 1}`}>
                <div className="cp-step__num">{s.num}</div>
                <h3 className="cp-step__title">{s.title}</h3>
                <p className="cp-step__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects to Sell ── */}
      <section className="page-section">
        <div className="container">
          <div className="section-header-center reveal">
            <div className="section-tag">
              <span className="gold-line" />
              Portfolio
            </div>
            <h2 className="section-title">
              Projects Available to <em>Sell</em>
            </h2>
            <p className="section-subtitle">
              Our portfolio of premium Ahmedabad developments gives you multiple
              products to offer your clients.
            </p>
          </div>
          <div className="cp-projects-grid">
            {projects.map((p, i) => (
              <div
                key={i}
                className={`cp-proj-card reveal-scale delay-${(i % 4) + 1}`}
              >
                <div
                  className="cp-proj-card__img"
                  style={{ backgroundImage: `url('${p.img}')` }}
                >
                  <div className="cp-proj-card__overlay" />
                </div>
                <div className="cp-proj-card__body">
                  <div className="cp-proj-card__type">{p.type}</div>
                  <h3 className="cp-proj-card__name">{p.name}</h3>
                  <div className="cp-proj-card__meta">
                    <span className="cp-proj-data">
                      <FaMap /> {p.location}
                    </span>
                    <span className="cp-proj-data">
                      <FaHome /> {p.config}
                    </span>
                  </div>
                  <Link to={p.slug} className="proj-card__link">
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registration Form ── */}
      <section className="page-section bg-card" id="register">
        <div className="container">
          <div className="cp-form-wrap">
            <div className="cp-form-info reveal-left">
              <div className="section-tag">
                <span className="gold-line" />
                Get Onboarded
              </div>
              <h2 className="section-title">
                Register as a <em>Partner</em>
              </h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                Take the first step towards a lucrative partnership. Fill in
                your details and our channel partner team will reach out within
                48 hours.
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
                  <h3>Registration Received!</h3>
                  <p>
                    Thank you for registering. Our channel partner team will
                    contact you within 48 hours.
                  </p>
                  <button
                    className="btn-outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Register Another
                  </button>
                </div>
              ) : (
                <form className="cp-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Company / Agency</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company name (optional)"
                        value={formData.company}
                        onChange={handleChange}
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
                        placeholder="your@email.com"
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
                      <label>Years of Experience</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                      >
                        <option value="">Select experience</option>
                        <option>0 – 1 year</option>
                        <option>1 – 3 years</option>
                        <option>3 – 5 years</option>
                        <option>5 – 10 years</option>
                        <option>10+ years</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Message (Optional)</label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your network or any specific queries..."
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <span>Submit Registration</span>
                    <span className="arrow">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Channel Partners ── */}
      <section className="page-section bg-card">
        <div className="container">
          <div className="section-header-center reveal">
            <div className="section-tag">
              <span className="gold-line" />
              Our Network
            </div>
            <h2 className="section-title">
              Trusted by <em>500+ Partners</em>
            </h2>
            <p className="section-subtitle">
              Leading real estate brokers and agencies across Gujarat proudly
              partner with Anikedhya Group.
            </p>
          </div>

          <div className="cp-partners-grid reveal">
            {channelPartners.map((partner, i) => (
              <PartnerLogo key={i} partner={partner} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="page-section">
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
