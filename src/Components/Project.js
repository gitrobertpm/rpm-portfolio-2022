
/* Main dependency imports */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const Project = (props) => {

	/* Set state for modal open state */
	const [modOpen, setModOpen] = useState(false);

	/* When page renders add target="_blank" to links in description text so users aren't redirected away from portfolio */
	useEffect(() => [...document.querySelectorAll('.project-description a')].forEach(a => a.setAttribute('target', '_blank')), []);

	/* Update modal open state */
	const handleModal = () => setModOpen(!modOpen);

	return (
		<div className={props.isEven ? 'project isEven' : 'project isOdd'} key={ props.id }>
      
			<h2 className="project-title flex-child">{props.title}</h2>

			{
				props.shortDescription && <p className="proj-short-description">{ props.shortDescription }<br /><br /></p>
			}

			<div className="proj-img-wrapper flex-child">
				<div className={ modOpen ? 'modal' : 'proj-img-box'}>
					<button type="button" onClick={ handleModal }>X</button>
					{
						props.imgs && 
						props.imgs.map((img, i) => { 
							return (
								<img src={ img } alt="Project screenshot" key={i} onClick={ handleModal } /> 
							);
						})
					}
				</div>
			</div>

			<div className="proj-link-wrapper flex-child">
				{
					props.links &&
					props.links.map((link, i) => <a href={ link.url } target="_blank" rel="noreferrer" key={i}>{link.name}</a>)
				}
			</div>

			<div className="proj-detail-wrapper flex-child">
				<h3>Technologies and techniques</h3>
				<ul>
					{
						props.stack &&
            props.stack.map((tech, i) => <li className="project-stack-item" key={i}>{ tech }</li>)
					}
				</ul>
			</div>

			<div className="proj-desc-wrapper">
				<h3>Description</h3>
				{
					props.description && 
          props.description.map((desc, i) => <ReactMarkdown className="project-description" key={i}>{ desc }</ReactMarkdown>)
				}
			</div>
		</div>
	); 
};

Project.propTypes = {
	isEven: PropTypes.bool,
	id: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	title: PropTypes.string,
	shortDescription: PropTypes.string,
	imgs: PropTypes.arrayOf(PropTypes.string),
	links: PropTypes.arrayOf(PropTypes.exact({
		name: PropTypes.string,
		url: PropTypes.string
	})),
	stack: PropTypes.arrayOf(PropTypes.string),
	description: PropTypes.arrayOf(PropTypes.string)
};

export default Project;
