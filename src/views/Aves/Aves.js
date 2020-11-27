import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
//config
import clienteAxios from '../../config/axios';
//libreria
import {Card} from 'react-bootstrap';

const Aves = () => {

 const [aves, setAves] = useState([]);
        
    useEffect(()=>{
        const getAves = async ()=>{
        await clienteAxios.get("/Aves")
        .then(response =>{
        setAves(response.data)
    });
    }
    getAves();
    },[]);

    console.log(aves)

    // {
    //     "id": 10,
    //     "name": "Chuña patas rojas",
    //     "title": "Cariama cristata",
    //     "body": "Chunga burmeisteri - Sp no endemica",
    //     "img": "https://firebasestorage.googleapis.com/v0/b/bd-aves.appspot.com/o/Fig10.jpg?alt=media&token=b7a63dea-8285-4d00-b016-469d4fa47054"
    //   },

    return (
        <Link to = '/aves'>
        
        <div className="d-flex row flex-wrap col-lg-12 col-md-12 mt-1">
        {aves.map((ave,index) => (
            <div className=" col-xs-12 col-sm-12 col-md-3 col-lg-3 m-1 p-0">
                    <Card key={index} className="p-0 m-0 card-ave">
                    <Card.Title>{ave.name}</Card.Title>
                    <Card.Body  className="p-0 m-0" >
                    <div>
                    <Card.Img className="imagen_pequeña" src={ave.img}  alt="img-aves" />
                    </div>
                    </Card.Body>
                    <div>{ave.info}</div>
                    </Card>
                    </div>
                ))}
        </div>
        
        
        </Link>
    );
}

export default Aves;

