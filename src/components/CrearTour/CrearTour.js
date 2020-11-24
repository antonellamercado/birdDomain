import {useState} from 'react';
//estilo
import '../CrearTour/CrearTour.css';
//libreria
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';
//config
import clienteAxios from '../../config/axios';

const CrearTour = () => {
    const [modal, setModal] = useState(false);
    const [dataValide, setDataValide] = useState(false);
    const [nuevoTour, setNuevoTour] = useState({
        title:'',
        body:'',
        img: '',
        imgD:'',
        price:0,
        dias:0,
        ecoregiones:'',
        especies:0,
        destacado:false
    });
    const toggle = () => setModal(!modal);
    
    const handleOnChange = e => {
        setNuevoTour({
            ...nuevoTour,
            [e.target.name]: e.target.value
        })
        validarCampos();
    }
    console.log('nuevo tour', nuevoTour);

    const validarCampos =()=>{
        if(nuevoTour.title !== null && nuevoTour.body !== null && nuevoTour.img !== null && nuevoTour.imgD !== null && nuevoTour.price>0 && nuevoTour.dias >0 && nuevoTour.ecoregiones !== null  && nuevoTour.especies>0 && nuevoTour.destacado == null)
        {setDataValide(true)}
        else
        {setDataValide(false)}
    }



//const   showModalCrearTour = () => {
    const handleOnSubmit = async e => {
        e.preventDefault();
        if(dataValide)
            {const result = await clienteAxios.post('/Tours', nuevoTour);
            console.log(result);}
        }
        
    return (
    <>
        <Button className="modal_boton" onClick={toggle}>Crear Nuevo tour</Button>
        <Modal isOpen={modal} toggle={toggle} className="formulario_modal">
            <ModalHeader toggle={toggle}>Nuevo Tour</ModalHeader>
            <ModalBody className="formulario_modal">
                <Form className="formulario_modal  m-1 p-2" onSubmit={handleOnSubmit}>
                    <FormGroup>
                        <Label>Titulo</Label>
                        <Input type="text" name="title" onChange={handleOnChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Descripcion</Label>
                        <Input type="textarea" name="body" onChange={handleOnChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Imagen Portada Tour</Label>
                        <Input type="text" name="img" onChange={handleOnChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Imagen Ave destacada</Label>
                        <Input type="text" name="imgD" onChange={handleOnChange}></Input>
                    </FormGroup>
                    <Row>
                    <Col  md={6}>
                    <FormGroup>
                        <Label>Precio</Label>
                        <Input type="text" name="price" onChange={handleOnChange}></Input>
                    </FormGroup>
                    </Col>
                    <Col  md={6}>
                    <FormGroup>
                        <Label>Cantidad de dias</Label>
                        <Input type="text" name="dias" onChange={handleOnChange}></Input>
                    </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col  md={6}>
                    <FormGroup>
                        <Label>Ecoregion</Label>
                        <Input type="text" name="ecoregiones" onChange={handleOnChange}></Input>
                    </FormGroup>
                    </Col>
                    <Col  md={6}>
                    <FormGroup>
                        <Label>Cantidad de especies</Label>
                        <Input type="text" name="especies"  onChange={handleOnChange}></Input>
                    </FormGroup>
                    </Col>
                    </Row>
                    <FormGroup row>
                        <Label for="exampleSelectMulti" sm={2}>Aves en avistaje</Label>
                        <Col sm={10}>
                        <Input type="select" name="aves" id="exampleSelectMulti" multiple onChange={handleOnChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input type="checkbox" name="destacado"/>{' '}
                        Destacada
                        </Label>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                {setDataValide? '' : <div className="text-alert">Complete el formulario correctamente</div>}
                <Button type="submit" color="primary"  onClick={toggle}>Crear</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancelar</Button>
            </ModalFooter>
        </Modal>
    </>
    );
}

export default CrearTour;