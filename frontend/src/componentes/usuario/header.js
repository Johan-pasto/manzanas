function UsuarioHeader({ usuario, onCerrarSesion }) {
  return (
    <header className="contenedor-header">
      <h1 className="titulo-bienvenida">
        Bienvenido(a) {usuario ? usuario.NombreUsuario : ""}
      </h1>
      <button className="boton-cerrar" onClick={onCerrarSesion}>
        Cerrar Sesión
      </button>
    </header>
  );
}
export default UsuarioHeader;
