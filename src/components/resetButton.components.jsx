import React, { Component } from "react";

class ResetButton extends Component {
    state = {};
    render() {
        return (
            <button
                onClick={this.props.onAllReset}
                type="button"
                className="btn btn-warning m-2"
            >
                Reset All
            </button>
        );
    }
}

export default ResetButton;
