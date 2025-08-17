import React from "react";

function FormHeader({ title }) {
  return (
    <header className="login-header">
      <h2 className="login-title">{title}</h2>
    </header>
  );
}

export default FormHeader;
