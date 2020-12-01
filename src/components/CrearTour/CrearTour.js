import {useState, useEffect} from 'react';
//estilo
import '../CrearTour/CrearTour.css';
//libreria
import {Button, Modal,  Form, Row, Col} from 'react-bootstrap';
//config
import clienteAxios from '../../config/axios';

const CrearTour = (props) => {
// Estados
    const initialValues =
    {
        title:'',
        body:'',
        img: '',
        imgD:'',
        price:'',
        dias:'',
        ecoregiones:'',
        especies:'',
        destacado:false,
    };
    
    //const [dataValide, setDataValide] = useState(false);
    const [nuevoTour, setNuevoTour] = useState(initialValues);
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    // funciones
    const handleOnChange = (e) => {
            const {name, value} = e.target;
            setNuevoTour({...nuevoTour, [name]:value});
            console.log('nuevo tour', nuevoTour);
            
           // validarCampos();
        }
//
    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(nuevoTour.title.trim() === '' || nuevoTour.body.trim() === '' || nuevoTour.img.trim() === '' || nuevoTour.imgD.trim() === '' 
        || nuevoTour.price.trim() === '' || nuevoTour.dias.trim() === ''|| nuevoTour.ecoregiones.trim() === '' ||
        nuevoTour.especies.trim() === '') {
            setError(true);
            return
        }
        else {
        setError(false);
        props.addOrEditTour(nuevoTour);
        //limpia campos
        setNuevoTour({...initialValues});
        }
        }
//

const getTourById = async id => {
    try {
        const response = await clienteAxios.get(`/Tours/${id}`);
        setNuevoTour(response.data);
        setShow(true);
    } catch (error) {
        console.log(error.response)
    }
}
//
        useEffect(() => {
            if (props.currentId === '')
            {
                setNuevoTour(initialValues)
            }
            else
            {
                getTourById(props.currentId);    
                console.log('editing')
            }
        }, [props.currentId]);
        
    return (
    <div>
    <button className="btn modal_boton mt-2" onClick={handleShow}>
        Crear nuevo tour
    </button>

    <Modal show={show} onHide={handleClose} className="modal-crear-tour">

    <Form className="formulario_modal  m-1 p-2" onSubmit={handleOnSubmit}>
    <Modal.Header closeButton>
    <p className='d-block'>Complete los campos para crear un nuevo tour</p> 
    </Modal.Header>
    {
        error ?
        <p className="alert bg-danger text-black d-block">Todos los campos son obligatorios</p>
        : 
        <p className="alert alert-danger desactivado">Todos los campos son obligatorios</p>
      }
    <Modal.Body>
        <Form.Group controlId="title">
            <Form.Label>Titulo</Form.Label>
            <Form.Control type="text" 
                        name="title" 
                        onChange={handleOnChange}
                        value={nuevoTour.title}
                        /> 
            </Form.Group>
            <Form.Group controlId="body">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control type="textarea" 
                        name="body" 
                        onChange={handleOnChange}
                        value={nuevoTour.body}
                        />
            </Form.Group>
            <Form.Group controlId="img">
            <Form.Label>Imagen Portada Tour</Form.Label>
            <Form.Control type="text" 
                        name="img" 
                        onChange={handleOnChange}
                        value={nuevoTour.img}
                        />
            </Form.Group>
            <Form.Group controlId="imgD">
            <Form.Label>Imagen Ave destacada</Form.Label>
            <Form.Control type="text" 
                        name="imgD" 
                        onChange={handleOnChange}
                        value={nuevoTour.imgD}
                        />
            </Form.Group>
            <Form.Row>
            <Form.Group as={Col} controlId="price">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="text" 
                        name="price" 
                        onChange={handleOnChange}
                        value={nuevoTour.price}
                        />
            </Form.Group>
            <Form.Group as={Col} controlId="dias">
            <Form.Label>Cantidad de dias</Form.Label>
            <Form.Control type="text" 
                        name="dias" 
                        onChange={handleOnChange}
                        value={nuevoTour.dias}
                        />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="ecoregiones">
                        <Form.Label>Ecoregion</Form.Label>
                        <Form.Control type="text" 
                        name="ecoregiones" 
                        onChange={handleOnChange}
                        value={nuevoTour.ecoregiones}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="especies">
                        <Form.Label>Cantidad de especies</Form.Label>
                        <Form.Control type="text" 
                        name="especies"  
                        onChange={handleOnChange}
                        value={nuevoTour.especies}
                        />
                    </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="destacada">
                    <Form.Check 
                        type="switch"
                        id="detacada-switch"
                        label="Destacada"
                    />
                    </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                    <button type="submit" className="btn modal_boton">
                        {props.currentId==='' ? "Crear" : "Editar"}
                    </button>
                    </Modal.Footer>
                </Form>
    </Modal>
                
    </div>
    );
}

export default CrearTour;