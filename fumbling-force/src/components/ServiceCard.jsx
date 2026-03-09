import React from 'react';
import { motion } from 'framer-motion';
import '../styles/services.scss';


export const ServiceCard = ({ title,image, index }) => {
  return (
    <motion.div 
      className="service-card"
      // Animácia: karty môžu nabiehať jedna po druhej vďaka indexu
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="service-image">
        <img src={image} alt={title} />
      </div>
      <div className="service-info">
        <h3>{title}</h3>
      </div>
    </motion.div>
  );
};

export const ServiceDetail = ({ title, image, description, fullText, podnapis1,odrazky1,podnapis2,odrazky2,podnapis3,odrazky3 }) => {
  return (
    <motion.div className="content_wraper" id="{slug}"
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.8 }}
    >
     <h3>{title}</h3>
     <p>{fullText}</p>
     <h4>{podnapis1}</h4>
     <ul>
          {odrazky1.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
     </ul>
     <h4>{podnapis2}</h4>
     <ul>
          {odrazky2.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
     </ul>
     <h4>{podnapis3}</h4>
     <ul>
          {odrazky3.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
     </ul>
    </motion.div>);
};