import React, { Component } from 'react';

class AddNewButton extends Component {
    render() {
        return (
            <button
                onClick={this.props.onAddNew}
                type="button"
                class="btn btn-success m-2"
            >
                Add New
            </button>
        );
    }
}

export default AddNewButton;
