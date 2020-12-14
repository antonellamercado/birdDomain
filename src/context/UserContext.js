import {createContext, useState, useEffect} from "react";
import Axios from "axios";

export const UserContext = createContext()
export const UserContextProvider = ({children}) => {

    const [userData, setUserData]=useState({
        token:undefined,
        user: undefined
      });

      useEffect(() => {
        const checkLoggedIn = async () => {
          let token = localStorage.getItem("auth-token");
          if (token === null) {
            localStorage.setItem("auth-token", "");
            token = ""; //si no hay token es empty string
          }
          //enviamos al backend 
          const tokenRes = await Axios.post(
            "https://api-birdomain.herokuapp.com/api/users/tokenisvalid",
            null,
            { headers: { "x-auth-token": token } }
          );
          //tokenRes verificacion si existe un token
          if (tokenRes.data) {
            const userRes = await Axios.get("https://api-birdomain.herokuapp.com/api/users/", {
              headers: { "x-auth-token": token },
            });
            //ponemos la info del usuario en el set
            setUserData({
              token,
              user: userRes.data,
            });
          }
        };
    
        checkLoggedIn();
      }, []);

    return (
        <UserContext.Provider value={{userData, setUserData}}>
            {children}
        </UserContext.Provider>
    )
}