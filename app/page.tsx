const projects = [
  { number: '01', title: 'Digital product concept', description: 'A focused product experience shaped around clear hierarchy, purposeful motion, and a frictionless path from idea to action.', tags: ['Product design', 'Web development'], tone: 'coral' },
  { number: '02', title: 'Brand system & launch', description: 'A flexible visual language and responsive launch site designed to give an emerging idea a confident, memorable presence.', tags: ['Art direction', 'Creative development'], tone: 'blue' },
  { number: '03', title: 'Interactive web experience', description: 'An editorial-inspired interface that turns complex content into an engaging, intuitive story across every screen size.', tags: ['UX strategy', 'Frontend'], tone: 'lime' },
];

const services = [['01', 'Product & UX design'], ['02', 'Frontend development'], ['03', 'Creative direction'], ['04', 'Design systems']];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Mahir Akash, home">MA<span>·</span></a>
        <nav aria-label="Primary navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
        <a className="availability" href="#contact"><span aria-hidden="true" /> Available for work</a>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span>Independent designer & developer</span><span>Dhaka · Worldwide</span></div>
        <h1>I build digital<span className="hero-line"><i>experiences</i><b aria-hidden="true">↗</b></span>that feel alive.</h1>
        <div className="hero-footer">
          <p>I&apos;m Mahir — a multidisciplinary creative turning ambitious ideas into thoughtful, distinctive digital products.</p>
          <a className="circle-link" href="#work" aria-label="Explore selected work">↓</a>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading"><p>Selected work</p><span>2024—2026</span></div>
        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className={`project-art ${project.tone}`} aria-hidden="true">
                <span className="art-index">{project.number}</span><div className="window"><span/><span/><span/></div><div className="orb"/><p>MAHIR / SELECTED WORK</p>
              </div>
              <div className="project-copy">
                <span>{project.number}</span><div><h2>{project.title}</h2><p>{project.description}</p><ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div><span className="project-arrow" aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-heading light"><p>What I do</p><span>Capabilities</span></div>
        <div className="about-grid"><div><p className="about-kicker">Strategy meets craft.</p><h2>I help ideas find their clearest, most compelling form.</h2></div><div className="service-list">{services.map(([number, service]) => <div key={number}><span>{number}</span><p>{service}</p></div>)}</div></div>
      </section>

      <section className="contact-section" id="contact">
        <p>Have something interesting in mind?</p><h2>Let&apos;s make it<br/><i>happen.</i></h2><a href="mailto:hello@example.com">hello@example.com <span>↗</span></a>
      </section>

      <footer><p>© {new Date().getFullYear()} Mahir Akash</p><div><a href="https://github.com/mahirakash">GitHub</a><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
