import {useEffect, useState} from 'react';
//component
//config
import clienteAxios from '../../config/axios';
//style
import '../ImagenMediana/ImagenMediana.css';
//libreria


const ImagenMediana = () => {

    const [imgMediana, setImgMediana] = useState({});
    useEffect(()=>{
        const changeImgMediana = async ()=>{
        await clienteAxios.get("/Aves/9")
        .then(response => 
        {setImgMediana(response.data.img)});
        }
        changeImgMediana();
    }, []);
  

    const url = "https://firebasestorage.googleapis.com/v0/b/bd-aves.appspot.com/o/Fig1.jpg?alt=media&token=b7a63dea-8285-4d00-b016-469d4fa47054";
    return(
    <div className="d-none d-sm-none d-md-block d-flex row mx-0 col-lg-6  col-md-6 justify-content-center align-content-center d-none">    
        <img className="imgMediana d-block img-fluid d-none"  src={imgMediana} />      
    </div>
    );

}

export default ImagenMediana;