import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Counters <span class="badge bg-secondary">1</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
