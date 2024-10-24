import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

const Productos = () => {
    return (
        <div className="container">
            <Header />
            <section className='panel-control'>
                <aside>
                    <nav>
                        <Link to='bolsas'>Bolsas</Link>
                        <Link to='envases'>Envases</Link>
                        <Link to='toallitas'>Toallitas desechables</Link>
                    </nav>
                </aside>
                <div>
                    <h1>Productos</h1>
                    <p>
                        En nuestra sección de productos, encontrarás una variedad de opciones diseñadas para ayudar a reducir el impacto ambiental y promover un estilo de vida más sostenible. Cada categoría de productos está elaborada con materiales que se descomponen de forma natural, contribuyendo a la salud de nuestro planeta.
                    </p>
                    <p>
                        A continuación, exploraremos tres tipos de productos que puedes utilizar en tu día a día:
                    </p>
                    <ul>
                        <li><strong>Bolsas:</strong> Ideales para tus compras y transporte, estas bolsas son una alternativa ecológica a las bolsas de plástico convencionales.</li>
                        <li><strong>Envases:</strong> Perfectos para almacenar alimentos y otros productos, nuestros envases biodegradables ayudan a reducir la contaminación por plásticos.</li>
                        <li><strong>Toallitas desechables:</strong> Prácticas y amigables con el medio ambiente, estas toallitas son una opción responsable para la limpieza y la higiene.</li>
                    </ul>
                    <p>
                        Al elegir productos biodegradables, no solo cuidas del medio ambiente, sino que también te unes a una comunidad que valora la sostenibilidad y la responsabilidad ecológica.
                    </p>
                    <Outlet />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Productos;
