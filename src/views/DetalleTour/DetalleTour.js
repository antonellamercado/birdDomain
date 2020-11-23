import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
//config
import clienteAxios from '../../config/axios';
//libreria
import {Card, CardBody, CardTitle, CardImg, CardText, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign ,  faCalendarAlt, faEye, faFeather } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
//estilos
import "../DetalleTour/DetalleTour.css";
import Map from '../../components/Maps/MapT1';

const DetalleTour = ({match, history}) => {
    const idtour = match.params.id;
    const [tour, setTour] = useState({});
    const [products, setProducts] = useState([]);

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

    const updateProduct = async (product)=> {
        await axios.patch(`http://localhost:5000/usuarios/1`, {buys:[...products, product]});
        setProducts([...products, product]);
    }
    function checkBuy(id){
        let i=0;
        for(i=0;i<products.length;i++){
            if(id===products[i].id){
                return (products[i].id)       
            }
        }
    }

    return (
        <div>                                 
            <div className='row'>
                <Card>
                    <CardBody>
                        <CardTitle tag="h3" className='font-weight-bold'>{tour.title}</CardTitle>
                        <div className='d-flex d-inline-block'>
                            <CardImg className="col-6 detalle_imagen"  top width="80%" src={tour.img}  alt="img-tour"/>
                            <div className="d-flex d-block col-6 detalle_imagen" >
                                <Map  className='detalle_imagen'/>
                            </div>
                        </div>
                        <CardText className="col-12 my-4 text-justify  detalle_descripcion">  <FontAwesomeIcon  icon={faFeather} /> {tour.body}</CardText>
                        <CardText className="col-4 text-muted d-inline"> <FontAwesomeIcon  icon={faDollarSign} /> {tour.price}</CardText>
                        <CardText className="col-4 text-muted d-inline"> <FontAwesomeIcon  icon={faCalendarAlt} /> Duracion del tour: {tour.dias} dias
                        </CardText>
                        <CardText className="col-4 text-muted d-inline"> <FontAwesomeIcon  icon={faEye} /> Numero de especies probables en avistaje: {tour.especies} </CardText>
                        <div className="mt-3">
                            {
                                checkBuy(tour.id)!==tour.id || checkBuy(tour.id)==null?<button id={tour.id} className="btn btn-success" onClick={ e =>{updateProduct(tour)} }>Buy Tour</button>:
                                <button className="btn btn-success disabled">Tour en carrito</button>
                            }
                        </div>   
                        <Link to='/Checkout'>
                            <Button className='col-6 my-3 d-block mx-auto bg-warning'>Finalizar compras</Button>
                        </Link>
                    </CardBody>
                </Card>
            </div>                 
        </div>
    );
}


export default DetalleTour;