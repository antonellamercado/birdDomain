import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Map from './components/Maps/MapT1'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
// import Header from './components/Header/Header';
import MyNav from './components/Header/MyNav.js'
import Home from './views/Home/Home';
import Destacado from './views/Destacado/Destacado';
import Contacto from './views/Contacto/Contacto';
import Favoritos from './views/Favoritos/Favoritos';
import Carrito from './views/Carrito/Carrito';


function App() {
  return (
    <div className="App">
    <Router>
      <MyNav/>
      <div className="app">
         <Switch>
         <Route path = "/" exact component = {Home}></Route>
           <Route path = "/Destacado" exact component = {Destacado}></Route>
           <Route path = "/Contacto" exact component = {Contacto}></Route>
           <Route path = "/Favoritos" exact component = {Favoritos}></Route>
           <Route path = "/Carrito" exact component = {Carrito}></Route>
         </Switch>
         </div>
    </Router>
    
    </div>
  );
}

export default App;
