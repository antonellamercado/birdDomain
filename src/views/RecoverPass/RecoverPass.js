
import React from 'react';
import './RecoverPass.css'
import {Form, Button} from 'react-bootstrap';
import img from '../../img/DT9.jpg'
import {useHistory} from 'react-router-dom';



 const RecoverPass = () => {
    const history = useHistory();

    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        alert("Se ha enviado una notificacion al email provisto")
        history.push("/");
      }

    return (
        <>
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
                <Button type="submit" onClick={ handleClick }>Enviar email</Button>
            </div>
        </form> 
        <div>
        </div>
        <img className="container" src={img}></img>
        </div>
        
        </>
    )
}

export default RecoverPass;


// async function handleOnSubmit(e) {
//     e.preventDefault();
//     try {
//       await Auth.signIn(email, password);
//       userHasAuthenticated(true);
//       history.push("/");
//     } catch (e) {
//       alert(e.message);
//     }
  // const history = useHistory();
    

    // const handleOnclick = e => {
    //     e.preventDefault();
    //     history.push("/");
    //                 }
    //onClick={handleOnclick}
