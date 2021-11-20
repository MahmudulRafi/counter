import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    decrementCounter,
    incrementCounter,
    resetCounter,
    deleteCounter,
} from "../redux/actions/counterActions";

function Counter({ value, id }) {
    const formatCount = () => {
        if (value == 0) return "Zero";
        return value;
    };

    const dispatch = useDispatch();
    return (
        <>
            <ul>
                <li className="list-unstyled">
                    <div>
                        <span className="badge bg-pill bg-dark">
                            {formatCount()}
                        </span>
                        <button
                            onClick={() => dispatch(incrementCounter(id))}
                            type="button"
                            className="btn btn-secondary m-2"
                        >
                            +
                        </button>
                        <button
                            onClick={() => dispatch(decrementCounter(id))}
                            type="button"
                            className="btn btn-secondary m-2"
                        >
                            -
                        </button>
                        <button
                            onClick={() => dispatch(resetCounter(id))}
                            type="button"
                            className="btn btn-outline-dark m-2"
                        >
                            Reset
                        </button>
                        <button
                            onClick={() => dispatch(deleteCounter(id))}
                            type="button"
                            className="btn btn-outline-danger m-2"
                        >
                            Delete
                        </button>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default Counter;
