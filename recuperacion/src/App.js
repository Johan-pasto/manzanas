import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Inicio from './Paginas/Inicio';
import Formu from './Paginas/Formu';
import Registro from './Paginas/Registro';
import Usuario from './Paginas/Usuario';
import Administrador from './Paginas/Administrador';



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
