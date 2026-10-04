function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="hero-greeting">Hello, I'm</p>

        <h1>
          Suhani Patil
        </h1>

       <h2>
  MCA Student | Full Stack Developer | Aspiring Data Analyst
</h2>

        <p className="hero-description">
  I build responsive web applications and enjoy turning data into
  meaningful insights using modern development and data analytics
  technologies.
</p>

        <div className="hero-buttons">

  <a href="#projects" className="btn primary-btn">
    View My Projects
  </a>

  <a
    href="/resume.pdf"
    className="btn secondary-btn"
    target="_blank"
    rel="noreferrer"
  >
    View Resume
  </a>

  <a href="#contact" className="btn secondary-btn">
    Contact Me
  </a>

</div>

      </div>

      <div className="hero-visual">
        <div className="hero-card">
          <span>&lt;/&gt;</span>
        </div>
      </div>

    </section>
  );
}

export default Hero;