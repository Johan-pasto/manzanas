import React from 'react';
import { Link } from 'react-router-dom';

function Nosotros({ scrollToSection }) {
  return (
 
    <section id="nosotros" className="about-section" aria-labelledby="about-heading">
      <div className="section-header">
        <h2 id="about-heading" className="section-title">Sobre Nosotros</h2>
        <p className="section-subtitle">Mira mas de nosotos</p>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h3>Nuestra Misión</h3>
          <p>
            Las Manzanas del Cuidado son espacios donde las mujeres que dedican su tiempo al cuidado de otros pueden acceder a servicios gratuitos y tiempo para ellas mismas.
          </p>
          <h3>Nuestra Visión</h3>
          <p>
            Crear una red de apoyo integral que reconozca y valore el trabajo de cuidado, proporcionando espacios de desarrollo personal y profesional para las mujeres cuidadoras.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-item">
            <h4>15+</h4>
            <p>Manzanas en Bogotá</p>
          </div>
          <div className="stat-item">
            <h4>40,000+</h4>
            <p>Mujeres beneficiadas</p>
          </div>
          <div className="stat-item">
            <h4>10+</h4>
            <p>Servicios disponibles</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
