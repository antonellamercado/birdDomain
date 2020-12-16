// import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import advertising1 from './img/advertising1.png'
import advertising2 from './img/advertising6.png'
import advertising3 from './img/advertising3.png'
import advertising4 from './img/advertising4.png'

function Banner (){
    return (
        <>
        <Carousel className="d-none d-md-block mb-0"
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop={true}
            showArrows={false}
            autoPlay={true} onClickItem
        >
            <div>
                <Link to="https://rollingcodeschool.com/">
                    <div> 
                        <img src={advertising1} alt="anuncio1"/>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="https://rollingcodeschool.com/">
                <div> 
                        <img src={advertising2} alt="anuncio2"/>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="https://rollingcodeschool.com/">
                <div> 
                        <img src={advertising3} alt="anuncio3"/>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="https://rollingcodeschool.com/">
                <div>  
                        <img src={advertising4} alt="anuncio4"/>
                    </div>
                </Link>
            </div>
        </Carousel>
        </>
    );
}

export default Banner;