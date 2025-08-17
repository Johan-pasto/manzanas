import React from 'react';
import { Link } from 'react-router-dom';

function Hero({ scrollToSection }) {
  return (
   
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="hero-content">
        <h2 id="hero-heading" className="hero-title">Bienestar y apoyo para mujeres cuidadoras</h2>
        <p className="hero-description">
          Las Manzanas del Cuidado son espacios de la ciudad en los que se brinda tiempo y servicios gratuitos a las mujeres cuidadoras y a sus familias.
        </p>
        <div className="hero-buttons">
          <button onClick={() => scrollToSection('servicios')} className="btn btn-primary hero-button">Conocer más</button>
          <button onClick={() => scrollToSection('manzanas')} className="btn btn-outline hero-button">Ubicar manzanas</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
