
/* Main dependency imports */
import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

interface ProjectPropTypes {
	isEven: boolean;
	id: number | string;
	title: string;
	shortDescription: string;
	imgs: string[];
	links: {
		name: string;
		url: string;
	}[],
	stack: string[];
	description: string[];
}

const Project = (props: ProjectPropTypes): JSX.Element => {

	/* Set state for modal open state */
	const [modOpen, setModOpen] = useState<boolean>(false);

	/* When page renders add target="_blank" to links in description text so users aren't redirected away from portfolio */
	useEffect(() => [...document.querySelectorAll('.project-description a')].forEach(a => a.setAttribute('target', '_blank')), []);

	/* Update modal open state */
	const handleModal = () => setModOpen(!modOpen);

	return (
		<div className={props.isEven ? 'project isEven' : 'project isOdd'}>
      
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
								<img src={ img } alt="Project screenshot" key={ `${i}-${props.description[i]}-${Math.random() * i}` } onClick={ handleModal } /> 
							);
						})
					}
				</div>
			</div>

			<div className="proj-link-wrapper flex-child">
				{
					props.links &&
					props.links.map((link, i) => <a href={ link.url } target="_blank" rel="noreferrer" key={ `${i}-${props.description[i]}-${Math.random() * i}` }>{link.name}</a>)
				}
			</div>

			<div className="proj-detail-wrapper flex-child">
				<h3>Technologies and techniques</h3>
				<ul>
					{
						props.stack &&
            props.stack.map((tech, i) => <li className="project-stack-item" key={ `${i}-${props.description[i]}-${Math.random() * i}` }>{ tech }</li>)
					}
				</ul>
			</div>

			<div className="proj-desc-wrapper">
				<h3>Description</h3>
				{
					props.description && 
          props.description.map((desc, i) => <ReactMarkdown className="project-description" key={ `${i}-${props.description[i]}-${Math.random() * i}` }>{ desc }</ReactMarkdown>)
				}
			</div>
		</div>
	); 
};

export default Project;
