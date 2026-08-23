import React from 'react';
import { motion } from 'framer-motion'; // Importujeme animátor
// Tu budeme mať štýly

const handleMouseEnter = () => {
  window.dispatchEvent(new Event('start-grounding'));
};

const handleMouseLeave = () => {
  window.dispatchEvent(new Event('stop-grounding'));
};

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        {/* Animovaný nadpis */}
        <motion.h1 
          initial={{ opacity: 0, y: 60 }} // Na začiatku je neviditeľný a o 30px nižšie
          animate={{ opacity: 1, y: 0 }}   // Po načítaní sa zviditeľní a vyjde hore
          transition={{ duration: 0.8, ease: "easeOut" }} // Trvá to 0.8s a je to plynulé
        >
          Expertné riešenia v <span className="highlight">ESD ochrane</span>
        </motion.h1>

        {/* Animovaný podnadpis s oneskorením */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }} // Začne až po 0.5s, keď sa nadpis už hýbe
        >
          Komplexné audity, merania a certifikácie podľa noriem VDA a IEC.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.05 }} // Pri prejdení myšou sa jemne zväčší
          whileTap={{ scale: 0.95 }}  // Pri kliknutí sa jemne zmenší
          className="cta-button"
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
          href='#services'
        >
          Naše služby
        </motion.a>
      </div>
    </section>
  );
}