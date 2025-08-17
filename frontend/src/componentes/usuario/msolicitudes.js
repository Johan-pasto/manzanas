function MisSolicitudes({ solicitudes, eliminarSolicitud }) {
  return (
    <div className="usuario-servicios">
      <h3 className="usuario-servicios-titulo">Mis Solicitudes</h3>
      {solicitudes.length > 0 ? (
        <ul className="usuario-servicios-lista">
          {solicitudes.map((solicitud) => (
            <li key={solicitud.id} className="usuario-servicio">
              <div className="servicio-nombre">{solicitud.NombreServicio}</div>
              <div className="servicio-fecha">Fecha: {solicitud.fecha}</div>
              <button onClick={() => eliminarSolicitud(solicitud.id)} className="boton-accion" style={{ backgroundColor: "#e74c3c" }}>
                ELIMINAR
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="usuario-cargando">No tienes solicitudes pendientes</p>
      )}
    </div>
  );
}
export default MisSolicitudes;
