import React from "react";

function FormButton({ children, type = "button", onClick, disabled, loading }) {
  return (
    <button
      type={type}
      className="submit-button"
      onClick={onClick}
      disabled={disabled}
      aria-busy={loading}
    >
      {loading ? (
        <span className="button-loading">
          <span className="spinner" aria-hidden="true"></span>
          Verificando...
        </span>
      ) : (
        children
      )}
    </button>
  );
}

export default FormButton;
