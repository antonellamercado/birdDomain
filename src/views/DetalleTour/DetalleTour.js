import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
//config
import clienteAxios from '../../config/axios';
import axios from "axios";
//libreria
import {Card, Button, Accordion} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign ,  faCalendarAlt, faEye, faFeather } from '@fortawesome/free-solid-svg-icons';

//componentes
import Comentarios from '../../components/Comentarios/Comentarios';
//estilos
import "../DetalleTour/DetalleTour.css";
import Mapa from '../../components/Maps/Maps';

// import { latLng } from 'leaflet';

const DetalleTour = ({match}) => {
    const idtour = match.params.id;
    const [tour, setTour] = useState({});
    const [products, setProducts] = useState([]);
//
    useEffect(()=>{
        const getTourByID = async id  =>{
        await clienteAxios.get(`/Tours/${id}`)
        .then(response =>{
        setTour(response.data)
        });
        }
        getTourByID(idtour);
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
//

//const getComentary = async ()=> {
//    await coment.get('/comments?postId=3')
//    .then(response =>{
//    const listaComentarios= response.data;
//    console.log(listaComentarios)
//})
//};
//getComentary();


    return (
        <div>                                 
            <div className='row'>
                <div>
                    <div>
                        <div className='tour-title font-weight-bold mt-5 mb-5'> {tour.title} </div>
                        <div className='d-flex d-inline-block container'>
                            <img className="col-6 p-0 detalle_imagen mr-3"  width="100%" src={tour.img}  alt="img-tour"></img>
                            <div className="d-flex d-block col-6 p-0 detalle_imagen" >
                                  <Mapa  
                                position={tour.Lat}
                                observation={tour.Latobs}
                                /> 
                            </div> 
                        </div>
                        <div className="col-12 my-4 text-justify  detalle_descripcion">  <FontAwesomeIcon  icon={faFeather} /> {tour.body}</div>
                        <div className="col-4 text-muted d-inline"> <FontAwesomeIcon  icon={faDollarSign} /> {tour.price}</div>
                        <div className="col-4 text-muted d-inline"> <FontAwesomeIcon  icon={faCalendarAlt} /> Duracion del tour: {tour.dias} dias
                        </div>
                        <div className="col-4 text-muted d-inline"> <FontAwesomeIcon  icon={faEye} /> Numero de especies probables en avistaje: {tour.especies} </div>
                        <div className="mt-3">
                            {
                                checkBuy(tour.id)!==tour.id || checkBuy(tour.id)==null?<button id={tour.id} className="btn bg-success col-6 my-3 d-block mx-auto " onClick={ e =>{updateProduct(tour)} }>Comprar tour</button>:
                                <button className="d-block col-6 mx-auto btn btn-success disabled">Tour en carrito</button>
                            }
                        </div>   
                        <Link to='/Checkout'>
                            <Button className='col-6 my-3 d-block mx-auto bg-warning'>Finalizar compras</Button>
                        </Link>
                    </div>
                </div>

            </div> 
            <div>
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Comentarios
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