import React, { Component } from 'react';

class Education extends Component {
  render() {
    var education = [];
    if(this.props.data && this.props.data.length > 0){
      this.props.data.forEach(school => {
        var key = school.degree + school.education_type + school.school;
        var end_date = school.is_in_progress ? "Present" : (school.graduation_month + " " + school.graduation_year);
        education.push(
        <div key={key}><h3>{school.school}</h3>
            <p className="info">{school.degree} 
                <span>{school.degree == "" ? "" : "-"}</span>
                <em className="date">{end_date}</em></p>
            <p>{school.description}</p>
        </div>
        );       
      });
    }

    return (
      <section id="education">
      <div className="row">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default Education;
