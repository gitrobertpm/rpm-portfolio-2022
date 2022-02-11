
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

/* Component imports */
import Project from './Project';

/* Data imports */
import projectsData from '../data/projects.json';

/* Img imports imports */
import bsnUd from '../img/projects/bsn-ud.png';
import bsnAd from '../img/projects/bsn-ad.png';
import bsnMtswP from '../img/projects/bsn-mtsw-p.png';
import bsnMtswCc from '../img/projects/bsn-mtsw-cc.png';
import bsnMtswAs from '../img/projects/bsn-mtsw-as.png';
import bsnMtswAp from '../img/projects/bsn-mtsw-ap.png';
import portHome from '../img/projects/port-home.PNG';
import portHoMo from '../img/projects/port-ho-mo.PNG';
import tsHome from '../img/projects/ts-home-2.PNG';
import tsSettings from '../img/projects/ts-settings-2.PNG';
import tsTruths from '../img/projects/ts-truths-2.PNG';
import tsTruth from '../img/projects/ts-truth.PNG';
import ruBuJson from '../img/projects/ru-bu-json.PNG';
import ruBuReadme from '../img/projects/ru-bu-readme.PNG';
import ruBuSample from '../img/projects/ru-bu-sample.PNG';
import cwMath from '../img/projects/cw-math.PNG';
import cwOne from '../img/projects/cw-one.PNG';
import cwTwo from '../img/projects/cw-two.PNG';
import ecOne from '../img/projects/ec-coins.PNG';
import ecTwo from '../img/projects/ec-flip.PNG';
import ecThree from '../img/projects/ec-hex.PNG';
import heStart from '../img/projects/he-start.PNG';
import heFlop from '../img/projects/he-flop.PNG';
import heRiver from '../img/projects/he-river.PNG';
import heMo from '../img/projects/he-mo.PNG';
import rfg from '../img/projects/rfg.PNG';
import rfgnr from '../img/projects/rfg-nr.PNG';
import rfgmo from '../img/projects/rfg-mo.PNG';
import tdwu from '../img/projects/td-wu.PNG';
import tdwu2 from '../img/projects/td-wu-2.PNG';
import tdwu3 from '../img/projects/triv-que.PNG';
import th1 from '../img/projects/th-projs.PNG';
import pt15 from '../img/projects/port-2015.PNG';
import pt161 from '../img/projects/port-2016-1.PNG';
import pt162 from '../img/projects/port-2016-2.PNG';
import pt163 from '../img/projects/port-2016-3.PNG';
import pt17 from '../img/projects/port-2017.PNG';

const ProjectsCarousel = () => {

  const [currentProjectPath, setCurrentProjectPath] = useState('bsn-sports-(coming-soon)');

  let location = useLocation();
  let pathname = location.pathname;
  let projectPathname = pathname.slice(pathname.lastIndexOf('/') + 1);

  useEffect(() => {
    if (projectPathname !== currentProjectPath) {
      setCurrentProjectPath(projectPathname);
    }
  }, [projectPathname, currentProjectPath]);

  /* Connect imported images with their respective projects */
  const imgObj = {
    bsn: [bsnUd, bsnAd, bsnMtswP, bsnMtswCc, bsnMtswAs, bsnMtswAp],
    port: [portHome, portHoMo],
    ts: [tsHome, tsTruths, tsTruth, tsSettings],
    rubu: [ruBuJson, ruBuReadme, ruBuSample],
    cw: [cwMath, cwOne, cwTwo],
    ec: [ecOne, ecTwo, ecThree],
    he: [heStart, heFlop, heRiver, heMo],
    rfg: [rfg, rfgnr, rfgmo],
    tdwu: [tdwu, tdwu2, tdwu3],
    os: [th1, pt15, pt161, pt162, pt163, pt17]
  }

  // Convert title to pathlike strings
  const pathify = (str) => str.trim().toLowerCase().replaceAll(' ', '-');

  // Collection of project title in pathlike form
  const projectPaths = projectsData.map((proj) => pathify(proj.title));

  console.log('projectPaths: ', projectPaths);

  const currentProject = projectsData[projectPaths.indexOf(currentProjectPath)];

  return (
    <div className="projects-container">
      <div className="projects-retainer">

        <h1 className="top-heading projects-heading">Projects</h1>

        <div className="projects-menu">
          {
            projectsData.map((proj, i) => {
              return (
                <NavLink 
                  to={`/projects/${pathify(proj.title)}`} 
                  className="project-menu-project-link" 
                  key={ `${i} - ${proj.title}` }
                  style={{backgroundColor: `rgb(0, 0, 10)`, backgroundImage: `url(${imgObj[proj.imgKey][0]})`, backgroundSize: 100 + '%'}}
                >
                  <h4 className="project-menu-project-title">{proj.title}</h4>
                  {/* <img src={ imgObj[proj.imgKey][0] } alt="Project screenshot" className="project-menu-project-img" /> */}
                  <p className="project-menu-project-short-description">{ proj.shortDescription }</p>
                </NavLink>
              );
            })
          }
        </div>

        <Project 
          id={currentProject.id}
          title={currentProject.title}
          shortDescription={currentProject.shortDescription}
          description={currentProject.description}
          stack={currentProject.stack}
          links={currentProject.links}
          imgs={currentProject.imgKey && imgObj[currentProject.imgKey]}
        />

        {/* {
          projectsData.map((proj, i) => {
            return (
              <Project 
                key={i}
                id={proj.id}
                title={proj.title}
                shortDescription={proj.shortDescription}
                description={proj.description}
                stack={proj.stack}
                links={proj.links}
                imgs={proj.imgKey && imgObj[proj.imgKey]}
              />
            );
          })
        } */}
      </div>
    </div>
  );  
};

export default ProjectsCarousel;
