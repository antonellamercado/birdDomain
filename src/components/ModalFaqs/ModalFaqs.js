import React from 'react';
import {Modal, Button, Accordion,Card} from 'react-bootstrap';
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
        
      <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Cual es la filosofia de viaje de birds Domain? 
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1" >
        Que se puede esperar de los guias de birds domain?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        Que se puede esperar de los guias de birds domain?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        Que se puede esperar de los guias de birds domain?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="4">
        Que se puede esperar de los guias de birds domain?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

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
