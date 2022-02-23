
import React from 'react';

/* Main dependency imports */
import { NavLink } from 'react-router-dom';

/* Nav element - auto scroll to top feature on page changes */
const AboutNav = () => {

	// Scroll to top function
	const scroller = () => window.scrollTo(0, 0);

	return (
		<div className="about-menu">
			<NavLink to="/about/bio" onClick={ scroller }>Bio</NavLink>
			<NavLink to="/about/experience" onClick={ scroller }>Experience</NavLink>
			<NavLink to="/about/contact" onClick={ scroller }>Contact</NavLink>
			<NavLink to="/about/props" onClick={ scroller }>Props</NavLink>
		</div>
	);
};

export default AboutNav;
