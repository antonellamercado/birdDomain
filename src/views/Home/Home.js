import React from 'react';
import {Link} from 'react-router-dom';
import Carrousel from '../../components/Carrousel/Carrousel'

const Home = () => (
    <Link to = '/'>
        <div className="bg-secondary p-4">Hero Image</div>
        <Carrousel/>
        <div className="bg-secondary p-4">Galeria de imagenes</div>
        <div className="bg-secondary p-4">Publicidad</div>
    </Link>
);


export default Home;