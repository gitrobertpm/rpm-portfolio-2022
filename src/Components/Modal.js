
const Imgs = (props) => {
  return(
    <div className="mod-img-wrap">
      {props.children}
    </div>
  );
}

const Modal = (props) => {

  console.log(props.component.toString());

  // const img = <div component={ () => <props.component /> } />

  

  return (
    <div className="modal-container">
      <div className="modal">
        <button type="button">X</button>
        <Imgs children={props.component} />
      </div>
    </div>
  );
}

export default Modal;