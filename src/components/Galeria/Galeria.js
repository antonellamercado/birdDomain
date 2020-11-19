import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
//component
//config
import clienteAxios from '../../config/axios';
//style
import '../Galeria/Galeria.css';
//libreria
import {Card, CardBody, CardImg, CardTitle} from 'reactstrap';

const Galeria = () => {

const [galeria, setGaleria] = useState([
   { }
]);

useEffect(()=>{
    const getGaleria = async ()=>{
    await clienteAxios.get("/Aves")
    .then(response =>{
    setGaleria(response.data)
    });
    }
    getGaleria();
    },[]);
    console.log(galeria);


    return (
<div  className='cardContainer d-flex justify-content-center row mx-0'>

                {                             
                    galeria.length === 0 ? 'No hay Aves disponible' : 
                    (galeria.map((ave, index) =>
                        <Link className="ml-3 mr-3 mb-3 newCardsResults col-xs-12 col-sm-12 col-md-6 col-lg-3">
                        <Card>
                        <CardBody>
                            <div key={index} className="">
                                <CardImg className="" width="20%" src={ave.img}  alt="img-aves"/>
                                <div className="card-img-overlay">
                                <CardTitle className="text-muted">{ave.title}</CardTitle>
                                </div>
                            </div>
                        </CardBody>
                        </Card>
                        </Link> 
                    ))
                } 
        
</div>
            );
}

export default Galeria;