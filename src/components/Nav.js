import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/141279-codingwithcoffile.json';

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
    <div className="navbar">
      <div className="animation-container">
        <Lottie options={defaultOptions} />
      </div>

      <div className="header-container">
        <h1 id="name">ANDREA GINN</h1>
        <ul className="nav">
          <li><a href="#aboutsection" id="about header-font">ABOUT</a></li>
          <li><a href="#gallerysection" id="gallery header-font">PORTFOLIO</a></li>
          <li><a href="#contactsection" id="contact header-font">CONTACT</a></li>
          <li><a href="#contactsection" id="resume header-font">RESUME</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
