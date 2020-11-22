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
import SearchBar from '../SearchBar/SearchBar';
import HelpModal from '../HelpModal/HelpModal.js'
import ModalIng from '../ModalIng/Modalng'
import ModalReg from '../ModalReg/ModalReg';



const Header = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShowIng, setModalShowIng] = React.useState(false);
    const [modalShowReg, setModalShowReg] = React.useState(false);

    return (
    <>
    <div className="sticky-top">
    <div className= "myNav firstrow navbar navbar-expand-lg sticky-top">
    
    <Link to = '/' className="logo-wrapper" >
    <img className="logo" src = {logo} alt = "..."></img> 
    </Link>
    <strong>Birds Domain</strong>

     <div className="buttons d-flex justify-content-between">
     <button className="buttonC" onClick={() => setModalShowIng(true)}>Ingresa</button>
     <ModalIng
                 show={modalShowIng}
                 onHide={() => setModalShowIng(false)}
                />
     <button className="buttonC" onClick={() => setModalShowReg(true)}>Registrate</button>
     <ModalReg
            show={modalShowReg}
            onHide={() => setModalShowReg(false)}
           />
     </div>
    </div>
    
        <Navbar className="myNav" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto d-flex justify-content-around">
            
            <SearchBar/>
                <Link to = '/'>
                <li className="nav-links-links">Home</li>
                </Link>
                <Link to = '/destacado'>
                <li className="nav-links-links">Destacado</li>
                </Link>
                <Link to = '/contacto'>
                <li className="nav-links-links">Contacto</li>
                </Link>
                <Link to = '/favoritos'>
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
