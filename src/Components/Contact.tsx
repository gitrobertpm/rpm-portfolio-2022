
/* Main dependency imports */
import React, { useState, useEffect } from 'react';
// import { Navigate } from 'react-router-dom';

/* Image imports */
import myLogo from '../img/myLogo.svg';

/* RegEx for checking valid email */ 
const emailValidationPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/* Static front end contact component that leverages Google forms */
/* Custom validation, error indications and redirect on success */
/* Got idea for Google powered form from: https://www.developerdrive.com/add-google-forms-static-site/ */
const Contact = (): JSX.Element => {

	const [lastOrCurrentField, setLastOrCurrentField] = useState<string>('');
	const [submitted, setSubmitted] = useState<boolean>(false);
	const [success, setSuccess] = useState<boolean>(false);
	const [errs, setErrs] = useState<boolean>(false);

	interface FieldDataTypes {
		value: string;
		touched: boolean;
		isValid: boolean;
		hasError: boolean;
	}

	const [nameState, setNameState] = useState<FieldDataTypes>({
		value: '',
		touched: false,
		isValid: false,
		hasError: false,
	});

	const [emailState, setEmailState] = useState<FieldDataTypes>({
		value: '',
		touched: false,
		isValid: false,
		hasError: false,
	});

	const [subjectState, setSubjectState] = useState<FieldDataTypes>({
		value: '',
		touched: false,
		isValid: false,
		hasError: false,
	});

	const [messageState, setMessageState] = useState<FieldDataTypes>({
		value: '',
		touched: false,
		isValid: false,
		hasError: false,
	});

	const updaters: { [key: string]: React.Dispatch<React.SetStateAction<FieldDataTypes>> } = {
		name: setNameState,
		email: setEmailState,
		subject: setSubjectState,
		message: setMessageState
	};

	const failConditions: { [key: string]: boolean } = {
		name: nameState.value.length < 1,
		email: !emailValidationPattern.test(emailState.value),
		subject: subjectState.value.length < 1,
		message: messageState.value.length < 1
	};

	const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		setLastOrCurrentField(e.target.id);
		updaters[e.target.id]((prevState: FieldDataTypes) => ({...prevState, value: e.target.value, touched: true }));
	};

	const validateField = (field: string) => {
		if (failConditions[field]) {
			updaters[field]((prevState: FieldDataTypes) => ({...prevState, isValid: false, hasError: true, touched: true }));
			return false;
		} 
		updaters[field]((prevState: FieldDataTypes) => ({...prevState, isValid: true, hasError: false }));
		return true;
	};

	const fields: string[] = ['name', 'email', 'subject', 'message'];
	const validationResults = (): boolean => !fields.map((field) => validateField(field)).includes(false);

	useEffect(() => {
		setErrs(false);
		if (lastOrCurrentField !== '') {
			if (!validateField(lastOrCurrentField)) {
				setErrs(true);
			}
		}

		if (submitted && !errs) {
			setSuccess(true);
		}

	}, [nameState.value, emailState.value, subjectState.value, messageState.value, submitted]);

	/* Submission handler */   
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		setSubmitted(true);

		if (!validationResults()) {
			e.preventDefault();
			setSubmitted(false);
			return setErrs(true);
		}

		return setErrs(false);
	};

	return (
		<div className="about-container">
			<div className="contact">
			
				<h3>Send me a message!🙂</h3>
				<p>Use the form below or email at: <i className="my-email">grobertpm@gmail.com</i></p>

				<iframe title="submitRedirect" name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} onLoad={ () => { if (success) { window.location.href='/about/thankyou'; }}}></iframe>

				<form action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSfJZvhhyETsg8kG6uiiaQCjQvrmsFN5Qt8d0oWPuHFcWbQDrQ/formResponse" method="post" target="hidden_iframe" onSubmit={ handleSubmit } noValidate>
					<label htmlFor="name" className={ nameState.touched && !nameState.isValid && nameState.hasError ? 'err-border' : undefined }>
						<span>Name:</span>
						<input type="text" id="name" name="entry.2005620554" value={ nameState.value } onChange={ handleFieldChange } />
					</label>
			
					<label htmlFor="email" className={ emailState.touched && !emailState.isValid && emailState.hasError ? 'err-border' : undefined }>
						<span>Email:</span>
						<input type="email" id="email" name="entry.1045781291" value={ emailState.value } onChange={ handleFieldChange } />
					</label>
				
					<label htmlFor="subject" className={ subjectState.touched && !subjectState.isValid && subjectState.hasError ? 'err-border' : undefined }>
						<span>Subject:</span>
						<input type="text" id="subject" name="entry.780687310" value={ subjectState.value } onChange={ handleFieldChange } />
					</label>
				
					<label htmlFor="message" className={ messageState.touched && !messageState.isValid && messageState.hasError ? 'err-border' : undefined }>
						<span>Message:</span>
						<textarea rows={ 5 } id="message" name="entry.839337160" value={ messageState.value } onChange={ handleFieldChange }></textarea>
					</label>

					{ errs &&
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
