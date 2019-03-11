import React from "react";

class CalcExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseName: "",
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  onSubmit(event) {
    alert("a expense was submited: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <form>
          <label>
            <div className="text">Please Enter Your Expense</div>
            <input
              type="text"
              value={this.state.expenseName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <div className="text">Please Enter Expense Amount</div>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" onClick={this.onSubmit}>
            Add Expense
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default CalcExpense;
