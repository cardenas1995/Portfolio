import React from 'react';
import './Projects.css'; // Optional: Add some styles specific to this component

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project">
        <h3>Fitness Tracker</h3>
        <p>
          A full-stack application to log workouts and track progress over time. Built with React, Flask, and SQLite.
        </p>
        <a href="https://github.com/yourusername/fitness-tracker" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      <div className="project">
        <h3>Pokedex Application</h3>
        <p>
          A front-end application using the PokéAPI to search and display information about different Pokémon. Built with React.
        </p>
        <a href="https://github.com/yourusername/pokedex-app" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      {/* Add more projects as needed */}
    </section>
  );
}

export default Projects;
