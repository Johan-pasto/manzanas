import React from 'react';
import { Link } from 'react-router-dom';

function Footer({ scrollToSection }) {
  return (

    <footer className="site-footer" aria-label="Pie de página">
      <div className="footer-wave">
      
      </div>
      
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-section">
            <div className="footer-logo">
          
              <h3 className="footer-logo-title">Manzanas del Cuidado</h3>
            </div>
            <p className="footer-description">
              Espacios de mujeres y para las mujeres. 
              Te damos lo que necesites y mas.
            </p>
            <div className="footer-social">
              <h4>Síguenos</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/groups/350023832768158" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
           
                </a>
                <a href="https://www.instagram.com/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                 
                </a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Servicios</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('servicios')} className="footer-link">Educación</button></li>
              <li><button onClick={() => scrollToSection('servicios')} className="footer-link">Emprendimiento</button></li>
              <li><button onClick={() => scrollToSection('servicios')} className="footer-link">Bienestar</button></li>
              <li><button onClick={() => scrollToSection('servicios')} className="footer-link">Recreación</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Información</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('nosotros')} className="footer-link">Sobre Nosotros</button></li>
              <li><button onClick={() => scrollToSection('manzanas')} className="footer-link">Ubicar Manzanas</button></li>
              <li><button onClick={() => scrollToSection('contacto')} className="footer-link">Contacto</button></li>
              <li><Link to="/ingresar" className="footer-link">Iniciar Sesión</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Contacto</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Alcaldía Mayor de Bogotá</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+57 1 381 3000</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>manzanasdelcuidado@bogota.gov.co</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <span>Lun - Vie: 8:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; 2025 <strong>Las Manzanas del Cuidado</strong>. Todos los derechos reservados.
            </p>
            <div className="footer-bottom-links">
              <Link to="/" className="footer-bottom-link">Política de Privacidad</Link>
              <span className="separator">•</span>
              <Link to="/" className="footer-bottom-link">Términos de Uso</Link>
              <span className="separator">•</span>
              <Link to="/" className="footer-bottom-link">Mapa del Sitio</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
