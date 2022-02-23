
import React from 'react';
import PropTypes from 'prop-types';

const Imgs = (props) => {
	return (
		<div className="mod-img-wrap">
			{ props.children }
		</div>
	);
};

Imgs.propTypes = {
	children: PropTypes.element
};

const Modal = () => {
	return (
		<div className="modal-container">
			<div className="modal">
				<button type="button">X</button>
				<Imgs> props.component </Imgs>
			</div>
		</div>
	);
};

export default Modal;
