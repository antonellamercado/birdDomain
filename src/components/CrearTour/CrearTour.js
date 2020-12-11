import {useState, useEffect} from 'react';
//estilo
import '../CrearTour/CrearTour.css';
//libreria
import {Modal,  Form, Col} from 'react-bootstrap';
//config
import clienteAxios from '../../config/axios';

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
        latRetiro:'',
        longRetiro:'',
        latObs:'',
        longObs:'',

    };
    
    //const [dataValide, setDataValide] = useState(false);
    const [nuevoTour, setNuevoTour] = useState(initialValues);
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   // const [formChecked, setFormChecked] = useState(false);
    

    // funciones
    const handleOnChange = (e) => {
            const {name, value} = e.target;
            setNuevoTour({...nuevoTour, [name]: value});
        }

    //

    //const handleOnChangeLat = (e) => {
        //const {name, value} = e.target;
        //name==='lat1'? 
         //   setNuevoTour({...nuevoTour, lat: value}) 
        //:
          //  setNuevoTour({...nuevoTour, lat: value})   
    //}
    //const updateCheckbox = (e) => setFormChecked(e.target.checked)
    
    const handleOnSubmit = (e) => {
        console.log('nuevo tour', nuevoTour);
        setNuevoTour({...nuevoTour});
        e.preventDefault();
        if(nuevoTour.title.trim() === '' || nuevoTour.body.trim() === '' || nuevoTour.img.trim() === '' || nuevoTour.imgD.trim() === '' 
        || nuevoTour.price === '' || nuevoTour.dias === ''|| nuevoTour.ecoregiones === '' ||
        nuevoTour.especies === '' || nuevoTour.lat === '' || nuevoTour.latObs === '') {
        setError(true);
            return
        }
        else {
        setError(false);

        const newnuevoTour = {
        
        ...nuevoTour,
        lat: [parseInt(nuevoTour.latRetiro), parseInt(nuevoTour.longRetiro)],
        latObs: [parseInt(nuevoTour.latObs), parseInt(nuevoTour.longObs)]
        }
        
        props.addOrEditTour(newnuevoTour);

        //limpia campos
        setNuevoTour({...initialValues});
        }
        }
//

const getTourById = async id => {
    try {
        const response = await clienteAxios.get(`api/tours/${id}`);
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
            <Form.Label>Body</Form.Label>
            <Form.Control type="textarea" 
                        name="body" 
                        onChange={handleOnChange}
                        value={nuevoTour.body}
                        />
            </Form.Group>
            <Form.Group controlId="body">
            <Form.Label>Info adicional</Form.Label>
            <Form.Control type="textarea" 
                        name="info" 
                        onChange={handleOnChange}
                        value={nuevoTour.info}
                        />
            </Form.Group>
            <Form.Group controlId="body">
            <Form.Label>Description</Form.Label>
            <Form.Control type="textarea" 
                        name="description" 
                        onChange={handleOnChange}
                        value={nuevoTour.description}
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
            <Form.Control type="number" 
                        name="price" 
                        onChange={handleOnChange}
                        value={nuevoTour.price}
                        />
            </Form.Group>
            <Form.Group as={Col} controlId="dias">
            <Form.Label>Cantidad de dias</Form.Label>
            <Form.Control type="number" 
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

                    <Form.Group as={Col} controlId="latitudretiro">
                        <Form.Label>Informacion</Form.Label>
                        <Form.Control type="text" 
                        name="info" 
                        onChange={handleOnChange}
                        value={nuevoTour.info}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="latitudretiro">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control type="text" 
                        name="description" 
                        onChange={handleOnChange}
                        value={nuevoTour.description}
                        />
                    </Form.Group>

                                   {/* /PUNTOS/ */}
                    <Form.Row>
                    <Form.Group as={Col} controlId="latitudretiro">
                        <Form.Label>Punto de retiro Lat</Form.Label>
                        <Form.Control type="number" 
                        name="latRetiro" 
                        onChange={handleOnChange}
                        value={nuevoTour.latRetiro}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="latitudretiro">
                        <Form.Label>Punto de retiro Long</Form.Label>
                        <Form.Control type="number" 
                        name="longRetiro" 
                        onChange={handleOnChange}
                        value={nuevoTour.longRetiro}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="latitudobservacion">
                        <Form.Label>Punto de observacion Lat </Form.Label>
                        <Form.Control type="number" 
                        name="latObs"  
                        onChange={handleOnChange}
                        value={nuevoTour.lat1}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="latitudobservacion">
                        <Form.Label>Punto de observacion Long</Form.Label>
                        <Form.Control type="number" 
                        name="longObs"  
                        onChange={handleOnChange}
                        value={nuevoTour.longObs}
                        />
                    </Form.Group>

                    </Form.Row> 



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