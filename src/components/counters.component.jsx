import React, { Component } from "react";
import Counter from "./counter.component";

class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const allCounterRest = this.state.counters.map((counter, idx) => {
      const obj = { id: idx, value: 0 };
      return obj;
    });
    this.setState({ counters: allCounterRest });
  };

  handleIncrement = (id) => {
    const incrementCounters = this.state.counters.map((counter, index) => {
      if (counter.id == id) return { id: index, value: counter.value + 1 };
      else return counter;
    });
    this.setState({ counters: incrementCounters });
  };

  handleDecrement = (id) => {
    const decrementCounters = this.state.counters.map((counter, index) => {
      if (counter.id == id && counter.value > 0)
        return { id: index, value: counter.value - 1 };
      else return counter;
    });
    this.setState({ counters: decrementCounters });
  };

  render() {
    return (
      <>
        <button
          onClick={this.handleReset}
          type="button"
          class="btn btn-warning m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counters) => {
          return (
            <Counter
              key={counters.id}
              value={counters.value}
              id={counters.id}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
            />
          );
        })}
      </>
    );
  }
}

export default Counters;
