import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
     return (
          <motion.section id="about" className="about-us-section" >
           <header class="about-header">
      <h2>
        Od expertov na ESD k lídrom v technickej čistote
      </h2>
      <p class="about-intro">
        Sme slovenská spoločnosť s 10-ročnou tradíciou. V ESDtronic spájame dva kľúčové svety, 
        ktoré sa doteraz vnímali oddelene. Veríme, že skutočne bezpečné EPA prostredie vzniká 
        až <strong>prienikom ESD ochrany a technickej čistoty.</strong>
      </p>
    </header>
     <h3> Naše  základné hodnoty a princípy</h3>
    <div class="about-pillars">
      
      <article class="pillar-card">
        <div class="pillar-icon icon-ground"></div>
        <div class="pillar-content">
          <h3>ESD Expertíza</h3>
          <p>
            Pracujeme podľa najprísnejších globálnych štandardov, ktoré zaručujú 
            stabilitu vašich elektronických procesov.
          </p>
          <div class="norm-badges">
            <span class="badge">ANSI/ESD S20.20</span>
            <span class="badge">IEC 61340</span>
          </div>
        </div>
      </article>

      <article class="pillar-card">
        <div class="pillar-icon icon-atom"></div>
        <div class="pillar-content">
          <h3>Technická čistota</h3>
          <p>
            Od roku 2017 implementujeme prvky čistoty, ktoré eliminujú mikroskopické 
            nečistoty ohrozujúce integritu vašej výroby.
          </p>
          <div class="norm-badges">
            <span class="badge">VDA 19.1-2</span>
          </div>
        </div>
      </article>
      
    </div>

    <footer class="about-footer">
      <blockquote class="partner-quote">
        "Zákazníka vnímame ako partnera. Transparentnosť a korektnosť sú pre nás kľúčové hodnoty, na ktorých staviame každý spoločný projekt."
      </blockquote>
      
    </footer>
    <a href="#kontakt" class="btn-primary btn_about">
        Získajte odborný audit
      </a>
</motion.section>
     );
}

export default AboutUs;