import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyLineChart from './LineChart.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Expense Vis</h1>
          <div className="box">
            <div className="box-header">
                <button class="w3-button w3-black button">Currency</button>
              <div class="w3-bar">
                <button class="w3-button w3-teal button">Income</button>
                <button class="w3-button w3-red button">Debt</button>
              </div>
            </div>
            <MyLineChart />

          </div>
        </header>
      </div>
    );
  }
}

export default App;
