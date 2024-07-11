import React from 'react';
import '../css/Projects.css';

import project1Image from '../assets/projects/ems1.png';
import project2Image from '../assets/projects/imageGenerator1.png';
import project3Image from '../assets/projects/passwordGenerator1.png';
import project4Image from '../assets/projects/toDoList1.png';
import project5Image from '../assets/projects/translator1.png';
import project6Image from '../assets/projects/weatherapp1.png';

const projects = [
  { id: 1, title: 'Employee Management System', description: 'Developed using React frontend and Spring Boot backend, this CRUD application manages employee data stored in a MySQL database.', image: project1Image, githubLink: 'https://github.com/yourusername/project1', websiteLink: 'https://yourwebsite.com/project1' },
  { id: 2, title: 'Image Generator', description: 'Utilizing the Unsplash API, this React-based image generator enables users to dynamically fetch and display high-quality images based on search queries.', image: project2Image, githubLink: 'https://github.com/yourusername/project2', websiteLink: 'https://yourwebsite.com/project2' },
  { id: 3, title: 'Random Password Generator', description: 'A React application designed to generate secure random passwords and one-time passwords (OTPs) on-demand.', image: project3Image, githubLink: 'https://github.com/yourusername/project3', websiteLink: 'https://yourwebsite.com/project3' },
  { id: 4, title: 'Simple ToDo List', description: 'This straightforward React application allows users to create, edit, and manage tasks in a todo list format.', image: project4Image, githubLink: 'https://github.com/yourusername/project4', websiteLink: 'https://yourwebsite.com/project4' },
  { id: 5, title: 'Language Translator', description: 'Using the Google Translator API, this React-based application facilitates seamless translation between multiple languages.', image: project5Image, githubLink: 'https://github.com/yourusername/project5', websiteLink: 'https://yourwebsite.com/project5' },
  { id: 6, title: 'Simple Weather App', description: 'Leveraging the React Weather API, this application provides users with detailed weather forecasts for the upcoming seven days based on their geolocation.', image: project6Image, githubLink: 'https://github.com/yourusername/project6', websiteLink: 'https://yourwebsite.com/project6' },
];

const Projects = () => {
  return (
    <section className="projects">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="project-image">
            <img src={project.image} alt={project.title} />
            <div className="project-buttons">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">Website</a>
            </div>
          </div>
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
