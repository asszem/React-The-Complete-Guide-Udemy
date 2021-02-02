import React, { Component } from 'react';
import './App.css';
// this is using the default export from Person.js
import PersonButCanBeAnything from './Person/Person'; //Person.js extension can be ommitted
// importing a specific class needs to be inside {} brackets
import {PersonAsClassBasedComponent as Pacbc} from './Person/Person.js';

// "App" is the root component, that can have infinite nested child components
class App extends Component {
  render() {
    return (
    // this is JSX code that will be compiled automatically when added to the DOM 
    <div className="App">
    <h1>This is React inside App div</h1>
    <p>This is a paragraph inside of main div</p>
    <PersonButCanBeAnything/>
    <Pacbc/>
    </div>
    // this is not allowed, the jsx should return only one root element
    // <p> paragraph outside of main div</p>
    );
    // the above gets compiled (in the background) to this code:
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello again!'));
  }
}


// default export is if the file is imported, this class will be exported
// index.js does import this file, class:  import App from './App';
export default App;
