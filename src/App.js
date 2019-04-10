import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyLineChart from './LineChart.js';
import MyPieChart from './PieChart.js';
import spending from './spending.json';

const income = [
    {}
]

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {month: "all", spending: true, income : false, debt : false}
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
                  <button class="w3-button w3-orange button" onClick={()=>{this.setState({debt: !this.state.debt})}} >Debt</button>
                  <button class="w3-button w3-teal button" onClick={()=>{this.setState({income: !this.state.income})}} >Income</button>
                <button class="w3-button w3-red button" onClick={()=>{this.setState({spending: !this.state.spending})}} >Spending</button>
              </div>
            </div>

              { this.state.month == "all" ?
                  <MyLineChart clickHandle={this.clickHandle} data={spending}
                               spending={this.state.spending}
                               income={this.state.income}
                               debt={this.state.debt}/> :
                  <MyPieChart month={this.state.month}/> }


          </div>
        </header>
      </div>
    );
  }
}

export default App;
