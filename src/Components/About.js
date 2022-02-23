
import React from 'react';

/* Component imports */
import AboutNav from './AboutNav';

/* Image imports */
import github from '../img/icons/gh.png';
import linkedin from '../img/icons/li.png';
import profilePic from '../img/profile-pic.jpg';

/* About container component to be shown at the top of the bio, contact, experience, and props components */
const About = () => {
  
	return (
		<div className="overlay">
			<div className="wallpaper"></div>
			<div className="about-header">

				<AboutNav />
        
				{/* <h1 className="top-heading About-heading">About</h1> */}
				<h2 className="top-heading about-heading">Robert Manolis</h2>
				<img className="profile-pic" src={ profilePic } alt="Profile pic"/>

				<div className="header-contact-link-box">
					<a href="https://github.com/gitrobertpm" className="contact-link cl-github"><img src={ github } alt="GitHub icon" /></a>
					<a href="https://www.linkedin.com/in/robertpm/" className="contact-link cl-linkedin"><img src={ linkedin } alt="LinkedIn icon" /></a>
				</div>
			</div>
		</div>
	);
};

export default About;
