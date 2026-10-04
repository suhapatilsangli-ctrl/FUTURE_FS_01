function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institute: "VPIMSR College, Sangli",
      status: "Currently Pursuing",
    },
    {
      degree: "Bachelor of Computer Science (BCS)",
      institute: "Willingdon College, Sangli",
      status: "Completed with Distinction",
      cgpa: "9.4 CGPA",
    },
  ];

  const certifications = [
    "AMCAT Qualified",
    "AI-Powered Application Development - ABC Trainer and Consultants",
    "Kathak Prarambhik Examination - Passed with Distinction",
    "Tally Course - Shivaji University",
    "Digital Productivity with AI - NIIT Foundation",
    "AWS Tutorial - Nerds Academy",
    "Programming & Web Development - Great Learning",
    "Python for Beginners - Simplilearn",
    "Shortlisted in PRUDENCE 2026 Event - Aspire (Expert)",
  ];

  return (
    <section id="education" className="education section">

      <div className="section-heading">
        <p>My Academic Journey</p>
        <h2>Education & Certifications</h2>
      </div>

      <div className="education-grid">

        <div className="education-column">
          <h3>Education</h3>

          {education.map((item, index) => (
            <div className="education-card" key={index}>
              <span className="timeline-dot"></span>

              <h4>{item.degree}</h4>
              <p>{item.institute}</p>
             

<span className="education-status">
  {item.status}
</span>

{item.cgpa && (
  <strong className="cgpa">
    {item.cgpa}
  </strong>
)}
            </div>
          ))}
        </div>

        <div className="education-column">
          <h3>Certifications & Achievements</h3>

          <div className="certifications-list">
            {certifications.map((certificate, index) => (
              <div className="certificate-item" key={index}>
                <span>✓</span>
                <p>{certificate}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

export default Education;