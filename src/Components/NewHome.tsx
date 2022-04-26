
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../css/newhome.css';

import mail from '../img/icons/mail.png';
import github from '../img/icons/gh.png';
import linkedin from '../img/icons/li.png';
import teamworkPic from '../img/backgrounds/teamwork.png';
import devPic from '../img/backgrounds/dev-2.png';
import designPic from '../img/backgrounds/design-2.png';
import yyPic from '../img/icons/yySmiley.png';
import projectsPic from '../img/icons/projects-icon.png';

interface CardTextTypes {
	title: string;
	bullets: string[];
	icon?: string;
	imgUrl?: string
}

interface CardTypes {
	[key: string]: CardTextTypes;
}

const cardText: CardTypes = {
	'team': {
		'title': 'Team Theory',
		'bullets': [
			'Be easy to work with.',
			'Cheer others along.',
			'Face obstacles with optimism.',
			'Foster a culture of support.',
			'Strive for a healthy work/life balance.',
		],
		'icon': '✅',
		'imgUrl': teamworkPic
	},
	'design': {
		'title': 'The Tao of Design',
		'bullets': [
			'Mobile first and Responsive.',
			'Accessible and Semantic.',
			'Legacy and cross browser supportive.',
			'Fail gracefully when necessary.',
			'Unobtrusive and progressively enhanced.',
		],
		'icon': '🎨',
		'imgUrl': designPic
	},
	'dev': {
		'title': 'Development Concerns',
		'bullets': [
			'Modular and extensible code.',
			'Type checking and test driving.',
			'Version control and Agile methods.',			
			'Secure and responsible web creations.',
		],
		'icon': '⚙️',
		'imgUrl': devPic
	},
	'me': {
		'title': 'A Bit About Me',
		'bullets': [
			'Checkout the [About](/about) section to learn more about me.',
		],
		'imgUrl': yyPic
	},
	'projects': {
		'title': 'My Projects',
		'bullets': [
			`Peruse the [Projects](/projects) section to see some of my work.`,
		],
		'imgUrl': projectsPic
	},
};

const linker = (str: string) => {
	if (str.includes('](')) {
		const opener = str.slice(0, str.indexOf('['));
		const linkText = str.slice(str.indexOf('[') + 1, str.indexOf(']'));
		const linkPath = str.slice(str.indexOf('(') + 1, str.indexOf(')'));
		const closer = str.slice(str.indexOf(')') + 1);
		return <span>{ opener } <Link to={ linkPath }>{ linkText }</Link> {closer}</span>;
	}
	return 'Linker Error';
};

interface KeyCardPropsTypes {
	cardText: CardTextTypes;
	cardClass: string;
	id: string;
	ref?: React.MutableRefObject<HTMLDivElement | null>;
}

const KeyCard = (props: KeyCardPropsTypes): JSX.Element => {
	return (
		<div className={`key-card animate__animated customDuration ${props.cardClass}`}>
			{
				props.cardText.imgUrl && 
				<span className="key-card-image" style={{ backgroundImage: `url(${props.cardText.imgUrl})` }}></span>
			}
			
			<h3>{props.cardText.title}</h3>
			<ul>
				{
					props.cardText.bullets.map((bullet, i) => {
						return (
							<li key={`${i}-${bullet.slice(0, 5)}-${Math.floor(Math.random() * i) + i}`}>
								{
									props.cardText.icon && 
									<span className="key-card-icon">{props.cardText.icon}</span>
								}
								{
									bullet.includes('](') ?
										linker(bullet) :
										bullet
								}
							</li>
						);
					})
				}
			</ul>
		</div>
	);
};

const NewHome = (): JSX.Element => {

	const [currentCard, setCurrentCard] = useState<number>(0);
	const [activeBtn, setActiveBtn] = useState<number>(0);
	const [cardClass, setCardClass] = useState('animate__backInRight fourth');

	const cardKeys = Object.keys(cardText);

	let interval: ReturnType<typeof setInterval>;

	useEffect(() => {
		interval = setInterval(() => {
			setCardClass('animate__backOutLeft');
			setTimeout(() => {	
				if (currentCard === cardKeys.length - 1) {
					setActiveBtn(0);
					setCurrentCard(0);
					setCardClass('animate__backInRight');
					return;
				}
				setActiveBtn(activeBtn + 1);
				setCurrentCard(currentCard + 1);
				setCardClass('animate__backInRight');
			}, 500);
			
		}, 9000);
		return () => clearInterval(interval);
	});

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		const id = +e.currentTarget.id;
		setCardClass('animate__backOutLeft');
		setActiveBtn(id);

		setTimeout(() => {
			setCurrentCard(id);
			setCardClass('animate__backInRight');
			clearInterval(interval);
		}, 500);
	};

	const handleEnter = (e: React.MouseEvent<HTMLDivElement>): void => {
		console.log('e: ', e);
	};

	const handleExit = (e: React.MouseEvent<HTMLDivElement>): void => {
		console.log('e: ', e);
	};

	return (
		<>
			<div className="curtain"></div>	
			<header className="App-header">
				<div className="App-header-wrap">
					<div className="home-name-box">
						<h1 className="animate__animated animate__zoomIn customDuration first">Robert Manolis</h1>
						<h3 className="nunito animate__animated animate__zoomIn customDuration third">Web Developer</h3>
						<h6 className="nunito animate__animated animate__zoomIn customDuration third">Portfolio - 2022</h6>
					</div>

					<div className="header-contact-link-box animate__animated animate__zoomIn customDuration third">
						<Link to="/about/contact" title="Contact"><img src={mail} alt="Mail icon" /></Link>
						<a href="https://github.com/gitrobertpm" className="contact-link cl-github" title="GitHub"><img src={github} alt="GitHub icon" /></a>
						<a href="https://www.linkedin.com/in/robertpm/" className="contact-link cl-linkedin" title="LinkedIn"><img src={linkedin} alt="LinkedIn icon" /></a>
					</div>
				</div>

				<div className="card-btn-box">
					{
						cardKeys.map((key, i) => {
							return (
								<button 
									id={ `${i}` }
									key={ `${key}-btn-${i}` } 
									type="button" 
									onClick={ handleClick }
									className={ `carousel-btn ${i === activeBtn && 'active-btn'}` }
								></button>
							);
						})
					}
				</div>

				<div className="key-card-box" onMouseEnter={ handleEnter } onMouseLeave={ handleExit }>
					{
						cardKeys.map((key, i) => {
							return (
								<KeyCard 
									id={ `${i}` } 
									key={`${key}-card-${i}`} 
									cardText={ cardText[cardKeys[i]] } 
									cardClass={ `${cardClass} key-card-${i + 1} ${i === currentCard && 'current-card'}` } 
								/>
							);
						})
					}
				</div>

			</header>
			<div className="banner"></div>
		</>
	);
};

export default NewHome;
