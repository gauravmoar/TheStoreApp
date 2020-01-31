import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import PayPalButton from "./PayPalButton";

class Cart extends Component {
  state = {};
  render() {
    return (
      <ProductConsumer>
        {value => {
          if (value.cart.length === 0) {
            return <Title title="Your Cart is Empty" />;
          } else {
            return (
              <div>
                <Title title="Your Cart" />
                <CartColumns />
                <CartList value={value} />
                <CartTotals value={value} history={this.props.history} />
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Cart;
