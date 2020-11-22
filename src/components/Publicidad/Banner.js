import React, { Component } from 'react';
import {a} from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import advertising1 from './img/advertising1.png'
import advertising2 from './img/advertising6.png'
import advertising3 from './img/advertising3.png'
import advertising4 from './img/advertising4.png'

function Banner (){
    return (
        <Carousel className="d-none d-md-block"
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop={true}
            showArrows={false}
            autoPlay={true} onClickItem
        >
            <div>
                <a href="https://rollingcodeschool.com/">
                    <div> {/* only works to 'extend' the link haha */} 
                        <img src={advertising1}/>
                    </div>
                </a>
            </div>
            <div>
                <a href="https://rollingcodeschool.com/">
                <div> {/* only works to 'extend' the link haha */} 
                        <img src={advertising2}/>
                    </div>
                </a>
            </div>
            <div>
                <a href="https://rollingcodeschool.com/">
                <div> {/* only works to 'extend' the link haha */} 
                        <img src={advertising3}/>
                    </div>
                </a>
            </div>
            <div>
                <a href="https://rollingcodeschool.com/">
                <div> {/* only works to 'extend' the link haha */} 
                        <img src={advertising4}/>
                    </div>
                </a>
            </div>
        </Carousel>
    );
}

export default Banner;