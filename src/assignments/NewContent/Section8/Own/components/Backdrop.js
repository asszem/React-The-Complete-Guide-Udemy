import { checkPropTypes } from 'prop-types';
import classes from './Backdrop.module.css';

const Backdrop = (props) =>
  props.visible ? (
    <div className={classes.Backdrop} onClick={props.closeBackdropHandler}>
      {' '}
    </div>
  ) : null;

export default Backdrop;
