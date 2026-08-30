const capabilities = [
  ['01', 'Product strategy', ['Problem framing', 'Product thinking', 'Prioritization']],
  ['02', 'UX design', ['User flows', 'Information architecture', 'Interaction design']],
  ['03', 'Interface systems', ['Visual design', 'Design systems', 'Responsive UI']],
  ['04', 'Prototyping', ['Rapid concepts', 'High-fidelity prototypes', 'Design handoff']],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <header className="site-nav">
        <a className="brand" href="#top" aria-label="Mahir Akash, home"><span>●</span> mahir</a>
        <nav aria-label="Primary navigation"><a href="#top">Home</a><a href="#work">Works</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
        <a className="status" href="#contact"><span aria-hidden="true" /> Available for selected work</a>
      </header>

      <section className="hero" id="top">
        <p className="overline">Product designer · Skribe</p>
        <h1><span>Hi, I&apos;m</span><span>Mahir.</span></h1>
        <div className="hero-lower">
          <div className="hero-copy"><p>I design complex products<br/>that feel simple to use.</p><a className="pill light" href="#work">View projects <Arrow/></a></div>
          <div className="hero-art" aria-label="Abstract product-design composition">
            <div className="orbit"/><div className="product-card"><span>Product thinking</span><strong>Clarity<br/>over noise.</strong><i>MA / 26</i></div>
          </div>
        </div>
      </section>

      <section className="intro" id="about">
        <p className="section-dot">About</p>
        <div className="intro-copy">
          <h2>I work at the intersection of product thinking, UX, and polished interface design.</h2>
          <p>Based in Dhaka and currently designing at Skribe, I turn complex workflows into clear, focused experiences. My work spans product strategy, interaction design, design systems, and hands-on prototyping.</p>
        </div>
        <div className="skill-cloud"><span>Product strategy</span><span>UX design</span><span>Design systems</span><span>Prototyping</span><span>Figma</span></div>
      </section>

      <section className="work" id="work">
        <div className="section-head"><p className="section-dot">Selected work</p><h2><span>Explore my</span><br/>featured projects</h2><a href="#project-grid">View all <Arrow/></a></div>
        <div className="project-grid" id="project-grid">
          <article className="project project-wide">
            <div className="project-visual skribe-visual">
              <div className="skribe-shell"><div className="skribe-side"><b>S</b><i/><i/><i/></div><div className="skribe-main"><div className="app-top"><span>Deposition workspace</span><em>Ask Skribe</em></div><div className="transcript"><span/><span/><span/><span/><span/><span/></div><div className="insight"><small>AI INSIGHT</small><strong>Key testimony, organized.</strong><p>Review the record with context and clarity.</p></div></div></div>
            </div>
            <div className="project-meta"><div><p>Product design · AI · Legal tech</p><h3>Skribe</h3></div><Arrow/></div>
          </article>

          <article className="project">
            <div className="project-visual casecraft-visual"><div className="case-window"><header><b>CaseCraft</b><span>Preview</span></header><div className="case-body"><aside><i/><i/><i/><i/></aside><section><small>CASE STUDY BUILDER</small><h4>Tell the story<br/>behind the work.</h4><p>Problem</p><p>Design decisions</p><p>Outcome</p></section></div></div></div>
            <div className="project-meta"><div><p>Product concept · UX · AI</p><h3>CaseCraft AI</h3></div><Arrow/></div>
          </article>

          <article className="project">
            <div className="project-visual workspace-visual"><div className="code-panel"><header><i/><i/><i/><span>workspace.tsx</span></header><div className="code-body"><aside>01<br/>02<br/>03<br/>04<br/>05<br/>06</aside><pre><b>const</b> idea = {'{'}<br/>  prompt: <i>&quot;Build it&quot;</i>,<br/>  mode: <i>&quot;focused&quot;</i>,<br/>  preview: <b>true</b><br/>{'}'};</pre></div><footer><span>Ready</span><span>Preview ↗</span></footer></div></div>
            <div className="project-meta"><div><p>Product exploration · AI tools</p><h3>AI Workspace</h3></div><Arrow/></div>
          </article>
        </div>
      </section>

      <section className="services">
        <div className="section-head"><p className="section-dot">Capabilities</p><h2><span>How I shape</span><br/>digital products</h2></div>
        <div className="service-list">{capabilities.map(([number, title, details]) => <article key={number as string}><span>{number as string}</span><h3>{title as string}</h3><div>{(details as string[]).map(item => <p key={item}>+ {item}</p>)}</div><b><Arrow/></b></article>)}</div>
      </section>

      <section className="principles">
        <p className="section-dot">Working principles</p>
        <h2>Good design makes the complicated feel <span>obvious.</span></h2>
        <div className="principle-grid"><article><span>01</span><h3>Understand before decorating</h3><p>Start with the workflow, the constraints, and the decision people need to make.</p></article><article><span>02</span><h3>Make the system coherent</h3><p>Create patterns that scale beyond one screen and help teams move with confidence.</p></article><article><span>03</span><h3>Prototype the real experience</h3><p>Use working interactions to test ideas early and close the gap between design and delivery.</p></article></div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-heading"><p className="section-dot">Start a conversation</p><h2>Let&apos;s work<br/>together.</h2><p>Have a product challenge, collaboration, or role in mind? Share a little context and I&apos;ll get back to you.</p></div>
        <form action="mailto:mahir.akash@gmail.com" method="post" encType="text/plain">
          <label>Full name *<input required name="name" placeholder="Your full name"/></label><label>Email address *<input required type="email" name="email" placeholder="you@company.com"/></label><label>Subject *<input required name="subject" placeholder="What would you like to discuss?"/></label><label>Project type<select name="project-type" defaultValue=""><option value="" disabled>Select one</option><option>Product design</option><option>UX consultation</option><option>Design systems</option><option>Full-time opportunity</option><option>Something else</option></select></label><label className="message">Message<textarea name="message" placeholder="Tell me about the opportunity..." rows={5}/></label><button className="pill accent" type="submit">Send a message <Arrow/></button>
        </form>
      </section>

      <footer><div><p className="section-dot">Impactful product design</p><h2>Let&apos;s start<br/>your project.</h2><a className="pill light" href="mailto:mahir.akash@gmail.com">Get in touch <Arrow/></a></div><div className="footer-side"><h3>Find me online</h3><a href="https://github.com/mahirakash">GitHub <Arrow/></a><a href="mailto:mahir.akash@gmail.com">Email <Arrow/></a><p>Dhaka, Bangladesh<br/>Working worldwide</p></div><small>© {new Date().getFullYear()} Mahir Abrar Akash</small><a className="top" href="#top" aria-label="Back to top">↑</a></footer>
    </main>
  );
}
