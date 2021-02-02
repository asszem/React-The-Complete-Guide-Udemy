import React, { Component } from 'react';

//Functional components (also referred to as "presentational", "dumb" or "stateless" components

//convention - function name is in lowercase, properties variable name 'props'
// using ES6 arrow function syntax arguments => function body
const person = (props) => {
  // this is a JSX syntax, we need to import React
  return (
    <div className="FunctionalComponent">
      <p>
        Name={props.name}, age={props.age}, random number=
        {Math.floor(Math.random() * 30)}, something undefined={props.blabla}
      </p>
       <p>{props.children}</p> 
    </div>
  );
};

//Each component needs to return/ render some JSX code - it defines which HTML code React should render to the real DOM in the end.
export class PersonAsClassBasedComponent extends Component {
  render() {
    return (
      <div className="ClassBasedComponent">
          {/* This is a comment inside a JSX */}
          {/* props must be referenced as this.props*/}
        <p>Name={this.props.name}, age={this.props.age}</p>
        <p>Props.children content = {this.props.children}</p>
      </div>
    );
  }
}

export default person;
