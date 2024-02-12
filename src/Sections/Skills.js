import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../app.css';

function SkillList(props){
  const skill = props.skill;
  const list = skill.map((skills)=>
    <div className="skill">
      <li>{skills.skill}</li>
    </div>
  );
  return(
    <ul>{list}</ul>
  );
}

class Skills extends Component{
  render(){
    return(
      <div className="skillset">
        <h2 className="section-header">Skills</h2>
        <SkillList skill={this.props.skill} />
      </div>
    )
  }
}

Skills.propTypes ={
  skill: PropTypes.array,
};

export default Skills;
