import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './App.css';
import Axios from "axios";
//components
// import Map from './components/Maps/MapT1'
//import Header from './components/Header/Header';
//import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';
//views
import Aves from './views/Aves/Aves';
import Contacto from './views/Contacto/Contacto';
import Favoritos from './views/Favoritos/Favoritos';
import Cart from './components/Cart/Cart';
import DetalleTour from './views/DetalleTour/DetalleTour';
import RecoverPass from './views/RecoverPass/RecoverPass';
import PanelAdmin from './views/PanelAdmin/PanelAdmin';
import Checkout from './views/Checkout/Checkout'
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import UserContext from "./context/UserContext"
import Home from './views/Home/Home';




function App() {

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
        "http://localhost:5000/api/users/tokenisvalid",
        null,
        { headers: { "x-auth-token": token } }
      );
      //tokenRes verificacion si existe un token
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/api/users/", {
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
    <div className="App">
    <Router>    
      <UserContext.Provider value={{userData, setUserData}}>
      <Layout>
      <div className="">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/tours/:id" exact component={DetalleTour}></Route>
          <Route path="/aves" exact component={Aves}></Route>
          <Route path="/contacto" exact component={Contacto}></Route>
          <Route path="/favoritos" exact component={Favoritos}></Route>
          <Route path="/cart" exact component={Cart}></Route>
          <Route path="/checkout" exact component={Checkout}></Route>
          <Route path="/recover" exact component={RecoverPass}></Route>
          <Route path="/paneladmin" exact component={PanelAdmin}></Route>
        </Switch>
      </div>
      </Layout>
      </UserContext.Provider>
    </Router>
    
    </div>
  );
}

export default App;