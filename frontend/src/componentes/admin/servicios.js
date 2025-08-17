import React from "react";

function ServiceTable({ servicios, onEdit, onDelete }) {
  return (
    <section className="admin-section">
      <h2>Gestión de Servicios</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {servicios.map((s) => (
            <tr key={s.id}>
              <td>{s.Nombre}</td>
              <td>{s.Descripcion}</td>
              <td>{s.Precio}</td>
              <td>
                <button onClick={() => onEdit(s)}>Editar</button>
                <button onClick={() => onDelete(s.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ServiceTable;
