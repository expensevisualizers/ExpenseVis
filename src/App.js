import React, { useState } from 'react';
import './App.css';
import MyLineChart from './components/LineChart';
import MyMonth from './pages/MonthView';
import spending from './spending.json';
import currencies from './utils/currency'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'

const App = () => {
  const [state, setState] = useState({ month: "October", spending: true, income: false, debt: false })
  const currencyKeys = Object.keys(currencies)

  return (
    <Router basename="/">
      <div style={{ height: "100vh", width: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ height: 50, width: "100%", display: "flex", flexDirection: "row" }}>
          <h1><Link to="/" style={{ textDecoration: "unset" }}>ExpenseVis</Link></h1>
          <select name="" style={{ marginLeft: 30 }} defaultValue={currencyKeys[0]}>
            {currencyKeys.map((key) => (
              <option value={key} key={key} >{currencies[key]}</option>
            ))}
          </select>
          {/* {this.state.month === "all" ?
                <button className="w3-button w3-black button ev-button" style={{ display: "none" }}>Back</button> :
                <button className="w3-button w3-black button ev-button" onClick={() => { this.setState({ month: "all" }) }}>Back</button>}
               */}



          {/* {this.state.month === "all" ? <div className="ev-bar">
              {this.state.debt ? <button className="w3-button w3-orange button ev-button" onClick={() => { if (this.state.income || this.state.spending) { this.setState({ debt: !this.state.debt }) } }} >Debt</button> :
                <button className="w3-button w3-orange button w3-disabled ev-button" onClick={() => { this.setState({ debt: !this.state.debt }) }} >Debt</button>}
              {this.state.income ? <button className="w3-button w3-teal button ev-button" onClick={() => { if (this.state.debt || this.state.spending) { this.setState({ income: !this.state.income }) } }} >Income</button> :
                <button className="w3-button w3-teal button w3-disabled ev-button" onClick={() => { this.setState({ income: !this.state.income }) }} >Income</button>}
              {this.state.spending ? <button className="w3-button w3-red button ev-button" onClick={() => { if (this.state.income || this.state.debt) { this.setState({ spending: !this.state.spending }) } }} >Spending</button> :
                <button className="w3-button w3-red button w3-disabled ev-button" onClick={() => { this.setState({ spending: !this.state.spending }) }} >Spending</button>}
            </div> : <a />} */}
        </div>

        <div style={{ height: "calc(100% - 50px)", width: "100%" }}>

          <Switch>
            <Route path="/" exact render={(props) =>
              <MyLineChart
                data={spending}
                spending={state.spending}
                income={state.income}
                debt={state.debt}
                history={props.history}
              />
            } />
            <Route path="/:month" exact render={(props) =>
              <MyMonth
                month={props.match.params.month}
                data={spending}
                history={props.history}
              />
            } />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );

}

export default App;
