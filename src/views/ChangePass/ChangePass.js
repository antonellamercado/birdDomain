import React, { useState, useEffect, useContext } from 'react';
import {UserContext} from "../../context/UserContext";
import clienteHeroku from '../../config/prod';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";


const ChangePass = ({match}) => {
    const {userData, setUserData} = useContext(UserContext);
    const tokenEmail = match.params.id;
    const [password, setPassword] = useState ();
    const [passwordCheck, setPasswordCheck] = useState ();
    const [error, setError] = useState();
    const history = useHistory();
    const formChangePass = document.getElementById('formChangePass');

    
    useEffect(()=>{   
        const getUserForToken = async ()=>{
            const tokenRes = await clienteHeroku.post("users/tokenisvalid",null, { headers: { "x-auth-token": tokenEmail } });        
            if (tokenRes.data) {
                const userRes = await clienteHeroku.get("users/", { headers: { "x-auth-token": tokenEmail }});           
                localStorage.setItem("auth-token", tokenEmail);
                setUserData({
                    token: tokenEmail,
                    user: userRes.data,
                });
            }
        };
        getUserForToken(tokenEmail);                  
    }, []);
    
    async function newPassSend(e){
        e.preventDefault();
        try{
            if(localStorage.getItem('auth-token')===tokenEmail){
                const sendNewPass = {password, passwordCheck}
                const backendPass = await clienteHeroku.post('users/changePass', sendNewPass);
                if(backendPass.data.password){
                    await clienteHeroku.put(`users/${userData.user.id}`, {password:backendPass.data.password});
                    formChangePass.reset();
                    toast(`Su contraseña fue cambiada correctamente`, {
                        type: "success",
                        position: "top-center",
                        autoClose: 3000                       
                    });
                    function back(){history.push('/')}
                    setTimeout(back, 3000)
                };
            }
        }catch(err){
            setError(err.response.data.msg)
            toast(`${error}`, {
                type: "error",
                position: "top-center",
                autoClose: 5000 
            });
        }
    }
    
    return (
        <>
            <ToastContainer limit={1}/>
            <div className="container my-4">
                <h4 className='my-5'>Por favor, complete todos los campos para cambiar su clave</h4>
                <form id='formChangePass'>               
                    <fieldset className="fieldset-checkout">
                        <legend className="legend-checkout"><h3>Cambiar Contraseña</h3></legend>
                        <div className="form-group container my-4">
                            <label>Nueva Contraseña</label>
                            <input id="password" name="password" type="password" placeholder="Coloca aqui tu nueva contraseña" className="form-control" required minLength="8" maxLength="16" onChange={(e) => setPassword(e.target.value)}></input>
                            <small className="form-text text-muted">La contraseña tiene que tener un minimo de ocho caracteres.</small>
                        </div>
                        <div className="form-group container my-4">
                            <label>Repetir contraseña</label>
                            <input id="passwordCheck" name="passwordCheck" type="password" placeholder="Re-introduce tu nueva contraseña" className="form-control" required minLength="8" maxLength="16" onChange={(e) => setPasswordCheck(e.target.value)}></input>
                        </div>              
                        <div className="form-group">
                            <button className="btn btn-success" onClick={newPassSend}>Enviar</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    )
};
export default ChangePass;