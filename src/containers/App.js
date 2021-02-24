import React, { Component } from 'react'; // Import the default export from React and then import a named export called Component
// extension is required from any non .js file
import './App.css';
// import Radium from 'radium';
import PersonFunctionalComponent from '../components/Persons/Person/Person'; //Person.js extension can be ommitted
// this is using the default export from Person.js
// importing a specific class needs to be inside {} brackets
// import person, { PersonClassBasedComponent as Pacbc } from './Person/Person.js';

// "App" is the root component, that can have infinite nested child components
class App extends Component {
  //state is a reserved word in class that extends Component and can be used for setState() or useState() methods
  state = {
    showPersons: true,
    persons: [
      { id: 1, name: 'Person1 ', age: 11 },
      { id: 2, name: 'Person2 ', age: 22 },
      { id: 3, name: 'Person3 ', age: 33 },
      { id: 4, name: 'Person4 ', age: 44 },
    ],
  };

  //...Handler is a convention to indicate that this method is not actively called, but assigned to an event handler
  changeEveryNameHandler = (newName) => {
    // setState is only available in Class based components. In Functional based components use useState().
    // setState MERGES the new value added with existing
    // useState REPLACE to the new value of the existing value
    this.setState({
      persons: [
        { id: 1, name: newName + '1 ', age: rando() },
        { id: 2, name: newName + '2 ', age: rando() },
        { id: 3, name: newName + '3 ', age: rando() },
        { id: 4, name: newName + '4 ', age: rando() },
      ],
      // Do not mutate state directly. Use setState()  react/no-direct-mutation-state
      //this.state.persons[0].name='Andras mutated';
    });
  };

  // Change only a specific name based on an index
  // event is a reserved word to pass event info
  changePersonNameHandler = (event, id) => {
    // get the index of the person where the button was pressed
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });
    const personToUpdate = { ...this.state.persons[personIndex] }; // create a copy of the ONE object from the persons ARRAY that will be changed
    personToUpdate.name = event.target.value;

    const updatedPersons = [...this.state.persons]; // create a copy of the state array
    updatedPersons[personIndex] = personToUpdate; // update the person in the new array based on the updatedPerson object
    this.setState({ persons: updatedPersons }); // execute the state update
  };

  toggleNameFieldHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow }); // change the value to the opposite (and the remaining state content is merged)
  };

  deletePersonHandler = (personIndex) => {
    //Handling state inmutable by creating a new object copy that is not a reference
    // This is a reference:
    // const newStateReferenceToState = this.state.person;
    // This is one way to create a new object:
    //const newStateWithPersonDeletedwithSlice = this.state.persons.slice();
    // This is ES6 spread operator to create a new array based on content of another array
    const newStateWithPersonDeleted = [...this.state.persons];
    newStateWithPersonDeleted.splice(personIndex, 1); //removes the element from (startIndex, numberOfElementsToBeRemoved)
    this.setState({ persons: newStateWithPersonDeleted });
  };

  render() {
    // must be inside the render() {...} otherwise const won't be allowed to be used
    const inlineStyle = {
      backgroundColor: 'gray',
      font: 'inherit',
      border: '3px solid green',
      padding: '8px',
      cursor: 'pointer',
      // ':hover': { // a pseudo selector enabled by Radium
      //   backgroundColor: 'darkgray',
      // }
    };

    // set conditionally the value of persons based on state.showPersons
    let persons = null;
    if (this.state.showPersons) {
      persons = ( //this is JSX content inside ()
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <PersonFunctionalComponent
                key={person.id} //should not be index, because it migth change with every state change, after a deletion for example
                name={person.name}
                age={person.age}
                onDelete={() => this.deletePersonHandler(index)}
                onInput={(event) =>
                  this.changePersonNameHandler(event, person.id)
                } // 'event' needs to be passed as an argument here
              >
                {index}
              </PersonFunctionalComponent>
            );
          })}
        </div>
      );

      inlineStyle.backgroundColor = 'green';
      inlineStyle[':hover'] = {
        backgroundColor: 'darkgreen',
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('redBorder')
    }

    return (
      // this is JSX code that will be compiled automatically when added to the DOM
      <div className="App">
        <h1>React Demo</h1>

        <button
          // no 'this' is required because the variable is inside render(){} and not inside the App{}
          style={inlineStyle}
          //  In JSX, onClick is with capital C, in regular js it is onclick
          onClick={() => this.changeEveryNameHandler(rando())}
        >
          Change Every Name
        </button>

        <button className={classes.join(' ')} onClick={this.toggleNameFieldHandler}>
          {' '}
          Toggle Name Display{' '}
        </button>
        {/* Displaying the entire div below based on condition  */}
        {persons}

        <h3>
          <a href="https://ibm-learning.udemy.com/course/react-the-complete-guide-incl-redux/">
            Based on React - The Complete Guide by Maximilian Schwarzmüller
          </a>
        </h3>
      </div>
    );
  } //end of render()
} //end of App class

let rando = () => {
  return Math.floor(Math.random() * 30);
};

// default export is if the file is imported, this class will be exported
// index.js does import this file, class:  import App from './App';

export default App;
// export default Radium(App);
// Radium uses a "higher order component"
