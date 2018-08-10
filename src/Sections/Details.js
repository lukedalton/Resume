import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../app.css';

class Details extends Component{
  render(){
      return(
        <header className="info-header">
          <div className="left-side-header">
            <ul>
              <li>{this.props.details.name}</li>
              <li>{this.props.details.blurb}</li>
            </ul>
          </div>
          <div className="center-header">
          </div>
          <div className="right-side-header">
            <ul>
              <li>{this.props.details.email}</li>
              <li>{this.props.details.address}</li>
              <li><i class="fab fa-github"></i><a href="https://github.com/lukedalton">{this.props.details.githubUN}</a></li>
            </ul>
          </div>
        </header>
      )
  }
}

Details.propTypes = {
  details: PropTypes.object,
};

export default Details;
