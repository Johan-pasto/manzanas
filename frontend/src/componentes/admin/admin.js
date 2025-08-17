import React from "react";
import User from "./usertable";
import ServiceTable from "./servicios";
import Establecimientos from "./establecimientos";

function AdminPanel({ usuarios, servicios, establecimientos, handlers }) {
  return (
    <main className="admin-main">
      <User 
        usuarios={usuarios} 
        onEdit={handlers.editUsuario} 
        onDelete={handlers.deleteUsuario} 
      />
      <ServiceTable 
        servicios={servicios} 
        onEdit={handlers.editServicio} 
        onDelete={handlers.deleteServicio} 
      />
      <Establecimientos 
        establecimientos={establecimientos} 
        onEdit={handlers.editEstablecimiento} 
        onDelete={handlers.deleteEstablecimiento} 
      />
    </main>
  );
}

export default AdminPanel;
