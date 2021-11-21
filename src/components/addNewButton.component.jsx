import React from "react";
import { useDispatch } from "react-redux";
import { addNewCounter } from "../redux/actions/counterActions";

function AddNewButton() {
    const dispatch = useDispatch();
    return (
        <button
            onClick={() => dispatch(addNewCounter())}
            type="button"
            className="btn btn-success m-2"
            style={{ outline: "none", boxShadow: "none" }}
        >
            Add New
        </button>
    );
}

export default AddNewButton;
