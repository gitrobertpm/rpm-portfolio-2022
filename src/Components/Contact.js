
/* Main dependency imports */
import React, { useState } from 'react';

/* Component imports */
import About from './About';

/* Image imports */
import myLogo from '../img/myLogo.svg';

/* RegEx for checking valid email */ 
const ev = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/* Static front end contact component */
/* Custom validation, error indications and redirect on success */
/* Got idea for Google powered form from: https://www.developerdrive.com/add-google-forms-static-site/ */
const Contact = () => {

	/* Set initial state for form data */
	const [formData, setFormData] = useState({
		'entry.2005620554': {
			'name': 'name',
			'value': ''
		},
		'entry.1045781291': {
			'name': 'email',
			'value': ''
		},
		'entry.780687310': {
			'name': 'subject',
			'value': ''
		},
		'entry.839337160': {
			'name': 'message',
			'value': ''
		},
	});

	/* Set error trackers to false initially */
	const errsStartState = {
		'name': false,
		'email': false,
		'subject': false,
		'message': false
	};

	/* Handle err and submitted state */ 
	const [errs, setErrs] = useState(errsStartState);
	const [submitted, setSubmitted] = useState(false);

	/* Update form data state as changes occur to input element */
	const handleChange = e => 
		setFormData(prevState => ({ ...prevState, [e.target.name]: { ...prevState[e.target.name], 'value': e.target.value } } ));

	/* Submission handler */   
	const handleSubmit = e => {

		/* Reset form errors state */ 
		setErrs(errsStartState);

		/* Loop over form data to check for empty strings, set errors and prevent submission if found */ 
		Object.keys(formData).forEach(key => {
			if (!formData[key]['value']) {
				e.preventDefault();
				setErrs(prevState => ({ ...prevState, [formData[key]['name']]: true }));
			}
		});

		/* If email invalid, set error in state and prevent submission */ 
		if (!ev.test(formData['entry.1045781291'].value)) {
			e.preventDefault();
			setErrs(prevState => ({ ...prevState, 'email': true }));
		} 

		/* Mark submission true to trigger custom redirect */ 
		setSubmitted(true);
	};

	return (
		<div className="about-container">
			<About />
			<div className="contact">

				{/* <h2 className="top-heading contact-heading">Contact</h2> */}
				<h3>Send me a message!🙂</h3>
				<p>Use the form below or email at: <i className="my-email">grobertpm@gmail.com</i></p>

				<iframe title="submitRedirect" name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} onLoad={ () => { if (submitted) { window.location='/about/thankyou'; }}}></iframe>

				<form action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSfJZvhhyETsg8kG6uiiaQCjQvrmsFN5Qt8d0oWPuHFcWbQDrQ/formResponse" method="post" target="hidden_iframe" onSubmit={ handleSubmit } noValidate>
					<label htmlFor="name" className={ errs.name ? 'err-border' : null }>
						<span>Name:</span>
						<input type="text" id="name" name="entry.2005620554" value={ formData['entry.2005620554']['value'] } onChange={ handleChange } />
					</label>
      
					<label htmlFor="email" className={errs.email ? 'err-border' : null}>
						<span>Email:</span>
						<input type="email" id="email" name="entry.1045781291" value={ formData['entry.1045781291']['value'] } onChange={ handleChange } />
					</label>
        
					<label htmlFor="subject" className={errs.subject ? 'err-border' : null}>
						<span>Subject:</span>
						<input type="text" id="subject" name="entry.780687310" value={ formData['entry.780687310']['value'] } onChange={ handleChange } />
					</label>
        
					<label htmlFor="message" className={errs.message ? 'err-border' : null}>
						<span>Message:</span>
						<textarea rows="5" id="message" name="entry.839337160" value={ formData['entry.839337160']['value'] } onChange={ handleChange }></textarea>
					</label>

					{ Object.values(errs).includes(true) &&
            <p className="error-box">Please provide valid info for the fields marked in red.</p> 
					}
        
					<button type="submit">Send</button>

					<p>Powered by Google Forms</p>
				</form>

				<img className="my-logo" src={ myLogo } alt="My Logo" />
        
			</div>
		</div>
	);
};

export default Contact;
