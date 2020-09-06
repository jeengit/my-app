import React, { Component } from 'react';
class Filter extends Component {
    render() { 
        return (
          <div className="row m-0">
            <div className="col-md-4 align-self-center">{this.props.count} Products</div>
            <div className="col-md-4 float-left">
              <select class="custom-select" value={this.props.sort} onChange={this.props.sortProducts}>
                <option value="" selected>Latest</option>
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
              </select>
            </div>
            <div className="col-md-4 float-left">
              <select class="custom-select" value={this.props.size} onChange={this.props.filterProducts}>
                <option value="" selected>ALL</option>
                <option value="X">X</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
          </div>
        );
    }
}
 
export default Filter;