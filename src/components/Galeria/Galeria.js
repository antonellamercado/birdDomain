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
<div  className='row d-flex'>
<div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                {                             
                    galeria.length === 0 ? 'No hay Aves disponible' : 
                    (galeria.map((ave, index) => 

                        <Link>
                        <Card >
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
</div>
            );
}

export default Galeria;