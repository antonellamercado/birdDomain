<<<<<<< HEAD
import React from 'react';
import {Link} from 'react-router-dom';
//import '../Header/Header.css'
import '../Header/MyNav'
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
                    <li className="nav-links-links">Carrrito</li>
                    </Link>
                </ul>
                </div>
        </nav>
    );
}

export default Header;
=======
import React, {useState, useEffect} from 'react';
import {Modal,Nav,Navbar,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import './Header.css'
import logo from '../Header/logo.png';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import HelpModal from '../HelpModal/HelpModal.js'


const Header = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
    <>
    <div className="sticky-top">
    <div className= "myNav firstrow navbar navbar-expand-lg sticky-top">
    
    <Link to = '/' className="logo-wrapper" >
    <img className="logo" src = {logo} alt = "..."></img> 
    </Link>
    <strong>Birds Domain</strong>

     <div className="buttons d-flex justify-content-between">
     <button className="buttonC">Ingresa</button>
     <button className="buttonC">Registrate</button>
     </div>
    </div>
    
        <Navbar className="myNav" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto d-flex justify-content-around">

            <Form inline>
              <FormControl type="search" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success"><FontAwesomeIcon  icon={faSearch} /></Button>
            </Form>

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
                <li className="nav-links-links"><FontAwesomeIcon  icon={faStar} /></li>
                </Link>
                <Link to = '/Carrito'>
                <li className="nav-links-links"><FontAwesomeIcon  icon={faShoppingCart} /></li>
                </Link>
                <div className="nav-links-links" onClick={() => setModalShow(true)}><FontAwesomeIcon  icon={faQuestionCircle} /></div>           
                <HelpModal
                 show={modalShow}
                 onHide={() => setModalShow(false)}
                />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>

        

        </>
            );
}

export default Header;
>>>>>>> ef05e0e4bfb31480b935b1008cd5fdea12a5f89e
