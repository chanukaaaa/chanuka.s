import React from "react";
import profileImage from "../assets/img1.png"; 
import "../css/Header.css";

const Header = () => {
  return (
    <header className="header">
      {<img src={profileImage} alt="Profile" className="header-image" />}
      <h1>Hi, I'm Chanuka</h1>
      <h2>Coding the possibilities, crafting the future.</h2>
      <p className="description">
        A passionate Frontend Developer with experience in web design and
        development.
      </p>
      <button className="button">
        <span className="button-content">Contact Me</span>
      </button>
    </header>
  );
};

export default Header;
