import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import {UserContext} from "../../context/UserContext";
import ModalIng from '../../components/ModalLogin/ModalLogin';
import './Favoritos.css';
import {Card} from 'react-bootstrap';


const Favoritos = () => {

    const { userData } = useContext(UserContext);
    const [modalShowIng, setModalShowIng] = useState(false);

    return (
        <Link className="links-links" to = '/favoritos'>
    {userData.user ? (
        <>
        <h1 className="links-links">Favoritos de {userData.user.displayName}</h1>
        {/* {userData.user.favs.length > 0 ? (<> mapealo </>) : (<> Aun no tienes favoritos </>)  } */}

        {userData.user.favs.length > 0 ? 
        
        (
        <>

        {userData.user.favs.map((img,index) => (
            <Link  className=" col-xs-12 col-sm-12 col-md-4 col-lg-3 m-1 p-0">
                <div className="p-0 m-0 card-tour">
                <div key={index} className="p-0 m-0">
                        <div>
                            <Card.Img className="imagen_pequeña" src={img}  alt="img-tour"/>
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
            <h2 className="mt-5 links-links">No estas logueado</h2>
            <button className="buttonHeader mx-1" onClick={() => setModalShowIng(true)}>Ingresa</button>
            <ModalIng
                        show={modalShowIng}
                        onHide={() => setModalShowIng(false)}
            />
            <div className="mt-3 mb-5 links-links"><h2>Logueate y escoge tus Favoritos</h2></div>
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