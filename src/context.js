import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };
  componentDidMount() {
    this.setProducts();
  }
  increment = id => {
    const tempCart = [...this.state.cart];
    const index = tempCart.indexOf(this.getItem(id));
    const product = tempCart[index];
    product.count += 1;
    product.total = product.price * product.count;
    this.setState(
      () => {
        return { cart: tempCart };
      },
      () => this.addTotals()
    );
  };
  decrement = id => {
    let tempCart = [...this.state.cart];

    const index = tempCart.indexOf(this.getItem(id));
    const product = tempCart[index];
    product.count -= 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.price * product.count;
      this.setState(
        () => {
          return { cart: tempCart };
        },
        () => this.addTotals()
      );
    }
  };
  removeItem = id => {
    const tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    const removedItem = tempProducts[index];
    removedItem.inCart = false;
    removedItem.count = 0;
    removedItem.total = 0;
    this.setState(
      () => {
        return { cart: tempCart, products: tempProducts };
      },
      () => this.addTotals()
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    var tempSubTotal = 0;
    this.state.cart.map(item => (tempSubTotal += item.total));
    const tempTax = tempSubTotal / 10;
    const tax = parseFloat(tempTax.toFixed(2));
    const tempTotal = tempSubTotal + tax;
    this.setState({
      cartSubTotal: tempSubTotal,
      cartTax: tax,
      cartTotal: tempTotal
    });
  };
  getItem = id => {
    return this.state.products.find(item => item.id === id);
  };

  openModal = id => {
    const item = this.getItem(id);
    this.setState({ modalOpen: true, modalProduct: item });
  };
  closeModal = () => {
    this.setState({ modalOpen: false });
  };
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState({ detailProduct: product });
  };
  addToCart = id => {
    const tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => this.addTotals()
    );
  };
  setProducts = () => {
    let products = [];
    storeProducts.forEach(product => {
      const singleItem = { ...product };
      products = [...products, singleItem];
    });
    this.setState({ products });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
