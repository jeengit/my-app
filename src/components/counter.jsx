import React, { Component } from "react";

class Counter extends Component {
  render() {
    var divStyle = { height: "230px" };
    return (
      <React.Fragment>
        <div className="col-sm-3 pl-0 float-left">
          <div className="card-group">
            <div className="card">
              <h6 className="p-2">Product {this.props.counter.id} - {this.props.counter.title}</h6>
              <div className="card-body" style={divStyle}>
                <img
                  className="card-img-top w-100 h-100"
                  src={this.props.counter.imgsrc}
                  alt={this.props.counter.id}
                />
              </div>
              <div class="card-footer text-center">
                <label>Quantity</label>
                <select onChange={(e) => this.props.onChangeValue(e,this.props.counter)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <button
                  onClick={() => this.props.onAddToCart(this.props.counter)}
                  className="btn btn-sm btn-primary ml-2"
                >
                  Add to cart
                </button>
                {/* <button className={this.getBadgeClasses()}>{this.formatCount()}</button>
            <button onClick={() =>{this.props.onIncrement(this.props.counter)}} className="btn btn-sm btn-primary m-1">+</button>
            <button disabled={this.props.counter.value === 0} onClick={() =>{this.props.onDecrement(this.props.counter)}} className="btn btn-sm btn-primary m-1">-</button>
           <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-sm btn-danger m-1">Delete</button> */}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "m-1 btn btn-sm btn-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zer0" : value;
  }
}

export default Counter;
