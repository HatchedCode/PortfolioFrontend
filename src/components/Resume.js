import React, { Component } from 'react';
import Activities from './Activities';
import Courses from './Courses';
import Education from './Education';
import Experience from './Experience';
import Recognition from './Recognition.js';
import Skills from './Skills';

class Resume extends Component {
    render() {
      return (
        <section id="resume">
            <Education data={this.props.schools} />
            <Experience data={this.props.experiences} />
            <Recognition data={this.props.recognitions} />
            <Activities data={this.props.activities} />
            <Courses data={this.props.courses} />
            <Skills data={this.props.skills} languages={this.props.languages} sections={this.props.sections} />
        </section>
      );
  }
}

export default Resume;
