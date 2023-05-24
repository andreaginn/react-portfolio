import React from 'react';
import Fade from 'react-reveal/Fade';

function Portfolio() {
    return (
      <div className="section" id="gallerysection">
        <h1 className="heading" id="header-font">PORTFOLIO</h1>
        <div className="portfolio-gallery">
            <Fade right>
          <a href="https://andreaginn.github.io/HoriseonSite/" className="project-link">
            <img src={require("../assets/assignment.jpg")} height="200px" id="horiseon" alt="screenshot of Project 1 Site" />
            <div className="pictext">Project 1 Site</div>
          </a>
          </Fade>
          <Fade left>
          <a href="https://andreaginn.github.io/Click-for-Flicks/" className="project-link">
            <img src={require("../assets/CfFScreenshot.jpg")} height="200px" alt="screenshot of ClickForFlicks site" />
            <div className="pictext">ClickForFlicks</div>
          </a>
          </Fade>
          <Fade right>
          <a href="https://calm-tor-47120.herokuapp.com/" className="project-link">
            <img className="jamsession" src={require("../assets/jam-session.jpg")} height="200px" alt="screenshot of Jam Session Login Page" />
            <div className="pictext">Jam Session</div>
          </a>
          </Fade>
          <Fade left>
          <a href="https://radiant-journey-93458.herokuapp.com/notes" className="project-link">
            <img className="notepad" src={require("../assets/notepad.jpg")} height="200px" alt="screenshot of Notepad site" />
            <div className="pictext">Notepad</div>
          </a>
          </Fade>
          <Fade right>
          <a href="https://github.com/andreaginn/Employee-Tracker" className="project-link">
            <img className="employeetracker" src={require("../assets/employee-tracker.jpg")} height="200px" alt="screenshot of Employee Tracker site" />
            <div className="pictext">Employee Tracker</div>
          </a>
          </Fade>
          <Fade left>
          <a href="https://andreaginn.github.io/Work-Day-Scheduler/" className="project-link">
            <img className="workdayscheduler" src={require("../assets/workday-scheduler.jpg")} height="200px" alt="screenshot of Workday Scheduler site" />
            <div className="pictext">Workday Scheduler</div>
          </a>
          </Fade>
        </div>
      </div>
    );
  }
  
  export default Portfolio;
  