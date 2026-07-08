import { useState } from 'react';
import { FaBuilding, FaChartLine, FaGraduationCap, FaHandshake, FaHospital, FaMoneyBillWave } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { useReveal } from '../components/useReveal';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const openings = [
 
  {
    id: 1,
    title: 'Project Manager',
    department: 'Project Management',
    location: 'Ahmedabad, Gujarat',
    type: 'Full-Time',
    experience: '7–12 Years',
    description:
      'Oversee end-to-end execution of luxury residential developments. Ensure projects are delivered on time, within budget, and to the highest quality standards.',
    responsibilities: [
      'Manage project timelines, budgets and resource allocation',
      'Coordinate between architects, contractors and vendors',
      'Conduct regular site inspections and quality audits',
      'Prepare progress reports for senior management',
      'Resolve on-site issues and mitigate project risks',
    ],
    requirements: [
      'B.E. Civil / B.Arch with MBA (preferred)',
      '7+ years in real estate project management',
      'Experience managing projects valued ₹50Cr+',
      'Excellent leadership and communication skills',
    ],
  },
 
  // {
  //   id: 4,
  //   title: 'Digital Marketing Executive',
  //   department: 'Marketing & Sales',
  //   location: 'Ahmedabad, Gujarat',
  //   type: 'Full-Time',
  //   experience: '2–4 Years',
  //   description:
  //     "Drive our digital presence and lead-generation campaigns across platforms. Shape the brand narrative for one of Gujarat's most distinguished real estate groups.",
  //   responsibilities: [
  //     'Plan and execute social media, SEO and PPC campaigns',
  //     'Create compelling content for website, blogs and newsletters',
  //     'Analyze campaign performance and optimize ROI',
  //     'Manage CRM and marketing automation tools',
  //     'Coordinate with agencies for video and creative production',
  //   ],
  //   requirements: [
  //     'Bachelors in Marketing, Communications or related field',
  //     '2+ years in digital marketing (real estate preferred)',
  //     'Hands-on with Google Ads, Meta Ads and analytics tools',
  //     'Strong copywriting and visual storytelling skills',
  //   ],
  // },
  {
    id: 2,
    title: 'Sales Consultant',
    department: 'Marketing & Sales',
    location: 'Ahmedabad, Gujarat',
    type: 'Full-Time',
    experience: '3–5 Years',
    description:
      'Guide discerning buyers through their home-buying journey. Build lasting relationships and represent the Anikedhya brand with professionalism and warmth.',
    responsibilities: [
      'Engage with prospective buyers via site visits and events',
      'Present project details, floor plans and pricing',
      'Follow up on leads and maintain CRM records',
      'Negotiate terms and facilitate booking processes',
      'Achieve monthly and quarterly sales targets',
    ],
    requirements: [
      'Graduate in any discipline',
      '3+ years in premium real estate sales',
      'Excellent interpersonal and negotiation skills',
      'Fluency in English, Hindi and Gujarati',
    ],
  },
  {
    id: 3,
    title: 'Site Engineer',
    department: 'Construction',
    location: 'Ahmedabad, Gujarat',
    type: 'Full-Time',
    experience: '2–5 Years',
    description:
      'Execute on-ground construction activities with precision. Ensure structural integrity and finish quality meet our exacting standards.',
    responsibilities: [
      'Supervise daily construction activities on site',
      'Read and interpret structural and architectural drawings',
      'Monitor material quality and vendor deliveries',
      'Maintain daily progress logs and safety compliance',
      'Coordinate with project manager on milestones',
    ],
    requirements: [
      'B.E. / Diploma in Civil Engineering',
      '2+ years on residential construction sites',
      'Knowledge of RCC, finishing and waterproofing techniques',
      'Familiarity with AutoCAD and MS Project',
    ],
  },
];

const departments = ['All', ...new Set(openings.map((o) => o.department))];

const perks = [
  { icon: <FaMoneyBillWave />, title: 'Competitive Pay',    text: 'Industry-leading compensation with performance bonuses and annual increments.' },
  { icon: <FaHospital />,      title: 'Health & Wellness',  text: 'Comprehensive medical insurance for you and your family, plus wellness programs.' },
  { icon: <FaChartLine />,     title: 'Growth Path',        text: 'Clear career progression with mentoring, training and leadership development.' },
  { icon: <FaBuilding />,      title: 'Work Environment',   text: 'Modern office spaces designed with the same luxury ethos we bring to our projects.' },
  { icon: <FaGraduationCap />, title: 'Learning Budget',    text: 'Annual allowance for courses, certifications, conferences and skill-building.' },
  { icon: <FaHandshake />,     title: 'Team Culture',       text: 'Collaborative, respectful culture that celebrates creativity and craftsmanship.' },
];

