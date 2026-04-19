import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      name: "Fraud Detection System",
      link: "https://github.com/your-username/fraud-detection"
    },
    {
      name: "Student Performance Prediction",
      link: "https://github.com/your-username/student-performance"
    }
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>

      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.name}</h3>
          <a href={project.link} target="_blank" rel="noreferrer">
            View on GitHub
          </a>
        </div>
      ))}

    </div>
  );
}

export default Projects;