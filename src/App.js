import React, { Component } from 'react';
import './App.css';
// this is using the default export from Person.js
import PersonButCanBeAnything from './Person/Person'; //Person.js extension can be ommitted
// importing a specific class needs to be inside {} brackets
import { PersonAsClassBasedComponent as Pacbc } from './Person/Person.js';

// "App" is the root component, that can have infinite nested child components
class App extends Component {
  //state is a reserved word in class that extends Component and can be used for useState() method
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

      // this doesnt work, doesnt change the DOM
      // let persons = [
      //   { name: 'Andras 2', age: rando() },
      //   { name: 'Tibor 2', age: rando() },
      //   { name: 'Klara 2', age: rando() },
      // ];
      //this.setState(persons);
    });
    // this.setState({ // curly bracket needed because the parameter must be an object
    //   persons: { name: 'Andras used State', age: 111 },
    // });
  };

  // This handles the event.target.value to set the name based on what added
  changeNameFromInputValue = (event) => {
    this.setState({
      persons: [
        { name: 'Func1 ' , age: rando() },
        { name: 'Func2 ' , age: rando() },
        { name: 'Func3 ' , age: rando() },
        { name: event.target.value, age: rando() },
      ],
    });
  };

  render() {
    return (
      // this is JSX code that will be compiled automatically when added to the DOM
      <div className="App">
        <h1>This is React inside App div DONALD</h1>
        {/* In JSX, onClick is with capital C, in regular js it is onclick 
        The method name must not have () because then it would be executed 
        */}
        <button onClick={this.changeAllPersonsHandler}>Change name</button>
        <p>This is a paragraph inside of main div</p>
        <PersonButCanBeAnything
          // passing a METHOD as a property to a stateless component
          clickMethod={this.changeAllPersonsHandler}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <PersonButCanBeAnything
          // providing an argument for the passed method
          clickMethod={this.changeAllPersonsHandler.bind(
            this,
            'new Argument with .bind'
          )}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <PersonButCanBeAnything
          // another way of providing an argument of the passed method
          clickMethod={() =>
            this.changeAllPersonsHandler('new Argument with arrow function')
          }
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <PersonButCanBeAnything
          // not providing any argument
          clickMethod={this.changeAllPersonsHandler}
        >
          This person does not have name and age attributes when called from App
        </PersonButCanBeAnything>

        <Pacbc
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
          clickMethodPassedNameCanBeAnything={this.changeAllPersonsHandler.bind(
            this,
            'new Argument from Class based component'
          )}
          inputFieldHandler={this.changeNameFromInputValue}
        >
          This is inside Pacbc element
        </Pacbc>
      </div>
      // this is not allowed, the jsx should return only one root element
      // <p> paragraph outside of main div</p>
    );
    // the above gets compiled (in the background) to this code:
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello again!'));
  }
}

let rando = () => {
  return Math.floor(Math.random() * 30);
};

// default export is if the file is imported, this class will be exported
// index.js does import this file, class:  import App from './App';
export default App;
