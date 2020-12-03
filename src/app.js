import React, { Component } from "react";
import data from "./data.json";
import Products from "./components/products";
import Filter from "./components/filter";
import Cart from "./components/cart";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      size: "",
      sort: "",
      cartItems: [],
    };
  }
  handleRemoveCart = (product) => {
    const cartItems = [...this.state.cartItems];
    this.setState({cartItems:cartItems.filter((x) => x._id !== product._id)})
  };
  handleFilterProducts = (event) => {
    event.target.value
      ? this.setState({
          size: event.target.value,
          products: data.products.filter(
            (product) =>
              product.availableSizes.indexOf(event.target.value) !== -1
          ),
        })
      : this.setState({ size: event.target.value, products: data.products });
  };
  handleSortProducts = (event) => {
    const sort = event.target.value;
    this.setState({
      sort: sort,
      products: [...this.state.products].sort((a, b) =>
        sort === "lowest"
          ? a.price > b.price
            ? 1
            : -1
          : sort === "highest"
          ? a.price < b.price
            ? 1
            : -1
          : a._id < b._id
          ? 1
          : -1
      ),
    });
  };
  handleAddToCart = (product) => {
    const cartItems = [...this.state.cartItems];
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
  };
  render() {
    return (
      <div className="container">
        <header>
          <nav class="fixed-top navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="/">
              React Shopping Cart
            </a>
          </nav>
        </header>
        <main className="mt-5">
          <div className="col-md-9 mt-4 float-left">
            <Filter
              count={this.state.products.length}
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.handleFilterProducts}
              sortProducts={this.handleSortProducts}
            />
            <Products
              products={this.state.products}
              addToCart={this.handleAddToCart}
            />
          </div>
          <div className="col-md-3 mt-4 float-left">
            <Cart
              cartItems={this.state.cartItems}
              removeCart={this.handleRemoveCart}
            />
          </div>
        </main>
        <footer />
      </div>
    );
  }
}

export default App;
