import React from 'react';
import {rando} from '../../containers/App';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass='';
    console.log('classesFromCSS' +classes.Red);
    if (props.stateShowNames){
        btnClass=classes.Red;
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.Red);
    console.log('xxassigned classes=' +assignedClasses);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.Bold);
    }

    console.log('assigned classes=' +assignedClasses);
    console.log('btnClass = ' + btnClass);
  return (
    <div className={classes.Cockpit}>
      <h1>React Demo</h1>
      <p className={assignedClasses.join(' ')}>This is Sparta!</p>
      <button
      className={assignedClasses.join(' ')}
        onClick={() => props.changeNames(rando())}
      >
        Change Every Name
      </button>

      <button
        className={btnClass}
        onClick={props.showNames}
      >
        Toggle Name Display
      </button>
    </div>
  );
};

export default cockpit;