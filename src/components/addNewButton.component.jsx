import React from "react";

function AddNewButton() {
    return (
        <button
            onClick={this.props.onAddNew}
            type="button"
            className="btn btn-success m-2"
        >
            Add New
        </button>
    );
}

export default AddNewButton;
