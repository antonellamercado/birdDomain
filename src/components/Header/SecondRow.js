import React from 'react'
import {Link} from 'react-router-dom';
import '../Header/Header.css'
import "bootstrap/dist/css/bootstrap.css";
import SearchBar from '../SearchBar/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'

export const SecondRow = () => {
    return (
        <div className="mt-10 secondRow" >
        <ul className="nav-links">
        <li><SearchBar/></li>
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
            <li className="d-flex d-block nav-links-links">Favoritos<FontAwesomeIcon  icon={faStar} /></li>
            </Link>
            <Link to = '/Carrito'>
            <li className="nav-links-links"><FontAwesomeIcon  icon={faShoppingCart} /></li>
            </Link>
        </ul>
        </div>  
    )
}

export default SecondRow;

