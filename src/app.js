import React, { Component } from 'react';
import data from "./data.json";
import Products from "./components/products";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products : data.products,
            size:"",
            sort:""
         }
    }
    render() { 
        return ( 
            <div className="container">
                <header>
                <nav class="fixed-top navbar navbar-dark bg-dark">
                    <a class="navbar-brand" href="/">React Shopping Cart</a>
                </nav>
                </header>
                <main className="mt-5">
                    <div className="col-md-9 mt-2 float-left">
                    <Products products={this.state.products}/>
                    </div>
                    <div className="col-md-3 mt-2 float-left">
                        Cart Section
                        </div>
                </main>
                <footer></footer>
                </div>
         );
    }
}
 
export default App;