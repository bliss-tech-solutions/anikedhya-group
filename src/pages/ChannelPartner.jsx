import { useReveal } from '../components/useReveal';
import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const benefits = [
  {
    icon: '💰',
    title: 'Attractive Commission',
    desc: 'Earn industry-leading commission structures on every successful referral and booking, paid promptly and transparently.',
  },
  {
    icon: '🏆',
    title: 'Premium Brand to Sell',
    desc: 'Associate with a trusted, award-winning luxury brand that sells itself — making your conversations with clients effortless.',
  },
  {
    icon: '📚',
    title: 'Sales & Product Training',
    desc: 'Receive comprehensive product knowledge sessions, sales toolkits, brochures and digital assets to support your sales journey.',
  },
  {
    icon: '🤝',
    title: 'Dedicated Support',
    desc: 'A dedicated channel partner manager is assigned to you for site visits, client meetings and query resolution.',
  },
  {
    icon: '📊',
    title: 'Real-Time Inventory',
    desc: 'Access live inventory status, pricing and availability through our partner portal — always stay one step ahead.',
  },
  {
    icon: '🎁',
    title: 'Reward & Recognition',
    desc: 'Top performing partners are celebrated at exclusive events, incentive trips and featured in our partner hall of fame.',
  },
];

const steps = [
  { num: '01', title: 'Register', desc: 'Fill out the channel partner registration form below with your details.' },
  { num: '02', title: 'Onboarding', desc: 'Our team will reach out within 48 hours to onboard you and provide all materials.' },
  { num: '03', title: 'Site Familiarisation', desc: 'Visit our projects, meet the team and get a first-hand experience of the product.' },
  { num: '04', title: 'Start Earning', desc: 'Begin referring clients, track bookings and earn commissions on every deal.' },
];

const projects = [
  {
    name: 'Anikedhya Emperors',
    type: 'Residential • Ongoing',
    config: '3 BHK Luxury Apartments',
    location: 'Gota, Ahmedabad',
    img: '/2026/04/anikedhya-building-front.jpg',
    slug: '/projects/anikedhya-emperors',
  },
  {
    name: 'ANIKEDHYA ALTEZA',
    type: 'Residential • Completed',
    config: '4 BHK Premium Residences',
    location: 'Satellite, Ahmedabad',
    img: '/2026/04/anikedhya-building-corner.jpg',
    slug: '/projects/anikedhya-alteza',
  },
  {
    name: 'Anikedhya Capitol',
    type: 'Residential • Completed',
    config: '3 & 4 BHK Sky Residences',
    location: 'Bodakdev, Ahmedabad',
    img: '/2026/04/anikedhya-aerial-view.jpg',
    slug: '/projects/anikedhya-capitol',
  },
  {
    name: 'Anikedhya Atlantis',
    type: 'Residential • Completed',
    config: '2 & 3 BHK Apartments',
    location: 'Bodakdev, Ahmedabad',
    img: '/2026/04/anikedhya-building-side.jpg',
    slug: '/projects/anikedhya-atlantis',
  },
];

const faqs = [
  {
    q: 'Who can become a channel partner?',
    a: 'Any registered real estate broker, agent, or individual with a network of homebuyers can register as a channel partner with Anikedhya Group. We welcome both new entrants and experienced professionals.',
  },
  {
    q: 'What documents are required for registration?',
    a: 'You will need a valid ID proof (Aadhaar / PAN), address proof, a recent photograph and your RERA broker registration number (if applicable). Corporate entities must submit their GST certificate and company registration.',
  },
  {
    q: 'How and when are commissions paid?',
    a: 'Commissions are released within 15 working days of a successful booking and receipt of all required documentation. All payments are made via bank transfer with a formal commission letter.',
  },
  {
    q: 'Is there a registration fee?',
    a: 'No. Registration as an Anikedhya Group channel partner is completely free of charge. We believe in investing in our partners, not charging them.',
  },
  {
    q: 'Can I sell all Anikedhya projects?',
    a: 'Yes. Once onboarded, you are eligible to sell all active Anikedhya Group projects. You will receive inventory updates and pricing sheets for each project.',
  },
  {
    q: 'Do you offer co-marketing support?',
    a: 'Yes. We provide branded digital assets, print-ready brochures, social media creatives and project videos that you can use in your own marketing campaigns.',
  },
];

