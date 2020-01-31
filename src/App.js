import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList.js";
import Details from "./components/Details.js";
import Cart from "./components/Cart";
import Modal from "./components/Modal.js";
import Default from "./components/Default.js";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route path="/details" component={Details} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
