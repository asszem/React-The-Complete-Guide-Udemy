import React, { Component } from 'react';
// extension is required from any non .js file
import './App.css';
// this is using the default export from Person.js
import PersonFunctionalComponent from './Person/Person'; //Person.js extension can be ommitted
// importing a specific class needs to be inside {} brackets
import { PersonClassBasedComponent as Pacbc } from './Person/Person.js';

// "App" is the root component, that can have infinite nested child components
class App extends Component {
  //state is a reserved word in class that extends Component and can be used for setState() or useState() methods
  state = {
    persons: [
      { name: 'Func1 ', age: 11 },
      { name: 'Func2 ', age: 22 },
      { name: 'Func3 ', age: 33 },
      { name: 'Class ', age: 44 },
    ],
    otherKey: 'otherValue',
  };

  //...Handler is a convention to indicate that this method is not actively called, but assigned to an event handler
  changeAllPersonsHandler = (newName) => {
    console.log('Change name button or <p> fields were clicked');

    // setState is only available in Class based components. In Functional based components use useState()
    this.setState({
      persons: [
        { name: 'Func1 ' + newName, age: rando() },
        { name: 'Func2 ' + newName, age: rando() },
        { name: 'Func3 ' + newName, age: rando() },
        { name: 'Class ' + newName, age: rando() },
      ],
      // Do not mutate state directly. Use setState()  react/no-direct-mutation-state
      //this.state.persons[0].name='Andras mutated';
      // setState takes an object as an arge an MERGE with existing state data
    });
  };

  // This handles the event.target.value to set the name based on what added
  changeNameFromInputValue = (event) => {
    this.setState({
      persons: [
        { name: this.state.persons[0].name, age: this.state.persons[0].age },
        { name: this.state.persons[1].name, age: this.state.persons[1].age },
        { name: this.state.persons[2].name, age: this.state.persons[2].age },
        { name: event.target.value, age: rando() },
      ],
    });
  };

  render() {
    // must be inside the render() {...} otherwise const won't be allowed to be used
    const inlineStyle = {
      backgroundColor: 'red',
      font: 'inherit',
      border: '3px solid green',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      // this is JSX code that will be compiled automatically when added to the DOM
      <div className="App">
        <h1>React Demo</h1>

        <button
          // no 'this' is required because the variable is inside render(){} and not inside the App{}
          style={inlineStyle}
          //  In JSX, onClick is with capital C, in regular js it is onclick
          onClick={this.changeAllPersonsHandler}
        >
          Change names
        </button>

        {/* Functional Components added */}
        <PersonFunctionalComponent
          // passing a METHOD as a property to a stateless component
          // The method name must not have () because then it would be executed
          clickMethod={this.changeAllPersonsHandler}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <PersonFunctionalComponent
          // providing an argument for the passed method
          clickMethod={this.changeAllPersonsHandler.bind(
            this,
            'new Argument with .bind'
          )}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <PersonFunctionalComponent
          // another way of providing an argument of the passed method
          clickMethod={() =>
            this.changeAllPersonsHandler('new Argument with arrow function')
          }
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <PersonFunctionalComponent
          // not providing any argument
          clickMethod={this.changeAllPersonsHandler}
        >
          This person does not have name and age attributes when called from App
        </PersonFunctionalComponent>

        {/* Class based components added */}
        <Pacbc
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
          clickMethodPassedNameCanBeAnything={this.changeAllPersonsHandler.bind(
            this,
            'new Argument from Class based component'
          )}
          inputFieldHandler={this.changeNameFromInputValue}
        >
          This is inside first class based element
        </Pacbc>

        <Pacbc
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
          clickMethodPassedNameCanBeAnything={this.changeAllPersonsHandler.bind(
            this,
            'new Argument from Class based component'
          )}
          inputFieldHandler={this.changeNameFromInputValue}
        >
          This is inside Second class based element
        </Pacbc>

        <h3>
          <a href="https://ibm-learning.udemy.com/course/react-the-complete-guide-incl-redux/">
            Based on React - The Complete Guide by Maximilian Schwarzmüller
          </a>
        </h3>
      </div>

      // this is not allowed, the jsx should return only one root element
      // <p> paragraph outside of main div</p>
    );
  } //end of render()
} //end of App class

let rando = () => {
  return Math.floor(Math.random() * 30);
};

// default export is if the file is imported, this class will be exported
// index.js does import this file, class:  import App from './App';
export default App;
