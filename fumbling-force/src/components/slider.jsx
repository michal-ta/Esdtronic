import React from 'react';
import '../styles/LogoSlicer.scss';

const partnerLogos = [
  { name: 'Partner 1', src: '/logos/partner1.svg' },
  { name: 'Partner 2', src: '/logos/partner2.svg' },
  { name: 'Partner 3', src: '/logos/partner3.svg' },
  { name: 'Partner 4', src: '/logos/partner4.svg' },
  { name: 'Partner 5', src: '/logos/partner5.svg' },
  { name: 'Partner 6', src: '/logos/partner6.svg' },
];

export const LogoSlider = () => {
  // Pole zdvojnásobíme pre plynulý nekonečný efekt
  const doubleLogos = [...partnerLogos, ...partnerLogos];

  return (
    <div className="logo-slider-container">
      <h3 className="slider-title">Dôverujú nám lídri v odvetví</h3>
      <div className="logo-track-wrapper">
        <div className="logo-track">
          {doubleLogos.map((logo, index) => (
            <div className="logo-item" key={index}>
              <img src={logo.src} alt={logo.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};