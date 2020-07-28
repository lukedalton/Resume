import React, { Component } from 'react';
import './app.css';
import Work from './Sections/Work.js';
import Education from './Sections/Education.js';
import Details from './Sections/Details.js';
import Skills from './Sections/Skills.js';
import Info from './info.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Details details={Info.about} />
        <div className="work-and-skill-row">
          <Work work={Info.work} />
          <Skills skill={Info.skills} />
        </div>
        <Education education={Info.education} />
        
      </div>
    );
  }
}

export default App;
