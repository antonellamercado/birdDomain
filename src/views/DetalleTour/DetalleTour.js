import React from 'react';
import {useState, useEffect} from 'react';
//config
import clienteAxios from '../../config/axios';

const DetalleTour = ({match, history}) => {
    const [tour, setTour] = useState({});

    useEffect(()=>{
        const getTourByID = async id  =>{
        await clienteAxios.get(`/Tours/${id}`)
        .then(response =>{
        setTour(response.data)
        });
        }
        getTourByID();
        },[]);
     
    console.log(tour);

    return (

        <div>Pagina de detalle</div>
    )
   
    };


export default DetalleTour;