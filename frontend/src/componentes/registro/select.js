import React from "react";

function Select({ label, id, name, value, onChange, options, disabled, placeholder }) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">{label}</label>
      <select
        id={id}
        name={name}
        className="form-select"
        value={value}
        onChange={onChange}
        disabled={disabled}
        required
        aria-required="true"
      >
        <option value="">{placeholder || "Seleccione..."}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
