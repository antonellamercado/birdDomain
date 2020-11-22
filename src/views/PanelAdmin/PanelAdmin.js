import {useState, useEffect} from 'react'
//libreria
import { Table } from 'reactstrap';
//config
import clienteAxios from '../../config/axios';
//estilo
import '../PanelAdmin/PanelAdmin.css';
//componente
import CrearTour from '../../components/CrearTour/CrearTour';
import EditarTour from '../../components/EditarTour/EditarTour';
import EliminarTour from '../../components/EliminarTour/EliminarTour';

const PanelAdmin = () => {
    const [listaAve, setListaAve] = useState([]);
    useEffect (()=> { 
        const getToursForList = async()  =>{
            await clienteAxios.get("/Tours")
            .then(response =>{
            setListaAve(response.data)
            });
            }
            getToursForList();         
        },[]);

        console.log('tour desde admin', listaAve);
    return(
        <>
        <Table dark bordered hover responsive>
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Ecoregion</th>
                <th>Precio</th>
                <th>Dias</th>
                <th>N° de especies</th>
                <th>Destacado</th>
                </tr>
            </thead>
            {
                listaAve.length === 0 ? <p>No hay tour disponible</p> :
                (listaAve.map((ave, index) => 
                    <tbody key={index}>
                        <tr>
                        <td>{ave.title}</td>
                        <td>{ave.ecoregiones}</td>
                        <td>{ave.price}</td>
                        <td>{ave.dias}</td>
                        <td>{ave.especies}</td>
                        <td>{ave.destacado === true ? 'Si': 'No'}</td>
                        </tr>
                    </tbody>    
              ))
            }
        </Table>
        <CrearTour/>
        <EditarTour/>
        <EliminarTour/>
        </>
    );
}

export default PanelAdmin;