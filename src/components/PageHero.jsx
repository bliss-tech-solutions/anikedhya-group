export default function PageHero({ tag, title, em, subtitle, image }) {
  return (
    <section className="page-hero" style={image ? { backgroundImage: `url(${image})` } : {}}>
      <div className="page-hero__overlay" />
      <div className="container">
        <div className="page-hero__content">
          <span className="section-tag" style={{ color: 'var(--gold-light)' }}>
            <span className="gold-line" />
            {tag}
          </span>
          <h1 className="page-hero__title">
            {title}
            {em && <em> {em}</em>}
          </h1>
          {subtitle && <p className="page-hero__sub">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}