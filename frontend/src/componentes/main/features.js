import React from "react";
import {Link} from "react-router-dom"

function Features({scrollToSection}){
    return(
  
            <section id="servicios" className="features" aria-labelledby="services-heading">
              <div className="section-header">
                <h2 id="services-heading" className="section-title">Nuestros Servicios</h2>
                <p className="section-subtitle">Descubre todos los servicios gratuitos que tenemos para ti y tu familia</p>
              </div>
        
              <div className="services-grid">
                <article className="service-card">
               
                  <div className="service-content">
                    <h3 className="service-title">Educación</h3>
                    <p className="service-description">
                      Cursos gratuitos para completar tu educación básica, media o técnica profesional.
                    </p>
                  </div>
                </article>
        
                <article className="service-card">
                 
                  <div className="service-content">
                    <h3 className="service-title">Emprendimiento</h3>
                    <p className="service-description">
                      Asesoría para iniciar o fortalecer tu negocio, acceso a créditos y capacitación.
                    </p>
                  </div>
                </article>
        
                <article className="service-card">
                 
                  <div className="service-content">
                    <h3 className="service-title">Bienestar</h3>
                    <p className="service-description">
                      Actividades recreativas, deportivas y culturales para tu descanso y recreación.
                    </p>
                  </div>
                </article>
              </div>
            </section>
    )
}
export default Features