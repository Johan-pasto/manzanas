import React from "react";

function FormInput({ label, id, type = "text", value, onChange }) {
  return (
    <div className="input-group">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="input-text"
        value={value}
        onChange={onChange}
        required
        aria-required="true"
      />
    </div>
  );
}

export default FormInput;
