import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ButtonContainer } from "./Buttons.js";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo">
            <img src={logo} alt="logo" />
            <h3>eSTORE</h3>
          </div>
        </Link>
        <ul className="nav-items-list">
          <li className="nav-item">
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="nav-products">Products</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <ButtonContainer className="myCart">
                <i className="icon ion-md-cart" />
                My Cart
              </ButtonContainer>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
