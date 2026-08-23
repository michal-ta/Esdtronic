import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { services } from '../data/services.js';
import colorsVars from '../styles/_variables.module.scss';

const ServiceRow = ({ service, onInView }) => {
  // FIX: Používame len jeden hook a jednu referenciu pre inView detekciu
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-50% 0px -50% 0px" // Detekuje stred obrazovky
  });

  useEffect(() => {
    if (inView) {
      onInView(service.title);
    }
  }, [inView, service.title, onInView]);

  const renderDynamicLists = () => {
    const lists = [];
    for (let i = 1; i <= 5; i++) {
      const title = service[`podnapis${i}`];
      const items = service[`odrazky${i}`];

      if (title || items) {
        lists.push(
          <div key={`extra-${i}`} className="extra-content-block">
            {title && <h4 className="service-subtitle">{title}</h4>}
            {items && Array.isArray(items) && (
              <ul className="service-list">
                {items.map((item, idx) => (
                  <li key={idx} className="service-list-item">{item}</li>
                ))}
              </ul>
            )}
          </div>
        );
      }
    }
    return lists;
  };

  return (
    // FIX: Priradený správny ref z useInView
    <section ref={ref} className="service-row" id={service.slug}>
      <div className="service-content">
        <h2 className="service-title">{service.title}</h2>
        <p className="service-description">{service.description}</p>
        <p className="service-text">{service.fullText}</p>

        <div className="service-extra-info">
          {renderDynamicLists()}
        </div>
        
        <a href='#contact_form' className="contact-link">{service.butonLink || "chcem viac informáci"}</a>
      </div>
    </section>
  );
};

const SplitScreenSection = () => {
  const containerRef = useRef(null);
  const [displayText, setDisplayText] = useState(services[0]?.title || "ESD Expertíza");
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const bgColor = useTransform(
    scrollYProgress,
    [0,0.55, 1],
    [colorsVars.white, colorsVars.accent_dark, colorsVars.shadow_color]
  );

  const textColor = useTransform(
    scrollYProgress,
    [0,0.50, 1],
    [colorsVars.shadow_color, colorsVars.accent_dark,colorsVars.white]
  );

  const subtitleColor = useTransform(

    scrollYProgress,
     [0,0.50, 1],
    [colorsVars.shadow_color, colorsVars.accent_dark,colorsVars.white]
  );

  return (
    <div ref={containerRef} className="splitscreen-container">
      <motion.div 
        style={{ backgroundColor: bgColor }}
        className="sticky-panel"
      >
        <div className="visual-wrapper">
          <motion.div
            key={displayText} // Zabezpečí animáciu pri zmene textu
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 style={{ color: textColor }} className="panel-main-title">
              {displayText}
            </motion.h2>
          </motion.div>
          <motion.p className="panel-subtitle" style={{ color: subtitleColor }}>
            Technické riešenia na mieru
          </motion.p>
        </div>
      </motion.div>

      <div className="scrolling-panel">
        {services.map((service) => (
          <ServiceRow 
            key={service.slug} 
            service={service} 
            onInView={(title) => setDisplayText(title)}
          />
        ))}
      </div>
    </div>
  );
};

export default SplitScreenSection;