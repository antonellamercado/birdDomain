import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
//component
import { Carousel } from 'react-responsive-carousel';
//config
import clienteHeroku from '../../config/prod';
//style
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../Carrousel/Carrousel.css'

const Carrousel = () => {

const [tours, setTours] = useState([]);

//probando traer desde bd
useEffect(()=>{
    const getTours = async ()=>{
    await clienteHeroku.get("/tours")
    .then(response => {
        setTours(response.data)
        });
        }
        getTours();
        },[]);



    return (
        <div className="carousel-wrapper">
            <Carousel showStatus={true} showThumbs={false}
            centerMode={true} infiniteLoop={true} 
            centerSlidePercentage={50} autoPlay={true} onClickItem>
                {                                
                    tours.length === 0 ? <p>'No hay Tours disponible' </p>: 
                    (tours.map((tour, index) => 
                        <Link to={`/tours/${tour._id}`}>
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