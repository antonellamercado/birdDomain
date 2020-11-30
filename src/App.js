import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './App.css';
//components
// import Map from './components/Maps/MapT1'
//import Header from './components/Header/Header';
//import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';
import Mapa from './components/Maps/Maps'
//views
import Home from './views/Home/Home';
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




function App() {
  return (
    <div className="App">
    <Router>    
      <Layout>
      <div className="">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/tours/:id" exact component={DetalleTour}></Route>
          <Route path="/aves" exact component={Aves}></Route>
          <Route path="/contacto" exact component={Contacto}></Route>
          <Route path="/favorito" exact component={Favoritos}></Route>
          <Route path="/cart" exact component={Cart}></Route>
          <Route path="/checkout" exact component={Checkout}></Route>
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