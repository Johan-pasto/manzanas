import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Registro from "../componentes/registro/registro";

function Registrarse() {
  const [formData, setFormData] = useState({
    NombreUsuario: '',
    TipoDocumento: '',
    Documento: '',
    Rol: '',
    Man: ''
  });
  const [loading, setLoading] = useState(false);
  const [manzanas, setManzanas] = useState([]);
  const [cargandoManzanas, setCargandoManzanas] = useState(true);
  const navigate = useNavigate();

  // Cargar manzanas al montar el componente
  useEffect(() => {
    cargarManzanas();
  }, []);

  const cargarManzanas = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/manzanas');
      const result = await response.json();
      
      if (result.success) {
        setManzanas(result.data);
      } else {
        console.error('Error al cargar manzanas:', result.message);
      }
    } catch (error) {
      console.error('Error de conexión:', error);
    } finally {
      setCargandoManzanas(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { NombreUsuario, TipoDocumento, Documento, Rol, Man } = formData;

    if (!NombreUsuario || !TipoDocumento || !Documento || !Rol || !Man) {
      alert('Por favor complete todos los campos');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/crear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(formData)
      });

      let result;
      try {
        result = await res.json();
      } catch (parseError) {
        console.error('Error al parsear respuesta:', parseError);
        alert('Error interno del servidor. Respuesta no válida.');
        return;
      }

      if (result.success) {
        alert(result.message);
        // Redirigir basado en el rol
        if (result.data && result.data.Rol === 'administrador') {
          navigate('/administrador');
        } else {
          navigate('/usuario');
        } 
      } else {
        alert(result.message || 'Error al registrar usuario');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      alert('Error de conexión con el servidor. Verifique que el servidor esté ejecutándose.');
    } finally {
      setLoading(false);
    }
  };

return (
    <div className="Registrarsebody">
      <Registro
        formData={formData}
        manzanas={manzanas}
        cargandoManzanas={cargandoManzanas}
        loading={loading}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onBack={() => navigate("/")}
      />
    </div>
);
}

export default Registrarse;

