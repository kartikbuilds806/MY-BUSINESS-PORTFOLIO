import React, { useState } from 'react';
import { motion } from 'framer-motion';
import jsPDF from 'jspdf';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

const AgreementSystem = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', business: '', phone: '', req: '', agreed: false, signature: '' });

  const isFormValid = formData.name && formData.email && formData.business && formData.req && formData.phone;

  const nextStep = (e) => {
    e.preventDefault();
    if (isFormValid) setStep(2);
  };

  const submitProject = async (e) => {
    e.preventDefault();
    if (formData.agreed && formData.signature) {
      
      // --- PDF GENERATION ---
      const doc = new jsPDF();
      
      // Header
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.text("PRIMEFORGE", 105, 20, null, null, "center");
      
      doc.setFontSize(14);
      doc.text("Official Project Agreement", 105, 30, null, null, "center");
      
      doc.setLineWidth(0.5);
      doc.line(20, 35, 190, 35);
      
      // Client Details
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 50);
      doc.text(`Client Name: ${formData.name}`, 20, 60);
      doc.text(`Email: ${formData.email}`, 20, 70);
      doc.text(`Business Name: ${formData.business}`, 20, 80);
      doc.text(`Phone: ${formData.phone}`, 20, 90);
      
      // Requirements
      doc.setFont("helvetica", "bold");
      doc.text("Project Requirements:", 20, 105);
      doc.setFont("helvetica", "normal");
      const splitReqs = doc.splitTextToSize(formData.req, 170); // Wrap text
      doc.text(splitReqs, 20, 115);
      
      // Calculate dynamic Y position to avoid overlapping text
      const reqHeight = splitReqs.length * 7;
      let currentY = 115 + reqHeight + 15;
      
      // Terms
      doc.setFont("helvetica", "bold");
      doc.text("Terms & Conditions Agreement:", 20, currentY);
      doc.setFont("helvetica", "normal");
      currentY += 10;
      
      const termsText = "The client hereby requests a digital project. The client agrees to the 5-step development process outlined by PrimeForge. The initial mockup phase is free. Further continuation implies commitment to the project and agreed payments.";
      const splitTerms = doc.splitTextToSize(termsText, 170);
      doc.text(splitTerms, 20, currentY);
      
      currentY += (splitTerms.length * 7) + 15;
      doc.line(20, currentY, 190, currentY);
      currentY += 15;
      
      // Signature
      doc.text("Digitally Signed By:", 20, currentY);
      doc.setFont("times", "italic");
      doc.setFontSize(18);
      doc.text(formData.signature, 20, currentY + 15);
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(150);
      doc.text("Authentic Digital Signature - PrimeForge Systems", 20, currentY + 25);

      // Download PDF
      doc.save(`PrimeForge_Agreement_${formData.business.replace(/\s+/g, '_')}.pdf`);
      // -----------------------

      // --- FIREBASE SAVING ---
      try {
        await addDoc(collection(db, "agreements"), {
          name: formData.name,
          email: formData.email,
          business: formData.business,
          phone: formData.phone,
          requirements: formData.req,
          agreed: formData.agreed,
          signature: formData.signature,
          createdAt: serverTimestamp()
        });
      } catch (error) {
        console.error("Firebase Error: ", error);
        alert("Database Error: " + error.message + "\n(Please check if Firestore Database is created in your Firebase Console)");
        return; // Stop execution if DB fails
      }

      // --- EMAIL NOTIFICATION (EMAILJS) ---
      try {
        const EMAILJS_SERVICE_ID = "service_871aenn"; 
        const EMAILJS_ADMIN_TEMPLATE = "template_rlg4ysw";
        const EMAILJS_AUTOREPLY_TEMPLATE = "template_d0e19mr";
        const EMAILJS_PUBLIC_KEY = "KVfeG-fgOp54vq6MG";
        
        const templateParams = {
          // Exact matches for the variables in your screenshots:
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.req,
          
          // Legacy variables just in case
          from_name: formData.name,
          reply_to: formData.email,
          business_name: formData.business,
          phone_number: formData.phone,
          signature: formData.signature
        };

        // 1. Send Notification to YOU (Admin)
        await emailjs.send(
          EMAILJS_SERVICE_ID, 
          EMAILJS_ADMIN_TEMPLATE, 
          templateParams, 
          EMAILJS_PUBLIC_KEY
        );

        // 2. Send Auto-Reply to CLIENT
        await emailjs.send(
          EMAILJS_SERVICE_ID, 
          EMAILJS_AUTOREPLY_TEMPLATE, 
          {
            name: formData.name, // matches 'Hello {{name}}'
            send_to: formData.email, // matches To Email
            to_name: formData.name,
            reply_to: formData.email,
            user_email: formData.email,
            email: formData.email 
          }, 
          EMAILJS_PUBLIC_KEY
        );
      } catch (error) {
        console.error("EmailJS Error: ", error);
        alert("Email Notification Error: " + (error.text || error.message) + "\n(Your data was saved in Firebase, but emails failed to send)");
        return; // Stop execution if email fails
      }
      // -------------------------------------

      alert("Project request submitted successfully! Your copy of the Agreement PDF has been downloaded.");
      setStep(1);
      setFormData({ name: '', email: '', business: '', phone: '', req: '', agreed: false, signature: '' });
      
    } else {
      alert("Please agree to the terms and sign.");
    }
  };

  return (
    <div className="glass" style={{ padding: '30px', borderRadius: '16px', maxWidth: '600px', margin: '0 auto' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', textAlign: 'center' }}>Start Your Project</h3>
      
      {step === 1 && (
        <form onSubmit={nextStep}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Full Name</label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'rgba(0,0,0,0.2)', color: 'white' }}
              placeholder="John Doe"
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Email Address</label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'rgba(0,0,0,0.2)', color: 'white' }}
              placeholder="john@example.com"
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Phone Number / WhatsApp</label>
            <input 
              type="text" 
              required
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
              style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'rgba(0,0,0,0.2)', color: 'white' }}
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Business Name</label>
            <input 
              type="text" 
              required
              value={formData.business}
              onChange={e => setFormData({...formData, business: e.target.value})}
              style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'rgba(0,0,0,0.2)', color: 'white' }}
              placeholder="Your Agency / Shop"
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Requirements</label>
            <textarea 
              required
              value={formData.req}
              onChange={e => setFormData({...formData, req: e.target.value})}
              style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'rgba(0,0,0,0.2)', color: 'white', minHeight: '100px', resize: 'vertical' }}
              placeholder="Briefly describe what you need..."
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Continue</button>
        </form>
      )}

      {step === 2 && (
        <motion.form 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          onSubmit={submitProject}
        >
          <div style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', marginBottom: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <strong>Terms & Conditions:</strong><br/>
            I hereby request a digital project. I agree to the 5-step process outlined by DevStudio. The mockup phase is free. Further continuation implies commitment to payment.
          </div>
          
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input 
              type="checkbox" 
              id="agree" 
              checked={formData.agreed}
              onChange={e => setFormData({...formData, agreed: e.target.checked})}
              style={{ width: '18px', height: '18px', accentColor: 'var(--accent-primary)' }}
            />
            <label htmlFor="agree">I agree to the Terms & Conditions</label>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Digital Signature (Type your full name)</label>
            <input 
              type="text" 
              required
              value={formData.signature}
              onChange={e => setFormData({...formData, signature: e.target.value})}
              style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'rgba(0,0,0,0.2)', color: 'white', fontFamily: 'cursive' }}
              placeholder="Type signature..."
            />
          </div>

          <div style={{ display: 'flex', gap: '15px' }}>
            <button type="button" onClick={() => setStep(1)} className="btn btn-outline" style={{ flex: 1 }}>Back</button>
            <button type="submit" className="btn btn-primary" style={{ flex: 2 }}>Sign & Submit Request</button>
          </div>
        </motion.form>
      )}
    </div>
  );
};

export default AgreementSystem;
