import React from "react";

function ResetButton() {
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

export default ResetButton;
