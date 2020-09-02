import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Counters from './counters';
import ProductDetails from './productDetails';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router> 
           <div className="App">
            <Switch> 
              <Route exact path='/' component={Counters}></Route>
              <Route exact path='/contact' component={ProductDetails}></Route> 
            </Switch>
           </div> 
       </Router>
         );
    }
}
 
export default App;