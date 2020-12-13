import {useState, useEffect} from 'react'
//libreria
import { Table, Modal} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
//config
import clienteHeroku from '../../config/prod';
//estilo
import '../PanelAdmin/PanelAdmin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,faEdit } from '@fortawesome/free-solid-svg-icons';
//componente
import CrearTour from '../../components/CrearTour/CrearTour';

const PanelAdmin = () => {

    //estados
    //const [show, setShow] = useState(false);
   // const handleClose = () => setShow(false);
   // const handleShow = () => setShow(true);
   // const [buttonYes, setButtonYes] = useState(false);
    const [listaTours, setListaTours] = useState([]);
    const [currentId, setCurrentId] = useState("");
    // funciones
    /////////////////////////////////////////////
    //1- Obtiene todos los tour para listar
            const getToursForList = async()  =>{
            await clienteHeroku.get("/tours")
            .then(response =>{
            setListaTours(response.data)
            });
            }  
    ///////////////////////////7/////////////  
        useEffect( () => {
            getToursForList();
            }, []);
    ////////////////////////////////////////////        
    //  Edita tour    
        
        const editarTour = async (tour)=> {
            console.log("editando");
            await clienteHeroku.put(`/tours/${currentId}`, tour);
            getToursForList();
            toast("Tour editado correctamente", {
                type: "info",
                position: "top-center",
                autoClose: 2000
            });
            setCurrentId('');
        }
        
    ////////////////////////////////////////////
    // Crea tour
        const crearTour = async (tour)=> {
            const result = await clienteHeroku.post('/tours', tour);
            console.log('nuevo tour',result);
            getToursForList();
            toast("Tour creado correctamente", {
                type: "success",
                position: "top-center",
                autoClose: 2000
            });
        }
    /////////////////////////////////////////////
    //  si el id actual es vacio -> crea tour
    // sino -> edita
        const addOrEditTour = (tour) => {
        if (currentId === '')
            {
                crearTour(tour);
            }
        else
            {
                editarTour(tour);
            }     
        }
    ///////////////////////////////////////////    
    //Eliminar tour
        const deleteTour = async (id) => {
           // if (buttonYes)
            if(window.confirm("seguro que quieres eliminar?"))
            {console.log('id para eliminar', id);
            const tourEliminado = await clienteHeroku.delete(`/tours/${id}`);
            console.log('tour eliminado', tourEliminado);
            toast("Tour eliminado correctamente", {
                type: "error",
                position: "top-center",
                autoClose: 2000
            });
            }
            getToursForList();
        }
    //////////////////////////////////////////
    return(
        <>
        <ToastContainer />
        <p className="font-weight-bold t-2 title-panelAdmin">Bienvenido al panel de administracion.
            Aqui podra <em className="initialism">Crear</em> nuevos tours, <em className="initialism">Editar</em> los mismos y cambiar la imagen destacada de la pagina principal, ademas de <em className="initialism">Eliminar</em> tours obsoletos.
        </p>
        <div></div>
        <CrearTour {...{addOrEditTour, currentId,listaTours }}/>
        <Table variant="dark" bordered hover responsive className="my-2">
            <thead className="h2 initialism">
                <tr>
                <th>Nombre</th>
                <th>Ecoregion</th>
                <th>Precio</th>
                <th>Dias</th>
                <th>N° de especies</th>
                <th>Destacado</th>
                <th>Acciones</th>
                </tr>
            </thead>
            {
                listaTours.length === 0 ? null :
                (listaTours.map((tour, index) => 
                    <tbody key={index}>
                        <tr>
                        <td>{tour.title}</td>
                        <td>{tour.ecoregiones}</td>
                        <td>{tour.price}</td>
                        <td>{tour.dias}</td>
                        <td>{tour.especies}</td>
                        <td>{tour.isDestacado === true ? 'Si': 'No'}</td>
                        <td>
                            <div 
                            className="btn btn-danger mr-2 admin_delete"
                            onClick={()=> deleteTour(tour._id) }
                            ><FontAwesomeIcon  icon={faTimes}  /> </div>
                            <div  
                            className="btn btn-light admin_edit"
                            onClick={()=>setCurrentId(tour._id)}
                            ><FontAwesomeIcon  icon={faEdit} /></div>
                        </td>
                        </tr>
                    </tbody>    
            ))
            }
        </Table> 
    </>
    );
}

export default PanelAdmin;