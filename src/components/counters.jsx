import React, { Component } from "react";
import Counter from "./counter";
import Navbar from "./navbar";
import IMG_1 from "../images/IMG-1.jpg";
import IMG_2 from "../images/IMG-2.jpg";
import IMG_3 from "../images/IMG-3.jpg";
import IMG_4 from "../images/IMG-4.jpg";
class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 1, value: 0, imgsrc: IMG_1, isCartAdded: false, title:"Wedding" },
        { id: 2, value: 1, imgsrc: IMG_2, isCartAdded: false, title:"Engagement" },
        { id: 3, value: 1, imgsrc: IMG_3, isCartAdded: false, title:"Anniversary" },
        { id: 4, value: 1, imgsrc: IMG_4, isCartAdded: false, title:"Birthday" }
      ],
      cartCount : 0
    };
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(res => res.json())
    //   .then(json =>{
    //         this.setState({
    //             isLoaded:true,
    //             items:json,
    //         })
    //   });
  }

  handleIncrement = (counter) => {
    const counters = this.state.counters;
    counter.value++;
    this.setState(counters);
  };
  handleDecrement = (counter) => {
    const counters = this.state.counters;
    if (counter.value > 0) {
      counter.value--;
      this.setState(counters);
    }
  };
  render() {
      return (
        <React.Fragment>
          <Navbar onSearch = {this.handleSearch}/>
          <div className="container mt-3">
            {/* <ul>
                {items.map(item =>
<li key={item.id}>{item.name} | {item.email}</li>
                )}
                </ul> */}
            {/* <nav>
                <button className="btn btn-primary btn-sm mb-2 mt-2" onClick={this.handleReset}>Reset</button>
                    </nav> */}
            {this.state.counters.map((counter) => (
              <Counter
                key={counter.id}
                onAddToCart={this.handleAddToCart}
                onChangeValue={this.handleChangeValue}
                counter={counter}
                onDecrement={this.handleDecrement}
                onIncrement={this.handleIncrement}
              />
            ))}
          </div>
        </React.Fragment>
      );
  }
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleAddToCart = (counter) => {
    const counters = this.state;
    counter.isCartAdded = true;
    counters.cartCount++;
    this.setState(counters);
  };
  handleChangeValue = (event,product) => {
    const counters = this.state.counters;
    product.value = parseFloat(event.target.value);
    this.setState(counters);
  };
  handleCart = () => {
    const counters = this.state.counters.filter((c) => c.isCartAdded === true);
    console.log(counters);
  }
  handleSearch = (e) => {
    if (e.target.value !== "") {
      let items = {
        counters: [
          { id: 1, value: 0, imgsrc: IMG_1, isCartAdded: false, title:"Wedding" },
          { id: 2, value: 1, imgsrc: IMG_2, isCartAdded: false, title:"Engagement" },
          { id: 3, value: 1, imgsrc: IMG_3, isCartAdded: false, title:"Anniversary" },
          { id: 4, value: 1, imgsrc: IMG_4, isCartAdded: false, title:"Birthday" }
        ],
        cartCount : 0
      };
      let newList = items.counters.filter(item => {
        const lc = item.title.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
      this.setState({counters: newList});
    } else {
      let items = {
        counters: [
          { id: 1, value: 0, imgsrc: IMG_1, isCartAdded: false, title:"Wedding" },
          { id: 2, value: 1, imgsrc: IMG_2, isCartAdded: false, title:"Engagement" },
          { id: 3, value: 1, imgsrc: IMG_3, isCartAdded: false, title:"Anniversary" },
          { id: 4, value: 1, imgsrc: IMG_4, isCartAdded: false, title:"Birthday" }
        ],
        cartCount : 0
      };
      this.setState(items);
    }
  }
}

export default Counters;
