import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
//config
import clienteAxios from '../../config/axios';
//style
import '../ImagenPequeña/ImagenPequeña.css';
//libreria
import {Card, CardBody, CardImg, CardTitle} from 'reactstrap';

const ImagenPequeña = () => {


const [galeria, setGaleria] = useState([{}]);
useEffect(()=>{
    const getGaleria = async ()=>{
    await clienteAxios.get("/Aves")
    .then(response =>{
    setGaleria(response.data)
});
}
getGaleria();
},[]);

    return (
        <div className="d-flex row flex-wrap col-lg-6 col-md-6">
                {                             
                    galeria.length === 0 ? <p>No hay Aves disponible</p> : 
                    (galeria.map((ave, index) =>
                        <Link className=" col-xs-12 col-sm-12 col-md-4 col-lg-3 m-0 p-0">
                        <Card className="p-0 -m0">
                        <CardBody  className="p-0 -m0">
                            <div key={index} className="">
                                <CardImg className="imagen_pequeña" src={ave.img}  alt="img-aves"/>
                                <div className="">
                                <CardTitle className="detalle_ave">{ave.title}</CardTitle>
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

export default ImagenPequeña;