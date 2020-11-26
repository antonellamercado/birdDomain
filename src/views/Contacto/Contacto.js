import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
//libreria
import { Row, Col, Button, Form,  } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
//estilos
import '../Contacto/Contacto.css'


const Contacto = () => {

const initialValues = {
    nombre:'',
    apellido:'',
    telefono:'',
    email:'',
    mensaje:''
};    
const [valuesInput, setValuesInput] = useState(initialValues);

const handleOnChange = (e) => {
    const {name, value} = e.target;
    setValuesInput({...valuesInput, [name]:value});
   // validarCampos();
}

const cleanInput = () =>{
    setValuesInput (initialValues);
    toast("Mensaje enviado correctamente", {
        type: "success",
        position: "top-center",
        autoClose: 2000
    });
}
    return (
    <Link to = '/contacto'>
        <ToastContainer />
        <Form className="formulario_contacto">
        <p className="formulario_titulo">Completa tus datos y dejanos tu comentario</p>
        <Form.Row>
        <Col>
        <Form.Group>
            <Form.Label className="formulario_label" for="nombre" as={Col}>Nombre</Form.Label>
            <Form.Control className="formulario_input" 
            type="text" 
            name="nombre" 
            id="nombre" 
            placeholder=""
            onChange={handleOnChange}
            value={valuesInput.nombre} />
        </Form.Group>
        </Col>
        <Col>
        <Form.Group as={Row} >
            <Form.Label className="formulario_label" for="apellido" as={Col}>Apellido</Form.Label>
            <Form.Control className="formulario_input" 
            type="text" 
            name="apellido" 
            id="apellido" 
            placeholder=""
            onChange={handleOnChange}
            value={valuesInput.apellido} />
        </Form.Group>
        </Col>
        </Form.Row>
        <Form.Row>
        <Col>
        <Form.Group>
            <Form.Label className="formulario_label" for="telefono" column sm="6">Telefono</Form.Label>
            <Form.Control className="formulario_input" 
            type="text" 
            name="telefono" 
            id="telefono" 
            placeholder=""
            onChange={handleOnChange}
            value={valuesInput.telefono} />
        </Form.Group>
        </Col>
        <Col>
        <Form.Group as={Row}>
            <Form.Label className="formulario_label" for="exampleEmail" column sm="6">Email</Form.Label>
            <Form.Control className="formulario_input" 
            type="email" 
            name="email" 
            id="exampleEmail" 
            placeholder=""
            onChange={handleOnChange}
            value={valuesInput.email} />
        </Form.Group>
        </Col>
        </Form.Row>
        <Form.Group>
            <Form.Label className="formulario_label" for="asunto">Asunto</Form.Label>
            <Form.Control className="formulario_input" as="select" name="asunto" id="asunto">
                <option className="formulario_label formulario_input">Atencion al cliente</option>
                <option className="formulario_label formulario_input">Recursos humanos</option>
                <option className="formulario_label formulario_input">Otras consultas</option>
                <option className="formulario_label formulario_input">Denuncias</option>
                <option className="formulario_label formulario_input">Quejas</option>
                <option className="formulario_label formulario_input">Sugerencias</option>
            </Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label className="formulario_label" for="mensaje">Escribe tu mensaje</Form.Label>
            <Form.Control className="formulario_input" 
            as="textarea"
            name="mensaje" 
            id="mensaje"
            onChange={handleOnChange}
            value={valuesInput.mensaje} />
        </Form.Group>
        <Button className="formulario_boton" type="submit" onClick={cleanInput} >Enviar</Button>
        </Form>
        <div className="home_separador"></div>
        
    </Link>
    );
}

export default Contacto;