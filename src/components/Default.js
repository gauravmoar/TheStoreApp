import React, { Component } from "react";

class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="col-10 mx-auto pt-5 text-title text-center text-uppercase">
          <h1 className="display-3">404</h1>
          <h1>Error</h1>
          <h2>Page not Found</h2>
          <h3>
            the requested url{" "}
            <span className="text-danger">{this.props.location.pathname}</span>{" "}
            was not found
          </h3>
        </div>
      </div>
    );
  }
}

export default Default;
