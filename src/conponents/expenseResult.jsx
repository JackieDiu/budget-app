import React from "react";

class ExpenseResult extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <ul>
            <li>
              <h4>BUDGET</h4>
              <img src="" alt="budget money" />
              <p />
            </li>
            <li>
              <h4>EXPENSES</h4>
              <img src="" alt="budget expenses" />
              <p />
            </li>
            <li>
              <h4>BALANCE</h4>
              <img src="" alt="budget balance" />
              <p />
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default ExpenseResult;
