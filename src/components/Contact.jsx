import React from 'react';
import './Contact.css'; // Optional: Add some styles specific to this component

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out via email or connect with me on LinkedIn.</p>
      <ul>
        <li>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">Your LinkedIn</a></li>
        <li>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></li>
      </ul>
    </section>
  );
}

export default Contact;
