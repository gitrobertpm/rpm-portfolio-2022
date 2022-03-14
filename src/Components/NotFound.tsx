
import React from 'react';

/* Image imports */
import myLogo from '../img/myLogo.svg';

const NotFound = (): JSX.Element => {
	return (
		<div className="not-found">

			<h2 className="top-heading not-found-heading">404 — Page Not Found</h2>

			<p><strong>{`Unfortunately, the page you're looking for doesn't exist.`}<br /><br />Live long and prosper.🖖</strong></p>

			<img className="my-logo" src={ myLogo } alt="My Logo" />
      
		</div>
	);
};

export default NotFound;
