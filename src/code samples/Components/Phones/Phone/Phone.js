import React, { useEffect } from 'react';
import classes from './Phone.module.css';
// import Radium from 'radium';

const Phone = (props) => {
  useEffect(() => {
    console.log('Phone rendered...');
  }, []);

  // useEffect(() => {
  //   console.log('useEffect type or color');
  // }, [props.type, props.color]);

  // className={selectedState.join(' ')}
  let selectedState = '';
  if (props.isSelected) {
    selectedState = classes.Selected;
  }
  return (
    <div className={classes.Phone}>
      <div className={classes.Wrapper}>
        <div className={selectedState} onClick={props.onClick}>
          <p>{props.children}</p>
          <p>
            Type: {props.type} Color: {props.color}
          </p>
        </div>
        <div className={classes.Controls}>
          <input
            className={selectedState}
            type="text"
            value={props.type}
            onChange={props.onInput}
          />
          <button className={selectedState} onClick={props.onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Phone);
