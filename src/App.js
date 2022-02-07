
/* Main container component */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

/* Component imports */
import Nav from './Components/Nav';
import Home from './Components/Home';
import Projects from './Components/Projects';
import ProjectsCarousel from './Components/ProjectsCarousel';


import Bio from './Components/Bio';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Props from './Components/Props';
import ThankYou from './Components/ThankYou';
import NotFound from './Components/NotFound';

/* Stylesheets imports */
import './css/App.css';
import './css/project.css';
import './css/about.css';
import './css/media-query.css';

/* Main container component - redirects root to home route and handles undefined routes */
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">

        <Nav />

        <Routes>
          <Route exact path="/" element={ <Navigate to="/home" /> } />
          <Route exact path="/home" element={ <Home /> } />
          <Route exact path="/projects" element={ <ProjectsCarousel /> } />

          {/* <Route path="/about/*" element={ <About /> } /> */}

          <Route exact path="/about" element={ <Navigate to="/about/bio" /> } />
          <Route exact path="/about/bio" element={ <Bio /> } />
          <Route exact path="/about/experience" element={ <Experience /> } />
          <Route exact path="/about/contact" element={ <Contact /> } />
          <Route exact path="/about/props" element={ <Props /> } />
          <Route exact path="/about/thankyou" element={ <ThankYou /> } />
          <Route exact path="/notfound" element={ <NotFound /> } />
          
          <Route path="/about/*" element={ <NotFound /> } />

          <Route element={ <Navigate to="/notfound" /> } />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
