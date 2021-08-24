import React, { Component } from 'react';
import ReactStars from 'react-rating-stars-component'

class Skills extends Component {
  render() {
    var liStyles = {
        display: 'inline-flex',
        lineHeight: 'initial',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'nowrap',
        marginBottom: '20px',
        marginLeft: '40px'
    }

    var skills = [];
    var description = "";
    if(this.props.sections && this.props.sections.length > 0){
        description = this.props.sections[1].description
    }

    if(this.props.data && this.props.data.length > 0){
        this.props.data.forEach(language => {
            skills.push(
                <li style={liStyles} key={language.name+skills.length}>
                    <div style={{marginRight: '10px', fontSize: 20, }}>{language.name}</div>
                    <ReactStars
                        count={5}
                        value={language.rating}
                        edit={false}
                        size={50}
                    />
                    <p></p>
                </li>
            )
        })
    }

    if(this.props.languages && this.props.languages.length > 0){
        this.props.languages.forEach(language => {
            skills.push(
                <li style={liStyles} key={language.name+skills.length}>
                    <div style={{marginRight: '10px', fontSize: 20, }}>{language.name}</div>
                    <ReactStars
                        count={5}
                        value={language.rating}
                        edit={false}
                        size={50}
                    />
                    <p></p>
                </li>                
            )
        })
    }

    return (
      <section id="skills">
      <div className="row">
         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">
            <p>{description}
            </p>
                <ul className="skills">
                    {skills}
                </ul>
			</div>
      </div>
   </section>
    );
  }
}

export default Skills;
