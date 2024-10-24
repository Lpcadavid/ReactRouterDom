import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>Recyclaya</h3>
                <p>&copy; {new Date().getFullYear()} Recyclaya. Todos los derechos reservados.</p>
                <nav>
                    <ul>
                    <li><a href="/">Inicio</a></li>
                        <li><a href="/biodegradables">Productos Biodegradables</a></li>
                        <li><a href="/productos">Productos</a></li>
                        <li><a href="/contacto">Contáctenos</a></li>
                    </ul>
                </nav>
                <div className="socials">
                    <a href="#" aria-label="Facebook">Facebook</a>
                    <a href="#" aria-label="Twitter">Twitter</a>
                    <a href="#" aria-label="Instagram">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;