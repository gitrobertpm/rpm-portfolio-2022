
/* Main imports */
import React from 'react'; 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

/* Component imports */
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import ProjectsCarousel from './Components/ProjectsCarousel';
import NotFound from './Components/NotFound';

/* Data imports */
import projectsData from './data/projects.json';

/* Stylesheets imports */
import './css/App.css';
import './css/brochure.css';
import './css/project.css';
import './css/projects-carousel.css';
import './css/about.css';
import './css/media-query.css';

/* Main container component - redirects root to home route and handles undefined routes */
const App = () => {

	// Convert title to pathlike strings
	const pathify = (str) => str.trim().toLowerCase().replaceAll(' ', '-');

	// Collection of project titles in pathlike form
	const projectPaths = projectsData.map((proj) => pathify(proj.title));

	return (
		<BrowserRouter>
			<div className="App">
				<Nav />
				<Routes>
					<Route path="/" element={ <Navigate to="/home" replace /> } />
					<Route path="/home" element={ <Home /> } />

					<Route path="/about/:id" element={ <About /> } />
					<Route path="/about" element={ <Navigate to="/about/bio" replace /> } />

					<Route path="/projects/:id" element={ <ProjectsCarousel /> } />
					<Route path="/projects" element={ <Navigate to={`/projects/${projectPaths[0]}`} replace /> } />
					
					<Route path="/notfound" element={ <NotFound /> } />
					<Route path="/*" element={ <Navigate to="/notfound" /> } />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
