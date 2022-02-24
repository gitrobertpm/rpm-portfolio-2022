
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate, Navigate } from 'react-router-dom';

/* Component imports */
import Project from './Project';

/* Data imports */
import projectsData from '../data/projects.json';

/* Img imports */
import imgObj from '../data/projImgRef';

const ProjectsCarousel = () => {

	const projectMenuElement = useRef(null);

	const [currentProjectPath, setCurrentProjectPath] = useState('bsn-sports-(coming-soon)');
	const [left, setLeft] = useState(40);
	const [isEven, setIsEven] = useState(false);

	const navigateTo = useNavigate();
	const location = useLocation();
	const pathname = location.pathname;
	const projectPathname = pathname.slice(pathname.lastIndexOf('/') + 1);

	// Convert title to pathlike strings
	const pathify = (str) => str.trim().toLowerCase().replaceAll(' ', '-');

	// Collection of project titles in pathlike form
	const projectPaths = projectsData.map((proj) => pathify(proj.title));

	// Current project pathname
	const currentProject = projectsData[projectPaths.indexOf(currentProjectPath)];

	// Scroll to top function
	const scroller = () => window.scrollTo(0, 0);

	// Helper functions to get width of menu and to get the number of links displayed in menu at current width
	const getWidth = (el) => +window.getComputedStyle(el, null).getPropertyValue('width').slice(0, 3);
	// const getItemsDisplayed = (width) => width / 66;

	// Update display
	useEffect(() => {

		// Handle menu positioning based on width and number of projects
		const width = getWidth(projectMenuElement.current);
		const total = projectPaths.length;
		const half = Math.round(total / 2);
		const currentIndex = projectPaths.indexOf(currentProjectPath);
		const widthByItems = ((total * 66) + 20);
		const dif = widthByItems - width;
		const split = Math.ceil((dif / total) + (currentIndex / half));
		const offset = -(split * currentIndex) + 40;

		setLeft(`${offset}px`);
		setIsEven(!isEven);

		if (projectPathname !== currentProjectPath) {
			return setCurrentProjectPath(projectPathname);
		}
	}, [projectPathname, currentProjectPath, navigateTo]);

	// Menu arrow functionality
	const handleLeftClick = () => {
		const nextIndy = projectPaths.indexOf(currentProjectPath) - 1;
		scroller();
		if (nextIndy >= 0) {
			return navigateTo(`/projects/${projectPaths[nextIndy]}`);
		} else {
			return navigateTo(`/projects/${projectPaths[projectPaths.length - 1]}`);
		}
	};

	const handleRightClick = () => {
		const nextIndy = projectPaths.indexOf(currentProjectPath) + 1;
		scroller();
		if (nextIndy <= projectPaths.length - 1) {
			return navigateTo(`/projects/${projectPaths[nextIndy]}`);
		} else {
			return navigateTo(`/projects/${projectPaths[0]}`);
		}
	};

	return (
		<div className="projects-container">
			<div className="wallpaper"></div>
			
			<div className="projects-retainer">

				<div className="projects-menu-wrapper">
					<div className="projects-menu" ref={ projectMenuElement }>
						<button className="project-menu-left" onClick={ handleLeftClick }>{`<`}</button>
						<div className="project-menu-carousel" style={{ left: `${left}` }}>
							{
								projectsData.map((proj, i) => {
									return (
										<NavLink 
											to={`/projects/${pathify(proj.title)}`} 
											onClick={ scroller }
											className="project-menu-project-link" 
											key={ `${i} - ${proj.title}` }
											style={{ backgroundImage: `url(${imgObj[proj.imgKey][0]})`, backgroundSize: 100 + '%' }}
										>											
										</NavLink>
									);
								})
							}
						</div>
						<button className="project-menu-right" onClick={ handleRightClick }>{`>`}</button>
					</div>
				</div>

				<h2 className="top-heading projects-heading">Checkout some of my work</h2>

				{
					projectPaths.includes(projectPathname) ?
						<Project 
							isEven={isEven}
							id={currentProject.id}
							title={currentProject.title}
							shortDescription={currentProject.shortDescription}
							description={currentProject.description}
							stack={currentProject.stack}
							links={currentProject.links}
							imgs={currentProject.imgKey && imgObj[currentProject.imgKey]}
						/> :
						<Navigate to="/notfound" replace />
				}

			</div>
		</div>
	);  
};

export default ProjectsCarousel;