export default function ChannelPartner() {
  useReveal();
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '', company: '', phone: '', email: '', city: '', experience: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

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
            <div className="cp-stat reveal delay-1">
              <div className="cp-stat__num">₹50Cr+</div>
              <div className="cp-stat__label">Commissions Paid</div>
            </div>
            <div className="cp-stat reveal delay-2">
              <div className="cp-stat__num">15</div>
              <div className="cp-stat__label">Days to Commission</div>
            </div>
            <div className="cp-stat reveal delay-3">
              <div className="cp-stat__num">4</div>
              <div className="cp-stat__label">Active Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Why Partner ── */}
      <section className="page-section">
        <div className="container">
          <div className="section-header-center reveal">
            <div className="section-tag"><span className="gold-line" />Why Partner With Us</div>
            <h2 className="section-title">Everything You Need to <em>Succeed</em></h2>
            <p className="section-subtitle">
              We go beyond commissions — we build long-term partnerships that help you grow a sustainable, profitable real estate business.
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
            <div className="section-tag"><span className="gold-line" />Process</div>
            <h2 className="section-title">How It <em>Works</em></h2>
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
            <div className="section-tag"><span className="gold-line" />Portfolio</div>
            <h2 className="section-title">Projects Available to <em>Sell</em></h2>
            <p className="section-subtitle">
              Our portfolio of premium Ahmedabad developments gives you multiple products to offer your clients.
            </p>
          </div>
          <div className="cp-projects-grid">
            {projects.map((p, i) => (
              <div key={i} className={`cp-proj-card reveal-scale delay-${(i % 4) + 1}`}>
                <div className="cp-proj-card__img" style={{ backgroundImage: `url('${p.img}')` }}>
                  <div className="cp-proj-card__overlay" />
                </div>
                <div className="cp-proj-card__body">
                  <div className="cp-proj-card__type">{p.type}</div>
                  <h3 className="cp-proj-card__name">{p.name}</h3>
                  <div className="cp-proj-card__meta">
                    <span>📍 {p.location}</span>
                    <span>🏠 {p.config}</span>
                  </div>
                  <Link to={p.slug} className="proj-card__link">View Project →</Link>
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
              <div className="section-tag"><span className="gold-line" />Get Onboarded</div>
              <h2 className="section-title">Register as a <em>Partner</em></h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                Take the first step towards a lucrative partnership. Fill in your details and our channel partner team will reach out within 48 hours.
              </p>
              <div className="cp-contact-items">
                <div className="cp-contact-item">
                  <div className="cp-contact-icon">📞</div>
                  <div>
                    <div className="cp-contact-label">Call Us</div>
                    <div className="cp-contact-value">+91 85118 58835</div>
                  </div>
                </div>
                <div className="cp-contact-item">
                  <div className="cp-contact-icon">📧</div>
                  <div>
                    <div className="cp-contact-label">Email Us</div>
                    <div className="cp-contact-value">anikedhyamarketing@gmail.com</div>
                  </div>
                </div>
                <div className="cp-contact-item">
                  <div className="cp-contact-icon">📍</div>
                  <div>
                    <div className="cp-contact-label">Visit Us</div>
                    <div className="cp-contact-value">Gota, Ahmedabad, Gujarat</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cp-form-card reveal-right">
              {submitted ? (
                <div className="cp-form-success">
                  <div className="cp-form-success__icon">✓</div>
                  <h3>Registration Received!</h3>
                  <p>Thank you for registering. Our channel partner team will contact you within 48 hours.</p>
                  <button className="btn-outline" onClick={() => setSubmitted(false)}>Register Another</button>
                </div>
              ) : (
                <form className="cp-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" name="name" placeholder="Your full name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Company / Agency</label>
                      <input type="text" name="company" placeholder="Company name (optional)" value={formData.company} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>City *</label>
                      <input type="text" name="city" placeholder="Your city" value={formData.city} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Years of Experience</label>
                      <select name="experience" value={formData.experience} onChange={handleChange}>
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
                    <textarea name="message" placeholder="Tell us about your network or any specific queries..." rows={3} value={formData.message} onChange={handleChange} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <span>Submit Registration</span>
                    <span className="arrow">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="page-section">
        <div className="container">
          <div className="section-header-center reveal">
            <div className="section-tag"><span className="gold-line" />FAQ</div>
            <h2 className="section-title">Frequently Asked <em>Questions</em></h2>
          </div>
          <div className="cp-faq">
            {faqs.map((faq, i) => (
              <div key={i} className={`cp-faq-item${openFaq === i ? ' open' : ''}`}>
                <button className="cp-faq-item__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="cp-faq-item__icon">{openFaq === i ? '−' : '+'}</span>
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
