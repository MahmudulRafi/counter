import React, { Component } from 'react';

class Counter extends Component {
    formatCount = () => {
        if (this.props.value == 0) return 'Zero';
        return this.props.value;
    };

    render() {
        return (
            <>
                <ul>
                    <li class="list-unstyled">
                        <div>
                            <span class="badge bg-pill bg-dark">
                                {this.formatCount()}
                            </span>
                            <button
                                onClick={() =>
                                    this.props.onIncrement(this.props.id)
                                }
                                type="button"
                                class="btn btn-secondary m-2"
                            >
                                +
                            </button>
                            <button
                                onClick={() =>
                                    this.props.onDecrement(this.props.id)
                                }
                                type="button"
                                class="btn btn-secondary m-2"
                            >
                                -
                            </button>
                            <button
                                onClick={() =>
                                    this.props.onSingleCounterReset(
                                        this.props.id
                                    )
                                }
                                type="button"
                                class="btn btn-outline-dark m-2"
                            >
                                Reset
                            </button>
                            <button
                                onClick={() =>
                                    this.props.onDelete(this.props.id)
                                }
                                type="button"
                                class="btn btn-outline-danger m-2"
                            >
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
