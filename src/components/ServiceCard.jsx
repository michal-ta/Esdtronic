import React from 'react';
import { motion } from 'framer-motion';
import '../styles/services.scss';


export const ServiceCard = ({ title, image, index, bentoClass, slug }) => {
  return (
    
    <motion.a href={`#${slug}`}
      // KOMBINOVANÁ TRIEDA: základná 'bento-item' + dynamická z dát
      className={`bento-item ${bentoClass || ""}`}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      
      <div className="service-image">
        {image && <img src={image} alt={title} />}
      </div>
      <div className="service-info">
        <h3>{title}</h3>
      </div>
    </motion.a>
  );
};
