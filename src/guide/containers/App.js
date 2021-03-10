import React, { Component } from 'react';
import './App.css';
// import Radium from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';

class App extends Component {
  // if no constructor is defined, state = {}... will create one that calls super(props)
  constructor(props) {
    super(props);
    console.log('[Appj.js] constructor');
    //initial state could be set here as well, in this case it should be started with this
    this.state = {
      showPersons: false,
      showCockpit: true,
      persons: [
        { id: 1, name: 'Constructor Person1 ', age: 11 },
        { id: 2, name: 'Constructor Person2 ', age: 22 },
        { id: 3, name: 'Constructor Person3 ', age: 33 },
        { id: 4, name: 'Constructor Person4 ', age: 44 },
      ],
      changeCounter: 0,
    };
  }
  //state is a reserved word in class that extends Component and can be used for setState() or useState() methods
  // if state is initialized in constructor, this will not have an effect, because no setState() was called
  state = {
    noEffect: true,
  };

  // Lifecycle hooks

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] should component update nextProps =', nextProps);
    console.log('[App.js] should component update nextState =', nextState);
    return true;
  }
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  // Handlers

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

    // updating the state correctly when referencing previous state
    this.setState((prevState, props) => {
      return {
        persons: updatedPersons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
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

  authHandler = () => {
    this.setState({ isAuthenticated: true });
  };

  render() {
    console.log('[App.js] render');
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
      <WithClass classes="App">
        <button
          onClick={() => {
            this.setState({ showCockpit: !this.state.showCockpit });
          }}
        >
          Toggle Cockpit
        </button>
        <AuthContext.Provider
          value={{
            isAuthenticated: this.state.isAuthenticated,
            login: this.authHandler,
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              appTitle={this.props.appTitle}
              personsLength={this.state.persons.length}
              stateShowNames={this.state.showPersons}
              showNames={this.toggleShowNamesHandler}
              changeNames={this.changeEveryNameHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </WithClass>
    );
  } //end of render()
} //end of App class

export function rando() {
  return Math.floor(Math.random() * 30);
}

export default App;
