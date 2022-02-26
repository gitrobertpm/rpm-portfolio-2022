
/* Main dependency imports */
import React, { useState, useEffect } from 'react';

/* Data imports */
import quotes from '../data/quotes.json';
import dIslands from '../data/desertIsl.json';

/* Img imports */
import myLogo from '../img/myLogo.svg';

const Bio = () => {

	// Helper to get a random index from an array
	const ranIndy = (arr) => Math.floor(Math.random() * arr.length);

	// Handle quotes
	const [quotesToPullFrom, setQuotesToPullFrom] = useState([...quotes]);
	const [curQuote, setCurQuote] = useState('');
	const [quoteCounter, setQuoteCounter] = useState(0);
	const [quotesIsOpen, setQuotesIsOpen] = useState(0);

	const handleQuoteOpen = () => setQuotesIsOpen(!quotesIsOpen);

	// Update quote, determine first three quotes and prevent duplicates until all quotes have been displayed
	const updateQuote = () => {
		let newQuote;

		if (quoteCounter < 3) {
			newQuote = quotesToPullFrom.splice(0, 1)[0];
			setQuoteCounter(quoteCounter + 1);
		} else {
			const i = ranIndy(quotesToPullFrom);
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

	
	// Handle Desert Island
	const [curDesertIsland, setCurDesertIsland] = useState('');
	const [desertIslIsOpen, setDesertIslIsOpen] = useState(0);

	const handleDesertIslOpen = () => setDesertIslIsOpen(!desertIslIsOpen);

	const updateDesertIsland = () => {

		const dIslCategories = dIslands.map((dIsl) => dIsl.category);
		const curDesIslIndy = dIslCategories.indexOf(curDesertIsland.category);
		
		if (curDesertIsland === '' || curDesIslIndy === dIslCategories.length - 1) {
			return setCurDesertIsland(dIslands[0]);
		}

		return setCurDesertIsland(dIslands[curDesIslIndy + 1]);
	};

	// Deconstruct desert island properties
	const { category } = curDesertIsland;
	const { details } = curDesertIsland;
	const { selections } = curDesertIsland;
	
	useEffect(() => {
		if (quoteCounter === 0) {
			updateQuote();
		}

		if (curDesertIsland === '') {
			updateDesertIsland();
		}
	});

	return (
		<div className="about-container">
			<div className="bio-container">

				<div className="bio">
					<h3>~ A bit about me ~</h3>

					<p>I started playing around with web development back in 2014.  Fell in love with it right away.  Studied for a couple years and landed myself a small contract role as a mentor at an online coding bootcamp in March of 2016.  Been working and growing in this industry ever since.  Most recently as a Frontend React Developer for a mid-size firm building enormous applications for large corporate clients.</p>
					<br />
					<p>{`I'm the ultimate team player.  And my positive friendly attitude is good for morale.  I prefer to take my time to try to get things right the first time.  And I take pride in my work and the hope that I'm making things better along the way.`}</p>
					<br />
					<p>{`And when I'm not working, I love to learn new things and spend time with my family.  I love to watch movies and play the guitar and play video games with my kids.  I love the outdoors, but don't get out there as much as I should. I love to read and build things.  And whenever possible, I love to ponder the meaning of life, the nature of reality, the essence of truth, the mystery of consciousness, and the clockworks of the human condition.`}</p>
					<br />
					<span>😎</span>

					<button className="quote-btn" onClick={ handleQuoteOpen }>Quotes</button>
					<button className="desert-island-btn" onClick={ handleDesertIslOpen }>Desert Isl.</button>
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
						<p className="quote-heading">This game can tell you a lot about a person.  Below are my answers to a few categories.</p>
						<p className="quote-heading">Click here to see more.</p>
						<div className="desert-island-display">
							<h3 className="di-category">{ category }:</h3>
							<p className="di-details">{ details }</p>
							<ul className="di-selections">
								{ selections?.map((sel, i) => <li className="di-selection" key={i}>{sel}</li>) }
							</ul>
						</div>
						
					</div>
				</div>
			</div>
			<img className="my-logo" src={myLogo} alt="My Logo" />
		</div>
	); 
};

export default Bio;
