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
        <div className="row mx-0" >
            <Card >
                {                                
                    galeria.length === 0 ? 'No hay Aves disponible' : 
                    (galeria.map((ave, index) => 
                        <Link>
                        <CardBody>
                        <div key={index} className="col-12 col-md-4 col-lg-3 my-3">
                            <CardImg  width="25%" src={ave.img}  alt="img-aves"/>
                            <CardTitle tag="h5">{ave.title}</CardTitle>
                        </div>
                        </CardBody>
                        </Link> 
                    ))
                }     
            </Card>
        </div>
            );
}

export default Galeria;