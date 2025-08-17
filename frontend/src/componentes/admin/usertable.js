import React from "react";

function UserTable({ usuarios, onEdit, onDelete }) {
  return (
    <section className="admin-section">
      <h2>Gestión de Usuarios</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Documento</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.Nombre}</td>
              <td>{u.Documento}</td>
              <td>{u.Rol}</td>
              <td>
                <button onClick={() => onEdit(u)}>Editar</button>
                <button onClick={() => onDelete(u.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default UserTable;
