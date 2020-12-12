import React, {useState, useContext} from 'react';
import {Modal} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
//import img from '../../img/Fig3.jpg';
import './ModalCuenta.css';
import {UserContext} from "../../context/UserContext";
import clienteHeroku from "../../config/prod";
import ErrorNotice from "../misc/ErrorNotice";

export const ModalIng = (props) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await clienteHeroku.post(
        "/users/login",
        loginUser
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

    return (
      <div>
        <div>
            <Modal {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
            >
              {error && (
      <>
      <ErrorNotice message={error} clearError={() => setError(undefined)} />
      </>
      )}
      <Modal.Header closeButton className="modal-body text-dark">
        <Modal.Title id="contained-modal-title-vcenter">
          Iniciar sesion
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body text-dark">
      <form className="mt-2" id="form" onSubmit={submit}>
            <div className="form-group">
                <label for="username" className="mt-3 mr-sm-2 form_login_label">Email</label>
                <input type="text" id="userName" placeholder="Ingresa tu email" className="border p-1 rounded form_login_input" required  onChange={(e) => setEmail(e.target.value)}/>
                <br></br>
                <label for="userpassword" className="mt-4 mr-sm-2 form_login_label">Contraseña</label>
                <input type="password" id="userPass" placeholder="Ingresa tu contraseña" className="border p-1 rounded form_login_input" required onChange={(e) => setPassword(e.target.value)}/>
                <br></br>                            
                {/* <Button type="submit" id="submit" className="mt-4 btn text-white">Login</Button>
                <p className="mt-4">¿Has olvidado tu Contraseña? </p>
                <br></br> */}
                <div className="">
                <input className="btn btn-registrar mt-4 mx-2 text-white" type="submit" value="Login" />
                <Link to ='/Recover'>
                <button className="btn btn-registrar mt-4 text-white" onClick={props.onHide}>Recuperar contraseña</button>
                </Link>
                </div>
            </div>
            
</form> 
      </Modal.Body>
     
    </Modal>
        </div>
    
    </div>

    )
}

export default ModalIng;

/*  /* <Modal.Footer className="modal-body">
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer> */