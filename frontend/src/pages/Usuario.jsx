import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UsuarioHeader from "../componentes/usuario/header";
import UsuarioInfo from "../componentes/usuario/info";
import UsuarioNav from "../componentes/usuario/nav";
import ServiciosDisponibles from "../componentes/usuario/serviciosd";
import SolicitarServicio from "../componentes/usuario/solicitar";
import MisSolicitudes from "../componentes/usuario/msolicitudes";
import "../assets/css/Usuario.css";

const API_BASE_URL = 'http://localhost:5000';

const Usuario = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState(null);
  const [tab, setTab] = useState('servicios');
  const [servicios, setServicios] = useState([]);
  const [misSolicitudes, setMisSolicitudes] = useState([]);
  const [servicioSeleccionado, setServicioSeleccionado] = useState('');
  const [fechaHora, setFechaHora] = useState('');

  const manzanas = { 
    '1': 'Bosa', 
    '2': 'Suba', 
    '3': 'Chapinero',
    '4': 'Kennedy',
    '5': 'Engativá',
    '6': 'Fontibón',
    '7': 'Barrios Unidos',
    '8': 'Teusaquillo',
    '9': 'Los Mártires',
    '10': 'Antonio Nariño',
    '11': 'Puente Aranda',
    '12': 'La Candelaria',
    '13': 'Rafael Uribe Uribe',
    '14': 'Ciudad Bolívar',
    '15': 'San Cristóbal',
    '16': 'Usme',
    '17': 'Tunjuelito',
    '18': 'Bosa',
    '19': 'Sumapaz'
  };

  useEffect(() => {
    verificarSesion();
    cargarServiciosDisponibles();
    cargarMisSolicitudes();
  }, []);

  const verificarSesion = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/usuario`, { credentials: 'include' });
      const result = await response.json();
      if (result.success) {
        setUsuario(result.data);
      } else {
        alert('No hay sesión activa. Redirigiendo...');
        navigate('/');
      }
    } catch {
      alert('Error al verificar sesión');
      navigate('/');
    }
  };

  const cerrarSesion = async () => {
    if (!window.confirm('¿Desea cerrar sesión?')) return;
    try {
      const response = await fetch(`${API_BASE_URL}/api/cerrar-sesion`, {
        method: 'POST',
        credentials: 'include'
      });
      const result = await response.json();
      if (result.success) {
        alert('Sesión cerrada');
        navigate('/');
      } else {
        alert('Error al cerrar sesión');
      }
    } catch {
      alert('Error de conexión al cerrar sesión');
    }
  };

 const cargarServiciosDisponibles = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/servicios-por-manzana`, { credentials: 'include' });
    const data = await res.json();
    
    if (data.success && Array.isArray(data.data)) {
      setServicios(data.data);
    } else {
      setServicios([]);
    }
  } catch (error) {
    console.error('Error cargando servicios:', error);
    setServicios([]);
  }
};

  const cargarMisSolicitudes = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/mis-solicitudes`, { credentials: 'include' });
      const result = await res.json();
      if (result.success) setMisSolicitudes(result.data);
      else setMisSolicitudes([]);
    } catch {
      alert('Error cargando solicitudes');
    }
  };

  const solicitarServicio = async (e) => {
    e.preventDefault();
    if (!servicioSeleccionado || !fechaHora) {
      return alert('Complete todos los campos');
    }

    try {
      const res = await fetch(`${API_BASE_URL}/api/solicitar-servicio`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ servicios: servicioSeleccionado, fechaHora }),
      });
      const result = await res.json();
      if (result.success) {
        alert('Solicitud enviada');
        setServicioSeleccionado('');
        setFechaHora('');
        cargarMisSolicitudes();
      } else {
        alert('Error: ' + result.message);
      }
    } catch {
      alert('Error al enviar solicitud');
    }
  };

  const eliminarSolicitud = async (id) => {
    if (!window.confirm('¿Eliminar esta solicitud?')) return;
    try {
      const res = await fetch(`${API_BASE_URL}/api/solicitudes/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      const result = await res.json();
      if (result.success) {
        alert('Solicitud eliminada');
        cargarMisSolicitudes();
      } else {
        alert('Error: ' + result.message);
      }
    } catch {
      alert('Error al eliminar solicitud');
    }
  };

  return (
   <div className="usuario-main">
      <div className="contenedor-usuario">
        {/* HEADER */}
        <UsuarioHeader usuario={usuario} onCerrarSesion={cerrarSesion} />

        {/* INFO DEL USUARIO */}
        <UsuarioInfo usuario={usuario} manzanas={manzanas} />

        {/* NAVEGACIÓN */}
        <UsuarioNav tab={tab} setTab={setTab} />

        {/* CONTENIDO */}
        <main className="seccion">
          <div className="seccion-contenido">
            {tab === "servicios" && <ServiciosDisponibles servicios={servicios} />}
            {tab === "solicitar" && (
              <SolicitarServicio
                servicios={servicios}
                servicioSeleccionado={servicioSeleccionado}
                setServicioSeleccionado={setServicioSeleccionado}
                fechaHora={fechaHora}
                setFechaHora={setFechaHora}
                solicitarServicio={solicitarServicio}
              />
            )}
            {tab === "historial" && (
              <MisSolicitudes
                solicitudes={misSolicitudes}
                eliminarSolicitud={eliminarSolicitud}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Usuario;
