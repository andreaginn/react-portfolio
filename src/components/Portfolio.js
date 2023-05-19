function Portfolio() {
    return(
<div classname="section" id="gallerysection">
  <h3 classname="heading">PORTFOLIO</h3>
  <div classname="assignment"><a href="https://andreaginn.github.io/HoriseonSite/"><img src={require("../assets/assignment.jpg")}height="300px" id="horiseon" />
      <div classname="pictext">Project 1 Site</div>
    </a></div>
  <div classname="siximages">
    <a href="https://andreaginn.github.io/Click-for-Flicks/"><img src={require("../assets/CfFScreenshot.jpg")} height="300px" alt="screenshot of clickforflicks site" />
      <div classname="pictext">ClickForFlicks</div>
    </a>
    <a href="https://calm-tor-47120.herokuapp.com/"><img classname="jamsession" src={require("../assets/jam-session.jpg")} height="300px" alt="screenshot of Jam Session Login Page" />
      <div classname="pictext">Jam Session</div>
      <a href="https://radiant-journey-93458.herokuapp.com/notes"><img classname="notepad" src={require("../assets/notepad.jpg")} height="300px" alt="screenshot of Jam Session Login Page" />
      <div classname="pictext">Notepad</div>
    </a>
    <a href="https://github.com/andreaginn/Employee-Tracker"><img classname="employeetracker" src={require("../assets/employee-tracker.jpg")} height="300px" alt="screenshot of Jam Session Login Page" />
      <div classname="pictext">Employee Tracker</div>
    </a>
    <a href="https://andreaginn.github.io/Work-Day-Scheduler/"><img classname="workdayscheduler" src={require("../assets/workday-scheduler.jpg")} height="300px" alt="screenshot of Jam Session Login Page" />
      <div classname="pictext">Workday Scheduler</div>
    </a>
    </a>
  </div>
</div>


    )
}
export default Portfolio