const applySteps = [
  { num: '01', title: 'Submit Application',  text: 'Fill the form with your details and upload your resume.' },
  { num: '02', title: 'HR Screening',        text: 'Our team reviews your profile and shortlists candidates within 5 days.' },
  { num: '03', title: 'Interview Process',   text: 'Meet the team through technical and cultural fit rounds.' },
  { num: '04', title: 'Welcome Aboard',      text: 'Receive your offer and begin your journey with Anikedhya.' },
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
export default function Career() {
  const [activeDept, setActiveDept]     = useState('All');
  const [expandedId, setExpandedId]     = useState(null);
  const [selectedRole, setSelectedRole] = useState('');
  const [submitted, setSubmitted]       = useState(false);
  useReveal();

  const filtered = activeDept === 'All'
    ? openings
    : openings.filter((o) => o.department === activeDept);

  const handleApply = (title) => {
    setSelectedRole(title);
    setSubmitted(false);
    setTimeout(() => {
      document.getElementById('career-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        tag="Join Our Team"
        title="Build Legacies"
        em="With Us"
        subtitle="Join a team that crafts more than buildings we shape lifestyles, communities and futures."
        image="/2026/04/anikedhya-aerial.jpg"
      />

      {/* ── Culture ── */}
      <section className="career-culture">
        <div className="container">
          <div className="career-culture__grid">
            <div className="career-culture__text reveal-left">
              <div className="section-tag">
                <span className="gold-line" />
                Why Anikedhya
              </div>
              <h2 className="section-title">
                Where Passion Meets <em>Purpose</em>
              </h2>
              <p className="section-desc">
                At Anikedhya Group, every team member is an artisan contributing
                their unique expertise to create residences that stand the test of
                time. We foster a culture of excellence, integrity and continuous growth.
              </p>
              <p className="section-desc" style={{ marginTop: 16 }}>
                Whether you're an architect envisioning skylines, an engineer
                perfecting foundations, or a marketer telling our story your
                work here will have lasting impact.
              </p>
            </div>

            <div className="career-culture__image reveal-right">
              <div
                className="career-culture__image-placeholder"
                style={{ backgroundImage: "url('/2026/04/anikedhya-building-front.jpg')" }}
              />
              <div className="career-culture__image-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Perks ── */}
      <section className="career-perks page-section bg-card">
        <div className="container">
          <div className="section-header-center reveal">
            <div className="section-tag"><span className="gold-line" />Benefits & Perks</div>
            <h2 className="section-title">We Invest in <em>Our People</em></h2>
            <p className="section-subtitle">
              Beyond a great salary, we offer an environment where you grow, thrive and do your best work.
            </p>
          </div>
          <div className="career-perks__grid">
            {perks.map((p, i) => (
              <div key={i} className={`career-perk reveal delay-${(i % 3) + 1}`}>
                <div className="career-perk__icon">{p.icon}</div>
                <h3 className="career-perk__title">{p.title}</h3>
                <p className="career-perk__text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Openings ── */}
      <section className="career-openings page-section">
        <div className="container">
          <div className="reveal">
            <div className="section-tag"><span className="gold-line" />Current Openings</div>
            <h2 className="section-title">Find Your <em>Role</em></h2>
            <p className="section-desc" style={{ marginBottom: 36 }}>
              Explore opportunities across departments and take the next step in your career with Anikedhya Group.
            </p>
          </div>

          {/* Department Filter */}
          <div className="gallery-tabs reveal">
            {departments.map((d) => (
              <button
                key={d}
                className={`gallery-tab${activeDept === d ? ' active' : ''}`}
                onClick={() => setActiveDept(d)}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Job list */}
          {filtered.length > 0 ? (
            <div className="career-openings__list">
              {filtered.map((job) => {
                const isExpanded = expandedId === job.id;
                return (
                  <div className={`career-job${isExpanded ? ' expanded' : ''}`} key={job.id}>
                    <div
                      className="career-job__header"
                      onClick={() => setExpandedId(isExpanded ? null : job.id)}
                      aria-expanded={isExpanded}
                    >
                      <div className="career-job__header-left">
                        <h3 className="career-job__title">{job.title}</h3>
                        <div className="career-job__meta">
                          <span className="career-job__dept">{job.department}</span>
                          <span className="career-job__sep">·</span>
                          <span>📍 {job.location}</span>
                          <span className="career-job__sep">·</span>
                          <span>{job.type}</span>
                          <span className="career-job__sep">·</span>
                          <span>🕐 {job.experience}</span>
                        </div>
                      </div>
                      <div className="career-job__toggle" aria-label={isExpanded ? 'Collapse' : 'Expand'}>
                        <span className="career-job__toggle-icon">﹢</span>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="career-job__body">
                        <p className="career-job__desc">{job.description}</p>
                        <div className="career-job__details-grid">
                          <div>
                            <h4 className="career-job__subtitle">Key Responsibilities</h4>
                            <ul className="career-job__list">
                              {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                            </ul>
                          </div>
                          <div>
                            <h4 className="career-job__subtitle">Requirements</h4>
                            <ul className="career-job__list">
                              {job.requirements.map((r, i) => <li key={i}>{r}</li>)}
                            </ul>
                          </div>
                        </div>
                        <button className="btn-primary" onClick={() => handleApply(job.title)}>
                          <span>Apply for This Role</span>
                          <span className="arrow">→</span>
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="career-openings__empty">
              <p>No openings in this department right now.</p>
              <p>Send us your resume anyway we're always looking for exceptional talent.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Application Form ── */}
      <section className="career-apply page-section bg-card" id="career-form">
        <div className="container">
          <div className="career-apply__grid">
            {/* Left — info + steps */}
            <div className="reveal-left">
              <div className="section-tag"><span className="gold-line" />Apply Now</div>
              <h2 className="section-title">Start Your <em>Journey</em></h2>
              <p className="section-desc">
                Fill in your details and upload your resume. Our HR team reviews every
                application and will get back to you within 5 business days.
              </p>
              <div className="career-apply__steps">
                {applySteps.map((s, i) => (
                  <div key={i} className="career-apply__step">
                    <div className="career-apply__step-num">{s.num}</div>
                    <div>
                      <h4 className="career-apply__step-title">{s.title}</h4>
                      <p className="career-apply__step-text">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form card */}
            <div className="career-apply__form-wrap reveal-right">
              {!submitted ? (
                <form className="contact__form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name *</label>
                      <input type="text" placeholder="Your first name" required />
                    </div>
                    <div className="form-group">
                      <label>Last Name *</label>
                      <input type="text" placeholder="Your last name" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email *</label>
                      <input type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="form-group">
                      <label>Phone *</label>
                      <input type="tel" placeholder="+91 XXXXX XXXXX" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Position Applying For *</label>
                    <select
                      required
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                    >
                      <option value="">Select a role</option>
                      {openings.map((o) => (
                        <option key={o.id} value={o.title}>{o.title}</option>
                      ))}
                      <option value="General Application">General Application</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Total Experience *</label>
                      <select required>
                        <option value="">Select experience</option>
                        <option>0–1 Years</option>
                        <option>1–3 Years</option>
                        <option>3–5 Years</option>
                        <option>5–8 Years</option>
                        <option>8–12 Years</option>
                        <option>12+ Years</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Current Location *</label>
                      <input type="text" placeholder="City, State" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Resume / CV *</label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="career-file-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Cover Note (Optional)</label>
                    <textarea
                      placeholder="Tell us why you'd be a great fit for this role..."
                      rows={4}
                    />
                  </div>
                  <button type="submit" className="btn-primary">
                    <span>Submit Application</span>
                    <span className="arrow">→</span>
                  </button>
                </form>
              ) : (
                <div className="contact__success">
                  <span style={{ fontSize: 40, color: 'var(--gold)' }}>✓</span>
                  <h3 className="section-title" style={{ fontSize: 22, marginBottom: 4 }}>
                    Application Received
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.75 }}>
                    Thank you for your interest in joining Anikedhya Group. Our HR team will
                    review your application and reach out within 5 business days.
                  </p>
                  <button
                    className="btn-outline"
                    onClick={() => { setSubmitted(false); setSelectedRole(''); }}
                  >
                    Submit Another Application
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="career-cta">
        <div className="container">
          <div className="career-cta__inner reveal">
            <div>
              <h2 className="career-cta__title">Don't See the Right Role?</h2>
              <p className="career-cta__text">
                We're always looking for passionate individuals. Send your resume to{' '}
                <a href="mailto:anikedhyamarketing@gmail.com">anikedhyamarketing@gmail.com</a>{' '}
                and we'll keep you in mind for future openings.
              </p>
            </div>
            <Link to="/contact" className="btn-primary">
              <span>Get in Touch</span>
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
