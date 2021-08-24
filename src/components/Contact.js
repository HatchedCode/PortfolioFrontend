import React, { Component } from 'react';
require('dotenv').config()

class Contact extends Component {
  render() {
    return (
      <section id="contact">
         <div className="row section-head">
            <div className="twelve columns">
                <h1><span>Get In Touch.</span></h1>                
                <p className="lead">{"Feel free to contact me if you have any questions."}</p>
            </div>
         </div>

         <div className="row section-head">
            <div className="twelve columns">
                <p className={"lead"} style={{color: "white"}} >Name<span style={{marginRight: "15px"}}>:</span> Osman Bakari</p>
                <p className={"lead"} style={{color: "white"}} >Email<span style={{marginRight: "15px"}}>:</span> odbakari@gmail.com</p>
                <p className={"lead"} style={{color: "white"}} >Social<span style={{marginRight: "15px"}}>:</span> <a target="_blank" rel="noreferrer" href={"https://linkedin.com/in/OsmanBakari"}><span></span>Linkedin</a> </p>
            </div>
         </div>
   </section>
    );
  }
}

export default Contact;
