const projects = [
  { number: "01", title: "Metzgerei Meyer", type: "Brand Experience", year: "2026", tone: "red" },
  { number: "02", title: "North / South", type: "Digital Product", year: "2025", tone: "blue" },
  { number: "03", title: "Studio Objects", type: "Art Direction", year: "2025", tone: "lime" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Hauptnavigation">
        <a className="brand" href="#top">K—26</a>
        <div className="navLinks"><a href="#work">Projekte</a><a href="#about">Über mich</a></div>
        <a className="availability" href="mailto:hello@kenzo.design"><span className="statusDot" /> Verfügbar für Projekte</a>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow">Portfolio / 2026</p>
        <h1>Ich gestalte digitale<span>Erlebnisse mit Haltung.</span></h1>
        <div className="heroFooter">
          <p>Designer &amp; Developer aus der Schweiz — mit Fokus auf Marken, Interfaces und gute Ideen.</p>
          <a className="circleLink" href="#work" aria-label="Zu den Projekten">↓</a>
        </div>
        <div className="orbit" aria-hidden="true"><span className="orbitWord">IDEAS · DESIGN · CODE ·</span><span className="asterisk">✳</span></div>
      </section>

      <section className="work" id="work">
        <div className="sectionHeading"><p>Ausgewählte Arbeiten</p><p>(03)</p></div>
        <div className="projectList">
          {projects.map((project) => (
            <a className={`project ${project.tone}`} href="#contact" key={project.number}>
              <span className="projectNumber">{project.number}</span>
              <span className="projectTitle">{project.title}</span>
              <span className="projectMeta">{project.type}<br />{project.year}</span>
              <span className="projectArrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <p className="eyebrow">Kurz gesagt</p>
        <p className="statement">Ich verbinde klare Gestaltung mit sauberem Code — damit aus einer guten Idee ein Erlebnis wird, das bleibt.</p>
        <div className="aboutGrid">
          <p>Von der ersten Skizze bis zum letzten Pixel arbeite ich eng mit Menschen und Marken, die etwas bewegen wollen.</p>
          <ul><li>Art Direction</li><li>Webdesign</li><li>Frontend Development</li></ul>
        </div>
      </section>

      <footer id="contact">
        <p className="eyebrow">Hast du ein Projekt?</p>
        <a className="contactLink" href="mailto:hello@kenzo.design">Lass uns reden <span>↗</span></a>
        <div className="footerMeta"><span>© 2026 Kenzo</span><span>Zürich, CH</span><a href="#top">Nach oben ↑</a></div>
      </footer>
    </main>
  );
}
