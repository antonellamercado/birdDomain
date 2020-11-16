import React, {useState, useEffect} from 'react';
import {Modal,Nav,Navbar,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import './myNav.css'
import logo from '../Header/logo.png';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import HelpModal from '../HelpModal/HelpModal.js'


const MyNav = () => {
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

export default MyNav;