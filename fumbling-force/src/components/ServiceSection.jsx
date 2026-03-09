import React, { useState } from 'react';
import { services } from '../data/services.js';
import { motion, useInView } from 'framer-motion';

const ServicesSection = () => {
  // Tento stav držíme tu, aby sme vedeli, či je nejaká sekcia so simuláciou viditeľná
  const [activeSimulation, setActiveSimulation] = useState(null);
  const [isGrounded, setIsGrounded] = useState(false);

  return (
    <div className="relative">
      {/* CANVAS voláme len raz a riadime ho cez stav */}
      {activeSimulation && (
        <IonBackground mode={isGrounded ? 'ground' : 'normal'} />
      )}

      {services.map((service) => (
        <ServiceRow 
          key={service.id} 
          service={service} 
          onVisibilityChange={(isVisible) => {
            if (isVisible && service.hasSimulation) {
              setActiveSimulation(service.id);
            } else if (!isVisible && activeSimulation === service.id) {
              setActiveSimulation(null);
              setIsGrounded(false); // Reset pri odchode
            }
          }}
          isGrounded={isGrounded}
          onSimulate={() => setIsGrounded(true)}
        />
      ))}
    </div>
  );
};

// POD-KOMPONENT pre jednotlivú riadku (Službu)


export default ServicesSection;