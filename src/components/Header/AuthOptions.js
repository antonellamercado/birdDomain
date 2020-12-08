import React, {useState, useContext} from 'react'
import ModalIng from '../ModalLogin/ModalLogin';
import ModalReg from '../ModalRegister/ModalRegister';
import './Header.css';
import UserContext from '../../context/UserContext'


const AuthOptions = () => { 

    const [modalShowIng, setModalShowIng] = useState(false);
    const [modalShowReg, setModalShowReg] = useState(false);

const {userData, setUserData} = useContext(UserContext);
const logout = () => {
    setUserData({
        token:undefined,
        user:undefined
    });
    localStorage.setItem("auth-token","");
    setModalShowReg(false);
    setModalShowIng(false)
};

    return (
       
    <div className="buttons d-flex justify-content-between">
        {
           userData.user ? ( 
            <>
            <div className="d-flex justify-content-between">
            <div className = "imgUserContainer">
                <img className = "imgUser" src="https://firebasestorage.googleapis.com/v0/b/bd-aves.appspot.com/o/Fig11.jpg?alt=media&token=b7a63dea-8285-4d00-b016-469d4fa47054"></img>
            </div>
            <button className="buttonHeaderSalir mt-3 ml-3" onClick={logout}>Salir</button>
            </div>
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
           )
           
       }

    
     </div>
        
    );
}

export default AuthOptions;
