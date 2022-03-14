
import React from 'react';

/* Data imports */
import propsData from '../data/props.json';

/* Img imports */
import myLogo from '../img/myLogo.svg';

const Props = (): JSX.Element => {
	return (
		<div className="about-container">
			<div className="props">

				<div className="props-txt-box">
					<p className="props-txt">{`Where quantitative data ends, qualitative data steps in to shed some light.  The following statements were captured from Slack posts and emails from students I've mentored and teammates I've worked with.`}</p>
				</div>

				{
					propsData.map((prop, i) => {
						return (
							<div className="prop-box" key={ `${i}-${prop.date}-${prop.name}-${prop.prop.slice(0,9)}` }>
								<ul className="prop-info-box">
									<li className="prop-date">{ prop.date }</li>
									<li className="prop-role">{ prop.role }</li>
									<li className="prop-name">{ prop.name }</li>
								</ul>
								<p className="prop">{ prop.prop }</p>
							</div>
						);})
				}

				<div className="logo-box">
					<img className="my-logo" src={ myLogo } alt="My Logo" />
				</div>
        
			</div>
		</div>
	);
};

export default Props;
