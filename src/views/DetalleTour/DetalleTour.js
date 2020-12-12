import React from 'react';
import {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
//config
import {UserContext} from "../../context/UserContext";
//import clienteAxios from '../../config/axios';
import axios from "axios";
//libreria
import {Card, Accordion, Tooltip} from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign ,  faCalendarAlt, faEye, faFeather, faPlaneDeparture, faStar} from '@fortawesome/free-solid-svg-icons';
//componentes
import Comentarios from '../../components/Comentarios/Comentarios';
import ModalIng from '../../components/ModalLogin/ModalLogin';
//estilos
import "../DetalleTour/DetalleTour.css";
import Mapa from '../../components/Maps/Maps';

//import { latLng } from 'leaflet';

const DetalleTour = ({match}) => {
    const idtour = match.params.id;
    const { userData } = useContext(UserContext);
    const [tour, setTour] = useState({});
    const [products, setProducts] = useState([]);
    const [colorfav, setColorfav] = useState('black');
    const [modalShowIng, setModalShowIng] = useState(false);
    const [favs, setFavs] = useState([]);
    const AuthStr = userData.token
//
  useEffect(()=>{
        const getTourByID = async id  =>{
        await axios.get(`http://localhost:5000/api/tours/${id}`)
        .then(response =>{
        setTour(response.data)
        console.log(response.data)
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

        const getFavs = async ()=>{          
            await axios.get(`http://localhost:5000/api/users/`, { headers: { "x-auth-token": AuthStr } })
            .then(response =>{
                setFavs(response.data.favs)                            
            });
        }
        getFavs();

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
    // const addFavorite = () => {
    //     setColorfav('#FFD700');
    //     console.log('id para fav', match.params.id );
    // }

    const addFavorite = async (fav)=> {
        setColorfav('#FFD700');
        await axios.put(`http://localhost:5000/api/users/${userData.user.id}`, {favs:[...favs, fav]});
        setFavs([...favs, fav]);    
    }

    return (
        <div>                                 
            <div className='row'>
                <div>
                    <div>
                        <div className='tour-title font-weight-bold mt-5 mb-5'> <FontAwesomeIcon  icon={faPlaneDeparture} /> {tour.title} </div>
                        <div className='container d-flex row  col-lg-12 col-md-12 mt-1 mx-1 justify-content-center'>
                            <div className="  col-xs-12 col-sm-12 col-md-4 col-lg-4 p-0 mr-3 detalle_imagen ">
                            <img className=" imgTour mr-3"  src={tour.img}  alt="img-tour"></img>
                            </div>
                            <div className=" col-xs-12 col-sm-12 col-md-4 col-lg-4 p-0 detalle_imagen" >  
                                <Mapa  className="imgMapa"
                                key={tour._id} 
                                position={tour.lat}
                                observation={tour.latObs}
                                /> 
                            </div>  
                        </div>
                        <div className="col-12 my-4 text-justify detalle_descripcion">  
                        <FontAwesomeIcon  icon={faFeather} /> {tour.body}
                        </div>
                        <div className="col-12 my-4 text-justify detalle_descripcion">  
                        <FontAwesomeIcon  icon={faFeather} /> {tour.description}
                        </div>
                        <div className="col-12 my-4 text-justify detalle_descripcion">  
                        <FontAwesomeIcon  icon={faFeather} /> {tour.info}
                        </div>
                        <div className="col-3  d-inline"> <FontAwesomeIcon  icon={faDollarSign} /> {tour.price}</div>
                        <div className="col-3  d-inline"> <FontAwesomeIcon  icon={faCalendarAlt} /> Duracion del tour: {tour.dias} dias
                        </div>
                        <div className="col-3 d-inline"> <FontAwesomeIcon  icon={faEye} /> Numero de especies probables en avistaje: {tour.especies} </div>
                        {userData.user ? (
                            <>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Agregar a favoritos!</Tooltip>}>
                                <div id={tour._id} className="col-3 d-inline" onClick={ e =>{addFavorite(tour)}}>
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
                        </>)
                        :
                        (
                            <>
                            <div>
                            <h3 className="mt-5">Para comprar debes registrarte e iniciar sesion</h3>
                            <button className="d-block col-6 mx-auto btn btnFinalizarCompra my-2" onClick={() => setModalShowIng(true)}>Comprar</button>
                            <ModalIng
                                    show={modalShowIng}
                                    onHide={() => setModalShowIng(false)}
                            />
                            </div>
                            </>
                        )
                        }
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
                                <Comentarios className= "col-xs-12 col-sm-12 col-md-6 col-lg-6"/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>  
            </div>                
        </div>
    
    );
}


export default DetalleTour;