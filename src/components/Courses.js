import React, { Component } from 'react';

class Courses extends Component {
  render() {
    var courses = [];

    if(this.props.data && this.props.data.length > 0){
        var liStyles = {
            display: 'inline-flex',
            lineHeight: 'initial',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            flexWrap: 'nowrap',
            marginBottom: '20px',
            marginRight: '20px'
        }

        this.props.data.forEach(course => {
            courses.push(
                <li style={liStyles} key={course.name+courses.length}>
                    <span>&bull;   {course.name}</span>
                </li>
            ) 
        });
    }

    return (
      <section id="courses">
      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Related Courses</span></h1>
         </div>
         <div style={{paddingTop:'5px'}} className="nine columns main-col">
                <ul>
                    {courses}
                </ul>
			</div>
      </div>
   </section>
    );
  }
}

export default Courses;