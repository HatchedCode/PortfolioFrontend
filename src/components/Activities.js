import React, { Component } from 'react';

class Activities extends Component {
  render() {
    var activities = []

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

        this.props.data.forEach(activity => {
            activities.push(
                <li style={liStyles} key={activity.name+activity.activity_type+activities.length}>
                    <div style={{fontSize: 20, }}>{activity.name}</div>
                    <em>{activity.activity_type}</em>
                    <p>{activity.description}</p>
                </li>  
            )
        });
    }

    return (
      <section id="activities">
      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Involvement</span></h1>
         </div>
         <div style={{paddingTop:'5px'}} className="nine columns main-col">
				   <ul className="skills">
					  {activities}
					</ul>
			</div>
      </div>
   </section>
    );
  }
}

export default Activities;