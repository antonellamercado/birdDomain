import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
//config
import clienteAxios from '../../config/axios';
//libreria
import {Card, CardBody, CardTitle, CardImg, CardText, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign ,  faCalendarAlt, faEye, faFeather } from '@fortawesome/free-solid-svg-icons';

//estilos
import "../DetalleTour/DetalleTour.css";
import Map from '../../components/Maps/MapT1';


const DetalleTour = ({match, history}) => {
    const idtour = match.params.id;
    const [tour, setTour] = useState({});

    useEffect(()=>{
        const getTourByID = async id  =>{
        await clienteAxios.get(`/Tours/${id}`)
        .then(response =>{
        setTour(response.data)
        console.log('response',response.data);
        });
        }
        getTourByID(idtour);
        }, []);


return (
<div>                                 
                    <div className='row'>
                        <Card>
                            <CardBody>
                            <CardTitle tag="h3" className='font-weight-bold'>{tour.title}</CardTitle>
                            <div className='d-flex d-inline-block'>
                            <CardImg className="col-sd-12 col-md-6 col-lg-6 detalle_imagen"  top width="80%" src={tour.img}  alt="img-tour"/>
                            <div className="d-flex d-none d-sm-none d-md-block" >
                            <Map  className='d-none d-sm-none d-md-block'/>
                            </div>
                            </div>
                            <CardText className="col-12 my-4 text-justify  detalle_descripcion">  <FontAwesomeIcon  icon={faFeather} /> {tour.body}</CardText>
                            <CardText className="col-4 text-muted d-inline"> <FontAwesomeIcon  icon={faDollarSign} /> {tour.price}</CardText>
                            <CardText className="col-4 text-muted d-inline"> <FontAwesomeIcon  icon={faCalendarAlt} /> Duracion del tour: {tour.dias} dias
                            </CardText>
                            <CardText className="col-4 text-muted d-inline"> <FontAwesomeIcon  icon={faEye} /> Numero de especies probables en avistaje: {tour.especies} </CardText>
                            <Link to='/Checkout'>
                            <Button className='col-6 my-3 d-block mx-auto'>Comprar ahora</Button>
                            </Link>
                            <Button className='col-6 my-3 d-block mx-auto'>Agregar al carrito</Button>
                            </CardBody>
                        </Card>
                        </div>                 
</div>
);
}


export default DetalleTour;