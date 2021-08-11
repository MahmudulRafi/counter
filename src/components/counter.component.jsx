import React, { Component } from "react";

class Counter extends Component {
  state = {
    itmes: [0],
  };

  formatCount = () => {
    if (this.state.itmes[0] == 0) return "Zero";
    return this.state.itmes[0];
  };

  handleReset = () => {
    const countNumber = [...this.state.itmes];
    countNumber[0] = 0;
    this.setState({ itmes: countNumber });
  };

  handleIncrement = () => {
    const countNumber = [...this.state.itmes];
    countNumber[0]++;
    this.setState({ itmes: countNumber });
  };

  handleDecrement = () => {
    const countNumber = [...this.state.itmes];
    countNumber[0]--;
    this.setState({ itmes: countNumber });
  };

  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar <span class="badge bg-secondary">4</span>
            </a>
          </div>
        </nav>

        <button
          onClick={this.handleReset}
          type="button"
          class="btn btn-warning m-4"
        >
          Reset
        </button>

        <ul>
          <li class="list-unstyled">
            <div>
              <span class="badge bg-primary">{this.formatCount()}</span>
              <button
                onClick={this.handleIncrement}
                type="button"
                class="btn btn-secondary m-2"
              >
                +
              </button>
              <button
                onClick={this.handleDecrement}
                type="button"
                class="btn btn-secondary m-2"
              >
                -
              </button>
              <button type="button" class="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </li>
        </ul>
      </>
    );
  }
}

export default Counter;
