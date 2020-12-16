import React, {useState, useContext} from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import './Header.css'
import logo from '../Header/logo.png';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
//import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchBar from '../SearchBar/SearchBar';
import HelpModal from '../ModalFaqs/ModalFaqs.js';
// import ModalIng from '../ModalLogin/ModalLogin';
// import ModalReg from '../ModalRegister/ModalRegister';
import AuthOptions from './AuthOptions';
import {UserContext} from "../../context/UserContext";
import { LinkContainer } from "react-router-bootstrap";


const Header = () => {
    const [modalShow, setModalShow] = useState(false);
    const { userData } = useContext(UserContext);
    // const [modalShowIng, setModalShowIng] = useState(false);
    // const [modalShowReg, setModalShowReg] = useState(false);

    return (
    <>
      <div className="myNav sticky-top p-0 ">
        <div className= "firstrow mr-3 p-0 navbar navbar-expand-lg sticky-top">     
          <Link style={{ textDecoration: 'none' }} to = '/' className="logo-wrapper p-0 " >
            <img className="logo p-0" src = {logo} alt = "img-logo"></img> 
          </Link>
          <strong className='d-none d-sm-block'>Birds Domain</strong>     
          <AuthOptions />
        </div> 
          <Navbar collapseOnSelect="true" className="p-0" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggleButton'/>
            <Navbar.Collapse id="basic-navbar-nav">           
              <Nav className="ml-auto d-flex justify-content-around">
              <SearchBar/>
                  <LinkContainer to="/">
                    <Nav.Link className="nav-links-links active">Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/aves">
                    <Nav.Link className="nav-links-links active">Aves</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contacto">
                    <Nav.Link className="nav-links-links active">Contacto</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/favoritos">
                    <Nav.Link className="nav-links-links active"><FontAwesomeIcon  icon={faStar} /></Nav.Link>
                  </LinkContainer>
                  {userData.user ? (<>
                  <LinkContainer to="/cart">
                    <Nav.Link className="nav-links-links active"><FontAwesomeIcon  icon={faShoppingCart} /></Nav.Link>
                  </LinkContainer>
                  </>) :
                  <></>}
                  <div className="nav-links-links active" onClick={() => setModalShow(true)}><FontAwesomeIcon  icon={faQuestionCircle} /></div>           
                  <HelpModal show={modalShow} onHide={() => setModalShow(false)}/>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </div>
        </>
            );
}

export default Header;
