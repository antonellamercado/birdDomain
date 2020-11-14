import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrito from "./components/Carrito/Carrito"


function App() {
  return (
    <Router>
      <Carrito/>
    </Router>
  );
}

export default App;
