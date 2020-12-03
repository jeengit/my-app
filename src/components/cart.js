import React, { Component } from "react";
class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <div>
          {cartItems.length === 0 ? (
            <span className="badge badge-danger">There are no items in the cart.</span>
          ) : (
            <span className="badge badge-success">{cartItems.length} Items in the cart</span>
          )}
        </div>
        <div className="Card">
          <ul className="p-0">
            {cartItems.map((item) => (
              <li className="mt-2 mb-2" key={item._id}>
                <img src={item.image} alt={item.title} className="card-img-top w-25"/>
                <p className="mb-0">{item.title}</p>
                <button className="btn btn-sm btn-danger" onClick={()=>this.props.removeCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Cart;
