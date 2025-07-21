import React from 'react'
import '../assets/css/inicio.css'
import { Link } from 'react-router-dom' 

import instagram from '../assets/img/2111463.png'
import facebook from '../assets/img/5968764.png'
import bienestar from '../assets/img/johan.jpeg'
import educacion from '../assets/img/johan3.jpg'
import emprendimiento from '../assets/img/johan1.jpg'
import logo from '../assets/img/Logo.png'

function Inicio() {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (

  <div className='Iniciobody'>
    {/* Header */}
    <header className="site-header">
      <nav className="navbar" aria-label="Navegación principal">
        <div className="logo">
          <img src={logo} alt="Logo Manzanas del Cuidado" className="logo-img" />
          <h1 className="logo-title">Red de Cuidados Bogotá</h1>
        </div>
        
        <div className="nav-links-container">
          <ul className="nav-links" role="menubar">
            <li className="nav-item" role="none">
              <button onClick={() => scrollToSection('hero')} className="nav-link" role="menuitem">Inicio</button>
            </li>
            <li className="nav-item" role="none">
              <button onClick={() => scrollToSection('servicios')} className="nav-link" role="menuitem">Servicios</button>
            </li>
          
            <li className="nav-item" role="none">
              <button onClick={() => scrollToSection('nosotros')} className="nav-link" role="menuitem">Quiénes Somos</button>
            </li>
            <li className="nav-item" role="none">
              <button onClick={() => scrollToSection('contacto')} className="nav-link" role="menuitem">Contáctanos</button>
            </li>
          </ul>
        </div>

        <div className="auth-buttons-container">
          <ul className="auth-buttons nav-menu" role="menu">
            <li className="auth-item" role="none">
              <Link to="/ingresar" className="login-btn auth-link" role="menuitem">Acceder</Link>
            </li>
            <li className="auth-item" role="none">
              <Link to="/registrarse" className="register-btn auth-link" role="menuitem">Crear Cuenta</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>


    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="hero-content">
        <h2 id="hero-heading" className="hero-title">Espacios seguros y solidarios para mujeres cuidadoras</h2>
        <p className="hero-description">
          La Red de Cuidado ofrece tiempo, recursos y actividades para quienes cuidan de otros, priorizando su bienestar y el de sus familias.
        </p>
        <div className="hero-buttons">
          <button onClick={() => scrollToSection('servicios')} className="btn btn-primary hero-button">Descubre más</button>
          <button onClick={() => scrollToSection('manzanas')} className="btn btn-outline hero-button">Ver zonas</button>
        </div>
      </div>
    </section>

 
    <section id="servicios" className="features" aria-labelledby="services-heading">
      <div className="section-header">
        <h2 id="services-heading" className="section-title">Servicios que ofrecemos</h2>
        <p className="section-subtitle">Accede a una variedad de programas sin costo para mejorar tu calidad de vida</p>
      </div>

      <div className="services-grid">
        <article className="service-card">
          <img src={educacion} alt="Educación" className="service-image" />
          <div className="service-content">
            <h3 className="service-title">Educación</h3>
            <p className="service-description">
              Formación para completar niveles académicos o aprender nuevas habilidades para tu desarrollo personal.
            </p>
          </div>
        </article>

        <article className="service-card">
          <img src={emprendimiento} alt="Emprendimiento" className="service-image" />
          <div className="service-content">
            <h3 className="service-title">Impulso a Emprendimientos</h3>
            <p className="service-description">
              Orientación y herramientas para fortalecer tus ideas de negocio o iniciar uno desde cero.
            </p>
          </div>
        </article>

        <article className="service-card">
          <img src={bienestar} alt="Bienestar" className="service-image" />
          <div className="service-content">
            <h3 className="service-title">Cuidado Personal</h3>
            <p className="service-description">
              Espacios pensados para tu descanso, actividad física y recreación en comunidad.
            </p>
          </div>
        </article>
      </div>
    </section>

  
    <section id="manzanas" className="map-section" aria-labelledby="map-heading">
      <div className="map-container">
        <div className="section-header">
          <h2 id="map-heading" className="section-title">Zonas disponibles</h2>
          <p className="section-subtitle">Consulta los sectores donde están activas las Manzanas del Cuidado</p>
        </div>

        <div className="map-overlay">
          <h3 className="map-location-title">Manzana Centro</h3>
          <address className="map-location-info">
            <p><strong>Localidad:</strong> Santa Fe</p>
            <p><strong>Dirección:</strong> Cra. 6 #14-98 Piso 4, Santa Fé, Bogotá, Cundinamarca</p>
            <p><strong>Servicios:</strong> Punto central de apoyo y gestión distrital</p>
          </address>
          <Link to="#" className="btn btn-primary map-link">Más información</Link>
        </div>
      </div>
    </section>

  
    <section id="nosotros" className="about-section" aria-labelledby="about-heading">
      <div className="section-header">
        <h2 id="about-heading" className="section-title">Quiénes somos</h2>
        <p className="section-subtitle">Una red de apoyo pensada para ti</p>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h3>Comprometidos con el cuidado</h3>
          <p>
            Creamos espacios en la ciudad donde las mujeres cuidadoras pueden encontrar oportunidades de crecimiento personal y profesional.
          </p>
          <h3>Mirando al futuro</h3>
          <p>
            Buscamos consolidar una ciudad con igualdad de oportunidades y bienestar para quienes realizan labores de cuidado no remuneradas.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-item">
            <h4>25+</h4>
            <p>Zonas activas en Bogotá</p>
          </div>
          <div className="stat-item">
            <h4>60,000+</h4>
            <p>Mujeres beneficiadas</p>
          </div>
          <div className="stat-item">
            <h4>120+</h4>
            <p>Servicios ofrecidos</p>
          </div>
        </div>
      </div>
    </section>

   
    <section id="contacto" className="contact-section" aria-labelledby="contact-heading">
      <div className="section-header">
        <h2 id="contact-heading" className="section-title">Contáctanos</h2>
        <p className="section-subtitle">Estamos aquí para escucharte</p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Datos de contacto</h3>
          <div className="contact-item">
            <strong>Dirección:</strong>
            <p>Alcaldía de Bogotá - Oficina de Cuidado</p>
          </div>
          <div className="contact-item">
            <strong>Teléfono:</strong>
            <p>+57 1 381 3000</p>
          </div>
          <div className="contact-item">
            <strong>Email:</strong>
            <p>contacto@redcuidado.gov.co</p>
          </div>
          <div className="contact-item">
            <strong>Horario:</strong>
            <p>Lunes a Viernes: 8:00 AM - 5:00 PM</p>
          </div>
        </div>
        <div className="social-media">
          <h3>Redes Sociales</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/groups/350023832768158" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={facebook} alt="Facebook" className="social-icon-img" />
            </a>
            <a href="https://www.instagram.com/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={instagram} alt="Instagram" className="social-icon-img" />
            </a>
          </div>
        </div>
      </div>
    </section>


    <footer className="site-footer" aria-label="Pie de página">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="var(--morado-oscuro)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logo} alt="Logo Red Cuidado" className="footer-logo-img" />
              <h3 className="footer-logo-title">Red de Cuidados</h3>
            </div>
            <p className="footer-description">
              Espacios integrales de desarrollo para mujeres cuidadoras. 
              Promovemos el autocuidado, el aprendizaje y el bienestar.
            </p>
            <div className="footer-social">
              <h4>Síguenos</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/groups/350023832768158" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <img src={facebook} alt="" className="social-icon-img" />
                </a>
                <a href="https://www.instagram.com/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <img src={instagram} alt="" className="social-icon-img" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Servicios</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('servicios')} className="footer-link">Educación</button></li>
              <li><button onClick={() => scrollToSection('servicios')} className="footer-link">Negocios</button></li>
              <li><button onClick={() => scrollToSection('servicios')} className="footer-link">Bienestar</button></li>
              <li><button onClick={() => scrollToSection('servicios')} className="footer-link">Recreación</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Enlaces</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('nosotros')} className="footer-link">Quiénes Somos</button></li>
              <li><button onClick={() => scrollToSection('manzanas')} className="footer-link">Zonas</button></li>
              <li><button onClick={() => scrollToSection('contacto')} className="footer-link">Contacto</button></li>
              <li><Link to="/ingresar" className="footer-link">Acceder</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Contacto</h4>
            <div className="footer-contact">
              <div className="contact-item"><span className="contact-icon">📍</span> Alcaldía Bogotá</div>
              <div className="contact-item"><span className="contact-icon">📞</span> +57 1 381 3000</div>
              <div className="contact-item"><span className="contact-icon">✉️</span> contacto@redcuidado.gov.co</div>
              <div className="contact-item"><span className="contact-icon">🕒</span> Lunes a Viernes: 8AM - 5PM</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; 2025 <strong>Red de Cuidados Bogotá</strong>. Todos los derechos reservados.
            </p>
            <div className="footer-bottom-links">
              <Link to="/" className="footer-bottom-link">Privacidad</Link>
              <span className="separator">•</span>
              <Link to="/" className="footer-bottom-link">Términos</Link>
              <span className="separator">•</span>
              <Link to="/" className="footer-bottom-link">Mapa del Sitio</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

}

export default Inicio

