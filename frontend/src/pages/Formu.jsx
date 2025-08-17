import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import formu from '../assets/css/Formu.css'
import FormHeader from "../componentes/formulario/header";
import FormSelect from "../componentes/formulario/selec";
import FormInput from "../componentes/formulario/input";
import FormButton from "../componentes/formulario/boton";

function Formu() {
  const [tipoDocumento, setTipo] = useState('');
  const [documento, setDocumento] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Para redirigir

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!tipoDocumento || !documento) {
      alert('Todos los campos son obligatorios');
      return;
    }

    setLoading(true);

    const login = {
      TipoDocumento: tipoDocumento,
      Documento: documento,
    };

    try {
      const res = await fetch('http://localhost:5000/api/iniciar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(login)
      });

      const result = await res.json();
      console.log(result)
      
      if (result.success) {
          alert(result.message);
          
          if (result.data && result.data.Rol === 'administrador') {
                navigate('/administrador');
              } else {
                navigate('/usuario');
              }
        } 
        else {
        alert(result.message || 'Credenciales incorrectas');
      }

    } catch (error) {
      console.error(error);
      alert('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Ingresarbody">
      <main className="login-container">
        <FormHeader title="Iniciar Sesión" />

        <form className="login-form" onSubmit={handleSubmit}>
          <fieldset className="form-fieldset">
            <legend className="sr-only">Datos de acceso</legend>

            <FormSelect
              label="Tipo de Documento"
              id="TipoDocumento"
              value={tipoDocumento}
              onChange={(e) => setTipo(e.target.value)}
              options={[
                { value: "TI", label: "TI" },
                { value: "CC", label: "CC" },
              ]}
            />

            <FormInput
              label="Número de Documento"
              id="Documento"
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
            />
          </fieldset>

          <div className="form-actions">
            <FormButton type="submit" disabled={loading} loading={loading}>
              INICIAR SESIÓN
            </FormButton>

            <button
              type="button"
              className="boton back-button"
              onClick={() => navigate("/")}
            >
              Atrás
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default Formu;

