import React, { Component } from 'react';
import './AppAssignment2.css';
import CharComponent from './CharComponent';
import ValidationComponent from './ValidationComponent';

class App extends Component {
  state = {
    inputString: "Initial"
  }
  displayLengthHandler = (event) => {
    this.setState({ inputString: event.target.value })
  }

  deleteCharHandler = (index) => {
    let newStringArray = [...this.state.inputString.split("")];
    newStringArray.splice(index,1);
    this.setState({ inputString: newStringArray.join("") });
  }

  render() {
    //create the CharComponents here and us it as a reference in the return method
    // create an array from the input string
    const inputStringAsArray = [...this.state.inputString.split("")];
    let charComponents = null;
    charComponents = (
      <div>
        {inputStringAsArray.map((string, index) => {
          return (
            <CharComponent content={string} onDelete={() => this.deleteCharHandler(index)} />
          );
        })}
      </div>
    );
    return (
      <div className="App">
        <h2>App Assignment 2</h2>
        <input type="text" onChange={(event) => this.displayLengthHandler(event)} value={this.state.inputString}></input>
        <p>Input length = {this.state.inputString.length}</p>
        <ValidationComponent
          inputLength={this.state.inputString.length}
        />
        {charComponents}
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
