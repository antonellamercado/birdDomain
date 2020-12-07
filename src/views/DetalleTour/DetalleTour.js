import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
//config
import clienteAxios from '../../config/axios';
import axios from "axios";
//libreria
import {Card, Accordion, Tooltip} from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign ,  faCalendarAlt, faEye, faFeather, faPlaneDeparture, faStar} from '@fortawesome/free-solid-svg-icons';
//componentes
import Comentarios from '../../components/Comentarios/Comentarios';
//estilos
import "../DetalleTour/DetalleTour.css";
import Mapa from '../../components/Maps/Maps';

//import { latLng } from 'leaflet';

const DetalleTour = ({match}) => {
    const idtour = match.params.id;
    console.log('match', match);
    console.log('id tour', idtour);
    const [tour, setTour] = useState({});
    const [products, setProducts] = useState([]);
    const [colorfav, setColorfav] = useState('black');
//
  useEffect(()=>{
        const findById = async _id  =>{
        await clienteAxios.get(`api/tours/${_id}`)
        .then(response =>{
        setTour(response.data)
        });
        }
        findById(idtour);
        const getBuys = async ()=>{
            await axios.get(`http://localhost:5000/usuarios/1`)
            .then(response =>{
                setProducts(response.data.buys)                            
            });
        }
        getBuys();
        }, []);
//
    const updateProduct = async (product)=> {
        await axios.patch(`http://localhost:5000/usuarios/1`, {buys:[...products, product]});
        setProducts([...products, product]);
    }
 //   
    function checkBuy(id){
        let i=0;
        for(i=0;i<products.length;i++){
            if(id===products[i].id){
                return (products[i].id)       
            }
        }
    }
    const addFavorite = () => {
        setColorfav('#FFD700');
        console.log('id para fav', match.params.id );
    }

    return (
        <div>                                 
            <div className='row'>
                <div>
                    <div>
                        <div className='tour-title font-weight-bold mt-5 mb-5'> <FontAwesomeIcon  icon={faPlaneDeparture} /> {tour.title} </div>
                        <div className='d-flex d-inline-block container'>
                            <img className="col-6 p-0 detalle_imagen mr-3"  width="100%" src={tour.img}  alt="img-tour"></img>
                            <div className="d-flex d-block col-6 p-0 detalle_imagen" >  
                                <Mapa  
                                key={tour.id} 
                                position={tour.Lat}
                                observation={tour.Latobs}
                                /> 
                            </div>  
                        </div>
                        <div className="col-12 my-4 text-justify detalle_descripcion">  
                        <FontAwesomeIcon  icon={faFeather} /> {tour.body}
                        </div>
                        <div className="col-12 my-4 text-justify detalle_descripcion">  
                        <FontAwesomeIcon  icon={faFeather} /> {tour.body2}
                        </div>
                        <div className="col-12 my-4 text-justify detalle_descripcion">  
                        <FontAwesomeIcon  icon={faFeather} /> {tour.info}
                        </div>
                        <div className="col-3  d-inline"> <FontAwesomeIcon  icon={faDollarSign} /> {tour.price}</div>
                        <div className="col-3  d-inline"> <FontAwesomeIcon  icon={faCalendarAlt} /> Duracion del tour: {tour.dias} dias
                        </div>
                        <div className="col-3 d-inline"> <FontAwesomeIcon  icon={faEye} /> Numero de especies probables en avistaje: {tour.especies} </div>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Agregar a favoritos!</Tooltip>}>
                        <div className="col-3 d-inline" onClick={addFavorite}>
                        <FontAwesomeIcon style={{color: colorfav}} className='favorito' icon={faStar} /></div>
                        </OverlayTrigger>
                        <div className="mt-3">
                            {
                                checkBuy(tour.id)!==tour.id || checkBuy(tour.id)==null?<button id={tour.id} className="btn bg-success col-6 my-3 d-block mx-auto " onClick={ e =>{updateProduct(tour)} }>Comprar tour</button>:
                                <button className="d-block col-6 mx-auto btn btn-success disabled">Tour en carrito</button>
                            }
                        </div>   
                        <Link to='/Checkout'>
                            <button className='col-6 my-3 d-block mx-auto btn btnFinalizarCompra'>Finalizar compras</button>
                        </Link>
                    </div>
                </div>

            </div> 
            <div>
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Card.Header}   eventKey="0">
                                <strong>Comentarios</strong>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Comentarios />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>  
            </div>                
        </div>
    
    );
}


export default DetalleTour;