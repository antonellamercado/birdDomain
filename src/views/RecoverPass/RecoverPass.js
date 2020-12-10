import img from '../../img/DT9.jpg'
import { ToastContainer, toast } from 'react-toastify';
import './RecoverPass.css'
import 'react-toastify/dist/ReactToastify.css';
import clienteAxios from '../../config/axios';

 const RecoverPass = () => {
    
    async function sendEmail(){
        let userEmail = document.getElementById('userEmail').value
        await clienteAxios.post('/send-email', {message:'Hola, al parecer has olvido tu password, sigue el siguiente enlace para poder cambiarla', userEmail});
        toast("Se ha enviado una notificacion al email provisto", {
            type: "success",
            position: "top-center",
            autoClose: 3000 
        })
    }
    return (
        <div className="recoverBg">  
            <form className="mt-0 my-2" id="form" >
                <ToastContainer />
                <fieldset className="fieldset-recover">
                    <legend className="legend-recover"><h3>Recupera tu contraseña</h3></legend>
                    <div className="form-group">
                        <label for="username" className="mt-1 mr-sm-2">Coloca tu email y te enviaremos los pasos a seguir</label>
                        <input type="text" id="userEmail" name="email" placeholder="ejemplo@email.com" className="border p-1 rounded input-recover" required/>
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