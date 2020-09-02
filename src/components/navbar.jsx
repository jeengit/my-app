import React, { Component } from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {BrowserRouter as  Route, Link} from 'react-router-dom';
import ProductDetails from './productDetails';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        var divStyle = { cursor: "pointer" };
        return ( 
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              Navbar
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    Home<span class="sr-only">(current)</span>
                </li>
                <li class="nav-item">
                    Link
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search" onChange={(e)=> this.props.onSearch(e)}
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <FontAwesomeIcon className="ml-2 mr-1" icon={faShoppingCart}/>
              <Link
                    to="/contact"><sup style={divStyle} onClick={this.handleCart} className="badge badge-danger">3</sup>
                </Link>
                <Route path="/contact" component={ProductDetails}/>
            </div>
          </nav>
         );
    }
    handleCart = () => {
      //const counters = this.state.counters.filter((c) => c.isCartAdded === true);
      console.log(this.props);
    }
}
 
export default Navbar;