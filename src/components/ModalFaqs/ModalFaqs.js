import React from 'react';
import {Modal, Button, Accordion,Card} from 'react-bootstrap';
import img from '../../img/Fig3.jpg'


export const HelpModal = (props) => {
    return (
        <div className="modal_faqs">
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
        
      <Accordion className="modal-body">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Cual es la filosofia de viaje de birds Domain? 
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>"Poder admirar nuestras especies favoritas de aves autoctonas ademas del cuidado de la naturaleza"</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1" >
        Que se puede esperar de los guias de birds domain?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>"Una persona que ademas de brindarte todo su conocimientos en las especies a visitar, es amigable, respetuoso y solidario"</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        Porque los precios de los tours varian tanto?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>Depende de las ofertas de hospedaje y alimento que haya disponibles en la zona</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
      Cual es el potencial fotografico de los tours?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>"Los guias son expertos conocen muy bien el terreno y los territorios, es solo cuestion de informar al guia el objetivo fotografico de tu viaje para mejorar tu experiencia fotografiando, y no solo aves, sino todo lo que quieras"</Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>

      </Modal.Body>
      <Modal.Footer className="modal-body">
        <Button className="modalbtn" onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
      </>
        </div>
    )
}

export default HelpModal;
