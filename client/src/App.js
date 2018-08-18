import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    passwords: [],
    menuItems: [],
    meshblock: []
    }

  getPasswords = () => {
    // Get the passwords and store them in state
    console.log("getting passwords")
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  }
  getMenuItems = () => {
    // Get the passwords and store them in state
    console.log("getting menuItems")
    fetch('/api/menuItems')
      .then(res => res.json())
      .then(menuItems => this.setState({ menuItems }));
  }

  getMeshblocks = () => {
    // Get the passwords and store them in state
    console.log("getting meshblocks")
    fetch('/api/meshblock')
      .then(res => res.json())
      .then(meshblock => this.setState({ meshblock }));
  }

  render() {
    const { passwords, menuItems, meshblock } = this.state;
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
          Get Passwords
        </button>
        {menuItems.map((menuItem) => 
                          <li>
                          {menuItem}
                        </li>)}
        <button
          className="more"
          onClick={this.getMenuItems}>
          Get Menu Items
        </button>

        {meshblock}
        <button
          className="more"
          onClick={this.getMeshblocks}>
          Get Meshblock
        </button>
      </div>
      
    );
  }
}

export default App;
