import React from "react";

function FormSelect({ label, id, value, onChange, options }) {
  return (
    <div className="input-group">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <select
        id={id}
        name={id}
        className="input-select"
        value={value}
        onChange={onChange}
        required
        aria-required="true"
      >
        <option value="">Seleccione</option>
        {options.map((op) => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;
