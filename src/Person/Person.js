import React, { Component } from 'react';

//Functional components (also referred to as "presentational", "dumb" or "stateless" components

//convention - function name is in lowercase
// using ES6 arrow function syntax arguments => function body
const person = () => {
    // this is a JSX syntax, we need to import React
    return <p>This is rendered from a functional component</p>
}

//Each component needs to return/ render some JSX code - it defines which HTML code React should render to the real DOM in the end.
export class PersonAsClassBasedComponent extends Component {
    render(){
        return <p>This is renderd from a class based component</p>
    }
}

export default person;