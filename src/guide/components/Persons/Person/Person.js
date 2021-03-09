import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Radium from 'radium';
// the css needs to be imported and will be injected dynamicall by webpack to final html's head section between <style> tags
import classes from './Person.module.css';
import withWrappedComp from '../../../hoc/withWrappedComp';
import Auxilary from '../../../hoc/Auxilary';

//Functional components (also referred to as "presentational", "dumb" or "stateless" components

//convention - function name is in lowercase, properties variable name 'props'
const person = (props) => {
  console.log('[Person.js] rendering...', props.name);
  // this is a JSX syntax, we need to import React
  return (
    <div className="FunctionalComponent">
      <p>
        Name={props.name}, age={props.age}
      </p>
      <input type="text" value={props.name} onChange={props.onChange}></input>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};

//Each component needs to return/ render some JSX code - it defines which HTML code React should render to the real DOM in the end.
class PersonClassBasedComponent extends Component {
  constructor(props){
    super(props)
    // to create a reference to a ref= element
    this.inputElementRef=React.createRef();
  }
  //this runs after render() completed, so it will have access to the ref variable
  componentDidMount() {
    this.pElement.focus();
    // .current needs to be used when ref was created with createRef()
    this.inputElementRef.current.focus();
  }
  render() {
    console.log('[Person.js] rendering...', this.props.name);
    return (
      <Auxilary>
        <p ref={(pElem) => {this.pElement=pElem}}>
          Name={this.props.name}, age={this.props.age}
        </p>
        <input
          type="text"
          ref={this.inputElementRef}
          value={this.props.name}
          onChange={this.props.onChange}
        ></input>
        <button onClick={this.props.onDelete}>Delete</button>
      </Auxilary>
    );
  }
}

//PropTypes - React will watch out for incorrect properties passed in development mode
// Provide an object with key-value pairs, where keys are prop names and values are types
const propTypeSetup = {
  onDelete: PropTypes.func, //expectin a function for onDelete prop
  onChange: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
};
PersonClassBasedComponent.propTypes = propTypeSetup;
person.propTypes = propTypeSetup;

// export default PersonClassBasedComponent;
export default withWrappedComp(
  PersonClassBasedComponent,
  classes.ClassBasedComponent
);
// export default Radium(person);
