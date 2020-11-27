import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import img from '../../img/Fig3.jpg'
import {useHistory} from 'react-router-dom';
import './RecoverPass.css'

export const ModalRecoverPass = (props) => {
    const history = useHistory();

    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        // alert("Se ha enviado una notificacion al email provisto")
        history.push("/");
      }

    return (
        <div>
            <>
            <Modal {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="modal-body text-dark">
        <Modal.Title id="contained-modal-title-vcenter">
          Listo!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body text-dark">
        <img className=" w-100 h-80" src={img}></img>
        <p>
        "Se ha enviado una notificacion al email provisto"
        </p>
      </Modal.Body>
      <Modal.Footer className="modal-body text-dark">
        <Button onClick={ handleClick }>Cerrar</Button>
      </Modal.Footer>
    </Modal>
      </>
        </div>
    )
}

export default ModalRecoverPass;