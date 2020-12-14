import img from '../../img/DT9.jpg'
import { ToastContainer, toast } from 'react-toastify';
import './RecoverPass.css'
import 'react-toastify/dist/ReactToastify.css';
import clienteHeroku from '../../config/prod';
import React, {useState, useContext} from 'react';
import Axios from 'axios';

 const RecoverPass = () => {
    const [email, setEmail] = useState();
    const [error, setError] = useState();
    const [changePass, serChangePass] = useState();
    const formSendEmail = document.getElementById('formSendEmail')

    async function sendEmail(e){
        e.preventDefault();
        try {
            const loginUser = { email };
            const loginRes = await clienteHeroku.post("users/getTokenNP", loginUser);
            serChangePass({token: loginRes.data.token});
            localStorage.setItem("changePass-token", loginRes.data.token);
          } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
            toast(`${error}`, {
                type: "success",
                position: "top-center",
                autoClose: 5000 
            });
          }
        let userEmail = document.getElementById('userEmail').value;
        let userEmailToken = localStorage.getItem("changePass-token");
        await Axios.post('http://localhost:5000/send-email', {
            message:'Hola, al parecer has olvido tu password, sigue el siguiente enlace para poder cambiarla', 
            userEmail,
            token: userEmailToken
        });
        toast("Se ha enviado una notificacion al email provisto", {
            type: "success",
            position: "top-center",
            autoClose: 5000 
        });
        setTimeout(localStorage.removeItem('changePass-token'), 3000)
        formSendEmail.reset();
    };
    return (
        <div className="recoverBg">  
            <form className="mt-0 my-2" id="formSendEmail" >
                <ToastContainer />
                <fieldset className="fieldset-recover">
                    <legend className="legend-recover"><h3>Recupera tu contraseña</h3></legend>
                    <div className="form-group">
                        <label for="userEmail" className="mt-1 mr-sm-2">Coloca tu email y te enviaremos los pasos a seguir</label>
                        <input type="text" id="userEmail" name="email" placeholder="ejemplo@email.com" className="border p-1 rounded input-recover" required onChange={(e) => setEmail(e.target.value)}/>
                        <br></br>
                        <div id="error"></div>
                        <br></br>
                        <button onClick={sendEmail}className="btn_recuperar_pass">Enviar email</button>    
                    </div>
                </fieldset>
            </form> 
            <div>
                <img className="container img-recover" src={img} alt="img-recuperarPass"></img>
            </div>
        </div>
    )
};
export default RecoverPass;