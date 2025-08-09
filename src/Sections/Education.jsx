import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../app.css';

function SchoolList(props){
  const school = props.school;
  const list = school.map((schools)=>
    <div className="school">
      <li className="institutionHeader">{schools.institution}</li>
      <li>{schools.degree} - {schools.focus}</li>
      <li>{schools.studied}</li>
    </div>
  );
  return(
    <ul>{list}</ul>
  );
}

class Education extends Component{
  render(){
    return(
      <div className="education">
        <h2 className="section-header">Education</h2>
        <SchoolList school={this.props.education} />
      </div>
    )
  }
}

Education.propTypes = {
  education: PropTypes.array,
};
export default Education;


