import {useState, useEffect} from 'react'
//libreria
import { Table } from 'reactstrap';
//config
import clienteAxios from '../../config/axios';
//estilo
import '../PanelAdmin/PanelAdmin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,faEdit } from '@fortawesome/free-solid-svg-icons';
//componente
import CrearTour from '../../components/CrearTour/CrearTour';


const PanelAdmin = (match) => {
    const [listaTours, setListaTours] = useState([]);
    useEffect (()=> { 
        const getToursForList = async()  =>{
            await clienteAxios.get("/Tours")
            .then(response =>{
            setListaTours(response.data)
            });
            }
            getToursForList();         
        },[]);

        console.log('tour desde admin', listaTours);   
        
        const eliminarTour =  (id)=> {
            console.log(id)
        }

    return(
        <>
        <p className="text-dark font-weight-bold t-2 title-panelAdmin">Bienvenido al panel de administracion.
            Aqui podra <em className="initialism">Crear</em> nuevos tours, <em className="initialism">Editar</em> los mismos y cambiar la imagen destacada de la pagina principal, ademas de <em className="initialism">Eliminar</em> tours obsoletos.
        </p>
        <div></div>
        <CrearTour/>
        <Table dark bordered hover responsive>
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
                listaTours.length === 0 ? <p>No hay tour disponible</p> :
                (listaTours.map((tour, index) => 
                    <tbody key={index}>
                        <tr>
                        <td>{tour.title}</td>
                        <td>{tour.ecoregiones}</td>
                        <td>{tour.price}</td>
                        <td>{tour.dias}</td>
                        <td>{tour.especies}</td>
                        <td>{tour.destacado === true ? 'Si': 'No'}</td>
                        <td>
                            <div onClick={eliminarTour(index)} className="btn btn-danger mr-2" ><FontAwesomeIcon  icon={faTimes}  /> </div>
                            <div  className="btn btn-light"><FontAwesomeIcon  icon={faEdit} /></div>
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