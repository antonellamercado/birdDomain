// import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


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
                        <img src="https://firebasestorage.googleapis.com/v0/b/bd-aves.appspot.com/o/advertising1.png?alt=media&token=cc529c02-1d58-46a1-815b-d8888ac2b723" alt="anuncio1"/>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="https://rollingcodeschool.com/">
                <div> 
                        <img src="https://firebasestorage.googleapis.com/v0/b/bd-aves.appspot.com/o/advertising4.png?alt=media&token=a6a5723e-b8f2-4ca3-ae95-475325e69887" alt="anuncio2"/>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="https://rollingcodeschool.com/">
                <div> 
                        <img src="https://firebasestorage.googleapis.com/v0/b/bd-aves.appspot.com/o/advertising3.png?alt=media&token=0f7ab881-d2bd-4917-a8e5-83b94d68f81a" alt="anuncio3"/>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="https://rollingcodeschool.com/">
                <div>  
                        <img src="https://firebasestorage.googleapis.com/v0/b/bd-aves.appspot.com/o/advertising6.png?alt=media&token=6a7443c7-a2af-41f8-a005-cf656c8daf7a" alt="anuncio4"/>
                    </div>
                </Link>
            </div>
        </Carousel>
        </>
    );
}

export default Banner;