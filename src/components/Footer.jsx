import React from 'react';
import '../styles/footer.scss';
import { motion } from 'framer-motion';
import { services } from '../data/services';



export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-top">
          
          {/* 1. Stĺpec: Brand */}
          <div className="footer-col brand-col">
            <a href="/" className="footer-logo">ESD<span>tronic</span></a>
            <p className="footer-tagline">
              Špecialisti na synergiu <strong>ESD ochrany</strong> a <strong>technickej čistoty</strong> podľa VDA 19.1.
            </p>
            <div className="footer-badges">
              <span className="badge">ISO 9001 Ready</span>
              <span className="badge">EPA Certified</span>
            </div>
          </div>

          {/* 2. Stĺpec: Dynamické Služby s Motion */}
          <div className="footer-col links-col">
            <h4 className="footer-h4">Naše Služby</h4>
            <nav className="footer-nav">
              {services.map((service) => (
                <motion.a
                  key={service.slug}
                  href={`#${service.slug}`}
                  whileHover={{ x: 5, color: "#0C419F" }} // Použitie tvojej primary blue
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.title}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* 3. Stĺpec: Kontakt */}
          <div className="footer-col contact-col">
            <h4 className="footer-h4">Kontakt</h4>
            <div className="contact-details">
              <p><strong>Po — Pia:</strong> 08:00 – 16:30</p>
              <a href="mailto:info@esdtronic.eu" className="contact-link">info@esdtronic.eu</a>
              <a href="tel:+421900000000" className="contact-link">+421 9xx xxx xxx</a>
            </div>
          </div>

          {/* 4. Stĺpec: Fakturačné údaje */}
          <div className="footer-col legal-col">
            <h4 className="footer-h4">Fakturačné údaje</h4>
            <div className="legal-box">
              <p className="company-name">ESDtronic s.r.o.</p>
              <p>Ulica 123, 000 00 Mesto</p>
              <div className="tax-info">
                <span><strong>IČO:</strong> 12345678</span>
                <span><strong>DIČ:</strong> 202XXXXXXX</span>
                <span><strong>IČ DPH:</strong> SK202XXXXXXX</span>
              </div>
              <p className="registry">Zapísaná v OR OS [Mesto], Odd. Sro, Vl. č. XXXXX/X</p>
            </div>
          </div>

        </div>

        {/* Spodná lišta */}
        <div className="footer-bottom">
          <div className="copy-text">
            &copy; {currentYear} ESDtronic.eu. Vytvorené s dôrazom na technickú presnosť.
          </div>
          <div className="bottom-links">
            <a href="/ochrana-udajov">Ochrana údajov (GDPR)</a>
            <a href="/obchodne-podmienky">VOP</a>
            <a href="/cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};