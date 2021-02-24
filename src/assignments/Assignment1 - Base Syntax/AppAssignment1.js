import React, { Component } from 'react';
import './AppAssignment1.css';
// must start with a capital letter...
import UserInput from './User/UserInput';
import UserOutputComponent from './User/UserOutput';

class Assignment1App extends Component {
  state = {
    UserName: 'Andras',
  };

  changeUserName = (event) => {
    this.setState({
      UserName: event.target.value,
    });
  };

  render() {
    const inlineStyle = {
      backgroundColor: 'black',
      font: 'inherit',
      border: '3px solid black',
      padding: '8px',
      cursor: 'pointer',
      textAlign: 'center',
      margin: '5px auto',
    };

    return (
      <div className="AppAssignment1">
        <p style={inlineStyle}>Test Assignment 1</p>
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>
            UserInput should hold an input element, UserOutput two paragraphs
          </li>
          <li>
            Output multiple UserOutput components in the App component (any
            paragraph texts of your choice)
          </li>
          <li>
            Pass a username (of your choice) to UserOutput via props and display
            it there
          </li>
          <li>
            Add state to the App component (={'>'} the username) and pass the
            username to the UserOutput component
          </li>
          <li>
            Add a method to manipulate the state (={'>'} an event-handler method)
          </li>
          <li>
            Pass the event-handler method reference to the UserInput component
            and bind it to the input-change event
          </li>
          <li>
            Ensure that the new input entered by the user overwrites the old
            username passed to UserOutput
          </li>
          <li>
            Add two-way-binding to your input (in UserInput) to also display the
            starting username
          </li>
          <li>
            Add styling of your choice to your components/ elements in the
            components - both with inline styles and stylesheets
          </li>
        </ol>

        <UserOutputComponent
          userName={this.state.UserName}
          compNum="1"
          style={inlineStyle}
        />
        <UserOutputComponent
          userName={this.state.UserName}
          compNum="2"
          style={inlineStyle}
        />

        <UserInput
          userName={this.state.UserName}
          changeUserName={this.changeUserName}
        ></UserInput>
      </div>
    );
  }
}

export default Assignment1App;
