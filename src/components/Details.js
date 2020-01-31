import React, { Component } from "react";
import { ButtonContainer } from "./Buttons";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

class Details extends Component {
  state = {};
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            const {
              id,
              img,
              title,
              info,
              company,
              price,
              inCart
            } = value.detailProduct;
            return (
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1>{title}</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3 ">
                    <img src={img} className="img-fluid" alt="product image" />
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>Model : {title}</h2>
                    <h4 className="text-muted mb-2 mt-3 text-title text-uppercase">
                      Made : {company}
                    </h4>
                    <h4>
                      <strong>Price : ${price}</strong>
                    </h4>
                    <p className="text-capitalize text-weight-bold mt-3 mb-0">
                      some info about product :
                    </p>
                    <p className="text-muted lead">{info}</p>
                    <div className="row">
                      <Link to="/">
                        <ButtonContainer
                          style={{
                            border: "1px solid var(--lightBlue)",
                            padding: "5px",
                            margin: "5px"
                          }}
                        >
                          Back to Products
                        </ButtonContainer>
                      </Link>
                      <ButtonContainer
                        cart
                        style={{
                          border: "1px solid var(--mainYellow)",
                          padding: "5px",
                          margin: "5px"
                        }}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                        disabled={inCart ? true : false}
                      >
                        {inCart ? "In Cart" : "Add to Cart"}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default Details;
