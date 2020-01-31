import React from "react";

function CartItem({ value, item }) {
  const { id, title, price, img, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          alt="product"
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span> {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span>${price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <button className="btn btn-black mx-1" onClick={() => decrement(id)}>
            -
          </button>
          <button className="btn btn-black mx-1" disabled>
            {count}
          </button>
          <button className="btn btn-black mx-1" onClick={() => increment(id)}>
            +
          </button>
        </div>
      </div>
      <div
        className="col-10 mx-auto col-lg-2"
        onClick={() => removeItem(id)}
        style={{ fontSize: "25px" }}
      >
        <i className="icon ion-md-trash"></i>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Item Total : </span>${total}
      </div>
    </div>
  );
}

export default CartItem;
