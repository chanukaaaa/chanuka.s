import React from 'react';
import '../css/Projects.css';

import project1Image from '../assets/projects/ems1.png';
import project2Image from '../assets/projects/imageGenerator1.png';
import project3Image from '../assets/projects/passwordGenerator1.png';
import project4Image from '../assets/projects/toDoList1.png';
import project5Image from '../assets/projects/translator1.png';
import project6Image from '../assets/projects/weatherapp1.png';

const projects = [
  { title: 'Employee Management System', description: 'Developed using React frontend and Spring Boot backend, this CRUD application manages employee data stored in a MySQL database. It allows for creating, reading, updating, and deleting employee records, providing a comprehensive tool for HR departments.', image: project1Image },
  { title: 'Image Generator', description: 'Utilizing the Unsplash API, this React-based image generator enables users to dynamically fetch and display high-quality images based on search queries. It offers a simple and intuitive interface for exploring a wide range of photographic content.', image: project2Image },
  { title: 'Random Password Generator', description: 'A React application designed to generate secure random passwords and one-time passwords (OTPs) on-demand. It provides customizable options for password complexity and length, ensuring robust security for user accounts and data.', image: project3Image },
  { title: 'Simple ToDo List', description: 'This straightforward React application allows users to create, edit, and manage tasks in a todo list format. It supports basic CRUD operations, offering an intuitive interface for organizing daily activities or project tasks efficiently.', image: project4Image },
  { title: 'Language Translator', description: 'Using the Google Translator API, this React-based application facilitates seamless translation between multiple languages. It offers users the ability to input text, select target languages, and receive translated results instantly, enhancing cross-language communication.', image: project5Image },
  { title: 'Simple Weather App', description: 'Leveraging the React Weather API, this application provides users with detailed weather forecasts for the upcoming seven days based on their geolocation. It delivers essential weather information such as temperature, precipitation, and wind conditions, ensuring users stay informed about current and future weather patterns.', image: project6Image },
];

const Projects = () => {
  return (
    <section className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <Card number={index + 1} title={project.title} description={project.description} image={project.image} />
        </div>
      ))}
    </section>
  );
};

const Card = ({ number, title, description, image }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="img-content">
          <img src={image} alt={`Project ${number} Image`} />
        </div>
        <div className="content">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
