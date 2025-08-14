import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Inicio from './pages/inicio';
import Formu from './pages/Formu';
import Registro from './pages/Registro';
import Usuario from './pages/Usuario';
import Administrador from './pages/Administrador';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/'element={<Inicio/>} />
            <Route path="/ingresar" element={<Formu/>} />
            <Route path="/registrarse" element={<Registro/>} />
            <Route path="/usuario" element={<Usuario/>} />
            <Route path="/administrador" element={<Administrador/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;