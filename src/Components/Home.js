
/* Main dependency imports */
import React from 'react';
import { Link } from 'react-router-dom';

/* Component imports */
import Projects from './Projects';

/* Image imports */
import jsImg from '../img/icons/js.png';
import mail from '../img/icons/mail.png';
import github from '../img/icons/gh.png';
import linkedin from '../img/icons/li.png';

/* Landing page and root header */
const Home = () => {

  return (
    <React.Fragment>
      <header className="App-header">

        <h1>Robert Manolis</h1>
        <h2 className="rainbow"><code>Frontend Developer</code></h2>
        <img className="p-img main-js-logo" src={jsImg} alt="JavaScript icon" />
        <h4 className="rainbow"><code>with fullstack experience</code></h4>
        <h4 className="nunito">Portfolio - <code>2022</code></h4>

        <div className="header-contact-link-box">
          <Link to="/about/contact" title="Contact"><img src={mail} alt="Mail icon" /></Link>
          <a href="https://github.com/gitrobertpm" className="contact-link cl-github" title="GitHub"><img src={github} alt="GitHub icon" /></a>
          <a href="https://www.linkedin.com/in/robertpm/" className="contact-link cl-linkedin" title="LinkedIn"><img src={linkedin} alt="LinkedIn icon" /></a>
        </div>

        <br />
        <div className="down-arrow" />

      </header>

      <Projects />
    </React.Fragment>
  );
};

export default Home;
