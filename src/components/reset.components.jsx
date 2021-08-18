import React, { Component } from 'react';

class Reset extends Component {
    state = {};
    render() {
        return (
            <button
                onClick={this.props.onReset}
                type="button"
                class="btn btn-warning m-2"
            >
                Reset
            </button>
        );
    }
}

export default Reset;
