import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import FigmaDesigns from './components/FigmaDesigns';
import Hackathons from './components/Hackathons';
import Achievements from './components/Achievements';
import BackgroundAnimation from './components/BackgroundAnimation';
import ScrollShapes from './components/ScrollShapes';
import Navbar from './components/Navbar';
import ProjectOverlay from './components/ProjectOverlay';
import SEO from './components/SEO';
import './index.css';

function AppContent() {
  return (
    <div className="app-container">
      <SEO />
      <BackgroundAnimation />
      <ScrollShapes />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Certificates />
      <Skills />
      <Projects />
      <FigmaDesigns />
      <Hackathons />
      <Achievements />
      <Education />
      <CodeAndCommunity /> {/* Merged Section */}
      <Contact />
      
      {/* Overlay Routings */}
      <Routes>
        <Route path="/project/:id" element={<ProjectOverlay />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
