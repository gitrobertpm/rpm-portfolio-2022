
import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

/* Component imports */
import AboutNav from './AboutNav';
import Bio from './Bio';
import Experience from './Experience';
import Contact from './Contact';
import Props from './Props';
import ThankYou from './ThankYou';

/* Image imports */
import github from '../img/icons/gh.png';
import linkedin from '../img/icons/li.png';
import profilePic from '../img/profile-pic.jpg';

const About = (): JSX.Element => {

	const location = useLocation();
	const pathname = location.pathname;
	const compPathname = pathname.slice(pathname.lastIndexOf('/') + 1);

	interface compMapTypes {
		[key: string]: JSX.Element,
	}

	const compMap: compMapTypes = {
		'bio': <Bio />,
		'experience': <Experience />,
		'contact': <Contact />,
		'props': <Props />,
		'thankyou': <ThankYou /> 
	};
  
	return (
		<div className="overlay">
			<div className="wallpaper"></div>
			<div className="about-header">
				<AboutNav />

				<h2 className="top-heading about-heading">Robert Manolis</h2>
				<img className="profile-pic" src={ profilePic } alt="Profile pic"/>

				<div className="header-contact-link-box">
					<a href="https://github.com/gitrobertpm" className="contact-link cl-github"><img src={ github } alt="GitHub icon" /></a>
					<a href="https://www.linkedin.com/in/robertpm/" className="contact-link cl-linkedin"><img src={ linkedin } alt="LinkedIn icon" /></a>
				</div>
			</div>

			{ Object.keys(compMap).includes(compPathname) ? compMap[compPathname] : <Navigate to="/notfound" replace /> }
		</div>
	);
};

export default About;
