import React, { Component } from 'react';
import Navbar from "./navbar";
class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <Navbar obj = {this.state}/>
            <h6>ProductDetails</h6>
            </div>
         );
    }
}
 
export default ProductDetails;