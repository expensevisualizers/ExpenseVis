import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyLineChart from './LineChart.js';
import MyMonth from './MonthView.js';
import spending from './spending.json';

const income = [
    {}
];

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {month: "all", spending: true, income : false, debt : false};
      this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle(item){
      this.setState({month: item.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="box">
              { this.state.month === "all" ?
                  <h1>Expense Vis</h1> :
                  <h1>Viewing {this.state.month}</h1> }
            <div className="box-header">
                {this.state.month == "all" ? <a /> : <button className="w3-button w3-black button" onClick={()=>{this.setState({month: "all"})}}>Back</button>}
                {this.state.month == "all" ? <div className="w3-bar">
                        {this.state.debt ? <button className="w3-button w3-orange button" onClick={()=>{if(this.state.income || this.state.spending){this.setState({debt: !this.state.debt})}}} >Debt</button> :
                            <button className="w3-button w3-orange button w3-disabled" onClick={()=>{this.setState({debt: !this.state.debt})}} >Debt</button> }
                        {this.state.income ? <button className="w3-button w3-teal button" onClick={()=>{if(this.state.debt || this.state.spending){this.setState({income: !this.state.income})}}} >Income</button> :
                            <button className="w3-button w3-teal button w3-disabled" onClick={()=>{this.setState({income: !this.state.income})}} >Income</button>}
                        {this.state.spending ? <button className="w3-button w3-red button" onClick={()=>{if(this.state.income || this.state.debt){this.setState({spending: !this.state.spending})}}} >Spending</button> :
                            <button className="w3-button w3-red button w3-disabled" onClick={()=>{this.setState({spending: !this.state.spending})}} >Spending</button>}
              </div> : <a /> }
            </div>

              {
                  this.state.month === "all" ?
                  <MyLineChart clickHandle={this.clickHandle} data={spending}
                               spending={this.state.spending}
                               income={this.state.income}
                               debt={this.state.debt}/> :
                  <MyMonth month={this.state.month} data={spending}/> }

          </div>
        </header>
      </div>
    );
  }
}

export default App;
