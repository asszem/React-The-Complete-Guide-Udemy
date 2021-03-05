import React, { useEffect } from 'react';
import { rando } from '../../containers/App';
import classes from './Cockpit.module.css';

// Component name must start with Capital
const Cockpit = (props) => {
  //useEffect is a React Hook that can be added to a functional component, can be added anywhere
  useEffect(() => {
    console.log('[Cockpit.js] useEffect1 - persons changed');
    // Http request can be run from here
    // setTimeout(() => {
    //   alert('Saved data to the cloud!');
    // }, 1000);
  }, [props.persons]); //only execute when state.persons changed!

  //can be used multiple times
  useEffect(() => {
    console.log('[Cockpit.js] useEffect2 - showPersons changed');
    // Http request can be run from here
  }, [props.stateShowNames]); //only execute when state.showPersons changed!

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

export default Cockpit;
