import React from 'react';
import {Link} from 'react-router-dom';
import '../Header/Header.css'
import logo from '../Header/logo.png'

const Header = () => {

    return (
        <nav className="navbar">
            <div className="logo">
            <img className="logo" src = {logo} alt = "..."></img>
            </div>
            <h4>Birds Domain</h4>
            <div className="nav-links">
            <ul className="nav-links">
                <Link to = '/R'>
                    <li className="nav-links-links">Registrate</li>
                    </Link>
                    <Link to = '/I'>
                    <li className="nav-links-links">Ingresa</li>
                    </Link>
            </ul>
            </div>
            <div className="nav-links">
                <ul className="nav-links">
                <Link to = '/'>
                    <li className="nav-links-links">Home</li>
                    </Link>
                    <Link to = '/Destacado'>
                    <li className="nav-links-links">Destacado</li>
                    </Link>
                    <Link to = '/Contacto'>
                    <li className="nav-links-links">Contacto</li>
                    </Link>
                    <Link to = '/Favoritos'>
                    <li className="nav-links-links">Favoritos</li>
                    </Link>
                    <Link to = '/Carrito'>
                    <li className="nav-links-links">Carrito</li>
                    </Link>
                </ul>
                </div>
        </nav>
    );
}

export default Header;
