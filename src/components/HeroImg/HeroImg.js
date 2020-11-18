import React from 'react';
import Harpia3 from '../../img/DT1.jpg';
import './HeroImg.css'

export const HeroImg = () => {
    return (
        <>
        <div>
            <div className="container-fluid px-0 d-flex justify-content-center">
              <div className="row mx-0">
                <div className="col-12 px-0">
              <img className="w-100" src={Harpia3} ></img>
              <div className="text-heroimg d-none d-sm-none d-md-none d-lg-block">
                <h2 >Calilegua</h2>
                <h5 >Con mas de 400 especies de Aves, en calilegua se encuentra la imponente Aguila Harpia. Su gran tamaño le permite capturar mamiferos tan grandes como monos!</h5>
              </div>
              </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default HeroImg;
