import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyLineChart from './LineChart.js';
import MyPieChart from './PieChart.js';
import spending from './spending.json';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {month: "all"}
      this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle(item){
      this.setState({month: item.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            { this.state.month == "all" ?
                <h1>Expense Vis</h1> :
                <h1>Viewing {this.state.month}</h1> }
          <div className="box">
            <div className="box-header">
                <button class="w3-button w3-black button" onClick={()=>{this.setState({month: "all"})}}>Back</button>
              <div class="w3-bar">
                  <button class="w3-button w3-orange button">Debt</button>
                  <button class="w3-button w3-teal button">Income</button>
                <button class="w3-button w3-red button">Spending</button>
              </div>
            </div>

              { this.state.month == "all" ?
                  <MyLineChart clickHandle={this.clickHandle} spending={spending}/> :
                  <MyPieChart month={this.state.month}/> }


          </div>
        </header>
      </div>
    );
  }
}

export default App;
