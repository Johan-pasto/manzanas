import React from "react";

function AdminNavbar({ onLogout }) {
  return (
    <header className="admin-header">
      <h1 className="admin-title">Panel de Administración</h1>
      <button className="logout-button" onClick={onLogout}>
        Cerrar Sesión
      </button>
    </header>
  );
}

export default AdminNavbar;