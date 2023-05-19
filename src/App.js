import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import About from "./components/About"
import Contact from "./components/Contact"
function App() {
  return (
    <div className="App">
      <div>
        <h1>ANDREA GINN</h1>
        <Header />
        <About/>
        <div className="break" />
        <div className="section" id="gallerysection">
          <h3 className="heading">GALLERY</h3>
          <div className="assignment"><a href="https://andreaginn.github.io/HoriseonSite/"><img src="assets/assignment.jpg" id="horiseon" />
            <div className="pictext">Project 1 Site</div>
          </a></div>
          <div className="siximages">
            <a href="https://andreaginn.github.io/Click-for-Flicks/"><img src={require("./assets/CfFScreenshot.jpg")} height={300} width={450} alt="screenshot of clickforflicks site" />
              <div className="pictext">ClickForFlicks</div>
            </a>
            <a href="https://calm-tor-47120.herokuapp.com/"><img className="jamsession" src="assets/jam-session.jpg" height={300} width={300} alt="screenshot of Jam Session Login Page" />
              <div className="pictext">Jam Session</div>
            </a>
            <img src="assets/cemetery.jpg" height={300} width={300} alt="black and white drawing of hand on tombstone" />
            <div className="pictext">Skull</div>
          </div>
          <div className="siximages">
            <img src="assets/flowerskull.jpg" height={300} width={300} alt="black and white drawing of skull surrounded by flowers" />
            <div className="pictext">Garden</div>
            <img src="assets/gallo.jpg" height={300} width={300} alt="drawing of man's face" />
            <div className="pictext">Gallo</div>
            <img src="assets/pumpkin.jpg" height={300} width={300} alt="black and white pumpkin drawing" />
            <div className="pictext">Pumpkin</div>
          </div>
          <div className="break" />
          <div className="section" id="contactsection">
            <h3 className="heading">CONTACT</h3>
            <p>
            </p><ul className="phoneemail">
              <li>Email: andrearginn@gmail.com</li>
              <li>Phone: 206-913-8730</li>
            </ul>
            <p />
          </div>
        </div></div>
<Contact/>
    </div>
  );
}

export default App;
