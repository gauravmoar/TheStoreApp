import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context.js";
import { ButtonContainer } from "./Buttons.js";
import { Link } from "react-router-dom";

class Modal extends Component {
  state = {};
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, price, title } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer onClick={() => closeModal()}>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col=lg-4 text-center text-capitalize py-5"
                      onClick={e => e.stopPropagation()}
                    >
                      <h5>Item Added to Cart</h5>
                      <img src={img} className="image-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">Price : ${price}</h5>
                      <Link to="/">
                        <ButtonContainer
                          style={{
                            border: "1px solid var(--lightBlue)",
                            padding: "5px",
                            margin: "5px"
                          }}
                          onClick={() => closeModal()}
                        >
                          Back to Products
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer
                          cart
                          style={{
                            border: "1px solid var(--mainYellow)",
                            padding: "5px",
                            margin: "5px"
                          }}
                          onClick={() => {
                            value.closeModal();
                          }}
                        >
                          Go to Cart
                        </ButtonContainer>
                      </Link>
                      <div></div>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  #modal {
    background: var(--mainWhite);
  }
`;
