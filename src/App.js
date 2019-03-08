import React, { Component } from "react";
import "./App.css";
import CalcBudget from "./conponents/calcBudget";
import CalcExpense from "./conponents/calcExpense";
import ExpenseResult from "./conponents/expenseResult";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="budget">
          <CalcBudget />
        </div>
        <div className="expense">
          <CalcExpense />
        </div>
        <div className="results">
          <ExpenseResult />
        </div>
      </div>
    );
  }
}

export default App;
