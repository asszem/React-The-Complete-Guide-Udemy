import React, { Component } from 'react';
import classes from './CodeSamples.module.css';
import ControlPanel from '../Components/CodeSamples/ControlPanel';
import Guide from '../../guide/containers/App';
import PhoneApp from '../Components/Phones/PhoneApp';
import LifeCycles from '../Components/LifeCycles/ClassBasedComponentLifecycle';
import ClassBasedComponentLifecycle from '../Components/LifeCycles/ClassBasedComponentLifecycle';

class CodeSamples extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openCloseStatus: [
        { showGuide: true },
        { showPhoneApp: false },
        { showLifecycle: false },
        { showAssignment: false },
      ],
    };
    console.log('Inside constructor()');
  }

  toggleSample = (propertyIndex, propertyName) => {
    const newState = [...this.state.openCloseStatus];
    newState[propertyIndex][propertyName] = !this.state.openCloseStatus[
      propertyIndex
    ][propertyName];
    this.setState({ openCloseStatus: newState });
  };

  render() {
    let phoneApp = null;
    if (this.state.openCloseStatus[1].showPhoneApp === true) {
      phoneApp = (
        <div className={classes.Component}>
          <h3>Phone App</h3>
          <PhoneApp />
        </div>
      );
    }
    let guide = null;
    if (this.state.openCloseStatus[0].showGuide === true) {
      guide = (
        <div className={classes.Component}>
          <h3>React Guide</h3>
          <Guide appTitle="React Guide App" />
        </div>
      );
    }
    let lifecycles = null;
    if (this.state.openCloseStatus[2].showLifecycle === true) {
      lifecycles = (
        <div className={classes.Component}>
          <h3>LifeCycles</h3>
          <LifeCycles />
        </div>
      );
    }

    return (
      <div className={classes.CodeSamples}>
        <h1>Code Samples</h1>
        <div className={classes.ControlPanel}>
          <ControlPanel onClick={this.toggleSample} />
        </div>
        <div className={classes.Components}>
          {guide}
          {phoneApp}
          {lifecycles}
        </div>
      </div>
    );
  }
}

export default CodeSamples;
