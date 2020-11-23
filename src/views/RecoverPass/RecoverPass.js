
import React, { useState } from 'react';
import './RecoverPass.css'
import {Form, Button} from 'react-bootstrap';
import img from '../../img/DT9.jpg'

import ModalRecoverPass from './ModalRecoverPass'


 const RecoverPass = () => {
    
    const [modalShowFaq, setModalShowFaq] = useState(false);

    

    return (
        
        <div className="recoverBg">
            <form  className="mt-0 mb-2" id="form">
            <h3>Recupera tu contraseña</h3>
            <div className="form-group">
                <label for="username" className="mt-0 mr-sm-2">Coloca tu email y te enviaremos los pasos a seguir</label>
                <input type="text" id="userName" placeholder="ejemplo@email.com" className=" border p-1 rounded" required/>
                <br></br>
                <div id="error"></div>
                <br></br>
                <br></br>
                <Button type="submit" onClick={() => {
          setModalShowFaq(true);
        }}>
            Enviar email</Button>
                <ModalRecoverPass
                    show={modalShowFaq}
                    // onHide={() => setModalShowFaq(false)}
                />
            </div>
        </form> 
        <div>
        </div>
        <img className="container" src={img}></img>
        </div>
        
        
    )
}

export default RecoverPass;


