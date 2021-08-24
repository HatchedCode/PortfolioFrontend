import React, { Component } from 'react';
require('dotenv').config();

class About extends Component {
  getDownloadFile = async () => {
    try{
      window.open(process.env.REACT_APP_BASE_ROUTING_URL + "resume")
    }
    catch(err){
      console.log(err);
    }
  }

  DownloadResume = (event) => {
    event.preventDefault();
    this.getDownloadFile();
  }

  render() {

    if(this.props.data && this.props.data.length > 0){
      var name = this.props.data[0].name;
      var bio = this.props.data[0].description;
      var imageSource = this.props.data[0].imageUrl;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
             <img src={imageSource} height={1210} width={1261} alt={name}/>
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
         </div>
         <div className="seven columns row">
            <div className="download">
                <p>
                    <a onClick={this.DownloadResume} className="button"><i className="fa fa-download"></i>Download Resume</a>
                </p>
            </div>
        </div>
      </div>

   </section>
    );
  }
}

export default About;
