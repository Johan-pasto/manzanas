function SolicitarServicio({ servicios, servicioSeleccionado, setServicioSeleccionado, fechaHora, setFechaHora, solicitarServicio }) {
  return (
    <div className="usuario-servicios">
      <h3 className="usuario-servicios-titulo">Solicitar Servicio</h3>
      <form onSubmit={solicitarServicio} style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
        <div className="campo-formulario">
          <label>Servicio:</label>
          <select value={servicioSeleccionado} onChange={(e) => setServicioSeleccionado(e.target.value)} required>
            <option value="">Seleccionar servicio</option>
            {servicios.map((servicio) => (
              <option key={servicio.Id_S} value={servicio.Id_S}>
                {servicio.NombreServicio}
              </option>
            ))}
          </select>
        </div>
        <div className="campo-formulario">
          <label>Fecha y Hora:</label>
          <input type="datetime-local" value={fechaHora} onChange={(e) => setFechaHora(e.target.value)} required />
        </div>
        <button type="submit" className="boton-guardar">Solicitar Servicio</button>
      </form>
    </div>
  );
}
export default SolicitarServicio;
