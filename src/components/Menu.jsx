import React from 'react';
import { motion } from 'framer-motion'; // Importujeme animátor


const Menu = () => {
     const [language, setLanguage] = React.useState('sk');
     const menuItems = [
          { label: language === 'sk' ? 'O nás' : 'About Us', id: 'about' },
          { label: language === 'sk' ? 'Služby' : 'Services', id: 'services' },
          { label: language === 'sk' ? 'Kontakt' : 'Contact', id: 'contact' },
     ];

     const scrollToSection = (id) => {
          const element = document.getElementById(id);
          element?.scrollIntoView({ behavior: 'smooth' });
     };

     return (
          <motion.nav className="navigation"
              initial={{ opacity: 0, y: 60 }} // Na začiatku je neviditeľný a o 30px nižšie
          animate={{ opacity: 1, y: 0 }}   // Po načítaní sa zviditeľní a vyjde hore
          transition={{ duration: 0.8, ease: "easeOut" }} // Trvá to 0.8s a je to plynulé
          >
               
               <div className="logo">
                    <img src="../img/logo_with_bgr.svg" alt="Logo"/>
                    <span> ESDtronic</span>
               </div>

               
               
                         
                       
               <div className="nav_buttons">
                    {menuItems.map((item) => (
                         <motion.button
                         whileHover={{ scale: 1.05 }} // Pri prejdení myšou sa jemne zväčší
                         whileTap={{ scale: 0.95 }}  // Pri kliknutí sa jemne zmenší
                         className="menu-button"

                       >
                         <a
                              key={item.id}
                              onClick={() => scrollToSection(item.id)}
                              className="btn-ground"
                         >
                              {item.label}
                         </a>
                       </motion.button>
                         
                    ))}
               </div>
               <div className="language-toggle">
               <a
                    onClick={() => setLanguage(language === 'sk' ? 'ua' : 'sk')}
                    className="text-sm font-semibold mr-4"
               >
                    {language === 'sk' ? 'ua' : 'SK'}
               </a>
               </div>
               
          </motion.nav>
     );
};

export default Menu;

