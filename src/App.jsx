import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodeAndCommunity from './components/CodeAndCommunity'; // Merged Section
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';
import Certificates from './components/Certificates';
import BackgroundAnimation from './components/BackgroundAnimation';
import ScrollShapes from './components/ScrollShapes';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <BackgroundAnimation />
      <ScrollShapes />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Certificates />
      <Skills />
      <Projects />
      <Education />
      <CodeAndCommunity /> {/* Merged Section */}
      <Contact />
    </div>
  );
}

export default App;
