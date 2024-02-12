import React, { Component } from "react";
import PropTypes from "prop-types";
import "../app.css";

class Details extends Component {
  render() {
    return (
      <div className="info-header">
        <div className="left-side-header">
          <ul>
            <li className="theNameIsDalton">{this.props.details.name}</li>
            <li>{this.props.details.blurb}</li>
          </ul>
        </div>
        <div className="right-side-header">
          <ul>
            <li className="emailAddress">{this.props.details.email}</li>
            <li>{this.props.details.address}</li>
            <li>{this.props.details.phone}</li>
          </ul>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  details: PropTypes.object,
};

export default Details;
