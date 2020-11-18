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
        <div>
  <Card>
                {                               
                    galeria.length === 0 ? 'No hay Aves disponible' : 
                    (galeria.map((ave, index) => 
                        <Link>
                        <CardBody>
                            <div key={index} className="">
                                <CardImg className="galeria_imagen " width="20%" src={ave.img}  alt="img-aves"/>
                                <div className="card-img-overlay">
                                <CardTitle className="text-muted">{ave.title}</CardTitle>
                                </div>
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