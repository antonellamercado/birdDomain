
import React, { useState } from 'react';
import './RecoverPass.css'
import {Form, Button} from 'react-bootstrap';
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
    
        <div className="recoverBg">
            
            <form  className="mt-0 mb-2" id="form"  onSubmit={showToast}>
            <ToastContainer />
            <h3>Recupera tu contraseña</h3>
            <div className="form-group">
                <label for="username" className="mt-0 mr-sm-2">Coloca tu email y te enviaremos los pasos a seguir</label>
                <input type="text" id="userName" placeholder="ejemplo@email.com" className=" border p-1 rounded" required/>
                <br></br>
                <div id="error"></div>
                <br></br>
                <br></br>
                <button type="submit" className="btn_recuperar_pass">
            Enviar email
            </button>    
        </div>
        </form> 
        <div>
        <img className="container" src={img}></img>
        </div>
        </div>
    )
}

export default RecoverPass;


