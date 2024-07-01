import React from 'react';
import '../css/Projects.css'; 

const projects = [
  { title: 'Project 1', description: 'Description of Project 1' },
  { title: 'Project 2', description: 'Description of Project 2' },
  { title: 'Project 3', description: 'Description of Project 3' },
  { title: 'Project 4', description: 'Description of Project 4' },
  { title: 'Project 5', description: 'Description of Project 5' },
  { title: 'Project 6', description: 'Description of Project 6' },
  { title: 'Project 7', description: 'Description of Project 7' },
  { title: 'Project 8', description: 'Description of Project 8' },
];

const Projects = () => {
  return (
    <section className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
