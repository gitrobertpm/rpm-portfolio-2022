
/* Main dependency imports */
import React from 'react';
import { Link } from 'react-router-dom';

/* Component imports */
import Brochure from './Brochure';
// import Projects from './Projects';

/* Image imports */
import profilePic from '../img/profile-pic.jpg';
import myLogo from '../img/myLogo.svg';
// import { ReactComponent as myLogo } from '../img/myLogo.svg';
import jsImg from '../img/icons/js.png';
import mail from '../img/icons/mail.png';
import github from '../img/icons/gh.png';
import linkedin from '../img/icons/li.png';

/* Landing page and root header */
const Home = () => {

	return (
		<React.Fragment>
			<div className="curtain"></div>	
			<header className="App-header">

				<div className="App-header-wrap">

					<div className="home-name-box">
						<h1 className="animate__animated animate__zoomIn customDuration first">Robert Manolis</h1>
						
						<h4 className="nunito animate__animated animate__zoomIn customDuration third">Portfolio - <code>2022</code></h4>
						<img className="profile-pic home-profile-pic" src={ profilePic } alt="Profile pic"/>
					</div>

					<div className="home-header-logo-box">
						<img className="my-logo home-header-logo" src={ myLogo } alt="My Logo" />
						{/* <myLogo className="my-logo home-header-logo" /> */}
					</div>

					<div className="home-title-box">
						<h2 className="rainbow animate__animated animate__zoomIn customDuration second"><code>Frontend Developer</code></h2>
						<img className="p-img main-js-logo" src={jsImg} alt="JavaScript icon" />
						<h5 className="rainbow animate__animated animate__zoomIn customDuration second"><code>with React and full stack experience</code></h5>
					</div>
					

					<div className="header-contact-link-box animate__animated animate__zoomIn customDuration third">
						<Link to="/about/contact" title="Contact"><img src={mail} alt="Mail icon" /></Link>
						<a href="https://github.com/gitrobertpm" className="contact-link cl-github" title="GitHub"><img src={github} alt="GitHub icon" /></a>
						<a href="https://www.linkedin.com/in/robertpm/" className="contact-link cl-linkedin" title="LinkedIn"><img src={linkedin} alt="LinkedIn icon" /></a>
					</div>

					<br />
					<div className="down-arrow" />
				</div>
			</header>

			<div className="banner"></div>

			<Brochure />

			<div className="attributions-box">
				<p className="attribution">Some animations powered by <a href="https://animate.style/" target="_blank" rel="noreferrer">Animate.css</a></p>
				<p className="attribution">Cool background SVG from <a href="https://www.svgbackgrounds.com/" target="_blank" rel="noreferrer">SVGBackgrounds.com</a></p>
			</div>
			
		</React.Fragment>
	);
};

export default Home;
