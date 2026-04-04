import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, ArrowLeft } from 'lucide-react';

const PremiumBookingSystem = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    business: ''
  });

  const services = [
    { id: 'custom_web', title: 'Custom Website Design', desc: 'Premium, fully bespoke website' },
    { id: 'redesign', title: 'Website Redesign', desc: 'Upgrade your current site' },
    { id: 'landing_page', title: 'High-Converting Landing Page', desc: 'Optimized for ad campaigns' },
    { id: 'consultation', title: 'Free Strategy Call', desc: 'Discuss your business goals' }
  ];

  const dates = [
    { day: 'Mon', date: '12' },
    { day: 'Tue', date: '13' },
    { day: 'Wed', date: '14' },
    { day: 'Thu', date: '15' },
    { day: 'Fri', date: '16' },
  ];

  const times = ['10:00 AM', '11:30 AM', '01:00 PM', '03:00 PM', '05:00 PM'];

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi PrimeForge, I want to book a call. 
Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}
Name: ${formData.name}
Phone: ${formData.phone}
Business: ${formData.business}`;
    
    // Open whatsapp link
    window.open(`https://wa.me/918533925291?text=${encodeURIComponent(msg)}`, '_blank');

    setStep(4); // Success step
  };

  return (
    <div className="glass" style={{ padding: '40px', borderRadius: '24px', position: 'relative', overflow: 'hidden', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-card)' }}>
      <AnimatePresence mode="wait">
        
        {/* STEP 1: SELECT SERVICE */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>What do you need help with?</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Select a service to discuss during our call.</p>
            </div>
            
            <div style={{ display: 'grid', gap: '16px' }}>
              {services.map((srv) => (
                <div 
                  key={srv.id}
                  onClick={() => setFormData({ ...formData, service: srv.title })}
                  style={{ 
                    padding: '20px', 
                    borderRadius: '16px', 
                    border: formData.service === srv.title ? '2px solid var(--accent-primary)' : '1px solid var(--border-color)',
                    background: formData.service === srv.title ? 'rgba(0,0,0,0.02)' : 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '4px' }}>{srv.title}</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{srv.desc}</p>
                    </div>
                    {formData.service === srv.title ? <CheckCircle2 color="var(--accent-primary)" /> : <div style={{width: 24, height: 24, borderRadius: '50%', border: '1px solid var(--border-color)'}} />}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'flex-end' }}>
              <button 
                onClick={nextStep} 
                disabled={!formData.service}
                className="btn btn-primary" 
                style={{ opacity: formData.service ? 1 : 0.5, cursor: formData.service ? 'pointer' : 'not-allowed' }}
              >
                Choose Slot <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 2: SELECT DATE & TIME */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <button onClick={prevStep} style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex' }}><ArrowLeft size={24} color="var(--text-primary)" /></button>
              <div>
                <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', marginBottom: '4px' }}>Select an available slot</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Timezone: India Standard Time (IST)</p>
              </div>
            </div>

            {/* Simulated Calendar */}
            <div style={{ marginBottom: '30px' }}>
              <div style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '15px' }}>Next availability</div>
              <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px' }}>
                {dates.map((d, i) => (
                  <div 
                    key={i} 
                    onClick={() => setFormData({ ...formData, date: d.day + ' ' + d.date })}
                    style={{ 
                      flex: '0 0 auto',
                      width: '70px',
                      padding: '15px 0', 
                      borderRadius: '12px', 
                      textAlign: 'center',
                      border: formData.date === (d.day + ' ' + d.date) ? '2px solid var(--accent-primary)' : '1px solid var(--border-color)',
                      background: formData.date === (d.day + ' ' + d.date) ? 'var(--accent-primary)' : 'transparent',
                      color: formData.date === (d.day + ' ' + d.date) ? 'white' : 'var(--text-primary)',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ fontSize: '0.85rem', marginBottom: '4px', opacity: 0.8 }}>{d.day}</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>{d.date}</div>
                  </div>
                ))}
              </div>
            </div>

            {formData.date && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '15px' }}>Available Times</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {times.map((t, i) => (
                    <div 
                      key={i}
                      onClick={() => setFormData({ ...formData, time: t })}
                      style={{ 
                        padding: '12px', 
                        borderRadius: '8px', 
                        textAlign: 'center',
                        border: formData.time === t ? '2px solid var(--accent-primary)' : '1px solid var(--border-color)',
                        background: formData.time === t ? 'rgba(0,0,0,0.03)' : 'transparent',
                        color: 'var(--text-primary)',
                        fontWeight: formData.time === t ? 700 : 500,
                        cursor: 'pointer'
                      }}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'flex-end' }}>
              <button 
                onClick={nextStep} 
                disabled={!formData.date || !formData.time}
                className="btn btn-primary" 
                style={{ opacity: (formData.date && formData.time) ? 1 : 0.5, cursor: (formData.date && formData.time) ? 'pointer' : 'not-allowed' }}
              >
                Confirm Time <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 3: CONTACT FORM */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
             <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <button onClick={prevStep} style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex' }}><ArrowLeft size={24} color="var(--text-primary)" /></button>
              <div>
                <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', marginBottom: '4px' }}>Almost done!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>You've selected {formData.date} at {formData.time}.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px' }}>Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none', fontSize: '1rem', background: 'var(--bg-main)' }}
                  placeholder="Rahul Sharma"
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px' }}>Phone / WhatsApp Number</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none', fontSize: '1rem', background: 'var(--bg-main)' }}
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px' }}>Business Website or Name</label>
                <input 
                  type="text" 
                  value={formData.business}
                  onChange={e => setFormData({...formData, business: e.target.value})}
                  style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none', fontSize: '1rem', background: 'var(--bg-main)' }}
                  placeholder="PrimeForge Agency"
                />
              </div>

              <div style={{ marginTop: '20px' }}>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '18px', fontSize: '1.1rem' }}>
                  Book Meeting
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* STEP 4: SUCCESS */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, type: 'spring' }}
            style={{ textAlign: 'center', padding: '40px 0' }}
          >
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--accent-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px' }}>
              <CheckCircle2 size={40} color="white" />
            </div>
            <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', marginBottom: '15px' }}>Meeting Booked!</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '400px', margin: '0 auto 30px' }}>
              Your call is confirmed for <strong>{formData.date} at {formData.time}</strong>. We'll send you a calendar invite shortly.
            </p>
            <button onClick={() => { setStep(1); setFormData({ service: '', date: '', time: '', name: '', phone: '', business: '' }) }} className="btn btn-outline" style={{ padding: '12px 30px' }}>
              Done
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PremiumBookingSystem;
