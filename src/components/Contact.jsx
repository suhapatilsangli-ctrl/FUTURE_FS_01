import { useState } from "react";
import emailjs from "@emailjs/browser";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
  event.preventDefault();

  emailjs
    .send(
      "service_6y9u0r7",
      "template_cdd6z7g",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "DtTd3FXIIdKMaoI8J"
    )
    .then(() => {
      alert("Thank you! Your message has been sent successfully.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Sorry, your message could not be sent. Please try again.");
    });
};
  return (
    <section id="contact" className="contact section">

      <div className="section-heading">
        <p>Let's Connect</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Let's work together</h3>

          <p>
            I am open to internship opportunities, projects and
            collaborations. Feel free to get in touch with me.
          </p>

          <div className="contact-detail">
  <strong>Email</strong>
  <a href="mailto:svpatil.sangli@gmail.com">
    svpatil.sangli@gmail.com
  </a>
</div>

<div className="contact-detail">
  <strong>GitHub</strong>
  <a
    href="https://github.com/suhapatilsangli-ctrl/"
    target="_blank"
    rel="noreferrer"
  >
    https://github.com/suhapatilsangli-ctrl/
  </a>
</div>

<div className="contact-detail">
  <strong>LinkedIn</strong>
  <a
    href="https://www.linkedin.com/in/suhani-patil-5a1508308?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    target="_blank"
    rel="noreferrer"
  >
    https://www.linkedin.com/in/suhani-patil-5a1508308?utm_source=share_via&utm_content=profile&utm_medium=member_android
  </a>
</div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn primary-btn">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;