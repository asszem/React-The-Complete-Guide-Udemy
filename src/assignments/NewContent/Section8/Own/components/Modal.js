import classes from './Modal.module.css';

const Modal = (props) => {
    console.log('visible: ', props.visible)
  return (
    <div
      className={classes.Modal}
      style={{
        transform: props.visible ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.visible ? '1' : '0',
      }}
    >
      {props.message}
      <button onClick={props.closeModalHandler}>Close</button>
    </div>
  );
};

export default Modal;
