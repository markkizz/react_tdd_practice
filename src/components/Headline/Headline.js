import React, { Component } from "react";
import PropTypes from "prop-types";

class Headline extends Component {
  state = {};

  render() {
    const { header, desc } = this.props;
    if (!header) return null;
    return (
      <div data-test="headlineComponent">
        <h1 className="header">{header}</h1>
        <p className="desc">{desc}</p>
      </div>
    );
  }
}

Headline.propTypes = {};

export default Headline;
