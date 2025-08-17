import React from 'react';
import Header from '../componentes/main/header';
import Hero from '../componentes/main/hero';
import Features from '../componentes/main/features';
import Mapa from '../componentes/main/map';
import Nosotros from '../componentes/main/nosotros';
import Contacto from '../componentes/main/contacto';
import Footer from '../componentes/main/footer';
import '../assets/css/inicio.css';

function Inicio() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="Iniciobody">
      <Header scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Features />
      <Mapa />
      <Nosotros />
      <Contacto />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default Inicio;
