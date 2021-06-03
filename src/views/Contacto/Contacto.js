import React from 'react';
import {useState, useEffect} from 'react';
//libreria
import { Row, Col, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
//estilos
import '../Contacto/Contacto.css';
import 'react-toastify/dist/ReactToastify.css'


const Contacto = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        if (!mounted) {
            setMounted(true)
                window.scrollTo(0,0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

const initialValues = {
    nombre:'',
    apellido:'',
    telefono:'',
    email:'',
    mensaje:''
};    
const [valuesInput, setValuesInput] = useState(initialValues);
const [error, setError] = useState(false);  
const handleOnChange = (e) => {
    const {name, value} = e.target;
    setValuesInput({...valuesInput, [name]:value});
   // validarCampos();
}

const sendForm = (e) => {

        e.preventDefault();
        // si algun campo esta vacio setea el state error
        if(valuesInput.nombre=== '' || valuesInput.apellido === '' || valuesInput.telefono === '' || 
        valuesInput.email === '' || valuesInput.mensaje === '') {
        setError(true);
            return
        }
        else {
        setError(false);
        setValuesInput (initialValues);
    toast("Mensaje enviado correctamente", {
        type: "success",
        position: "top-center",
        autoClose: 4000,
    });
}
}
    return (
    <>
        <ToastContainer />
       
        <Form className="formulario_contacto mt-5" onSubmit={sendForm}>
        <fieldset className="fieldset-contacto">
            <legend className="legend-contacto"><h3 className="texto-legend">Completa tus datos y dejanos tu comentario</h3></legend>
        <Form.Row>
        <Col>
        <Form.Group>
            <Form.Label className="formulario_label" for="nombre" as={Col}>Nombre</Form.Label>
            <Form.Control className="formulario_input mx-1" 
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
            <Form.Control className="formulario_input mx-1" 
            type="text" 
            name="apellido" 
            id="apellido" 
            placeholder=""
            onChange={handleOnChange}
            value={valuesInput.apellido}/>
        </Form.Group>
        </Col>
        </Form.Row>
        <Form.Row>
        <Col>
        <Form.Group>
            <Form.Label className="formulario_label" for="telefono" column sm="6">Telefono</Form.Label>
            <Form.Control className="formulario_input mx-1" 
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
            <Form.Control className="formulario_input mx-1" 
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
            <Form.Label className="formulario_label mx-2" for="asunto">Asunto</Form.Label>
            <Form.Control className="formulario_input mx-1" as="select" name="asunto" id="asunto">
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
            <Form.Control className="formulario_input mx-1" 
            as="textarea"
            name="mensaje" 
            id="mensaje"
            onChange={handleOnChange}
            value={valuesInput.mensaje} />
        </Form.Group>
        {
        error ?
        <p className="alert bg-danger text-black d-block">Todos los campos son obligatorios</p>
        : 
        <p className="alert alert-danger desactivado-contacto">Todos los campos son obligatorios</p>
    }
        <button className="formulario_boton btn" type="submit">Enviar</button>
        </fieldset>
        </Form>
        <div className="home_separador"></div>
       </> 
   
    );
}

export default Contacto;