
import React from 'react';

interface ChildrenTypes {
	children: React.ReactNode
}

const Imgs = (props: ChildrenTypes) => {
	return (
		<div className="mod-img-wrap">
			{ props.children }
		</div>
	);
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
