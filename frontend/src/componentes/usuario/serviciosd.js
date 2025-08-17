function ServiciosDisponibles({ servicios }) {
  return (
    <div className="usuario-servicios">
      <h3 className="usuario-servicios-titulo">Servicios Disponibles</h3>
      {servicios.length > 0 ? (
        <ul className="usuario-servicios-lista">
          {servicios.map((servicio) => (
            <li key={servicio.Id_S} className="usuario-servicio">
              <div className="servicio-nombre">{servicio.NombreServicio}</div>
              <div className="servicio-tipo">{servicio.TipoServicio}</div>
              <div className="servicio-descripcion">
                Servicio disponible para tu manzana
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="usuario-cargando">Cargando servicios...</p>
      )}
    </div>
  );
}
export default ServiciosDisponibles;
