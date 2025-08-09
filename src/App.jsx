import React, { Component } from 'react';
import './app.css';
import Work from './Sections/Work';
import Education from './Sections/Education';
import Details from './Sections/Details';
import Skills from './Sections/Skills';
import Info from './info.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Details details={Info.about} />
        <Work work={Info.work} />
        <Skills skill={Info.skills} />
        <Education education={Info.education} />
      </div>
    );
  }
}

export default App;


