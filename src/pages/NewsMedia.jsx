// NewsMedia.jsx
import { useState } from 'react';
import { FaAward, FaChartLine, FaLeaf, FaMedal, FaPhone, FaStar, FaTrophy } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const categories = ['All', 'News', 'Press Release', 'Awards', 'Events', 'Media Coverage'];

const featured = {
    id: 1,
    category: 'Press Release',
    date: 'April 15, 2025',
    title: 'Anikedhya Group Unveils Its Most Ambitious Luxury Residential Project in Pune',
    excerpt:
        'Setting a new benchmark for premium living, Anikedhya Group officially announces the launch of its flagship development — a curated collection of sky residences redefining elegance in Pune\'s most sought-after locale.',
    image: '/2026/04/anikedhya-aerial.jpg',
    readTime: '4 min read',
};

const articles = [
    {
        id: 2,
        category: 'Awards',
        date: 'March 28, 2025',
        title: 'Anikedhya Group Receives Best Luxury Developer Award at Maharashtra Real Estate Summit 2025',
        excerpt:
            'Recognised for outstanding design excellence and delivery standards, Anikedhya Group was honoured at the prestigious Maharashtra Real Estate Summit.',
        image: '/2026/04/anikedhya-building-front.jpg',
        readTime: '3 min read',
    },
    {
        id: 3,
        category: 'Media Coverage',
        date: 'March 10, 2025',
        title: 'Times of India Features Anikedhya Group Among Pune\'s Top Emerging Developers',
        excerpt:
            'A detailed feature in Times of India explores how Anikedhya Group is rewriting the rules of luxury real estate in Pune with craftsmanship and community focus.',
        image: '/2026/04/anikedhya-building-corner.jpg',
        readTime: '5 min read',
    },
    {
        id: 4,
        category: 'Events',
        date: 'February 22, 2025',
        title: 'Grand Site Launch Event Draws 500+ Homebuyers and Industry Leaders',
        excerpt:
            'The official site launch of Anikedhya\'s latest project saw an overwhelming response, with industry leaders, buyers and media gathering to witness the vision unveiled.',
        image: '/2026/04/anikedhya-building-side.jpg',
        readTime: '3 min read',
    },
    {
        id: 5,
        category: 'News',
        date: 'February 5, 2025',
        title: 'Anikedhya Group Crosses ₹200 Crore in Bookings Within First Quarter',
        excerpt:
            'Fuelled by unprecedented demand for premium residences, Anikedhya Group has achieved a landmark ₹200 crore in bookings in just three months of sales launch.',
        image: '/2026/04/anikedhya-aerial-view.jpg',
        readTime: '2 min read',
    },
    {
        id: 6,
        category: 'Press Release',
        date: 'January 18, 2025',
        title: 'Anikedhya Group Partners with Leading Landscape Architect for Green Spaces',
        excerpt:
            'In its commitment to sustainable luxury, Anikedhya Group announces a strategic partnership with award-winning landscape architect firm for the design of its lush green amenity spaces.',
        image: '/2026/04/anikedhya-building-top.jpg',
        readTime: '3 min read',
    },
    {
        id: 7,
        category: 'Media Coverage',
        date: 'January 5, 2025',
        title: 'Economic Times Spotlights Anikedhya Group\'s Approach to Sustainable Luxury',
        excerpt:
            'Economic Times features an in-depth analysis of how Anikedhya Group integrates eco-conscious design with world-class luxury standards across all its developments.',
        image: '/2026/04/anikedhya-entrance.jpg',
        readTime: '6 min read',
    },
    {
        id: 8,
        category: 'Awards',
        date: 'December 12, 2024',
        title: 'Anikedhya Group Wins Excellence in Construction Quality at Credai Awards 2024',
        excerpt:
            'CREDAI Pune recognises Anikedhya Group with the Excellence in Construction Quality award, affirming our decade-long commitment to building standards.',
        image: '/2026/04/anikedhya-rooftop-gazebo.jpg',
        readTime: '2 min read',
    },
    {
        id: 9,
        category: 'Events',
        date: 'November 30, 2024',
        title: 'Anikedhya Group Hosts Exclusive Homebuyer Preview at Pune\'s Iconic Venue',
        excerpt:
            'An exclusive private preview evening brought together 200 discerning homebuyers for a first look at the architectural vision, design philosophy and lifestyle offerings.',
        image: '/2026/04/anikedhya-living-room.jpg',
        readTime: '3 min read',
    },
    {
        id: 10,
        category: 'News',
        date: 'November 10, 2024',
        title: 'Foundation Stone Laying Ceremony Marks the Beginning of a New Era',
        excerpt:
            'With great ceremony and community spirit, the foundation stone was laid for Anikedhya\'s upcoming landmark project, symbolising the start of a transformative chapter.',
        image: '/2026/04/anikedhya-garden.jpg',
        readTime: '3 min read',
    },
];

