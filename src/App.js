import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './App.css';
//components
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
import {UserContextProvider} from "./context/UserContext"
import Home from './views/Home/Home';




function App() {

 

  return (
    <div className="App">
    <Router>    
      <UserContextProvider>
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
      </UserContextProvider>
    </Router>
    
    </div>
  );
}

export default App;