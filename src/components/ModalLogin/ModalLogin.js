import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import img from '../../img/Fig3.jpg';
import './ModalCuenta.css';


export const ModalIng = (props) => {
    return (
        <div>
            <Modal {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
            >
      <Modal.Header closeButton className="modal-body text-dark">
        <Modal.Title id="contained-modal-title-vcenter">
          Iniciar sesion
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body text-dark">
      <Form className="mt-2" id="form">
            <div className="form-group">
                <label for="username" className="mt-4 mr-sm-2 form_login_label">Email</label>
                <input type="text" id="userName" placeholder="username" className="border p-1 rounded form_login_input" required/>
                <br></br>
                <label for="userpassword" className="mt-4 mr-sm-2 form_login_label">Contraseña</label>
                <input type="password" id="userPass" placeholder="password" className="border p-1 rounded form_login_input" required/>
                <br></br>
                <input type="checkbox" name="checkbox" id="checkbox" className="mt-4"/>
                <label for="checkbox" className="mr-sm-2 mx-1"> Mantenerme Logueado</label>
                
                <div id="error"></div>
                <Button type="submit" id="submit" className="mt-4 btn text-white">Login</Button>
                <p className="mt-4">¿Has olvidado tu Contraseña? </p>
                <br></br>
                <Link to ='/Recover'>
                <Button onClick={props.onHide}>Recuperar contraseña</Button>
                </Link>
            </div>
</Form> 
      </Modal.Body>
     
    </Modal>
        </div>
    )
}

export default ModalIng;

/*  /* <Modal.Footer className="modal-body">
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer> */