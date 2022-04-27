
/* Main dependency imports */
import React, { useState, useEffect } from 'react';

/* Data imports */
import quotes from '../data/quotes.json';
import dIslands from '../data/desertIsl.json';

/* Img imports */
import myLogo from '../img/myLogo.svg';

const Bio = (): JSX.Element => {

	// Helper to get a random index from an array
	const ranIndy = (arrLength: number): number => Math.floor(Math.random() * arrLength);

	interface Quote {
		quote: string;
		citation: string;
	}

	// Handle quotes
	const [quotesToPullFrom, setQuotesToPullFrom] = useState<Quote[]>([...quotes]);
	const [curQuote, setCurQuote] = useState<Quote>(quotes[0]);
	const [quoteCounter, setQuoteCounter] = useState<number>(0);
	const [quotesIsOpen, setQuotesIsOpen] = useState<boolean>(false);

	const handleQuoteOpen = () => setQuotesIsOpen(!quotesIsOpen);

	// Update quote, determine first three quotes and prevent duplicates until all quotes have been displayed
	const updateQuote = () => {
		let newQuote;

		if (quoteCounter < 3) {
			newQuote = quotesToPullFrom.splice(0, 1)[0];
			setQuoteCounter(quoteCounter + 1);
		} else {
			const i = ranIndy(quotesToPullFrom.length);
			newQuote = quotesToPullFrom.splice(i, 1)[0];
		}

		setCurQuote(newQuote);

		if (quotesToPullFrom.length === 0) {
			setQuoteCounter(0);
			return setQuotesToPullFrom([...quotes]);
		}

		return setQuotesToPullFrom(quotesToPullFrom);
	};

	// Deconstruct quote properties
	const { quote } = curQuote;
	const { citation } = curQuote;

	interface DesertIsl {
		category: string;
		details: string;
		selections: string[]
	}
	
	// Handle Desert Island
	const [curDesertIsland, setCurDesertIsland] = useState<DesertIsl>(dIslands[0]);
	const [desertIslIsOpen, setDesertIslIsOpen] = useState<boolean>(false);

	const handleDesertIslOpen = () => setDesertIslIsOpen(!desertIslIsOpen);

	const updateDesertIsland = () => {

		const dIslCategories = dIslands.map((dIsl) => dIsl.category);
		const curDesIslIndy = dIslCategories.indexOf(curDesertIsland.category);
		
		if (curDesIslIndy === dIslCategories.length - 1) {
			return setCurDesertIsland(dIslands[0]);
		}

		return setCurDesertIsland(dIslands[curDesIslIndy + 1]);
	};

	// Deconstruct desert island properties
	const { category } = curDesertIsland;
	// const { details } = curDesertIsland;
	const { selections } = curDesertIsland;
	
	useEffect(() => {
		if (quoteCounter === 0) {
			updateQuote();
		}
	});

	return (
		<div className="about-container">
			<div className="bio-container">

				<div className="bio">
					<h3>~ A bit about me ~</h3>

					<p>{`I'll be a developer for the rest of my life because it's not only a career, it's a passion. The joy of solving a tricky bugfix or code challenge is downright addictive. And nothing gets me in the zone like working on some project I'm into. That's when I lose track of time and the world falls away and all there is is the code.`}</p>
					<br />

					<p>{`But I didn't start in web development.`}</p>

					<p>{`Worked in construction first. I loved fixing things and building things and I was good at it. But after a few years, I realized I couldn't see myself doing it forever.`}</p>
					<br />

					<p>{`Bartending was next. I loved handling the rush and putting smiles on people's faces and I was good at it. But again, I wasn't sure if I wanted to do it forever.`}</p>
					<br />

					<p>{`Necessity required that I become a stay-at-home father next. I loved those years spent with my kids and being there for my special needs son and I hope I was good at it. But I knew I couldn't do it forever.`}</p>
					<br />

					<p>{`So I started playing around with web development in 2014. Fell in love with it right away. Studied for a couple years and landed myself a small contract role as a mentor at an online coding bootcamp.`}</p>
					<br />

					<p>{`And that's when I knew what I wanted to do for the rest of my life. I found a whole new way to build things and fix things and put smiles on people's faces: web development. I finally knew what I wanted to be when I grew up: a developer.`}</p>
					<br />

					<p>{`So I continued studying and worked my way up to running a couple bootcamps. And in 2021, I worked a short contract role as a Front-end React Developer.`}</p>
					<br />

					<p>{`That contract ended earlier this year and now I'm looking for the next chapter in my journey.`}</p>
					<br />

					<p>{`What I’m looking for:`}</p>
					<ul>
						<li>Junior to mid-level front end developer role.</li>
						<li>Remote only.</li>
						<li>Pacific time zone.</li>
						<li>Full or part time okay.</li>
						<li>{`Prefer long term W2, but contract is okay. (Authorized to work in the US if that matters.)`}</li>
					</ul>

					<p>{`Professional Experience:`}</p>
					<ul>
						<li>Nearly 6 years programming, styling and debugging websites and apps with JavaScript, CSS, HTML, and general front end technologies.</li>
						<li>Approximately 3 years building with React - functional components and hooks.</li>
						<li>Approximately 1 year building sites, APIs and databases on the back end with Node, Express, SQLite and REST.</li>
						<li>Approximately .5 years developing in a production environment.</li>
					</ul>

					<p>{`And when I'm not working or writing code, I love to learn new things and spend time with my family. I love to watch movies and play the guitar and play video games with my kids. I love the outdoors, but don't get out there as much as I should. I love to read and build things. And whenever possible, I love to ponder the meaning of life, the nature of reality, the essence of truth, the mystery of consciousness, and the clockworks of the human condition.`}</p>
					<br />
					<span>😎</span>

					<button className="quote-btn" onClick={ handleQuoteOpen }>Quotes</button>
					{/* <button className="desert-island-btn" onClick={ handleDesertIslOpen }>Desert Isl.</button> */}
				</div>

				<div className={`quote-box ${ quotesIsOpen && 'open-quote-box' }`}>  
					<div className="quote-display" onClick={ updateQuote }>
						<button className="quote-close-btn" onClick={ handleQuoteOpen }><strong>X</strong></button>
						<h2 className="top-heading bio-heading">Quotes</h2> 
						<p className="quote-heading"><i>Favorite quotes can be revealing.  Click here to see more of mine.</i></p>
						<p className="quote code">{ quote }</p>
						<p className="citation"><i>{ citation }</i></p>
					</div>
				</div>

				<div className={`quote-box desert-island-box ${ desertIslIsOpen && 'open-quote-box' }`}>  
					<div className="quote-display" onClick={ updateDesertIsland }>
						<button className="quote-close-btn" onClick={ handleDesertIslOpen }><strong>X</strong></button>
						<h2 className="top-heading bio-heading desert-island-heading">Desert Island</h2> 
						<p className="quote-heading">Trapped on a desert island forever, which five items would you bring?</p>
						<p className="quote-heading">Responses can tell you a lot about a person.  Below are my answers to a few categories.</p>
						<p className="quote-heading">Click here to see more.</p>
						<div className="desert-island-display">
							<h3 className="di-category">{ category }:</h3>
							{/* <p className="di-details">{ details }</p> */}
							<ul className="di-selections">
								{ selections?.map((sel, i) => <li className="di-selection" key={`${i}-sel`}>{ sel }</li>) }
							</ul>
						</div>
						
					</div>
				</div>
			</div>
			<img className="my-logo" src={ myLogo } alt="My Logo" />
		</div>
	); 
};

export default Bio;
