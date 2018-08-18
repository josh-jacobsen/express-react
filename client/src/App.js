import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {foods: []}

  componentDidMount(){
    fetch('/food')
      .then(res => res.json())
      .then(foods => this.setState({ foods }));
  }
  render() {
    return (
      <div className="App">
        <h1>Foods</h1>
        {this.state.foods.map(food =>
          <div key={food.id}>{food.itemName}: ${food.price}</div>
        )}
      </div>
    );
  }
}

export default App;
