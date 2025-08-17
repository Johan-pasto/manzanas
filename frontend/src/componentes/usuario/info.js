function UsuarioInfo({ usuario, manzanas }) {
  return (
    <section className="info-usuario">
      <h2 className="titulo-seccion">Información de la cuenta</h2>
      {usuario ? (
        <div className="detalles-usuario">
          <p><strong>Identificación:</strong> {usuario.Id}</p>
          <p><strong>Nombre:</strong> {usuario.NombreUsuario}</p>
          <p><strong>Documento:</strong> {usuario.Documento}</p>
          <p><strong>Rol:</strong> {usuario.Rol}</p>
          <p>
            <strong>Manzana:</strong>{" "}
            {manzanas[String(usuario.Id_M1)] || usuario.Id_M1}
          </p>
        </div>
      ) : (
        <p className="usuario-cargando"><strong>Cargando información...</strong></p>
      )}
    </section>
  );
}
export default UsuarioInfo;
