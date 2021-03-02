import React, { Component } from 'react'; // Import the default export from React and then import a named export called Component
// extension is required from any non .js file
import './App.css';
// import Radium from 'radium';

import Persons from '../components/Persons/Persons'; // this is using the default export from Persons.js
import Cockpit from '../components/Cockpit/Cockpit';
// importing a specific class needs to be inside {} brackets
// import person, { PersonClassBasedComponent as Pacbc } from './Person/Person.js';

// "App" is the root component, that can have infinite nested child components
class App extends Component {
  // if no constructor is defined, state = {}... will create one that calls super(props)
  constructor(props) {
    super(props);
    console.log('[Appj.js] constructor');
    //initial state could be set here as well, in this case it should be started with this
    // this.state = { }
  }
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

  //DO: sync state
  //DON'T: cause side effects
  // this needs to be static, see Component Lifecycle
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  //DO: cause side effects, like HTTP calls
  //DON'T: Update state, it triggers re-render
  // This is called after render()
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

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

  toggleShowNamesHandler = () => {
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
    console.log('[App.js] render');
    // set conditionally the value of persons based on state.showPersons
    let persons = null;
    if (this.state.showPersons) {
      persons = ( //this is JSX content inside ()
        <div>
          <Persons
            persons={this.state.persons} //to pass the state
            onDelete={this.deletePersonHandler} //the parameters will be assigned in the Persons component
            onChange={this.changePersonNameHandler} // because persons array will be used in that component
          />
        </div>
      );
    }

    return (
      // this is JSX code that will be compiled automatically when added to the DOM
      <div className="App">
        <Cockpit
          appTitle={this.props.appTitle}
          persons={this.state.persons}
          stateShowNames={this.state.showNames}
          showNames={this.toggleShowNamesHandler}
          changeNames={this.changeEveryNameHandler}
        />
        {persons}
      </div>
    );
  } //end of render()
} //end of App class

export function rando() {
  return Math.floor(Math.random() * 30);
}

// default export is if the file is imported, this class will be exported
// index.js does import this file, class:  import App from './App';

export default App;
// export default Radium(App);
// Radium uses a "higher order component"
