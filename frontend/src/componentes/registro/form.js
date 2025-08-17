import React from "react";

function Form({ label, id, name, value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">{label}</label>
      <input
        type="text"
        id={id}
        name={name}
        className="form-input"
        value={value}
        onChange={onChange}
        required
        aria-required="true"
      />
    </div>
  );
}

export default Form;
