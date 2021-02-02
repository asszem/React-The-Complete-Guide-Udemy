import React, { Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
    // this is JSX code that will be compiled automatically when added to the DOM 
    <div className="App">
    <h1>This is React inside App div</h1>
    </div>
    );
    // the above gets compiled (in the background) to this code:
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello again!'));
  }
}


// default export is if the file is imported, this class will be exported
// index.js does import this file, class:  import App from './App';
export default App;
