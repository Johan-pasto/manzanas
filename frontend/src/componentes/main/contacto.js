import React from 'react';
import { Link } from 'react-router-dom';

function Contacto({ scrollToSection }) {
  return (
 
    <section id="contacto" className="contact-section" aria-labelledby="contact-heading">
      <div className="section-header">
        <h2 id="contact-heading" className="section-title">Contacto</h2>
        <p className="section-subtitle">Ponte en contacto con nosotros</p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Información de Contacto</h3>
          <div className="contact-item">
            <strong>Dirección:</strong>
            <p>Alcaldía Mayor de Bogotá, Distrito Capital</p>
          </div>
          <div className="contact-item">
            <strong>Teléfono:</strong>
            <p>+57 312 534 1023</p>
          </div>
          <div className="contact-item">
            <strong>Email:</strong>
            <p>ManzanasDelCuidado@gov.go.co</p>
          </div>
          <div className="contact-item">
            <strong>Horarios:</strong>
            <p>Lunes a Viernes: 8:00 AM - 7:00 PM</p>
          </div>
        </div>
        <div className="social-media">
          <h3>Síguenos en Redes Sociales</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/groups/350023832768158" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
           
            </a>
            <a href="https://www.instagram.com/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
             
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
