import React, {useState, useContext} from 'react'
import ModalIng from '../ModalLogin/ModalLogin';
import ModalReg from '../ModalRegister/ModalRegister';
import './Header.css';
import {UserContext} from '../../context/UserContext';
import {Link, useHistory} from 'react-router-dom';


const AuthOptions = () => { 

    const [modalShowIng, setModalShowIng] = useState(false);
    const [modalShowReg, setModalShowReg] = useState(false);

    const {userData, setUserData} = useContext(UserContext);
    const history = useHistory();

    const logout = () => {
        setUserData({
            token:undefined,
            user:undefined
        });

        localStorage.setItem("auth-token","");
        setModalShowReg(false);
        setModalShowIng(false)
        history.push("/");
    };
    return (
    <div className="buttons d-flex justify-content-between p-0">
        
        {userData.user ? ( 

            <>
            { userData.user.admin ?

            (
                            
            <> 

            <div className="d-flex justify-content-between">
            <div className = "imgUserContainer d-none d-sm-block">
            <img className = "imgUser img-fluid" src=" https://firebasestorage.googleapis.com/v0/b/bd-aves.appspot.com/o/adminlogo.png?alt=media&token=b08cc4b0-43db-4eac-b53d-1f79a79dac5c"
            alt="img-header-user"></img>
            </div>
            <Link style={{ textDecoration: 'none' }} to = '/paneladmin'>
            <button className="buttonHeaderSalir mt-3 ml-3">Admin</button>
            </Link>
            <button className="buttonHeaderSalir mt-3 ml-3" onClick={logout}>Salir</button>
            </div>
            
            </>     
            ):(
            
            <>  
            <div className="d-flex justify-content-between">
            <div className = "imgUserContainer">
                <img className = "imgUser" src="https://firebasestorage.googleapis.com/v0/b/bd-aves.appspot.com/o/userlogo.png?alt=media&token=57755dad-ffca-487a-b632-ae7e8d72ce3d"
                alt="img-user-header"></img>
            </div>
            <button className="buttonHeaderSalir mt-3 ml-3" onClick={logout}>Salir</button>
            </div> 
            
            </>  
            )}
            
            </>

        ) : (

            <>
            <button className="buttonHeader mx-1" onClick={() => setModalShowIng(true)}>Ingresa</button>
            <ModalIng
                        show={modalShowIng}
                        onHide={() => setModalShowIng(false)}
            />
            <button className="buttonHeader" onClick={() => setModalShowReg(true)}>Registrate</button>
            <ModalReg
                show={modalShowReg}
                onHide={() => setModalShowReg(false)}
                />
            </>
        
        )}
        
    </div>
        
    );
}

export default AuthOptions;

