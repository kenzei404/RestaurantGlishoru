type ProjectCaseProps = {
  index: string;
  name: string;
  subtitle: string;
  intro: string;
  detail: string;
  scope: string[];
  tech: string[];
  visual: "join" | "pollo" | "pokedex";
  image: string;
  imageAlt: string;
};

export function ProjectCase(props: ProjectCaseProps) {
  return (
    <main className={`caseStudy projectCase ${props.visual}`}>
      <nav className="caseNav"><a href="/#work">← Portfolio</a><span>Case Study / {props.index}</span><a href="/#contact">Contact ↗</a></nav>
      <section className="projectCaseHero">
        <div className="projectCaseCopy"><p>{props.subtitle}</p><h1>{props.name}</h1><span>Developer Akademie / Selected work</span></div>
        <div className="projectCaseVisual"><img src={props.image} alt={props.imageAlt} /></div>
      </section>
      <section className="caseIntro">
        <p className="sectionLabel">The project</p>
        <div><p>{props.intro}</p><p>{props.detail}</p></div>
      </section>
      <section className="projectWord" aria-hidden="true">{props.name}</section>
      <section className="caseFacts"><div><span>Scope</span><p>{props.scope.map(item => <span className="factLine" key={item}>{item}</span>)}</p></div><div><span>Built with</span><p>{props.tech.map(item => <span className="factLine" key={item}>{item}</span>)}</p></div><a href="mailto:kenzo.kasper@gmx.ch">Discuss the work ↗</a></section>
      <footer className="caseFooter"><a href="/#work">← All projects</a><span>Kenzo Kasper © 2026</span></footer>
    </main>
  );
}
