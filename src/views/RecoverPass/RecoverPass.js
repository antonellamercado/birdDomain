
//import React, { useState } from 'react';
import './RecoverPass.css'
//import {Form, Button} from 'react-bootstrap';
import img from '../../img/DT9.jpg'
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
//import ModalRecoverPass from './ModalRecoverPass'


 const RecoverPass = () => {
    
  //  const [modalShowFaq, setModalShowFaq] = useState(false);

    const showToast = (e) => {
    e.preventDefault();
    toast("Se ha enviado una notificacion al email provisto", 
    {
            type: "success",
            position: "top-center",
            autoClose: 3000 })
    }
    

    return (
    
        <div className="recoverBg mt-5">
            
            <form  className="mt-0 mb-2" id="form"  onSubmit={showToast}>
            <ToastContainer />
            <fieldset className="fieldset-recover">
            <legend className="legend-recover"> <h3>Recupera tu contraseña</h3></legend>
                <div className="form-group">
                <label for="username" className="mt-1 mr-sm-2">Coloca tu email y te enviaremos los pasos a seguir</label>
                <input type="text" id="userName" placeholder="ejemplo@email.com" className=" border p-1 rounded input-recover" required/>
                <br></br>
                <div id="error"></div>
                <br></br>
                <button type="submit" className="btn_recuperar_pass">
            Enviar email
            </button>    
        </div>
        </fieldset>
        </form> 
        <div>
        <img className="container img-recover" src={img} alt="img-recuperarPass"></img>
        </div>
        </div>
    )
}

export default RecoverPass;


