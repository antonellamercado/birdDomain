import React, { useState, useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {UserContext} from "../../context/UserContext";
import ModalIng from '../../components/ModalLogin/ModalLogin';
import './Favoritos.css';
import {Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import clienteAxios from '../../config/axios';

const Favoritos = () => {

    const { userData } = useContext(UserContext);
    const [modalShowIng, setModalShowIng] = useState(false);
    // const [favs, setFavs] = useState([]);
    // const AuthStr = userData.token
    
    // useEffect(()=>{
    //     const getFavs = async ()=>{          
    //         await clienteAxios.get(`api/users/`, { headers: { "x-auth-token": AuthStr } })
    //         .then(response =>{
    //             setFavs(response.data.favs)                            
    //         });
    //     }
    //     getFavs();
    // },[])

    // // const updateFavs = async (fav)=> {
    // //     await clienteAxios.put(`api/users/${userData.user.id}`, {favs:[...favs, fav]});
    // //     setFavs([...favs, fav]);    
    // // }

    // const deleteFavs = async (e)=>{
    //     const newFavs = favs.filter(fav => favs._id !== e.target.id);
    //     setFavs(newFavs);
    //     await clienteAxios.put(`api/users/${userData.user.id}`, {favs:newFavs});
    //     // updateFavs();
    // };

    return (
        <Link className="links-links" to = '/favoritos'>
    {userData.user ? (
        <>
        <h1 className="links-links">Favoritos de {userData.user.displayName}</h1>
        {/* {userData.user.favs.length > 0 ? (<> mapealo </>) : (<> Aun no tienes favoritos </>)  } */}

        {userData.user.favs.length > 0 ? 
        
        (
        <>

        {userData.user.favs.map((tour,index) => (
            <Link to={`/tours/${tour._id}`} style={{ textDecoration: 'none' }} className=" col-xs-12 col-sm-12 col-md-4 col-lg-3 m-1 p-0">
                <div className="p-0 m-0 ">
                <div key={index} className="p-0 m-0">
                    <div className="d-flex justify-content-center mb-3">
                        <Card.Title className="titleFavoritos p-2 mr-3 "><FontAwesomeIcon  icon={faBinoculars } /> {tour.title}</Card.Title>
                    
                        {/* <button id={tour._id} className="btnFavorito" onClick={deleteFavs} >Borrar de favoritos</button>*/}
                    </div>        
                            <div className=" d-flex justify-content-center">
                           <div className="imgContainer">
                            <img className="imgTour" src={tour.img}  alt="img-tour"></img>
                           </div>
                        </div>
                    </div>
                </div>
                </Link>
        ))}
        </>
        ):(
        <> 
        <div className = "container favNotLogged mt-3 mb-5">
        Aun no tienes favoritos, explora nuestros tours y eligelos!
        </div>
        <div className = "container mb-5 imgFavoritosDeslog">
        <img className = "container imgFavoritosDeslog" 
        src="https://firebasestorage.googleapis.com/v0/b/bd-aves.appspot.com/o/Tour6.jpg?alt=media&token=deb4aa4c-ad19-4a05-895f-a54b0a94cc3b"
        alt="img-favoritos"
        ></img>
        </div>
        </>
        )}

        </>
    ) : (
        <>
        <div className = "container favNotLogged mt-3 mb-5">
            <h2 className="mt-3 links-links">No estas logueado</h2>
            <button className="buttonHeader mt-1 mx-1" onClick={() => setModalShowIng(true)}>Ingresa</button>
            <ModalIng
                        show={modalShowIng}
                        onHide={() => setModalShowIng(false)}
            />
            <p className="mt-3 mb-5">Logueate y escoge tus Favoritos</p>
            {/* <div className="mt-3 mb-5 links-links"></div> */}
        </div>

        <div className = "container mb-5 imgFavoritosDeslog">
            <img className = "container imgFavoritosDeslog" 
            src="https://firebasestorage.googleapis.com/v0/b/bd-aves.appspot.com/o/Tour6.jpg?alt=media&token=deb4aa4c-ad19-4a05-895f-a54b0a94cc3b"
            alt ="img-fav-desl"
            ></img>
        </div>
        </>
    )}
        </Link>
    );
}

export default Favoritos;