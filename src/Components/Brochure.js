
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import profilePic from '../img/profile-pic.jpg';
import teamworkPic from '../img/backgrounds/teamwork.png';
import devPic from '../img/backgrounds/dev-2.png';
import designPic from '../img/backgrounds/design-2.png';

const Brochure = () => {

	const first = useRef(null);
	const second = useRef(null);
	const third = useRef(null);

	const [turn, setTurn] = useState('first');

	const updateTurn = () => setTurn((prev) => prev === 'first'? 'second' : prev === 'second' ? 'third' : 'first');

	useEffect(() => {
		if (window.innerWidth > 767) {
			const interval = setInterval(() => {
				updateTurn();
			}, 5000);
			return () => clearInterval(interval);
		}
	}, [turn, window.innerWidth]);

	// Scroll to top function
	const scroller = () => window.scrollTo(0, 0);

	return (
		<div className="brochure">
			<div className="wallpaper"></div>

			<h2 className="top-heading brochure-heading">Reasons you might want to work with me</h2>

			<div className="diagram">

				<div className="content">
					<div 
						className={ `team satellite expandable ${turn === 'first' && 'expanded-satellite'}` } 
						ref={ first } 
						tabIndex="3" 
						style={{ backgroundImage: `url(${teamworkPic})` }}
					>
						
						<h3>Team Theory</h3>
						<h4>{`It's all about the team!`}</h4>
						<ul className={ `${turn === 'first' && 'expanded-ul'}` }>
							<li>Be easy to work with</li>
							<li>Cheer others along</li>
							<li>Face obstacles with optimism</li>
							<li>Foster a culture of support</li>
							<li>Strive for a healthy work/life balance</li>
						</ul>
					</div>

					<div 
						className={ `design satellite expandable ${turn === 'second' && 'expanded-satellite'}` } 
						ref={ second } 
						tabIndex="4" 
						style={{ backgroundImage: `url(${designPic})` }}
					>
						<h3>Design</h3>
						<h4>A good web UI is...</h4>
						<ul className={ `${turn === 'second' && 'expanded-ul'}` }>
							<li>Mobile first and Responsive</li>
							<li>Legacy and cross browser supportive</li>
							<li>Accessible and intuitive</li>
							<li>Unobtrusive and progressively enhanced</li>
							<li>Built to fail gracefully where needed</li>
						</ul>
					</div>

					<div 
						className={ `development satellite expandable ${turn === 'third' && 'expanded-satellite'}` } 
						ref={ third } 
						tabIndex="5"
						style={{ backgroundImage: `url(${devPic})` }}
					>
						<h3>Dev</h3>
						<h4>Process is paramount</h4>
						<ul className={ `${turn === 'third' && 'expanded-ul'}` }>
							<li>Package management, tree shaking, and bundling</li>
							<li>Linting, type checking and test driven development</li>
							<li>Version control, agile cycles, and continuous integration</li>
							<li>DRY, modular and extensible code</li>
							<li>Safe, secure and responsible creations</li>
						</ul>
					</div>

					<div className="center">
						<img className="profile-pic home-profile-pic" src={ profilePic } alt="Profile pic"/>
						<span className="konector konector-1"></span>
						<span className="konector konector-2"></span>
						<span className="konector konector-3"></span>
						<span className="konector konector-4"></span>
						<span className="konector konector-5"></span>
					</div>

					<div className="me satellite">
						<h3>Me</h3>
						<p>Checkout <br /><Link to="/about"> ~ the About section ~ </Link> <br />to learn more about me.</p>
					</div>

					<div className="my-projects satellite">
						<h3>Projects</h3>
						<p>Peruse <br /><Link to="/projects" onClick={ scroller }> ~ the Projects section ~ </Link> <br />{`to checkout some of the stuff I've been working on.`}</p>
					</div>

				</div>
			</div>

			

			{/* <div className="brochure-card">
				<div className="card-background"></div>
				<div className="card-background-2"></div>
				<div className="card-info">
					<h3>All about the team!</h3>
					<ul>
						<li>Easy to work with.</li>
						<li>Cheering others along.</li>
						<li>Facing obstacles with optimism.</li>
						<li>Striving for a healthy work/life balance.</li>
					</ul>
				</div>
				<div className="card-img">
					<img src="https://via.placeholder.com/250" />
				</div>
			</div> */}

			{/* <div className="brochure-card">
				<div className="card-background"></div>
				<div className="card-background-2"></div>
				<div className="card-img">
					<img src="https://via.placeholder.com/250" />
				</div>
				<div className="card-info">
					<h3>A good web UI is...</h3>
					<ul>
						<li>Mobile first and Responsive</li>
						<li>Legacy and cross browser supportive</li>
						<li>Accessible and intuitive</li>
					</ul>
				</div>
			</div> */}

			{/* <div className="brochure-card">
				<div className="card-background"></div>
				<div className="card-background-2"></div>
				<div className="card-info">
					<h3>Dev considerations</h3>
					<ul>
						<li>Package management, tree shaking, and bundling</li>
						<li>Linting, Type checking and test driven development</li>
						<li>Version control, agile cycles, and continuous integration</li>
						<li>safe, secure and responsible creations</li>
					</ul>
				</div>
				<div className="card-img">
					<img src="https://via.placeholder.com/250" />
				</div>
			</div> */}

		</div>
	);
};

export default Brochure;
