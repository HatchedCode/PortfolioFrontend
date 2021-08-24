import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ReactGA from 'react-ga'
import Contact from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
require('dotenv').config()

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      experiences : [],
      recognitions : [],
      activities : [],
      skills : [],
      languages : [],
      courses : [],
      schools: [],
      sections: [],
      aboutme: [],
      networks: [],
    }
  }

  initializeGoogleAnalytics = () => {
    ReactGA.initialize(process.env.GOOGLE_ANALYTICS_TRACKING_ID);
    ReactGA.pageview(window.location.pathname);
  }
  
  async componentDidMount() {
    try {
      var res = await fetch(process.env.REACT_APP_BASE_ROUTING_URL + "experience");
      const experiences = JSON.parse(await res.json());
      
      res = await fetch(process.env.REACT_APP_BASE_ROUTING_URL + "recognition");
      const recognitions = JSON.parse(await res.json());

      res = await fetch(process.env.REACT_APP_BASE_ROUTING_URL + "activity");
      const activities = JSON.parse(await res.json());

      res = await fetch(process.env.REACT_APP_BASE_ROUTING_URL + "skill");
      const skills = JSON.parse(await res.json());

      res = await fetch(process.env.REACT_APP_BASE_ROUTING_URL + "language");
      const languages = JSON.parse(await res.json());

      res = await fetch(process.env.REACT_APP_BASE_ROUTING_URL + "course");
      const courses = JSON.parse(await res.json());

      res = await fetch(process.env.REACT_APP_BASE_ROUTING_URL + "education");
      const schools = JSON.parse(await res.json());

      res = await fetch(process.env.REACT_APP_BASE_ROUTING_URL + "section");
      const sections = JSON.parse(await res.json());

      res = await fetch(process.env.REACT_APP_BASE_ROUTING_URL + "network");
      const networks = JSON.parse(await res.json());

      res = await fetch(process.env.REACT_APP_BASE_ROUTING_URL + "aboutme");
      const aboutme = JSON.parse(await res.json());

      this.setState({
          experiences, recognitions, courses,
          activities, skills, languages,
          schools, sections, aboutme, networks
        },
        () => {
        }
        );
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.networks}/>
        <About data={this.state.aboutme} sections={this.state.sections}/>
        <Resume 
          experiences={this.state.experiences}
          recognitions={this.state.recognitions}
          courses={this.state.courses}
          activities={this.state.activities}
          skills={this.state.skills}
          languages={this.state.languages}
          schools={this.state.schools}
          sections={this.state.sections}
        />
        <Contact />
        <Footer data={this.state.networks} />
      </div>
    );
  }
}

export default App;
