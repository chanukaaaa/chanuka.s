import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Contact from './components/Contact';
import BackToTopButton from './components/BackToTopButton';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <section id="header-section">
          <Header />
        </section>
        <section id="projects-section">
          <Projects />
        </section>
        <section id="blog-section">
          <Blog />
        </section>
        <section id="contact-section">
          <Contact />
        </section>
        <section id="footer-section">
          <Footer />
        </section>
        <BackToTopButton />
      </div>
    </Router>
  );
};

export default App;
