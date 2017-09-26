import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Parameters from "./Parameters";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <Parameters />
            </div>
            <div className="col-9">
              Resultat
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
