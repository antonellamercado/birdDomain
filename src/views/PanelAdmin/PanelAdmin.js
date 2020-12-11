import {useState, useEffect} from 'react'
//libreria
import { Table, Modal} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
//config
import clienteAxios from '../../config/axios';
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
            const getToursForList = async()  =>{
            await clienteAxios.get("/api/tours")
            .then(response =>{
            setListaTours(response.data)
            });
            }  
        //   
        useEffect( () => {
            getToursForList();
            }, []);
            
        //  agregar o editar tour     
        
        const editarTour = async (tour)=> {
            console.log("editando");
            await clienteAxios.put(`api/tours/${currentId}`, tour);
            getToursForList();
            toast("Tour editado correctamente", {
                type: "info",
                position: "top-center",
                autoClose: 2000
            });
            setCurrentId('');
        }
        

        const crearTour = async (tour)=> {
            const result = await clienteAxios.post('api/tours', tour);
            console.log('nuevo tour',result);
            getToursForList();
            toast("Tour creado correctamente", {
                type: "success",
                position: "top-center",
                autoClose: 2000
            });
        }

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
        //eliminar tour
        const onDeleteTour = async (id) => {
           // if (buttonYes)
            if(window.confirm("seguro que quieres eliminar?"))
            {console.log('id para eliminar', id);
            const tourEliminado = await clienteAxios.delete(`api/tours/${id}`);
            console.log('tour eliminado', tourEliminado);
            toast("Tour eliminado correctamente", {
                type: "error",
                position: "top-center",
                autoClose: 2000
            });
            }
            getToursForList();
        }

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
                            className="btn btn-danger mr-2"
                            onClick={()=> onDeleteTour(tour._id) }
                            ><FontAwesomeIcon  icon={faTimes}  /> </div>
                            <div  
                            className="btn btn-light"
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