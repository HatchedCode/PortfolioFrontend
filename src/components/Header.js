import React from 'react';

class Header extends React.Component {
   render(){
      var networks = []
      if(this.props.data && this.props.data.length > 0){
         this.props.data.forEach(network => {
            networks.push(
               <li key={network.name+"header"+networks.length}><a href={network.url}><i className={network.className}></i></a></li>,
            );
         });
      }

      return(
         <header id="home">
         <nav id="nav-wrap">
   
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
   
            <ul id="nav" className="nav">
               <li className="current">
                  <a className="smoothscroll" href="#home">Home</a>
               </li>
               <li>
                  <a className="smoothscroll" href="#about">About</a>
               </li>
               <li> <a className="smoothscroll" id="resume-id">Resume*</a>
                     <ul id="resume-subitems">
                        <li className="smoothscroll" ><a className="smoothscroll" href="#education">Education</a></li>
                        <li className="smoothscroll" ><a className="smoothscroll" href="#experiences">Experience</a></li>
                        <li className="smoothscroll" ><a className="smoothscroll" href="#recognition">Recognition</a></li>
                        <li className="smoothscroll" ><a className="smoothscroll" href="#activities">Involvement</a></li>
                        <li className="smoothscroll" ><a className="smoothscroll" href="#courses">Courses</a></li>
                        <li className="smoothscroll" ><a className="smoothscroll" href="#skills">Skills</a></li>
                     </ul>
               </li>
               <li>
                  <a className="smoothscroll" href="#contact">Contact</a>
               </li>
            </ul>
   
         </nav>
   
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Hello,<br/>I'm {"Osman Bakari"}</h1>
               <h3>I am a recent <span>{"computer science graduate"}</span> located in <span>{"Seattle, WA USA"}</span><br/> {"Currently, I am actively seeking a full-time opportunity in the fields of computer science and software engineering. "}.</h3>
               <hr/>
               <ul className="social">
                  {networks}
               </ul>
            </div>
         </div>
   
         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>
      </header>
      );
   }
}

export default Header;
