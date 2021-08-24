import React, { Component } from 'react';

class Recognition extends Component {
  render() {
    var recognitions = []

    if(this.props.data && this.props.data.length > 0){
    var liStyles = {
        display: 'flex',
        lineHeight: 'initial',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'nowrap',
        marginBottom: '20px',
        marginRight: '20px'
    }

        this.props.data.forEach(recognition => {
            recognitions.push(
                <li style={liStyles} key={recognition.name+recognitions.length}>
                    <div style={{fontSize: 20 }}>{recognition.name}</div>
                    <em>{recognition.recognition_type}</em>
                </li>                
            )
        });
    }

    return (
      <section id="recognition">
      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Recognitions</span></h1>
         </div>
         <div style={{paddingTop:'5px'}} className="nine columns main-col">
				   <ul className="skills">
					  {recognitions}
					</ul>
			</div>
      </div>
   </section>
    );
  }
}

export default Recognition;
