import React, {useState, useEffect} from 'react';
import Harpia3 from '../../img/DT1.jpg';
import './HeroImg.css'
import clienteAxios from '../../config/axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom';

export const HeroImg = () => {

const [tours, setTours] = useState([]);
    
useEffect(()=>{
    const getTours = async ()=>{
    await clienteAxios.get("/Tours")
    .then(response =>{
    setTours(response.data)
});
}
getTours();
},[]);

console.log(tours)

let toursDestacados = tours.filter(function (tour) {
  return tour.destacado;
});

// const toursDestacados = tours.filter(tour => tours.destacado);
console.log(toursDestacados);

  
    return (
      toursDestacados.length > 0 ? 
      <div>
       <Carousel className="d-none d-md-block heroImgCarousel"
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop={true}
            showArrows={true}
            autoPlay={true} onClickItem
        >
          
          {toursDestacados.map((destacado,index) => (
           <Link to={`/tours/${destacado.id}`} key={index} className="container-fluid px-0 d-flex justify-content-center">
           <div className="row mx-0">
              <div className="col-12 px-0">
                  <img src={destacado.imgD} className="w-100"></img>
                <div className="text-heroimg d-none d-sm-none d-md-none d-lg-block">
                  <h2>{destacado.title}</h2>
                </div>
              </div>
            </div>
            </Link>
          ))
          }
        </Carousel>
        </div>

         : (

        <>
        <div>
            <div className="container-fluid px-0 d-flex justify-content-center">
              <div className="row mx-0">
                <div className="col-12 px-0">
              <img className="w-100" src={Harpia3} ></img>
              <div className="text-heroimg d-none d-sm-none d-md-none d-lg-block">
                <h2>Calilegua</h2>
                <h5>Con mas de 400 especies de Aves, en calilegua se encuentra la imponente Aguila Harpia. Su gran tamaño le permite capturar mamiferos tan grandes como monos!</h5>
              </div>
              </div>
            </div>
        </div>
        </div>
        </>
        )
    )
    
}

export default HeroImg;
