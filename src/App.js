import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyLineChart from './LineChart.js';
import MyMonth from './MonthView.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Expense Vis</h1>
          <div className="box">
            <div className="box-header">
                <button className="w3-button w3-black button">Currency</button>
              <div className="w3-bar">
                <button className="w3-button w3-teal button">Income</button>
                <button className="w3-button w3-red button">Debt</button>
              </div>
            </div>
            <MyMonth />

          </div>
        </header>
      </div>
    );
  }
}

export default App;
