import React from 'react';
import AgreementSystem from '../components/AgreementSystem';
import { motion } from 'framer-motion';

const StartProjectPage = () => {
  return (
    <div className="page-transition min-h-screen pb-20 pt-32">
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
              Let's Build Something Extraordinary
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              Fill out the form below to initiate your project. We'll review your requirements and get back to you within 24 hours.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AgreementSystem />
        </motion.div>
        
      </div>
    </div>
  );
};

export default StartProjectPage;
