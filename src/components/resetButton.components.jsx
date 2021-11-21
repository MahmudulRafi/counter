import React from "react";
import { useDispatch } from "react-redux";
import { resetAllCounters } from "../redux/actions/counterActions";

function ResetButton() {
    const dispatch = useDispatch();
    return (
        <button
            onClick={() => dispatch(resetAllCounters())}
            type="button"
            className="btn btn-warning m-2"
            style={{ outline: "none", boxShadow: "none" }}
        >
            Reset All
        </button>
    );
}

export default ResetButton;
