import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import NichesPage from './pages/NichesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import StartProjectPage from './pages/StartProjectPage';

import './App.css';

// Higher order component for page transitions
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
            <Route path="/niches" element={<PageWrapper><NichesPage /></PageWrapper>} />
            <Route path="/portfolio" element={<PageWrapper><PortfolioPage /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
            <Route path="/start-project" element={<PageWrapper><StartProjectPage /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
