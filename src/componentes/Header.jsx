import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Link className='enlace' to="/">Inicio</Link>
            <Link className='enlace' to="/Biodegradables">Productos Biodegradables</Link>
            <Link className='enlace' to="/Productos">Productos</Link>
            <Link className='enlace' to="/Contacto">Contáctenos</Link>
        </header>
    )
}

export default Header