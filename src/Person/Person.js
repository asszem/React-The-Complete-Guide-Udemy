import React, { Component } from 'react';
// the css needs to be imported and will be injected dynamicall by webpack to final html's head section between <style> tags
import './Person.css';

//Functional components (also referred to as "presentational", "dumb" or "stateless" components

//convention - function name is in lowercase, properties variable name 'props'
// using ES6 arrow function syntax arguments => function body
const person = (props) => {
  // this is a JSX syntax, we need to import React
  return (
    <div className="FunctionalComponent">
      <p>Index: {props.children}</p>
      <p>
        Name={props.name}, age={props.age}
      </p>
      <input type="text" value={props.name} onChange={props.onInput}></input>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};

//Each component needs to return/ render some JSX code - it defines which HTML code React should render to the real DOM in the end.
export class PersonClassBasedComponent extends Component {
  render() {
    return (
      <div className="ClassBasedComponent">
        {/* This is a comment inside a JSX */}
        <p onClick={this.props.clickMethodPassedNameCanBeAnything}>
          {/* props must be referenced as this.props*/}
          Name={this.props.name}, age={this.props.age}
        </p>
        {/* props.children is what between the component's tag in caller */}
        <p>Props.children content = {this.props.children}</p>
        <input
          type="text"
          onChange={this.props.inputFieldHandler}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default person;
