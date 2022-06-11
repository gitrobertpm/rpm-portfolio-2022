
/* Main dependency imports */
import React, { useState, useEffect } from 'react';

/* Data imports */
import quotes from '../data/quotes.json';
// import dIslands from '../data/desertIsl.json';

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

	const [desertIslIsOpen, setDesertIslIsOpen] = useState<boolean>(false);

	const handleDesertIslOpen = () => setDesertIslIsOpen(!desertIslIsOpen);
	
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

					<p>{`I didn't start in web development. Before that my background was in construction and the service industry.`}</p>
					<br />

					<p>{`Construction and maintenance were cool because I love building things and fixing things. I love solving problems and figuring out how things work. And I was good at it.`}</p>
					<br />

					<p>{`Bartending and waiting tables was fun because I loved working with people and keeping things together during the rush and putting smiles on people's faces. And I was good at it.`}</p>
					<br />

					<p>{`But I never felt like I wanted to do those things for the rest of my life.`}</p>
					<br />

					<p>{`Then my son was diagnosed with Autism, which created a situation where I needed to be a stay-at-home dad. I worked odd jobs evenings and weekends when I could. And I took care of my three children: two daughters and one son.`}</p>
					<br />

					<p>{`Happy to report that after a few years, my son was doing okay. He had some support systems in place. And along with both my daughters, he was able to attend school fulltime.`}</p>
					<br />

					<p>{`That's when I started to plan my re-entry into the working world. But I wasn't super excited about jumping back into construction or the service industry and starting at the bottom after all that time.`}</p>
					<br />

					<p>{`That's when I discovered web development and learned how accessible it was. I had no idea this was an option for me. Thought you had to be some kind of mathematician, genius, MIT grad to work in this field. But in 2014 I found some great online resources like Codecademy, Udacity and Treehouse. I started learning some basic HTML and CSS, which was a blast. And when JavaScript started to make sense, I fell in love and finally knew what I wanted to do for the rest of my life. I found a whole new way to build things and fix things and put smiles on people's faces.`}</p>
					<br />

					<p>{`I studied for a couple years and landed myself a small contract role as a student mentor at an online coding school. Continued my studies, and within a short time, that gig turned into a fulltime role. Quickly I was promoted to running first the Front End Web Development bootcamp, and then the Full Stack JavaScript bootcamp.`}</p>
					<br />

					<p>{`That work was great. Mentoring students and coaching them through the learning process and imposter syndrome was extremely rewarding. And building, designing and curating the curriculum and supporting materials was an awesome experience. But for me, none of it was as fun or fulfilling as actually writing code and programming software.`}</p>
					<br />

					<p>{`So in 2021, I branched out and landed a short contract role as a Front-end React Developer. I learned a lot and the work was fun and rewarding. But the situation turned out to be something of a cautionary tale.`}</p>
					<br />

					<p>{`At the time I joined the project, it was already nearly a year overdue and on its fourth Project Manager. The client, who had grown impatient and had become difficult to work with, thought I was joining the project to replace a lead developer who was the latest dev to depart this challenging situation. And the Project manager and others in leadership weren't eager to correct this misunderstanding. So they put me in a leadership role, knowing full well that this was my first actual dev gig. And not knowing any better or wanting to disappoint anyone, I foolishly agreed.`}</p>
					<br />

					<p>{`Suffice it to say, it was a challenging and stressful situation. But I managed to keep my head above water for enough months and the project wound down as it approached its launch and the team started to run out of Jira tickets and my time there came to an end. That contract ended early 2021, and now I'm looking for the next chapter in my journey.`}</p>
					<br />

					<p>{`What you can take away from all this is that I'll be a developer for the rest of my life. Not because it's a career, but because it's a passion. The joy of solving a tricky bugfix or code challenge is straight up addictive. And nothing gets me in the zone like working on some project I'm into. That's when I lose track of time and the world falls away and all there is is the code. I love it!`}</p>
					<br />

					<p>{`And if you take a chance on me, and add me to your team, I promise won't let you down. I'll go the extra mile to work hard and well and help keep the team motivated and positive and pushing things ever forward.`}</p>
					<br />

					<p>{`And on a personal note, when I'm not working or writing code, I love to learn new things and spend time with my family. I love to watch movies and play the guitar and play video games with my kids. I love the outdoors, but don't get out there as much as I should. I love to read and build things. And whenever possible, I love to ponder the meaning of life, the nature of reality, the essence of truth, the mystery of consciousness, and the clockworks of the human condition.`}</p>
					<br />
					<span>😎</span>

					<button className="quote-btn" onClick={ handleQuoteOpen }>Quotes</button>
					<button className="desert-island-btn" onClick={ handleDesertIslOpen }>{`At a glance`}</button>
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

				<div className={`quote-box desert-island-box glance-box ${ desertIslIsOpen && 'open-quote-box' }`}>  
					<div className="quote-display glance-display">
						<button className="quote-close-btn" onClick={ handleDesertIslOpen }><strong>X</strong></button>
						<h2 className="top-heading bio-heading desert-island-heading">{`At a glance`}</h2> 
						<div className="desert-island-display">
							<h3 className="di-category">{`What I'm looking for:`}</h3>
							<ul className="di-selections">
								<li className="di-selection">Junior to mid-level front end developer role.</li>
								<li className="di-selection">Remote only.</li>
								<li className="di-selection">Pacific time zone preferred.</li>
								<li className="di-selection">Full or part time okay.</li>
								<li>{`Prefer direct hire, but contract is okay. (I'm a US citizen if that matters.)`}</li>
							</ul>

							<h3 className="di-category">{`Professional Experience:`}</h3>
							<ul className="di-selections">
								<li className="di-selection">Nearly 6 years programming, styling and debugging websites and apps with JavaScript, CSS, HTML, and general front end technologies.</li>
								<li className="di-selection">Approximately 3 years building with React - functional components and hooks.</li>
								<li className="di-selection">Approximately 1 year building sites, APIs and databases on the back end with Node, Express, SQLite and REST.</li>
							</ul>

							<h3 className="di-category">{`Blockers:`}</h3>
							<ul className="di-selections">
								<li className="di-selection">No degree.</li>
								<li className="di-selection">Most of my professional experience is in the education/mentor space rather than strictly in a production environment. But I am familiar and comfortable working with the software development lifecycle in an Agile environment as a front end dev.</li>
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
