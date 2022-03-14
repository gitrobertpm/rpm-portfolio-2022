
import React from 'react';

interface BulletProps {
	heading: string;
	points: string[];
}

interface ExpItemProps {
	id: string | number;
	date: string;
	company: string;
	title: string;
	description: string;
	bullets: BulletProps | undefined;
}

const ExpItem = (props: ExpItemProps): JSX.Element => {

	return (
		<div className="exp-item">
      
			<p className="exp-date">{ props.date }</p>
			<h2 className="exp-company">{ props.company }</h2>
			<h3 className="exp-title">{ props.title }</h3>
			<p className="exp-description">{ props.description }</p>

			{
				props.bullets &&

				<div className="exp-bullets-container">
					<ul className="exp-bullets-points">

						{
							props.bullets.points.map((point: string, i: number) => {
								return (
									<li className="exp-bullets-point" key={ `${i}-${props.title}-${point}` }>{ point }</li>
								); 
							})
						}

					</ul>
				</div>
			}
		</div>
	); 
};

export default ExpItem;
