import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
// //config
// import clienteAxios from '../../config/axios';
import Axios from 'axios';
//libreria
import {Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars , faSearch, faMicroscope} from '@fortawesome/free-solid-svg-icons';
//estilos
import '../Aves/Aves.css'

const Aves = () => {

 const [aves, setAves] = useState([]);
        
    // useEffect(()=>{
    //     const getAves = async ()=>{
    //     await clienteAxios.get("/Aves")
    //     .then(response =>{
    //     setAves(response.data)
    // });
    // }
    // getAves();
    // },[]);

    useEffect(()=>{
        const getAves = async ()=>{
        await Axios.get("http://localhost:5000/api/aves")
        .then(response => {
            setAves(response.data)
             });
             }
             getAves();
             },[]);

    //         if (response.ok) {
    //             console.log(response.data)
    //             return response.data.json()
                
    //         }
    //     }).then (responseJson => setAves (responseJson.aves));

    // }
    // getAves();
    // },[]);

 
    
    return (
        <>
        <h3 className="text-black mt-3 mb-3">Aves emblematicas que se podran observar en los tours</h3>
        <div className="d-flex row flex-wrap col-lg-12 col-md-12 mt-1 mx-1 justify-content-center">
        {aves.map((ave,index) => (
            <div className=" col-xs-12 col-sm-12 col-md-3 col-lg-3 m-3 p-0">
                    <Card key={index} className="p-0 m-0 card-ave">
                    <Card.Title className="p-2"><FontAwesomeIcon  icon={faBinoculars } /> {ave.name}</Card.Title>
                    <Card.Body  className="p-0 m-0" >
                    <div>
                    <Card.Img className="imagen_pequeña" src={ave.img}  alt="img-aves" />
                    </div>
                    <div className="mx-0 p-2"><strong> <FontAwesomeIcon  icon={faMicroscope} /> Nombre cientifico:</strong> {ave.title}</div>
                    <div className="mx-0 p-2"><strong> <FontAwesomeIcon  icon={faSearch } /> Informacion adicional:</strong> {ave.info}</div>
                    </Card.Body>
                    
                    </Card>
                    </div>
                ))}
        </div>
        
        
        </>
    );
}

export default Aves;

