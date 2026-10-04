function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div>
          <h3>Suhani Patil</h3>
          <p>
        
  MCA Student | Full Stack Developer | Aspiring Data Analyst

          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Suhani Patil. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;