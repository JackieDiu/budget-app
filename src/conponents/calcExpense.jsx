import React from "react";

class CalcExpense extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="calcExpense">
          <h4>Please Enter Your Expense</h4>
          <input />
          <h4>Please Enter Expense Amount</h4>
          <input />
          <button type="submit">Add Expense</button>
        </div>
      </React.Fragment>
    );
  }
}

export default CalcExpense;
