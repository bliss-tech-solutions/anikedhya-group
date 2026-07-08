import { useState } from 'react';
import { useReveal } from '../components/useReveal';
import PageHero from '../components/PageHero';
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';

const info = [
  {
    icon: <FaLocationDot />,
    label: 'Address',
    value: 'Gota, Ahmedabad,\nGujarat 380060, India',
  },
  {
    icon: <FaPhone />,
    label: 'Sales Hotline',
    value: '+91 85118 58835',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email Us',
    value: 'anikedhyamarketing@gmail.com',
  },
];

export default function ContactPage() {
  useReveal();
  const [form, setForm]           = useState({ name: '', email: '', phone: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <PageHero
        tag="Get In Touch"
        title="Begin Your"
        em="Journey"
        subtitle="Our dedicated relationship managers are ready to guide you every step of the way."
        image="/2026/04/anikedhya-entrance.jpg"
      />

      <section className="page-section">
        <div className="container">
          <div className="contact__grid">

            {/* Info */}
            <div className="reveal-left">
              <span className="section-tag">
                <span className="gold-line" />
                Contact Information
              </span>
              <h2 className="section-title">Let's Start a<br /><em>Conversation</em></h2>
              <p className="section-subtitle" style={{ marginBottom: '0' }}>
                Reach out through any channel we're here to help you find your dream home.
              </p>

              <div className="contact__info-items">
                {info.map((item) => (
                  <div className="contact__info-item" key={item.label}>
                    <div className="contact__info-icon">{item.icon}</div>
                    <div>
                      <div className="contact__info-label">{item.label}</div>
                      <div className="contact__info-value" style={{ whiteSpace: 'pre-line' }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="reveal-right">
              {submitted ? (
                <div className="contact__success">
                  <span style={{ fontSize: '48px' }}>✓</span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: 'var(--gold)', fontWeight: 400 }}>Thank You</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.7 }}>
                    Your enquiry has been received. Our relationship manager will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form className="contact__form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input id="name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="interest">I'm Interested In</label>
                    <select id="interest" name="interest" value={form.interest} onChange={handleChange} required>
                      <option value="">Select a property type</option>
                      <option value="luxury-apartment">Luxury Apartment</option>
                      <option value="villa">Premium Villa</option>
                      <option value="penthouse">Penthouse</option>
                      <option value="commercial">Commercial Space</option>
                      <option value="township">Township</option>
                      <option value="investment">Investment Property</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message (Optional)</label>
                    <textarea id="message" name="message" placeholder="Tell us about your dream property..." value={form.message} onChange={handleChange} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', border: 'none' }}>
                    <span>Send Enquiry</span>
                    <span className="arrow">→</span>
                  </button>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    By submitting this form, you agree to our privacy policy. We respect your data and will never share it with third parties.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
