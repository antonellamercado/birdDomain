import React from 'react';
import {Link} from 'react-router-dom';
import Carrousel from '../../components/Carrousel/Carrousel';
import Galeria from '../../components/Galeria/Galeria';
import HeroImg from '../../components/HeroImg/HeroImg';
import Banner from '../../components/Publicidad/Banner'
import '../Home/Home.css'


const Home = () => (
    
    <Link style={{ textDecoration: 'none' }} to = '/'>
        <div className="home_separador text-dark mt-3 mb-5"><h1>Bienvenid@ a Birds Domain</h1></div>
        <HeroImg/>
        <div className="home_separador d-none d-md-block text-dark mt-3 mb-5"><h1>Adonde puedes viajar con nosotros?</h1></div>
        <Carrousel/>
        <div className="home_separador text-dark mt-3 mb-4"> <h1> Galeria de Imagenes </h1> </div>
        <Galeria/>
        <div className="home_separador"></div>
        <Banner/>
    </Link>
);

export default Home;