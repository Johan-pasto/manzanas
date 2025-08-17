import React from "react";

function EstablishmentTable({ establecimientos, onEdit, onDelete }) {
  return (
    <section className="admin-section">
      <h2>Gestión de Establecimientos</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Responsable</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {establecimientos.map((e) => (
            <tr key={e.id}>
              <td>{e.Nombre}</td>
              <td>{e.Responsable}</td>
              <td>{e.Direccion}</td>
              <td>
                <button onClick={() => onEdit(e)}>Editar</button>
                <button onClick={() => onDelete(e.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default EstablishmentTable;
