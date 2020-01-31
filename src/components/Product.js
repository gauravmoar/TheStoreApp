import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

class Product extends Component {
  state = {};

  render() {
    const { title, img, price, id, inCart } = this.props.product;
    return (
      <ProductWarpper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="" className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0 " disabled>
                      In Cart
                    </p>
                  ) : (
                    <i className="icon ion-md-cart" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-around ">
            <p className="align-self-center mb-0"> {title}</p>
            <h5 className="align-self-center font-italic text-blue mb-0">
              <span>$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWarpper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

export default Product;

const ProductWarpper = styled.div`
  .card {
    background: transparent;
    border: none;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s ease-out;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .img-container .ion-md-cart {
    font-size: 30px;
  }
  .cart-btn {
    position: absolute;
    bottom: 10px;
    right: 0px;
    padding: 0.2rem 0.4rem;
    border: none;
    border-radius: 10px 0 0 10px;
    background: var(--lightBlue);
    color: var(--mainWhite);
    transform: translateX(105%);
    transition: transform 0.3s linear;
  }
  .cart-btn:hover {
    color: var(--mainBlue);
  }
  .cart-btn p {
    font-size: 25px;
  }
  .img-container:hover .cart-btn {
    transform: translateX(0);
  }
`;
