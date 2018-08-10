import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../app.css';

class About extends Component{
  render(){
    return(
      <div>
        <h2 className="section-header"><i className="fas fa-book"></i>About</h2>
        <p className="blurb">{this.props.about}</p>
      </div>
    )
  }
}

About.propTypes = {
  about: PropTypes.string,
};
export default About;
