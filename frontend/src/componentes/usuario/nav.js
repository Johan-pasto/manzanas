function UsuarioNav({ tab, setTab }) {
  return (
    <nav className="botones-secciones">
      <div className="contenedor-botones">
        <button className={`boton-seccion ${tab === "servicios" ? "activo" : ""}`} onClick={() => setTab("servicios")}>
          Servicios Disponibles
        </button>
        <button className={`boton-seccion ${tab === "solicitar" ? "activo" : ""}`} onClick={() => setTab("solicitar")}>
          Solicitar Servicio
        </button>
        <button className={`boton-seccion ${tab === "historial" ? "activo" : ""}`} onClick={() => setTab("historial")}>
          Mis Solicitudes
        </button>
      </div>
    </nav>
  );
}
export default UsuarioNav;
