import React, { Component } from "react";

class DeleteAllButton extends Component {
    render() {
        return (
            <button
                onClick={this.props.onDeleteAll}
                type="button"
                className="btn btn-danger m-2"
            >
                Delete All
            </button>
        );
    }
}

export default DeleteAllButton;
