import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {passwords: []}

  componentDidMount(){
    this.getPasswords();
  }

  getPasswords = () => {
    // Get the passwords and store them in state
    console.log("getting passwords")
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  }
  render() {
    const { passwords } = this.state;
    return (
      <div className="App">
        <h1>Random number generator</h1>
        {passwords.map((password, index) =>
                <li key={index}>
                  {password}
                </li>
              )}
        <button
          className="more"
          onClick={this.getPasswords}>
          Get Again
        </button>
      </div>
      
    );
  }
}

export default App;
