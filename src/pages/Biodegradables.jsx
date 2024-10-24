import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

const Biodegradables = () => {
  return (
    <div className="container">
      <Header />
      <section className='panel-control'>
        <aside>
          <nav>
            <Link to="/biodegradables/tipos">Tipos de Productos</Link>
            {/* Otras opciones de navegación si es necesario */}
          </nav>
        </aside>
        <div>
          <h1>Productos Biodegradables</h1>
          <p>
            Los productos biodegradables son aquellos que pueden descomponerse de forma natural a través de la acción de microorganismos, como bacterias y hongos. A diferencia de los productos convencionales, que pueden tardar cientos de años en descomponerse, los productos biodegradables se integran al medio ambiente sin dejar residuos dañinos.
          </p>
          <p>
            Elegir productos biodegradables es una decisión crucial para reducir nuestra huella ecológica. Estos productos ayudan a disminuir la acumulación de desechos en vertederos y contribuyen a la sostenibilidad del planeta. Desde envases y utensilios de cocina hasta productos de limpieza, hay una amplia variedad de opciones biodegradables disponibles en el mercado.
          </p>
          <p>
            Al optar por productos biodegradables, no solo estamos eligiendo un camino más ecológico, sino que también fomentamos prácticas responsables que protegen la salud del medio ambiente y de las generaciones futuras. En esta sección, exploraremos los diferentes tipos de productos biodegradables y sus beneficios.
          </p>
          <Outlet />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Biodegradables;
