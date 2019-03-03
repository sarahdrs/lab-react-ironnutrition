import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Foodbox from './Foodbox.js';
import FoodForm from './FoodForm.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      searchTerm:""

    }

  }
// onSearch(term){

// }
  addFoodHandler(food) {
    this.setState({
      foods: this.state.foods.concat([food])
    }
    )
  }

  render() {
    return (
      <div className="App">
        
        <FoodForm addFood={(e) => this.addFoodHandler(e)} />
        {/* <button onClick={this.displayForm}>Add Food</button> */}
        {this.state.foods.map((food, idx) => { return <Foodbox key={idx} image={food.image} calories={food.calories} name={food.name} /> })}

      </div>
    );
  }
}

export default App;
