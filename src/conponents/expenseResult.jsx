import React from "react";

class ExpenseResult extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <ul>
            <li>
              <h4>BUDGET</h4>
              <img
                src="https://img.icons8.com/bubbles/100/000000/cash-in-hand.png"
                alt="budget money"
              />
              <p />
            </li>
            <li>
              <h4>EXPENSES</h4>
              <img
                src="https://img.icons8.com/bubbles/100/000000/sim-card-chip.png"
                alt="budget expenses"
              />
              <p />
            </li>
            <li>
              <h4>BALANCE</h4>
              <img
                src="https://img.icons8.com/bubbles/100/000000/money-bag.png"
                alt="budget balance"
              />
              <p />
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default ExpenseResult;
