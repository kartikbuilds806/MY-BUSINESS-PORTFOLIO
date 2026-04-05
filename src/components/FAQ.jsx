import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do you use templates or are the websites custom coded?",
    answer: "Every website we build is 100% custom coded. We do not rely on cheap templates or builders like Elementor that end up crashing or taking 10 seconds to load. We write clean, optimized code using modern frameworks like React and Vite to ensure your site is lightning fast and totally unique to your brand."
  },
  {
    question: "How long does it take to deliver a premium website?",
    answer: "Our standard turnaround time is typically 2 to 5 business days for landing pages, and slightly longer for complex multi-page applications. Because we handle everything in-house and do not outsource, we guarantee extremely fast and communicative delivery."
  },
  {
    question: "What industries or niches do you specialize in?",
    answer: "We specialize in building revenue-generating websites for Real Estate Agents, Dental Clinics, E-commerce Stores, and local service businesses. However, our conversion-focused design philosophy applies perfectly to almost any ambitious B2B or B2C business."
  },
  {
    question: "Do I need to sign a heavy contract?",
    answer: "No. We believe in keeping things simple and transparent. After you book your initial Zoom call, we discuss the scope of work and agree on a flat fee. No hidden monthly retainers unless you explicitly want ongoing SEO and management packages."
  },
  {
    question: "Will the website look good on mobile?",
    answer: "Absolutely. Over 60% of web traffic is mobile. Every pixel we engineer is fully responsive, meaning it will look stunning and function perfectly on iOS, Android, tablets, and massive desktop monitors."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" style={{ background: 'var(--bg-main)', padding: '120px 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 className="section-title" style={{ marginBottom: '1rem', letterSpacing: '-0.03em' }}>
            Frequently Asked <span style={{ color: 'var(--accent-secondary)' }}>Questions</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
            Everything you need to know about working with PrimeForge.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ 
                background: 'var(--bg-secondary)', 
                borderRadius: '16px', 
                border: '1px solid var(--border-light)',
                overflow: 'hidden'
              }}
            >
              <button 
                onClick={() => toggle(index)}
                style={{ 
                  width: '100%', 
                  padding: '25px', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <span style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                  {faq.question}
                </span>
                <motion.div 
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ padding: '0 25px 30px', color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.05rem', borderTop: '1px solid var(--border-light)', paddingTop: '20px' }}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
