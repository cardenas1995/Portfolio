import React from 'react';
import './About.css'; // Optional: Add some styles specific to this component

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        I'm Kevin Cardenas, a Full-Stack Developer with a passion for creating interactive web applications. I have a background in retail management and recently graduated from the Flatiron School's Software Engineering Bootcamp, where I learned JavaScript, React, Python, and Flask.
      </p>
      <h3>Skills</h3>
      <ul>
        <li>JavaScript, React</li>
        <li>Python, Flask</li>
        <li>HTML, CSS</li>
        <li>REST APIs, SQL</li>
      </ul>
    </section>
  );
}

export default About;
