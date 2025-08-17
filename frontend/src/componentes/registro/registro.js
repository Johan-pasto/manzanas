import React from "react";
import FormField from "./form";
import FormSelect from "./select";
import FormButton from "./boton";

function Registro({
  formData,
  manzanas,
  cargandoManzanas,
  loading,
  onChange,
  onSubmit,
  onBack
}) {
  return (
    <form className="formulario" onSubmit={onSubmit} aria-label="Formulario de registro">
      <header className="form-header">
        <h1 className="form-title">Registre sus datos</h1>
      </header>

      <div className="form-fields">
        <FormField
          label="Nombre"
          id="NombreUsuario"
          name="NombreUsuario"
          value={formData.NombreUsuario}
          onChange={onChange}
        />

        <FormSelect
          label="Tipo de documento"
          id="TipoDocumento"
          name="TipoDocumento"
          value={formData.TipoDocumento}
          onChange={onChange}
          options={[
            { value: "CC", label: "Cédula de Ciudadanía" },
            { value: "TI", label: "Tarjeta de Identidad" },
            { value: "CE", label: "Cédula de Extranjería" }
          ]}
        />

        <FormSelect
          label="Tipo de usuario"
          id="Rol"
          name="Rol"
          value={formData.Rol}
          onChange={onChange}
          options={[
            { value: "usuario", label: "Usuario" },
            { value: "administrador", label: "Administrador" }
          ]}
        />

        <FormField
          label="Documento"
          id="Documento"
          name="Documento"
          value={formData.Documento}
          onChange={onChange}
        />

        <FormSelect
          label="Manzana"
          id="Man"
          name="Man"
          value={formData.Man}
          onChange={onChange}
          options={manzanas.map((m) => ({ value: m.Id_M, label: m.NombreManzana }))}
          disabled={cargandoManzanas}
          placeholder={cargandoManzanas ? "Cargando manzanas..." : "Seleccione..."}
        />
      </div>

      <div className="form-actions">
        <FormButton type="submit" loading={loading}>
          Enviar
        </FormButton>
        <FormButton type="button" onClick={onBack} variant="secondary">
          Atrás
        </FormButton>
      </div>
    </form>
  );
}

export default Registro;
