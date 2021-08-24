import React, { Component } from 'react';

class Experience extends Component {
  render() {
    var experiences = []

    if(this.props.data && this.props.data.length > 0){
        this.props.data.forEach(experience =>{
          var end_date = experience.in_progress == true ? "Current" : (experience.end_date_month + " " + experience.end_date_year);
            experiences.push(
                <div key={experience.title+experience.company+experience.start_date_month + experience.start_date_year + experience.end_date_month + experience.end_date_year}>
                    <h3>{experience.title}</h3>
                    <p className="info"><b><i>{experience.company}</i></b><span>&bull;</span> <em className="date">{experience.start_date_month + " " + experience.start_date_year + " - " + end_date }</em></p>
                    <p>{experience.description}</p>
                </div>
            )
        })
    }

    return (
      <section id="experiences">
      <div className="row work">
         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>
         <div className="nine columns main-col">
          {experiences}
        </div>
    </div>
   </section>
    );
  }
}

export default Experience;