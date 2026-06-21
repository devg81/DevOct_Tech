export default function HeaderSlide({ title, subtitle, children }) {
  return (
    <section className="header-slide">
      <div className="header-slide__text">
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="header-slide__panel">{children}</div>
    </section>
  );
}
