import React, {useState, useContext} from 'react';
import {Modal} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import './ModalCuenta.css';
import {UserContext} from "../../context/UserContext";
import ErrorNotice from "../misc/ErrorNotice";
import clienteHeroku from '../../config/prod';
import Axios from "axios";

export const ModalReg = (props) => {

  const [email, setEmail] = useState ();
  const [password, setPassword] = useState ();
  const [passwordCheck, setPasswordCheck] = useState ();
  const [displayName, setDisplayName] = useState ();
  const [error, setError] = useState();
  const {setUserData} = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { email, password, passwordCheck, displayName };
      await Axios.post("https://api-birdomain.herokuapp.com/api/users/register", newUser);
      
      const loginRes = await Axios.post("https://api-birdomain.herokuapp.com/api/users/login", {
        email,
        password,
      });
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
            <>
            <Modal {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
   
      <Modal.Header closeButton className="modal-body text-dark">
        <Modal.Title id="contained-modal-title-vcenter">
          Registrate  
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body text-dark">
      <form className="mt-1" id="form" onSubmit={submit}>
      <div className="form-group mt-5">
                    <div className="mt-3">
                        <label for="user" className="text-dark">Nombre de Usuario</label>
                        <input type="text" name="user" className="form-control" id="newUser" placeholder="Nombre de usuario" required minlength="4" maxlength="30" onChange={(e) => setDisplayName(e.target.value)}/>
                        <small className="form-text text-muted">Debe tener entre 8 y 30 caracteres.</small>
                    </div>
                    <div className="mt-3">
                        <label for="pass">Contraseña</label>
                        <input type="password" name="pass" className="form-control" id="newPass" placeholder="Contraseña" required minlength="8" maxlength="16" onChange={(e) => setPassword(e.target.value)}/>
                        <small className="form-text text-muted">Minimo de 8 caracteres.</small>
                    </div>
                    <div className="mt-3">
                        <label for="pass">Confirme contraseña</label>
                        <input type="password" name="pass" className="form-control" id="newPassV" placeholder="Contraseña" required minlength="8" maxlength="16" onChange={(e) => setPasswordCheck(e.target.value)}/>
                        <small className="form-text text-muted">Ingrese contraseña nuevamente.</small>
                    </div>
                    <div className="mt-3">
                        <label for="email">Correo Electrónico</label>
                        <input type="email" name="email" className="form-control" id="newEmail" placeholder="ejemplo@email.com" required onChange={(e) => setEmail(e.target.value)}/>
                        <small className="form-text text-muted">Tu dirección de correo electrónico se utiliza para confirmar las compras y enviarte notificaciones de los tours.</small>
                    </div>
                    {/* <div className="mt-3">
                        <label for="email">Confirme correo electronico</label>
                        <input type="email" name="email" className="form-control" id="newEmailV" placeholder="ejemplo@email.com" required/>
                        <small className="form-text text-muted">Coloque su correo electronico nuevamente.</small>
                    </div> */}
                    {/* <label for="contry" className="mt-4">País de residencia</label>
                    <select name="contry" id="contry" className="text-black" value="" required>
                        <option value="AR">Argentina</option>
                        <option value="UR">Uruguay</option>
                        <option value="CH">Chile</option>
                        <option value="EU">Estados Unidos</option>
                        <option value="EN">Inglaterra</option>
                        <option value="DI">Dinamarca</option>
                        <option value="HO">Holanda</option>
                        <option value="AU">Australia</option>
                        <option value="BO">Bolivia</option>
                        <option value="JA">Japon</option>
                        <option value="CHI">China</option>
                        <option value="IN">India</option>
                    </select>
                    <div id="modalError" className="pt-2"></div> */}
                   
                </div>
                <input className="btn btn-registrar mt-4 text-white" type="submit" value="Registrate" />
        </form> 
        {error && (
      <>
      <ErrorNotice message={error} clearError={() => setError(undefined)} />
      </>
      )}
        </Modal.Body>
    </Modal>
      </>
        </div>
    )
}

export default ModalReg;