import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Foodbox from './Foodbox.js';
import FoodForm from './FoodForm.js';
import SearchBar from "./SearchBar"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      searchTerm: ""

    }
  }

  searchFunktion = (searchTerm) => {
    const filteredProducts = foods.filter((foods) => {
      return foods.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    this.setState({
      foods: filteredProducts
    })
  }

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
        <SearchBar onSearch={this.searchFunktion} />
        {/* <button onClick={this.displayForm}>Add Food</button> */}
        {this.state.foods.map((food, idx) => { return <Foodbox key={idx} image={food.image} calories={food.calories} name={food.name} /> })}

      </div>
    );
  }
}

export default App;
