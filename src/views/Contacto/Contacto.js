import React from 'react';
import {Link} from 'react-router-dom';
//libreria
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
//estilos
import '../Contacto/Contacto.css'


const Contacto = () => {

    return (
    <Link to = '/contacto'>
        <Form className="formulario_contacto">
        <p className="formulario_titulo">Completa tus datos y dejanos tu comentario</p>
              
        <Row form>
        <Col md={6}>
        <FormGroup>
            <Label className="formulario_label" for="nombre">Nombre</Label>
            <Input className="formulario_input" type="text" name="nombre" id="nombre" placeholder="" />
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
            <Label className="formulario_label" for="apellido">Apellido</Label>
            <Input className="formulario_input" type="text" name="apellido" id="apellido" placeholder="" />
        </FormGroup>
        </Col>
        </Row>
        <Row form>
        <Col md={6}>
        <FormGroup>
            <Label className="formulario_label" for="telefono">Telefono</Label>
            <Input className="formulario_input" type="text" name="telefono" id="telefono" placeholder="" />
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
            <Label className="formulario_label" for="exampleEmail">Email</Label>
            <Input className="formulario_input" type="email" name="email" id="exampleEmail" placeholder="" />
        </FormGroup>
        </Col>
        </Row>
        <FormGroup>
            <Label className="formulario_label" for="asunto">Asunto</Label>
            <Input className="formulario_input" type="select" name="asunto" id="asunto">
                <option className="formulario_label formulario_input">Atencion al cliente</option>
                <option className="formulario_label formulario_input">Recursos humanos</option>
                <option className="formulario_label formulario_input">Otras consultas</option>
                <option className="formulario_label formulario_input">Denuncias</option>
                <option className="formulario_label formulario_input">Quejas</option>
                <option className="formulario_label formulario_input">Sugerencias</option>
            </Input>
        </FormGroup>
        <FormGroup>
            <Label className="formulario_label" for="mensaje">Escribe tu mensaje</Label>
            <Input className="formulario_input" type="textarea" name="mensaje" id="mensaje" />
        </FormGroup>
        <Button className="formulario_boton">Enviar</Button>
        </Form>
        <div className="home_separador"></div>
        
    </Link>
    );
}

export default Contacto;