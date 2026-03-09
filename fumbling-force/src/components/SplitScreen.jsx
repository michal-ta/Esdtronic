import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { services } from '../data/services.js';
import colorsVars from '../styles/variables.module.scss';

const ServiceRow = ({ service, onInView }) => {
  const rowRef = useRef(null);
  const isInView = useInView(rowRef, { amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      onInView(service.title);
    }
  }, [isInView, service.title, onInView]);

  // FUNKCIA PRESUNUTÁ SEM, ABY MALA PRÍSTUP K 'service'
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
    <section ref={rowRef} className="service-row">
      <div className="service-content">
        <h2 className="service-title">{service.title}</h2>
        <p className="service-description">{service.description}</p>
        <p className="service-text">{service.fullText}</p>

        <div className="service-extra-info">
          {renderDynamicLists()}
        </div>
        
        <a href='#contact_form' className="contact-link">{service.butonLink ||"chcem viac informáci"}</a>
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
    [0, 0.5, 1],
    [colorsVars.bgLight, colorsVars.primaryBlue, colorsVars.shadowColor]
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [colorsVars.primaryBlue, colorsVars.white, colorsVars.textMuted]
  );

  const subtitleColor = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [colorsVars.primaryBlue, colorsVars.textDark, colorsVars.textMuted]
  );

  
  return (
    <div ref={containerRef} className="splitscreen-container">
      <motion.div 
        style={{ backgroundColor: bgColor }}
        className="sticky-panel"
      >
        console.log(colorsVars.primaryBlue);")
        <div className="visual-wrapper">
          <motion.div
            key={displayText}
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