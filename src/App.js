import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
//components
//import Map from './components/Maps/MapT1'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
//views
import Home from './views/Home/Home';
import Destacado from './views/Destacado/Destacado';
import Contacto from './views/Contacto/Contacto';
import Favoritos from './views/Favoritos/Favoritos';
import Carrito from './components/Carrito/Carrito';
import DetalleTour from './views/DetalleTour/DetalleTour';





function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Tours/:id" exact component={DetalleTour}></Route>
          <Route path="/Destacado" exact component={Destacado}></Route>
          <Route path="/Contacto" exact component={Contacto}></Route>
          <Route path="/Favorito" exact component={Favoritos}></Route>
          <Route path="/Carrito" exact component={Carrito}></Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
    
    </div>
  );
}

export default App;
