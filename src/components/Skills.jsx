function Skills() {
  const skillCategories = [
    {
      title: "Full Stack Development",
      icon: "💻",
      skills: [
        "Java",
        "C",
        "C++",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Spring Boot",
        "ASP.NET / .NET",
      ],
    },

    {
      title: "Data Analytics",
      icon: "📊",
      skills: [
        "Python",
        "R",
        "SQL",
        "Excel",
        "Power BI",
        "MySQL",
        "RDBMS",
        "Tableau",
      ],
    },

    {
      title: "Tools & Database",
      icon: "🛠️",
      skills: [
        "Git & GitHub",
        "VS Code",
        "Eclipse",
        "Oracle",
        "MySQL",
        "Mongodb",
      ],
    },
  ];

  return (
    <section id="skills" className="skills section">

      <div className="section-heading">
        <p>What I Know</p>
        <h2>Technical Skills</h2>
      </div>

      <div className="skill-categories">

        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>

            <div className="skill-category-title">
              <span className="skill-icon">
                {category.icon}
              </span>

              <h3>{category.title}</h3>
            </div>

            <div className="skills-grid">

              {category.skills.map((skill, skillIndex) => (
                <div className="skill-card" key={skillIndex}>
                  <span>{skill}</span>
                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;