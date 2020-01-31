import React, { Component } from "react";
import Product from "./Product.js";
import Title from "./Title.js";
import { ProductConsumer } from "../context.js";

class ProductList extends Component {
  render() {
    return (
      <div className="products-list-page">
        <Title title="Our Products" />
        <div className="product-list">
          <ProductConsumer>
            {value => {
              return value.products.map(product => (
                <Product key={product.id} product={product} />
              ));
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}

export default ProductList;
