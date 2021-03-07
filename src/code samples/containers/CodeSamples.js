import React, { Component } from 'react';
import './CodeSamples.css';
import PhoneApp from '../Components/Phones/PhoneApp';
import ControlPanel from '../Components/CodeSamples/ControlPanel';

class CodeSamples extends Component {
  constructor(props) {
    super(props);

    // Todo: move this state to somewhere else, this should handle only the state of the samples

    this.state = {
      openCloseStatus: [
        { showPhoneApp: true },
        { showLifecycle: false },
        { showAssignment: 0 },
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
    let showPhones = null;
    if (this.state.openCloseStatus[0].showPhoneApp === true) {
      showPhones = (
        <div>
          <PhoneApp />
        </div>
      );
    }
    return (
      <div className="CodeSamples">
        <h1>Code Samples</h1>
        <ControlPanel onClick={this.toggleSample} />
        {showPhones}
      </div>
    );
  }
}

export default CodeSamples;
