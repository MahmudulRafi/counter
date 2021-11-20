import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
    const counters = useSelector((state) => state.countersState.counters);

    const getNonZeroItems = () => {
        let countNonZero = 0;
        counters.forEach((counter) => {
            if (counter.value > 0) countNonZero++;
        });
        return countNonZero;
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Counters&nbsp;
                    <span className="badge bg-dark">{getNonZeroItems()}</span>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
