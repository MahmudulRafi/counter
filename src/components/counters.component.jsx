import React, { Component } from 'react';
import Counter from './counter.component';

class Counters extends Component {
    render() {
        return this.props.counters.map((counters) => {
            return (
                <Counter
                    key={counters.id}
                    value={counters.value}
                    id={counters.id}
                    onIncrement={this.props.onIncrement}
                    onDecrement={this.props.onDecrement}
                    onDelete={this.props.onDelete}
                    onSingleCounterReset={this.props.onSingleCounterReset}
                />
            );
        });
    }
}

export default Counters;
