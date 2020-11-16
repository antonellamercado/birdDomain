import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
//component
import { Carousel } from 'react-responsive-carousel';
//config
import clienteAxios from '../../config/axios';
//style
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../Carrousel/Carrousel.css'

const Carrousel = () => {

const [tours, setTours] = useState([
   { id: '',
    title: '',
    body: '',
    img: '',
    map: '',
    price: '',
    dias: 0,
    Ecoregiones:'',
    especies:0}
]);

useEffect(()=>{
    const getTour = async ()=>{
    await clienteAxios.get("/Tours")
    .then(response =>{
    setTours(response.data)
    });
    }
    getTour();
    },[]);
    console.log(tours);


    return (
        <div className="carousel-wrapper carrousel_card">
            <Carousel showStatus={true} showThumbs={false} centerMode={true} infiniteLoop={true}>
                {                                
                    tours.length === 0 ? 'No hay Tours disponible' : 
                    (tours.map((tour, index) => 
                        <Link>
                        <div key={index} className="carrousel_cont">
                            <img src={tour.img}  alt="img-tour"/>
                            <p className="legend carrousel_legend">{tour.title}</p>
                        </div>
                        </Link> 
                    ))
                }     
            </Carousel>
            </div>
            );
}

export default Carrousel;