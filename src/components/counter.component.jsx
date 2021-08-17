import React, { Component } from "react";

class Counter extends Component {
  formatCount = () => {
    if (this.props.value == 0) return "Zero";
    return this.props.value;
  };

  render() {
    return (
      <>
        <ul>
          <li class="list-unstyled">
            <div>
              <span class="badge bg-primary">{this.formatCount()}</span>
              <button
                onClick={() => this.props.onIncrement(this.props.id)}
                type="button"
                class="btn btn-secondary m-2"
              >
                +
              </button>
              <button
                onClick={() => this.props.onDecrement(this.props.id)}
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
