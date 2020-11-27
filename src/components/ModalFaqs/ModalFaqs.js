import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import img from '../../img/Fig3.jpg'


export const HelpModal = (props) => {
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
          Necesitas ayuda?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body text-dark">
        <img className=" w-100 h-80" src={img}></img>
        <p>
          Envianos tus consultas a birdomain@gmail.com y
          te responderemos a la brevedad
        </p>
      </Modal.Body>
      <Modal.Footer className="modal-body">
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
      </>
        </div>
    )
}

export default HelpModal;