const pressLogos = [
    { name: 'Times of India', abbr: 'TOI' },
    { name: 'Economic Times', abbr: 'ET' },
    { name: 'Hindustan Times', abbr: 'HT' },
    { name: 'DNA India', abbr: 'DNA' },
    { name: 'Maharashtra Times', abbr: 'MT' },
    { name: 'Indian Express', abbr: 'IE' },
];

const awards = [
    {
        year: '2025',
        title: 'Best Luxury Developer',
        body: 'Maharashtra Real Estate Summit',
        icon: <FaTrophy />,
    },
    {
        year: '2024',
        title: 'Excellence in Construction Quality',
        body: 'CREDAI Pune Awards',
        icon: <FaMedal />,
    },
    {
        year: '2024',
        title: 'Most Trusted Real Estate Brand',
        body: 'Business Standard Awards',
        icon: <FaStar />,
    },
    {
        year: '2023',
        title: 'Best Residential Project Design',
        body: 'Realty+ Excellence Awards',
        icon: <FaAward />,
    },
    {
        year: '2023',
        title: 'Green Building Commitment Award',
        body: 'IGBC Chapter Pune',
        icon: <FaLeaf />,
    },
    {
        year: '2022',
        title: 'Emerging Developer of the Year',
        body: 'ET Real Estate Awards',
        icon: <FaChartLine />,
    },
];

const ITEMS_PER_PAGE = 6;

