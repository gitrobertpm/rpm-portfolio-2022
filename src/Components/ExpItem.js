
const ExpItem = (props) => {

  return (
    <div className="exp-item" key={ props.id }>
      
      <p className="exp-date">{ props.date }</p>
      <h2 className="exp-company">{ props.company }</h2>
      <h3 className="exp-title">{ props.title }</h3>
      <p className="exp-description">{ props.description }</p>

      {
        props.bullets &&

        <div className="exp-bullets-container">
          <ul className="exp-bullets-points">

            {
              props.bullets.points.map((point, i) => {
                return (
                  <li className="exp-bullets-point" key={i}>{ point }</li>
                ); 
              })
            }

          </ul>
        </div>
      }

    </div>
  ); 
}

export default ExpItem;
