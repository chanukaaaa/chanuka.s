// src/components/Header.jsx
import React from 'react';
// import profileImage from '../assets/profile.jpg'; // replace with your image
import '../css/Header.css';  // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      {/* <img src={profileImage} alt="Profile" className="header-image" /> */}
      <h1>Hi, I'm Chanuka</h1>
      <h2>IT Undergraduate</h2>
      <p>Coding the possibilities, crafting the future.</p>
      <p className="description">A passionate Frontend Developer with experience in web design and development.</p>
      <button className="contact-button">Contact Me</button>
    </header>
  );
};

export default Header;