export default function NewsMedia() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [page, setPage] = useState(1);
    const [emailInput, setEmailInput] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const filtered =
        activeCategory === 'All'
            ? articles
            : articles.filter((a) => a.category === activeCategory);

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const paginated = filtered.slice(0, page * ITEMS_PER_PAGE);
    const hasMore = page < totalPages;

    const handleCategoryChange = (cat) => {
        setActiveCategory(cat);
        setPage(1);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (emailInput.trim()) setSubscribed(true);
    };

    return (
        <>
            {/* ── Hero ── */}
            <section
                className="page-hero"
                style={{ backgroundImage: "url('/2026/04/anikedhya-aerial.jpg')" }}
            >
                <div className="page-hero__overlay" />
                <div className="container">
                    <div className="page-hero__content">
                        <h1 className="page-hero__title">
                            News & <em>Media</em>
                        </h1>
                        <p className="page-hero__sub">
                            Stay informed with the latest announcements, press coverage,
                            awards and milestones from Anikedhya Group.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Stats Bar ── */}
            <div className="nm-stats-bar">
                <div className="container">
                    <div className="nm-stats-bar__inner">
                        <div className="nm-stat">
                            <span className="nm-stat__number">50+</span>
                            <span className="nm-stat__label">Media Features</span>
                        </div>
                        <div className="nm-stat">
                            <span className="nm-stat__number">12+</span>
                            <span className="nm-stat__label">Industry Awards</span>
                        </div>
                        <div className="nm-stat">
                            <span className="nm-stat__number">8+</span>
                            <span className="nm-stat__label">Years of Excellence</span>
                        </div>
                        <div className="nm-stat">
                            <span className="nm-stat__number">25+</span>
                            <span className="nm-stat__label">Press Publications</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Featured Story ── */}
            <section className="section nm-featured">
                <div className="container">
                    <div className="section-eyebrow">
                        <span className="section-eyebrow__line" />
                        <span className="section-eyebrow__text">Featured Story</span>
                    </div>
                    <div className="nm-featured__card">
                        <div
                            className="nm-featured__image"
                            style={{ backgroundImage: `url('${featured.image}')` }}
                        >
                            <div className="nm-featured__image-overlay" />
                            <span className="nm-featured__category">{featured.category}</span>
                        </div>
                        <div className="nm-featured__content">
                            <div className="nm-featured__meta">
                                <span className="nm-article__date">{featured.date}</span>
                                <span className="nm-article__dot">·</span>
                                <span className="nm-article__read">{featured.readTime}</span>
                            </div>
                            <h2 className="nm-featured__title">{featured.title}</h2>
                            <p className="nm-featured__excerpt">{featured.excerpt}</p>
                            <a href="#" className="proj-card__link">
                                Read Full Story →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── All Articles ── */}
            <section
                className="section nm-articles"
                style={{ background: 'var(--bg-card)', paddingTop: 0 }}
            >
                <div className="container">
                    <div className="nm-articles__header">
                        <div>
                            <div className="section-eyebrow">
                                <span className="section-eyebrow__line" />
                                <span className="section-eyebrow__text">Latest Updates</span>
                            </div>
                            <h2 className="section-title">
                                All <em>Stories</em>
                            </h2>
                        </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="gallery-tabs">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`gallery-tab${activeCategory === cat ? ' active' : ''}`}
                                onClick={() => handleCategoryChange(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Articles Grid */}
                    {paginated.length > 0 ? (
                        <>
                            <div className="nm-articles__grid">
                                {paginated.map((article) => (
                                    <article className="nm-article" key={article.id}>
                                        <div
                                            className="nm-article__image"
                                            style={{ backgroundImage: `url('${article.image}')` }}
                                        >
                                            <div className="nm-article__image-overlay" />
                                            <span className="nm-article__category-badge">
                                                {article.category}
                                            </span>
                                        </div>
                                        <div className="nm-article__body">
                                            <div className="nm-article__meta">
                                                <span className="nm-article__date">{article.date}</span>
                                                <span className="nm-article__dot">·</span>
                                                <span className="nm-article__read">{article.readTime}</span>
                                            </div>
                                            <h3 className="nm-article__title">{article.title}</h3>
                                            <p className="nm-article__excerpt">{article.excerpt}</p>
                                            <a href="#" className="proj-card__link">
                                                Read More →
                                            </a>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {hasMore && (
                                <div className="nm-articles__load-more">
                                    <button
                                        className="btn btn--outline"
                                        onClick={() => setPage((p) => p + 1)}
                                    >
                                        Load More Stories
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="nm-articles__empty">
                            <p>No articles in this category yet.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* ── Press Coverage Logos ── */}
            <section className="section nm-press">
                <div className="container">
                    <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
                        <span className="section-eyebrow__line" />
                        <span className="section-eyebrow__text">As Seen In</span>
                        <span className="section-eyebrow__line" />
                    </div>
                    <h2 className="section-title" style={{ textAlign: 'center' }}>
                        Featured In Leading <em>Publications</em>
                    </h2>
                    <div className="nm-press__logos">
                        {pressLogos.map((logo) => (
                            <div className="nm-press__logo" key={logo.name}>
                                <span className="nm-press__logo-abbr">{logo.abbr}</span>
                                <span className="nm-press__logo-name">{logo.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Awards & Recognition ── */}
            <section
                className="section nm-awards"
                style={{ background: 'var(--bg-card)' }}
            >
                <div className="container">
                    <div className="section-eyebrow">
                        <span className="section-eyebrow__line" />
                        <span className="section-eyebrow__text">Recognition</span>
                    </div>
                    <h2 className="section-title">
                        Awards & <em>Accolades</em>
                    </h2>
                    <p className="section-desc" style={{ marginBottom: 48 }}>
                        Over the years, our commitment to excellence has been recognised by
                        the industry's most respected institutions.
                    </p>
                    <div className="nm-awards__grid">
                        {awards.map((award, i) => (
                            <div className="nm-award-card" key={i}>
                                <div className="nm-award-card__top">
                                    <span className="nm-award-card__icon">{award.icon}</span>
                                    <span className="nm-award-card__year">{award.year}</span>
                                </div>
                                <h3 className="nm-award-card__title">{award.title}</h3>
                                <p className="nm-award-card__body">{award.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Media Kit & Press Contact ── */}
            <section className="section nm-mediakit">
                <div className="container">
                    <div className="nm-mediakit__grid">
                        {/* Press Contact */}
                        <div className="nm-mediakit__card nm-mediakit__card--alt">
                            <div className="nm-mediakit__card-icon"><FaPhone/></div>
                            <h3 className="nm-mediakit__card-title">Press Enquiries</h3>
                            <p className="nm-mediakit__card-text">
                                For interviews, quotes, project information or any media-related
                                requests, our communications team is here to help.
                            </p>
                            <div className="nm-press-contact">
                                <div className="nm-press-contact__item">
                                    <span className="nm-press-contact__label">Email</span>
                                    <a
                                        href="mailto:media@anikedhya.com"
                                        className="nm-press-contact__value"
                                    >
                                        media@anikedhya.com
                                    </a>
                                </div>
                                <div className="nm-press-contact__item">
                                    <span className="nm-press-contact__label">Phone</span>
                                    <a
                                        href="tel:+912012345678"
                                        className="nm-press-contact__value"
                                    >
                                        +91 20 1234 5678
                                    </a>
                                </div>
                                <div className="nm-press-contact__item">
                                    <span className="nm-press-contact__label">Hours</span>
                                    <span className="nm-press-contact__value">
                                        Mon – Sat, 9:00 AM – 6:00 PM
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="nm-mediakit__card nm-mediakit__card--dark">
                            <div className="nm-mediakit__card-icon" style={{ filter: 'brightness(2)' }}>
                                <MdEmail />
                            </div>
                            <h3
                                className="nm-mediakit__card-title"
                                style={{ color: '#F8F5F0' }}
                            >
                                Stay Updated
                            </h3>
                            <p
                                className="nm-mediakit__card-text"
                                style={{ color: 'rgba(255,255,255,0.45)' }}
                            >
                                Subscribe to our newsletter and be the first to receive project
                                launches, news and exclusive updates from Anikedhya Group.
                            </p>
                            {!subscribed ? (
                                <form
                                    className="nm-newsletter-form"
                                    onSubmit={handleSubscribe}
                                >
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={emailInput}
                                        onChange={(e) => setEmailInput(e.target.value)}
                                        required
                                        className="nm-newsletter-input"
                                    />
                                    <button type="submit" className="nm-newsletter-btn">
                                        Subscribe
                                    </button>
                                </form>
                            ) : (
                                <div className="nm-newsletter-success">
                                    <span>✓</span> Thank you! You're now subscribed.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section
                className="section"
                style={{ background: 'var(--bg-card)', paddingTop: 0 }}
            >
                <div className="container">
                    <div className="career-cta__inner">
                        <div>
                            <h2 className="career-cta__title">
                                Want to Feature Anikedhya Group?
                            </h2>
                            <p className="career-cta__text">
                                We welcome collaborations with journalists, bloggers and media
                                houses. Reach out to our communications team and let's tell the
                                story together.
                            </p>
                        </div>
                        <Link to="/contact" className="btn btn--primary">
                            Contact Us →
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}