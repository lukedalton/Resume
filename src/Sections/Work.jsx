import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../app.css';

function WorkHistory (props){
  const history = props.history;
  const historyList = history.map((jobs) =>
    <div className="job">
      <li className="job-title">{jobs.title}, {jobs.business}&emsp;Location: {jobs.location} </li>
      <li className="job-date">{jobs.start} to {jobs.end}</li>
      <li className="job-description">{jobs.description}</li>
      {jobs.cooperation ? <li>{jobs.cooperation}</li> : <li></li>}
    </div>
  );
  return(
    <ul>{historyList}</ul>
  );
}

class Work extends Component{
  render(){
    return(
      <div className="work-history">
        <h2 className="section-header">Work</h2>
        <WorkHistory history={this.props.work} />
      </div>
    )
  }
}

Work.propTypes = {
  work: PropTypes.array
};

export default Work;


