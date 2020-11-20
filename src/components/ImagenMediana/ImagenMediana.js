import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
//component
//config
import clienteAxios from '../../config/axios';
//style
//libreria
import {Card, CardBody, CardImg, CardTitle} from 'reactstrap';

const ImagenMediana = () => {

const [galeriam, setGaleriam] = useState([
        {}
]);

//const [imgMediana, setImgMediana] = usestate ([<CardImg className="" width="70%" src={galeriam.img[1]}  alt ="img-aves-mediana"/>]);

useEffect(()=>{
    const getGaleriam = async ()=>{
    await clienteAxios.get("/Aves")
.then(response =>{
setGaleriam(response.data)
});
}
getGaleriam();
},[]);
const i = 1;

return (
        <div  className="cardContainer d-flex justify-content-center row mx-0">
                
                        <Link className="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-0">
                        <Card>
                        <CardBody>
                            <div className="">
                                <CardImg className="" width="70%" src={galeriam.img[i]}  alt ="img-aves-mediana"/>
                                <div className="card-img-overlay">
                                <CardTitle className="">{galeriam.title[i]}</CardTitle>
                                </div>
                            </div>
                        </CardBody>
                        </Card>
                        </Link>
        </div>
    );
}

export default ImagenMediana;