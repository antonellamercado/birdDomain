import React, { useState, useContext } from 'react';
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
    const [favs, setFavs] = useState([userData?.user?.favs]);


     const deleteFavs = async (e)=>{
         let favs = userData.user.favs;
         console.log(e.target)
         const newFavs = favs.filter(fav => fav._id !== e.target.id);
         setFavs(newFavs);
         await clienteAxios.put(`api/users/${userData.user.id}`, {favs:newFavs});
        window.location.reload(true);
     };

    return (
        <Link className="links-links" to = '/favoritos'>
    {userData.user ? (
        <>
        <h1 className="">Favoritos de {userData.user.displayName}</h1>
        {/* {userData.user.favs.length > 0 ? (<> mapealo </>) : (<> Aun no tienes favoritos </>)  } */}

        {userData.user.favs.length > 0 ? 
        
        (
        <>

        {userData.user.favs.map((tour,index) => (
            <div>
            <button id={tour._id} className="btnFavorito mt-3" onClick={deleteFavs} >Borrar de favoritos</button>
            <Link to={`/tours/${tour._id}`} style={{ textDecoration: 'none' }} className=" col-xs-12 col-sm-12 col-md-4 col-lg-3 m-1 p-0">
                <div className="p-0 m-0 ">
                <div key={index} className="p-0 m-0">
                    <div className="d-flex justify-content-center mb-3">
                        <Card.Title className="titleFavoritos p-2 mr-3 "><FontAwesomeIcon  icon={faBinoculars } /> {tour.title}</Card.Title>
                    
                         
                    </div>        
                            <div className=" d-flex justify-content-center">
                           <div className="imgContainer">
                            <img className="imgTour" src={tour.img}  alt="img-tour"></img>
                           </div>
                        </div>
                    </div>
                </div>
                </Link>
                </div>
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