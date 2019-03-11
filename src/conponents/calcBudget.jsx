import React from "react";

class CalcBudget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      calcValue: event.target.value
    });
  }

  onSubmit(event) {
    alert("a expense was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <form className="calcBudget">
          <label>
            <div className="text">Please Enter Your Budget</div>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className="calcBtn" onClick={this.onSubmit}>
            Calculate
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default CalcBudget;
