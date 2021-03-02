import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
  console.log('[Persons.js] rendering...');
  return props.persons.map((person, index) => {
    return (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        onDelete={() => props.onDelete(index)}
        onChange={(event) => props.onChange(event, person.id)}
      />
    );
  });
};
export default persons;
