import {useState, useEffect} from 'react';
//estilo
import '../CrearTour/CrearTour.css';
//libreria
import {Modal,  Form, Col, ListGroup} from 'react-bootstrap';
//config
import clienteHeroku from '../../config/prod';

const CrearTour = (props) => {
// Estados
    const initialValues =
    {
        title:'',
        body:'',
        description: '',
        info: '',
        img: '',
        imgD:'',
        price:null,
        dias:null,
        ecoregiones:'',
        especies:'',
        isDestacado:false,
        lat:[],
        latObs:[],
    };
    /////////////////////////////////////////////////////////
    //states
    const [nuevoTour, setNuevoTour] = useState(initialValues);
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    ///////////////////////////////////////////////////
    //1 - Obtiene valores del input y setea en state nuevoTour
    const handleOnChange = (e) => {
            const {name, value} = e.target;
            setNuevoTour({...nuevoTour, [name]: value});
        }
    ///////////////////////////////////////////////////7    
    // Envia objeto para editar o crear
    const handleOnSubmit = (e) => {
        console.log('nuevo tour', nuevoTour);
        setNuevoTour({...nuevoTour});
        e.preventDefault();
        // si algun campo esta vacio setea el state error
        if(nuevoTour.title.trim() === '' || nuevoTour.body.trim() === '' || nuevoTour.img.trim() === '' || nuevoTour.imgD.trim() === '' 
        || nuevoTour.price === '' || nuevoTour.dias === ''|| nuevoTour.ecoregiones === '' ||
        nuevoTour.especies === '' || nuevoTour.lat === '' || nuevoTour.latObs === '') {
        setError(true);
            return
        }
        else {
        setError(false);
        // arma el objeto Tour a enviar
        const newnuevoTour = {
        //...nuevoTour,
        title: nuevoTour.title,
        body: nuevoTour.body,
        description: nuevoTour.description,
        info: nuevoTour.info,
        img: nuevoTour.img,
        imgD:nuevoTour.imgD,
        price: nuevoTour.price,
        dias: nuevoTour.dias,
        ecoregiones: nuevoTour.ecoregiones,
        especies: nuevoTour.especies,
        isDestacado: nuevoTour.isDestacado,
        lat: [parseFloat(nuevoTour.lat[0]), parseFloat(nuevoTour.lat[1])],
        latObs: [parseFloat(nuevoTour.latObs[0]), parseFloat(nuevoTour.latObs[1])]
        }
        // enviar a la funcion para crear o editar
        props.addOrEditTour(newnuevoTour);
        //limpia campos
        setNuevoTour({...initialValues});
        }
        }
/////////////////////////////////////////////////
// obtiene tour por id 

const getTourById = async id => {
    try {
        const response = await clienteHeroku.get(`/tours/${id}`);
        setNuevoTour(response.data);
        setShow(true);
    } catch (error) {
        console.log(error.response)
    }
}
////////////////////////////////////////////7///////////7s
        useEffect(() => {
            if (props.currentId === '')
            {
                setNuevoTour(initialValues)
            }
            else
            {
                getTourById(props.currentId);    
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [props.currentId]);
////////////////////////////////////////////////////        
//limpiar id si no edita ningun campo

const cleanID = (e) => { 
    props.setCurrentId('');
}


//////////////////////////////////////////////////////7
    return (
    <div>
    <button className="btn modal_boton mt-2" onClick={handleShow}>
        Crear nuevo tour
    </button>

    <Modal show={show} onHide={handleClose} className="modal-crear-tour modalTour" centered>

    <Form className="formulario_modal  m-1 p-2" onSubmit={handleOnSubmit}>
    <Modal.Header closeButton onClick={cleanID}>
    <p className='d-block'>Complete los campos para crear un nuevo tour</p> 
    </Modal.Header>
    {
        error ?
        <p className="alert bg-danger text-black d-block">Todos los campos son obligatorios</p>
        : 
        <p className="alert alert-danger desactivado">Todos los campos son obligatorios</p>
    }
    <Modal.Body>
        {/*Titulo*/}
        <Form.Group controlId="title">
            <Form.Label>Titulo</Form.Label>
            <Form.Control type="text" 
                        name="title" 
                        onChange={handleOnChange}
                        value={nuevoTour.title}
                        maxlength="50" 
                        oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                        /> 
        </Form.Group>
        {/*Body*/}
        <Form.Group controlId="body">
            <Form.Label>Body</Form.Label>
            <Form.Control type="textarea" 
                        name="body" 
                        onChange={handleOnChange}
                        value={nuevoTour.body}
                        />
        </Form.Group>
        {/*Info adicional*/}
        <Form.Group controlId="body">
            <Form.Label>Info adicional</Form.Label>
            <Form.Control type="textarea" 
                        name="info" 
                        onChange={handleOnChange}
                        value={nuevoTour.info}
                        />
        </Form.Group>
        {/*Description*/}
        <Form.Group controlId="body">
            <Form.Label>Description</Form.Label>
            <Form.Control type="textarea" 
                        name="description" 
                        onChange={handleOnChange}
                        value={nuevoTour.description}
                        />
        </Form.Group>
        {/*Img Portada*/}
        <Form.Group controlId="img">
            <Form.Label>Imagen Portada Tour</Form.Label>
            <Form.Control type="text" 
                        name="img" 
                        onChange={handleOnChange}
                        value={nuevoTour.img}
                        />
        </Form.Group>
        {/*Img Ave destacada*/}
        <Form.Group controlId="imgD">
            <Form.Label>Imagen Ave destacada</Form.Label>
            <Form.Control type="text" 
                        name="imgD" 
                        onChange={handleOnChange}
                        value={nuevoTour.imgD}
                        />
        </Form.Group>
        {/*Precio*/}
        <Form.Row>
        <Form.Group as={Col} controlId="price">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="number" 
                        name="price" 
                        onChange={handleOnChange}
                        value={nuevoTour.price}
                        />
        </Form.Group>
        {/*Dias*/}
        <Form.Group as={Col} controlId="dias">
            <Form.Label>Días</Form.Label>
            <Form.Control type="number" 
                        name="dias" 
                        onChange={handleOnChange}
                        value={nuevoTour.dias}
                        />
        </Form.Group>
        {/*Ecoregiones*/}    
        <Form.Group as={Col} controlId="ecoregiones">
            <Form.Label>Ecoregion</Form.Label>
            <Form.Control type="text" 
                        name="ecoregiones" 
                        onChange={handleOnChange}
                        value={nuevoTour.ecoregiones}
            />
        </Form.Group>
        {/*Especies*/}
        <Form.Group as={Col} controlId="especies">
            <Form.Label>Especies</Form.Label>
            <Form.Control type="text" 
                        name="especies"  
                        onChange={handleOnChange}
                        value={nuevoTour.especies}
                        />
        </Form.Group>
        </Form.Row>
            {/* /PUNTOS/ */}
        <ListGroup>
        <Form.Label className="text-coordenadas my-2">Puntos de coordenadas</Form.Label>
        <ListGroup.Item>
        <Form.Row>
        <Form.Group as={Col} controlId="latitudretiro">
                <Form.Label>Punto de retiro (Latitud)</Form.Label>
                <Form.Control type="text" 
                    name="latRetiro" 
                    onChange={handleOnChange}
                    value={nuevoTour.lat[0]}
                    />
        </Form.Group>
        <Form.Group as={Col} controlId="longitudretiro">
            <Form.Label>Punto de retiro (Longitud)</Form.Label>
                <Form.Control type="text" 
                        name="longRetiro" 
                        onChange={handleOnChange}
                        value={nuevoTour.lat[1]}
                        />
        </Form.Group>
        <Form.Group as={Col} controlId="latitudobservacion">
                <Form.Label>Punto de observacion (Latitud) </Form.Label>
                <Form.Control type="text" 
                        name="latObser"  
                        onChange={handleOnChange}
                        value={nuevoTour.latObs[0]}
                />
        </Form.Group>
        <Form.Group as={Col} controlId="longitudbservacion">
                <Form.Label>Punto de observacion (Longitud)</Form.Label>
                <Form.Control type="text" 
                        name="longObser"  
                        onChange={handleOnChange}
                        value={nuevoTour.latObs[1]}
                />
        </Form.Group>
        </Form.Row> 
        </ListGroup.Item>
        </ListGroup>
        

        {/* /destacada/ */}
        <Form.Group controlId="destacada">
                <Form.Check 
                        type="checkbox"
                        name="isDestacado"
                        label="Destacada"
                        checked={nuevoTour.isDestacado}
                        onChange = { (e) => 
                            setNuevoTour({...nuevoTour, isDestacado: e.target.checked})
                        }
                />
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
                    <button type="submit" className="btn text-dark modal_boton">
                        {props.currentId==='' ? "Crear" : "Editar"}
                    </button>
        </Modal.Footer>
        </Form>
    </Modal>
                
    </div>
    );
}

export default CrearTour;