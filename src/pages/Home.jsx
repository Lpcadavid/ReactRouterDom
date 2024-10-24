import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../componentes/Footer';
import Header from '../componentes/Header';


const Home = () => {
  return (
    <div className="container">
      <Header />
      <section className="intro">
        <h1>Bienvenido a nuestra tienda de productos biodegradables</h1>
        <p>
            <p></p>
            <p></p>
          En Recyclaya, nos comprometemos a ofrecerte productos que cuidan el medio ambiente. Explora nuestra amplia gama de productos reciclables y descubre cómo puedes hacer la diferencia.
        </p>
      </section>
      
      <section className="productos">
        <h2>Productos Destacados</h2>
        <div className="productos-grid">
          <div className="producto-card">
            <img src="/public/producto1.jpeg" alt="Descripción del producto 1" />
            <h3>Cómo reciclar</h3>
            <p>Usa bien las canecas disponibilizadas para separar los residuos</p>
            <Link to="/productos/producto1">Ver más</Link>
          </div>
          <div className="producto-card">
            <img src="/public/producto2.jpg" alt="Envases" />
            <h3>Envases</h3>
            <p>Recuerda que los envases plasticos pueden ser  reciclados</p>

            <Link to="/public/producto2.jpg">Ver más</Link>
          </div>
          <div className="producto-card">
            <img src="/public/bolsas.jpeg" alt="Bolsas" />
            <h3>Bolsas</h3>
            <p>Carga tus bolsas</p>

            <Link to="/public/producto2.jpg">Ver más</Link>
          </div>
          <div className="producto-card">
            <img src="/public/toallitas.jpg" alt="Toallitas biodegradables" />
            <h3>Toallitas Biodegradables</h3>
            <p>Usa productos biodegradables</p>

            <Link to="/public/producto2.jpg">Ver más</Link>
          </div>
        </div>
      </section>

      <section className="educacion">
        <h2>Educación sobre Reciclaje</h2>
        <p>
          El reciclaje es fundamental para reducir los residuos y conservar nuestros recursos. Aquí tienes algunos consejos para reciclar adecuadamente:
        </p>
        <ul>
          <li>Separar los materiales reciclables de los no reciclables.</li>
          <li>Limpiar los envases antes de reciclar.</li>
          <li>Infórmate sobre las pautas de reciclaje en tu área.</li>
        </ul>
      </section>

      <Footer />
    </div>
  );
}

export default Home;


