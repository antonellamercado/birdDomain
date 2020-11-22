import {useState, useEffect} from 'react';
//estilo
import '../CrearTour/CrearTour.css';
//libreria
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';
//config
import clienteAxios from '../../config/axios';
const CrearTour = () => {
    const [modal, setModal] = useState(false);
    const [nuevoTour, setNuevoTour] = useState({});
    const toggle = () => setModal(!modal);
//const   showModalCrearTour = () => {
    useEffect (()=> { 
        const postNewTour = async()  =>{
            await clienteAxios.post("/Tours")
            .then(response =>{
            setNuevoTour(response.data)
            });
            }
            postNewTour();         
        },[]);


    return (
    <>
        <Button onClick={toggle}>Crear tour</Button>
        <Modal isOpen={modal} toggle={toggle} className="formulario_modal">
            <ModalHeader toggle={toggle}>Nuevo Tour</ModalHeader>
            <ModalBody className="formulario_modal">
                <Form className="formulario_modal  m-1 p-2">
                    <FormGroup>
                        <Label>Titulo</Label>
                        <Input type="text"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Descripcion</Label>
                        <Input type="textarea"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Imagen Portada Tour</Label>
                        <Input type="text"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Imagen Ave destacada</Label>
                        <Input type="text"></Input>
                    </FormGroup>
                    <Row>
                    <Col  md={6}>
                    <FormGroup>
                        <Label>Precio</Label>
                        <Input type="text"></Input>
                    </FormGroup>
                    </Col>
                    <Col  md={6}>
                    <FormGroup>
                        <Label>Cantidad de dias</Label>
                        <Input type="text"></Input>
                    </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col  md={6}>
                    <FormGroup>
                        <Label>Ecoregion</Label>
                        <Input type="text"></Input>
                    </FormGroup>
                    </Col>
                    <Col  md={6}>
                    <FormGroup>
                        <Label>Cantidad de especies</Label>
                        <Input type="text"></Input>
                    </FormGroup>
                    </Col>
                    </Row>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>Crear</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancelar</Button>
            </ModalFooter>
        </Modal>
    </>
    );
}

export default CrearTour;