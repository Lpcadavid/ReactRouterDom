import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Productos from './pages/Productos.jsx';
import Biodegradables from './pages/Biodegradables.jsx';
import Contacto from './pages/Contacto.jsx';
import Bolsas from './pages/recipes/Bolsas.jsx';
import Envases from './pages/recipes/Envases.jsx';
import Toallitas from './pages/recipes/Toallitas.jsx';
import Tipos from './pages/recipes/Tipos.jsx';
import './index.css'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biodegradables" element={<Biodegradables />}>
          <Route path="tipos" element={<Tipos />} />
        </Route>
        <Route path="/productos" element={<Productos />}>
          <Route path="bolsas" element={<Bolsas />} />
          <Route path="envases" element={<Envases />} />
          <Route path="toallitas" element={<Toallitas />} />
        </Route>
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
