import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/contact-section.scss';

// Varianty pre animácie
const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const successVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.2, type: "spring", stiffness: 200 } }
};

export const ContactSection = () => {
  const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);

    try {
      // ZMEŇ TÚTO URL NA SVOJU SKUTOČNÚ PHP ADRESU
      const response = await fetch('https://esdtronic.eu/send-email.php', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const result = await response.json();
      
      if (result.status === 'success') {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Chyba:", error);
      setStatus('error');
    }
  };

  return (
    <section className="contact-section" id="kontakt">
      <div className="contact-container">
        <div className="contact-grid">
          
          <div className="contact-info">
            <h2 className="contact-title">Máte otázky? <br/><span>Radi vám poradíme.</span></h2>
            {/* ... info list ... */}
          </div>

          <div className="contact-form-card relative overflow-hidden min-h-[500px]">
            {/* AnimatePresence spravuje animácie pri vstupe a výstupe prvkov z DOMu */}
            <AnimatePresence mode="wait">
              
              {status !== 'success' ? (
                // FORMULÁR (Viditeľný, kým nie je úspech)
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  className="form-wrapper"
                  variants={formVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  
                  {/* Honeypot */}
                  <input type="text" name="website" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                  <div className="form-group">
                    <input type="text" name="name" placeholder="Meno a priezvisko" required />
                  </div>
                  
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Váš e-mail" required />
                  </div>

                  <div className="form-group">
                    <input type="text" name="subject" placeholder="Predmet správy" required />
                  </div>

                  <div className="form-group">
                    <textarea name="message" rows="5" placeholder="Vaša správa..." required></textarea>
                  </div>

                  <div className="form-gdpr">
                    <label className="checkbox-container">
                      <input type="checkbox" name="gdpr" required />
                      Súhlasím so <a href="/gdpr">spracovaním osobných údajov</a>
                    </label>
                  </div>

                  <button type="submit" className="btn-submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Odosielam...' : 'Odoslať dopyt'}
                  </button>

                  {status === 'error' && <p className="msg-error">Nastal problém. Skúste to neskôr.</p>}
                </motion.form>
              
              ) : (
                
                // ÚSPECH (Viditeľný po úspešnom odoslaní)
                <motion.div 
                  key="success"
                  className="success-wrapper flex flex-col items-center justify-center text-center h-full"
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {/* Animovaná Fajka */}
                  <div className="success-icon-box">
                    <motion.svg 
                      className="success-icon" 
                      viewBox="0 0 52 52"
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.circle 
                        className="success-circle" 
                        cx="26" cy="26" r="25" 
                        fill="none" 
                        stroke="#10b981"
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                      <motion.path 
                        className="success-check" 
                        fill="none" 
                        stroke="#10b981"
                        strokeWidth="4"
                        d="M14.1 27.2l7.1 7.2 16.7-16.8" 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4, delay: 0.7, ease: "easeInOut" }}
                      />
                    </motion.svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-green-600 mt-6 mb-3">Ďakujeme!</h3>
                  <p className="text-lg text-slate-600">
                    Vaša správa bola úspešne odoslaná. <br/>
                    Odpovieme vám hneď, ako to bude možné.
                  </p>
                  <button onClick={() => setStatus(null)} className="btn-secondary mt-8">
                    Poslať ďalšiu správu
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};