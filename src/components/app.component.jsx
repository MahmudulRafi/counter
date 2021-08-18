import React, { Component } from 'react';
import Navbar from './navbar.component';
import Counters from './counters.component';
import Reset from './reset.components';

class App extends Component {
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
        const allCounterRest = this.state.counters.map((counter, index) => {
            const obj = { id: index, value: 0 };
            return obj;
        });
        this.setState({ counters: allCounterRest });
    };

    handleIncrement = (id) => {
        const incrementCounters = this.state.counters.map((counter, index) => {
            if (counter.id == id)
                return { id: index, value: counter.value + 1 };
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

    getNonZeroItems = () => {
        let countNonZero = 0;
        this.state.counters.forEach((counter) => {
            if (counter.value > 0) {
                countNonZero++;
            }
        });
        return countNonZero;
    };

    render() {
        return (
            <>
                <Navbar nonZeroItems={this.getNonZeroItems()} />
                <Reset onReset={this.handleReset} />
                <Counters
                    counters={this.state.counters}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
            </>
        );
    }
}

export default App;
