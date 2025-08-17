import React from 'react';
import { Link } from 'react-router-dom';

function Header({ scrollToSection }) {
  return (
 
    <header className="site-header">
      <nav className="navbar" aria-label="Navegación principal">
        <div className="logo">
          
          <h1 className="logo-title">Manzanas del Cuidado</h1>
        </div>
        
        <div className="nav-links-container">
          <ul className="nav-links" role="menubar">
            <li className="nav-item" role="none">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="nav-link" 
                role="menuitem"
              >
                Inicio
              </button>
            </li>
            <li className="nav-item" role="none">
              <button 
                onClick={() => scrollToSection('servicios')} 
                className="nav-link" 
                role="menuitem"
              >
                Servicios
              </button>
            </li>
            <li className="nav-item" role="none">
              <button 
                onClick={() => scrollToSection('manzanas')} 
                className="nav-link" 
                role="menuitem"
              >
                Manzanas
              </button>
            </li>
            <li className="nav-item" role="none">
              <button 
                onClick={() => scrollToSection('nosotros')} 
                className="nav-link" 
                role="menuitem"
              >
                Sobre Nosotros
              </button>
            </li>
            <li className="nav-item" role="none">
              <button 
                onClick={() => scrollToSection('contacto')} 
                className="nav-link" 
                role="menuitem"
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>

        <div className="auth-buttons-container">
          <ul className="auth-buttons nav-menu" role="menu">
            <li className="auth-item" role="none">
              <Link to="/ingresar" className="login-btn auth-link" role="menuitem">Iniciar Sesión</Link>
            </li>
            <li className="auth-item" role="none">
              <Link to="/registrarse" className="register-btn auth-link" role="menuitem">Registrarse</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  
  );
}

export default Header;