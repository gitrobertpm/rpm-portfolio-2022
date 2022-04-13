
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import myLogo from '../img/myLogo.svg';
import teamworkPic from '../img/backgrounds/teamwork.png';
import devPic from '../img/backgrounds/dev-2.png';
import designPic from '../img/backgrounds/design-2.png';

interface GreenCheckTypes {
	handle: string | null;
	turn: string;
	icon: string;
	timer: number;
}

const GreenCheck = (prop: GreenCheckTypes): JSX.Element => {
	const anie: string = prop.handle === prop.turn ? `gc ${0.3}s ${prop.timer}s forwards` : 'none';
	return (
		<span 
			className="green-check"
			style={{animation: anie}}
		>{prop.icon}</span>
	);
};

const Brochure = (): JSX.Element => {

	// Scroll to top helper function
	const scroller = () => window.scrollTo(0, 0);

	const first = useRef<null | HTMLDivElement>(null);
	const second = useRef<null | HTMLDivElement>(null);
	const third = useRef<null | HTMLDivElement>(null);

	const [turn, setTurn] = useState<string | null>('first');
	const [lastTurn, setLastTurn] = useState<React.SetStateAction<string | null>>('');
	const [isAnimated, setIsAnimated] = useState<boolean>(false);

	const updateTurn = () => setTurn((prev) => prev === 'first'? 'second' : prev === 'second' ? 'third' : 'first');

	let interval: ReturnType<typeof setInterval>;

	useEffect(() => {
		if (window.innerWidth > 767 && !isAnimated) {
			interval = setInterval(() => {
				updateTurn();
			}, 3000);
			return () => clearInterval(interval);
		}
	});

	// Handle user interaction of lists and turning the animation on and off
	const handleEnter = () => {
		setLastTurn(turn);
		setTurn(null);
		setIsAnimated(true);
		clearInterval(interval);
	};

	const handleExit = () => {
		setTurn(lastTurn);
		setLastTurn('');
		setIsAnimated(false);
	};

	const gct = 0.3;

	return (
		<div className="brochure">
			<div className="wallpaper"></div>
			<h2 className="top-heading brochure-heading">Reasons you might want to work with me</h2>
			<div className="diagram">
				<div className="content">
					<div 
						className={ `team satellite expandable ${turn === 'first' && 'expanded-satellite'}` } 
						ref={ first } 
						tabIndex={ 3 } 
						style={{ backgroundImage: `url(${teamworkPic})` }}
						onMouseEnter={ handleEnter }
						onMouseLeave={ handleExit }
					>
						<h3>Team Theory</h3>
						<h4>{`It's all about the team!`}</h4>
						<ul className={ `${turn === 'first' && 'expanded-ul'}` }>
							<li><GreenCheck handle={ turn } turn="first" icon="✅" timer={gct}/> Be easy to work with</li>
							<li><GreenCheck handle={ turn } turn="first" icon="✅" timer={gct + 0.1}/> Cheer others along</li>
							<li><GreenCheck handle={ turn } turn="first" icon="✅" timer={gct + 0.2}/> Face obstacles with optimism</li>
							<li><GreenCheck handle={ turn } turn="first" icon="✅" timer={gct + 0.3}/> Foster a culture of support</li>
							<li><GreenCheck handle={ turn } turn="first" icon="✅" timer={gct + 0.4}/> Strive for a healthy work/life balance</li>
						</ul>
					</div>

					<div 
						className={ `design satellite expandable ${turn === 'third' && 'expanded-satellite'}` } 
						ref={ second } 
						tabIndex={ 4 } 
						style={{ backgroundImage: `url(${designPic})` }}
						onMouseEnter={ handleEnter }
						onMouseLeave={ handleExit }
					>
						<h3>Tao of Design</h3>
						<h4>A good web UI is...</h4>
						<ul className={ `${turn === 'third' && 'expanded-ul'}` }>
							<li><GreenCheck handle={ turn } turn="third" icon="🎨" timer={gct}/> Mobile first and Responsive</li>
							<li><GreenCheck handle={ turn } turn="third" icon="🎨" timer={gct + 0.1}/> Legacy and cross browser supportive</li>
							<li><GreenCheck handle={ turn } turn="third" icon="🎨" timer={gct + 0.2}/> Accessible and intuitive</li>
							<li><GreenCheck handle={ turn } turn="third" icon="🎨" timer={gct + 0.3}/> Unobtrusive and progressively enhanced</li>
							<li><GreenCheck handle={ turn } turn="third" icon="🎨" timer={gct + 0.4}/> Built to fail gracefully where needed</li>
						</ul>
					</div>

					<div 
						className={ `development satellite expandable ${turn === 'second' && 'expanded-satellite'}` } 
						ref={ third } 
						tabIndex={ 5 }
						style={{ backgroundImage: `url(${devPic})` }}
						onMouseEnter={ handleEnter }
						onMouseLeave={ handleExit }
					>
						<h3>Dev Goals</h3>
						<h4>Process is paramount</h4>
						<ul className={ `${turn === 'second' && 'expanded-ul'}` }>
							{/* <li><GreenCheck handle={ turn } turn="second" icon="⚙️" timer={gct}/> Package management, tree shaking, and bundling</li> */}
							<li><GreenCheck handle={ turn } turn="second" icon="⚙️" timer={gct}/> Linting, type checking and test driven development</li>
							<li><GreenCheck handle={ turn } turn="second" icon="⚙️" timer={gct + 0.1}/> Version control, agile cycles, and continuous integration</li>
							<li><GreenCheck handle={ turn } turn="second" icon="⚙️" timer={gct + 0.2}/> DRY, modular and extensible code</li>
							<li><GreenCheck handle={ turn } turn="second" icon="⚙️" timer={gct + 0.3}/> Safe, secure and responsible creations</li>
						</ul>
					</div>

					<div className="center">
						<img className="my-logo" src={ myLogo } alt="My Logo" />
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
		</div>
	);
};

export default Brochure;
