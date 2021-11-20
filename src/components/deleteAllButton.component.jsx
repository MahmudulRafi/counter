import React from "react";
import { useDispatch } from "react-redux";
import { deleteAllCounters } from "../redux/actions/counterActions";

function DeleteAllButton() {
    const dispatch = useDispatch();
    return (
        <button
            onClick={() => dispatch(deleteAllCounters())}
            type="button"
            className="btn btn-danger m-2"
        >
            Delete All
        </button>
    );
}

export default DeleteAllButton;
