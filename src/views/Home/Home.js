import React from 'react';
import {Link} from 'react-router-dom';
import Carrousel from '../../components/Carrousel/Carrousel';
import Galeria from '../../components/Galeria/Galeria';

const Home = () => (
    <Link to = '/'>
        <div className="bg-secondary p-4">Hero Image</div>
        <Carrousel/>
        <Galeria/>
        <div className="bg-secondary p-4">Publicidad</div>
    </Link>
);


export default Home;