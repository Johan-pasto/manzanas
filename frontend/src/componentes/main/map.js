import React from 'react';
import { Link } from 'react-router-dom';

function Map({ scrollToSection }) {
  return (

    <section id="manzanas" className="map-section" aria-labelledby="map-heading">
      <div className="map-container">
        <div className="section-header">
          <h2 id="map-heading" className="section-title">Encuentra tu Manzana más cercana</h2>
          <p className="section-subtitle">Ubica la manzana del cuidado más cercana a tu domicilio</p>
        </div>

        <div className="manzana-map">
          <div className="map-iframe-container">
            <iframe
              src="https://storage.googleapis.com/maps-solutions-ez6z30du70/locator-plus/8nt8/locator-plus.html"
              width="100%"
              height="100%"
              className="map-iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Manzana del Cuidado"
              aria-label="Mapa interactivo de Manzanas del Cuidado"
            ></iframe>
          </div>
          <div className="map-overlay">
            <h3 className="map-location-title">Manzana Central</h3>
            <address className="map-location-info">
              <p><strong>Localidad:</strong> Suba</p>
              <p><strong>Dirección:</strong> AV. C. de Cali - CL 142</p>
              <p><strong>Servicios:</strong> Manzana del cuidado ubicada de Suba Piso 3</p>
            </address>
            <Link to="#" className="btn btn-primary map-link">Ver detalles</Link>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Map;
