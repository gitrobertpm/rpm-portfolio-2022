
/* Main dependency imports */
import React from 'react';
import { NavLink } from 'react-router-dom';

/* Nav element - auto scroll to top feature on page changes */
const Nav = () => {
  
	const scroller = () => window.scrollTo(0, 0);

	return (
		<div className="nav-container">
			<nav>
				<NavLink to="/home" onClick={ scroller }>Home</NavLink>
				<NavLink to="/about" onClick={ scroller }>About</NavLink>
				<NavLink to="/projects" onClick={ scroller }>Projects</NavLink>
			</nav>
		</div>
	);
};

export default Nav;
