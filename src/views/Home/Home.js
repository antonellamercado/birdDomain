import React from 'react';
import {Link} from 'react-router-dom';
import Carrousel from '../../components/Carrousel/Carrousel';
import Galeria from '../../components/Galeria/Galeria';
import HeroImg from '../../components/HeroImg/HeroImg';
import '../Home/Home.css'


const Home = () => (
    
    <Link to = '/'>
        <HeroImg/>
        <div className="home_separador"></div>
        <Carrousel/>
        <div className="home_separador"></div>
        <Galeria/>
    </Link>
);


export default Home;

/*  */