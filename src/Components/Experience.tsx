
import React from 'react';

/* Component imports */
import ExpItem from './ExpItem';

/* Data imports */
import experienceData from '../data/experience.json';

/* Image imports */
import myLogo from '../img/myLogo.svg';

const Experience = (): JSX.Element => {
	return (
		<div className="about-container">
			<div className="experience">

				<div className="exp-item-container">

					{
						experienceData.map((ei, i) => {
							return ( 
								<ExpItem 
									id={ ei.id }
									key={ `${i}-${ei.id}-${ei.title}` }
									date={ ei.date }
									company={ ei.company }
									title={ ei.title }
									description={ ei.description }
									bullets={ ei.bullets && ei.bullets }
								/>
							);
						})
					}
				</div>

				<img className="my-logo" src={ myLogo } alt="My Logo" />
			</div>
		</div>
	);
};

export default Experience;
