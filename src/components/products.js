import React, { Component } from "react";
import formatCurrency from "../util/formatter";
class Products extends Component {
  render() {
    return (
      <ul>
        {this.props.products.map((product) => (
          <li
            className="col-4 float-left"
            key={product._id}
            style={{ "list-style-type": "none" }}
          >
            <div className="card mt-2 mb-2">
              <img
                src={product.image}
                className="card-img-top"
                alt={product._id}
                product
                image
              />
              <div className="card-body">
                <p className="mb-0 text-truncate card-text">{product.title}</p>
                <div class="d-flex justify-content-between">
                  <button onClick={()=>this.props.addToCart(product)} className="btn btn-sm btn-secondary">
                    Add to cart
                  </button>
                  <p className="mb-0 align-self-center">
                    Price :{" "}
                    <span className="badge badge-danger">
                      {formatCurrency(product.price)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Products;
