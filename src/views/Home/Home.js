import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Carrousel from '../../components/Carrousel/Carrousel';
import Galeria from '../../components/Galeria/Galeria';
import HeroImg from '../../components/HeroImg/HeroImg';
import Banner from '../../components/Publicidad/Banner'
import '../Home/Home.css'
// import Spinner from 'react-bootstrap/Spinner'
import { SpinnerRoundOutlined } from 'spinners-react';


// animation="border" role="status"

const Home = () => {

    const [loading, setLoading] = useState(true);

    useEffect (()=>{
        setLoading(false)
    }, [loading]);

    return (
    <>
    {loading ? (
        <SpinnerRoundOutlined/>
    ):(
        <>
        {/* <SpinnerRoundOutlined enable={false}/> */}
        <Link style={{ textDecoration: 'none' }} to = '/'>
        
        {/* <div className="home_separador text-dark mt-3 mb-5"><strong><h1>Bienvenid@ a Birds Domain</h1></strong></div> */}
        <HeroImg/>
        <div className="home_separador d-none d-md-block text-dark mt-3 mb-5 font-weight-bold"><h1>Adonde puedes viajar con nosotros?</h1></div>
        <Carrousel/>
        <div className="home_separador text-dark mt-3 mb-4 font-weight-bold"> <h1> Galeria de Imagenes </h1> </div>
        <Galeria/>
        <div className="home_separador"></div>
        <Banner/>
    </Link>
        </>
    )
    
    }
</>
   );
}

export default Home;