import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/141279-codingwithcoffile.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
    <div className="navbar">
   <h1 id="name">ANDREA GINN</h1>
   <div className="header-container">
        <ul className="nav">
          <li>
            <a href="#aboutsection" id="about" className="header-font"> ABOUT </a>
          </li>
          <li><FontAwesomeIcon icon={faCircle} id="nav-circle" /></li>
          <li>
            <a href="#portfoliosection" id="portfolio" className="header-font">PORTFOLIO</a>
            </li>
            <li><FontAwesomeIcon icon={faCircle} id="nav-circle"  /></li>
          <li>
            <a href="#contactsection" id="contact" className="header-font">CONTACT</a>
          </li>
          <li><FontAwesomeIcon icon={faCircle} id="nav-circle"  /></li>
          <li>
            <a href="#resumesection" id="resume" className="header-font">RESUME</a>
          </li>
        </ul>
        </div>
      </div>
    <div>
      <div className="animation-container">
        <Lottie options={defaultOptions} />
      </div>
      <FontAwesomeIcon icon={faChevronDown} beatFade id="chevron"/>
    </div>
    </div>
  );
}

export default Nav;