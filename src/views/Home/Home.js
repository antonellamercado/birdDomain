import React from 'react';
import {Link} from 'react-router-dom';
import HeroImg from '../../components/HeroImg/HeroImg'
import Carrousel from '../../components/Carrousel/Carrousel'

const Home = () => (
    
    <Link to = '/'>
        <HeroImg/>
        <Carrousel/>
    <div className="bg-secondary p-4">Galeria de imagenes</div>
    <div className="bg-secondary p-4">Publicidad</div>
    </Link>
);


export default Home;

/*  */