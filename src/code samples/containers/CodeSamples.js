import React, { Component } from 'react';
import classes from './CodeSamples.module.css';
import ControlPanel from '../Components/CodeSamples/ControlPanel';
import Guide from '../../guide/containers/App';
import PhoneApp from '../Components/Phones/PhoneApp';
import LifeCycles from '../Components/LifeCycles/ClassBasedComponentLifecycle';

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
      stateChangeCounter: 0,
    };
    console.log('Inside constructor()');
  }

  toggleComponents = (propertyIndex, propertyName) => {
    const newState = [...this.state.openCloseStatus];
    newState[propertyIndex][propertyName] = !this.state.openCloseStatus[
      propertyIndex
    ][propertyName];
    this.setState((prevState, props) => {
      return {
        openCloseStatus: newState,
        stateChangeCounter: prevState.stateChangeCounter+1,
      };
    });
  };

  prepareGuide() {
    let guide = null;
    if (this.state.openCloseStatus[0].showGuide === true) {
      guide = (
        <div className={classes.Component}>
          <h3>React Guide</h3>
          <Guide appTitle="React Guide App" />
        </div>
      );
    }
    return guide;
  }
  preparePhoneApp() {
    let phoneApp = null;
    if (this.state.openCloseStatus[1].showPhoneApp === true) {
      phoneApp = (
        <div className={classes.Component}>
          <h3>Phone App</h3>
          <PhoneApp />
        </div>
      );
    }
    return phoneApp;
  }
  prepareLifecycles() {
    let lifecycles = null;
    if (this.state.openCloseStatus[2].showLifecycle === true) {
      lifecycles = (
        <div className={classes.Component}>
          <h3>LifeCycles</h3>
          <LifeCycles />
        </div>
      );
    }
    return lifecycles;
  }

  render() {
    let guide = this.prepareGuide();
    let phoneApp = this.preparePhoneApp();
    let lifecycles = this.prepareLifecycles();
    return (
      <div className={classes.CodeSamples}>
        <h1>Control Panel</h1>
        <div className={classes.ControlPanel}>
          <ControlPanel onClick={this.toggleComponents} />
          <p>State changes: {this.state.stateChangeCounter}</p>
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
