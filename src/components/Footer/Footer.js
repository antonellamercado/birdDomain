import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './fontawesome';
import './Footer.css'
import logo from '../Header/logo.png'

function Footer () {
    return ( 
        <>
            <div className="row" id="footer-container">
            <div className="col-sm-12 col-md-3 container-social-media">
                    <h4>Bird's Domain</h4>
                    <img src={logo} className="logo" alt="Logo"/>
                </div>
                <div className="vertical-line"></div>
                <div className="col-sm-12 col-md-3 container-menu">
                    <h4>Dirección</h4>
                    <FontAwesomeIcon className="icon" icon={['fa', 'map-marked-alt']} />
                    <div>
                        <p className="m-1">Gral. Paz 576</p>
                        <p className="m-1">San Miguel de Tucuman</p>
                        <p className="m-1">CP - 4000</p>
                    </div>
                </div>
                <div className="vertical-line"></div>
                <div className="col-sm-12 col-md-3 container-menu">
                    <h4>Contacto</h4>
                    <FontAwesomeIcon className="icon d-md-none" icon={['fa', 'phone-volume']} />
                    <p className="social-address">+54 381 578-3030</p>
                    <FontAwesomeIcon className="icon d-md-none" icon={['far', 'envelope-open']} />
                    <p className="social-address">bdomain@rcs.com</p>
                    <div className="row social-media">
                        <FontAwesomeIcon className="icon" icon={['fab', 'facebook-f']} />
                        <p className="d-md-none social-address">facebook.com/birdsdomain</p>
                        <FontAwesomeIcon className="icon" icon={['fab', 'instagram']}/>
                        <p className="d-md-none social-address">instagram.com/birdsdomain</p>
                        <FontAwesomeIcon className="icon" icon={['fab', 'twitter']}/>
                        <p className="d-md-none social-address">twitter.com/birdsdomain</p>
                    </div>
                </div>
            </div>
            <div className="row footer-low">
                <p>© 2020 Todos los derechos reservados<i> | </i><b>Bird's Domain</b></p>
            </div>
        </>
     );
}
 
export default Footer;