
/* Main dependency imports */
import React, { useState } from 'react';

/* Data imports */
import quotes from '../data/quotes.json';

/* Img imports */
import myLogo from '../img/myLogo.svg';

const Bio = () => {

	/* Set state for current quote */
	const [curQuote, setCurQuote] = useState(quotes[0]);

	/* Grab a random quote */
	const getRan = () => quotes[Math.ceil(Math.random() * quotes.length - 1)];

	/* Update quote and prevent duplicates */
	const updateQuote = () => {
		let newQuote = getRan();
		while (newQuote.quote === curQuote.quote) newQuote = getRan();
		setCurQuote(newQuote);
	};

	/* Deconstruct quote properties */
	const { quote } = curQuote;
	const { citation } = curQuote;

	return (
		<div className="about-container">
			<div className="bio-container">

				<div className="bio">
					<h3>~ A bit about me ~</h3>

					<p>Top three priorities at work:</p>
					<ul>
						<li>Be easy to work with.</li>
						<li>Be a good team member.</li>
						<li>Go the extra mile to do a good job.</li>
					</ul>
					<br />
					<p>I started playing around with web development back in 2014.  Fell in love right away.  Studied for a couple years and landed myself a small contract role as a mentor at an online coding bootcamp in March of 2016.  Been working in this industry ever since.  Most recently as a Frontend React Developer for a mid-size firm building enormous applications for large corporate clients.</p>
					<br />
					<p>{`And when I'm not working, I love to learn new things and spend time with my family.  I love to watch movies and play the guitar and play video games with my kids.  I love the outdoors, but don't get out there as much as I should. I love to read and build things but don't get to them as much as I'd like.  And whenever possible, I love to ponder the meaning of life, the nature of reality, the essence of truth, the mystery of consciousness, and the clockworks of the human condition.`}</p>
					<br />
					<span>😎</span>
				</div>

				<div className="quote-box">  
					<div className="quote-display" onClick={ updateQuote }>
						<h2 className="top-heading bio-heading">Quotes</h2> 
						<p className="quote-heading"><i>Favorite quotes can be revealing.  Click here to see more of mine.</i></p>
						<p className="quote code">{ quote }</p>
						<p className="citation"><i>{ citation }</i></p>
					</div>
					<img className="my-logo" src={myLogo} alt="My Logo" />
				</div>
			</div>
		</div>
	); 
};

export default Bio;
