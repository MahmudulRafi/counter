import React, { Component } from "react";

class Navbar extends Component {
    state = {};
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Counters{" "}
                        <span className="badge bg-dark">
                            {this.props.nonZeroItems}
                        </span>
                    </a>
                </div>
            </nav>
        );
    }
}

export default Navbar;
