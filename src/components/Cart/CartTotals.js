import React from "react";
import PayPalButton from "./PayPalButton";

export default function CartTotals({ value, history }) {
  const { clearCart, cartSubTotal, cartTax, cartTotal } = value;
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <button
            className="btn  btn-outline-danger text-uppercase mb-3 px-5"
            type="button"
            onClick={() => clearCart()}
          >
            Clear Cart
          </button>
          <h5 className="text-title">Subtotal : ${cartSubTotal}</h5>
          <h5 className="text-title">Tax : ${cartTax}</h5>
          <h5 className="text-title">Total : ${cartTotal}</h5>
          <PayPalButton
            total={cartTotal}
            clearCart={clearCart}
            history={history}
          />
        </div>
      </div>
    </div>
  );
}
