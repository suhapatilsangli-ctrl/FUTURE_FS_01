function About() {
  return (
    <section id="about" className="about section">

      <div className="section-heading">
        <p>Get To Know Me</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">

        <div className="about-text">
          <h3>Passionate About Technology & Development</h3>

          <p>
  I am currently pursuing MCA and have completed my BCS
  with distinction. I am interested in both full stack
  web development and data analytics.
</p>

<p>
  I enjoy building practical web applications and working
  with data to discover patterns, generate insights and
  support better decision-making.
</p>
          <p>
            Along with technical skills, I enjoy teamwork, event
            organization and taking leadership responsibilities.
          </p>
        </div>

        <div className="about-highlights">

          <div className="highlight-card">
            <h4>MCA</h4>
            <p>Currently Pursuing</p>
          </div>

          <div className="highlight-card">
            <h4>BCS</h4>
            <p>Completed with Distinction</p>
          </div>

          <div className="highlight-card">
            <h4>Full Stack</h4>
            <p>Web Development</p>
          </div>

          <div className="highlight-card">
            <h4>Problem Solver</h4>
            <p>Real-world Projects</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;