import React from 'react';
import { rando } from '../../containers/App';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = '';
  if (props.stateShowNames) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.Red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.Bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={classes.testClass}>.testClass red </p>
      <p className={classes.testClass2}>.testClass2 blue</p>
      <button
        className={assignedClasses.join(' ')}
        onClick={() => props.changeNames(rando())}
      >
        Change Every Name
      </button>

      <button className={btnClass} onClick={props.showNames}>
        Toggle Name Display
      </button>
    </div>
  );
};

export default cockpit;
