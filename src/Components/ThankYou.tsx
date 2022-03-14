
import React from 'react';

/* Image imports */
import myLogo from '../img/myLogo.svg';

const ThankYou = (): JSX.Element => {
	return (
		<div className="about-container">
			<div className="thank-you">

				<h2 className="top-heading thank-you-heading">Thanks for reaching out!</h2>

				<img className="my-logo" src={ myLogo } alt="My Logo" />
        
			</div>
		</div>
	);
};

export default ThankYou;
