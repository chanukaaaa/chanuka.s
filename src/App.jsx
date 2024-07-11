import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';
import Blog from './components/Blog';
import BackToTopButton from './components/BackToTopButton';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <Projects /> 
        <Blog />
        <BackToTopButton />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
