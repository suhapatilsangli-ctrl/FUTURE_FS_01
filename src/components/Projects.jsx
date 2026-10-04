function Projects() {
  const projects = [
    {
      title: "GramMitra",
      description:
        "A village management system designed to manage information and services for villages.",
      technologies: ["Java","HTML","CSS", "Spring Boot", "JDBC", "MySQL"],
    },
    {
  title: "Traffic Violation Management System",
  description:
    "A web application for managing vehicle records, traffic violations, fines and receipts.",
  technologies: ["Java", "Spring Boot", "HTML", "CSS", "MySQL"],
  github: "https://github.com/suhapatilsangli-ctrl/TrafficViolationManagementSystem",
},
    {
      title: "Expense Tracker System",
      description:
        "A web application for managing expenses with categorization and expense records.",
      technologies: ["Java","HTML","CSS", "Spring Boot", "Hibernate", "MySQL"],
    },
    {
      title: "E-Commerce Website",
      description:
        "An e-commerce website with product browsing, search, cart and simulated payment workflow.",
      technologies: ["ASP.NET", "C#", "HTML", "CSS","MSSQL"],
    },
  ];

  return (
    <section id="projects" className="projects section">

      <div className="section-heading">
        <p>My Recent Work</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <span className="project-number">
              0{index + 1}
            </span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tech">
              {project.technologies.map((technology, techIndex) => (
                <span key={techIndex}>
                  {technology}
                </span>
              ))}
            </div>
            {project.github && (
  <a
    href={project.github}
    className="project-link"
    target="_blank"
    rel="noreferrer"
  >
    View on GitHub →
  </a>
)}

          </div>
        ))}
      </div>

    </section>
  );
}

export default Projects;