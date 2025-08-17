import React from "react";

function FormButton({ children, type = "button", onClick, loading, variant }) {
  return (
    <button
      className={`boton ${variant === "secondary" ? "back-button" : "submit-button"}`}
      type={type}
      onClick={onClick}
      disabled={loading}
      aria-busy={loading}
    >
      {loading ? (
        <>
          <span className="spinner" aria-hidden="true"></span>
          Procesando...
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default FormButton;
