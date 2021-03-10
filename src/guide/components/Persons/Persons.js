import React, { PureComponent } from 'react';
import PersonClassBasedComponent from './Person/Person';

//using PureComponent will check every prop for change and if changed, then will update the component so no need to manually code everything
class Persons extends PureComponent {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log('[Persons.js] getDerivedStateFromPersons');
  //     return state;
  //   }

  // PureComponent is used instead of checking everything in shouldComponentUpdate
  // shouldComponentUpdate(nextProps, nextState) {
  //   //must return true or false based on some meaningful condition
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   console.log('nextState = ', nextState);
  //   console.log('nextProps = ', nextProps);
  //   // update only when the state.persons or any of the passed functions change
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.onDelete !== this.props.onDelete ||
  //     nextProps.onChange !== this.props.onChange
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // use it for example to keep scroll position
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    console.log('prevState = ', prevState);
    console.log('prevProps = ', prevProps);
    return { message: 'This was the prevProps',
             previousProps: prevProps };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      '[Persons.js] componentDidUpdate (after render() ), snapshot message = ',
      snapshot.message
      , ' previous props = ' , snapshot.previousProps
    );
  }

  // use for cleanup
  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }
  render() {
    console.log('[Persons.js] as Class rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <PersonClassBasedComponent
          key={person.id}
          name={person.name}
          age={person.age}
          onDelete={() => this.props.onDelete(index)}
          onChange={(event) => this.props.onChange(event, person.id)}
        />
      );
    });
  }
}
export default Persons;

//As a functional component
// const persons = (props) => {
//   console.log('[Persons.js] rendering...');
//   return props.persons.map((person, index) => {
//     return (
//       <PersonClassBasedComponent
//         key={person.id}
//         name={person.name}
//         age={person.age}
//         onDelete={() => props.onDelete(index)}
//         onChange={(event) => props.onChange(event, person.id)}
//       />
//     );
//   });
// };
