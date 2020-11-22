import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
//components
// import Map from './components/Maps/MapT1'
//import Header from './components/Header/Header';
//import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';
//views
import Home from './views/Home/Home';
import Destacado from './views/Destacado/Destacado';
import Contacto from './views/Contacto/Contacto';
import Favoritos from './views/Favoritos/Favoritos';
import Carrito from './components/Carrito/Carrito';
import DetalleTour from './views/DetalleTour/DetalleTour';
import RecoverPass from './views/RecoverPass/RecoverPass';
import PanelAdmin from './views/PanelAdmin/PanelAdmin';




function App() {
  return (
    <div className="App">
    <Router>
      <Layout>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/tours/:id" exact component={DetalleTour}></Route>
          <Route path="/destacado" exact component={Destacado}></Route>
          <Route path="/contacto" exact component={Contacto}></Route>
          <Route path="/favorito" exact component={Favoritos}></Route>
          <Route path="/carrito" exact component={Carrito}></Route>
          <Route path="/recover" exact component={RecoverPass}></Route>
          <Route path="/panelAdmin" exact component={PanelAdmin}></Route>
        </Switch>
      </div>
      </Layout>
    </Router>
    
    </div>
  );
}

export default App;
