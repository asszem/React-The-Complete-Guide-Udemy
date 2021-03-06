import React, { Component } from 'react';
import './CodeSamples.css';
import ClassBasedComponentLifecycle from '../Components/LifeCycles/ClassBasedComponentLifecycle';
import Phones from '../Components/Phones/Phones'; // import the default export
// import ClassBasedComponent as ListOwners './Components/ClassBasedComponent'; // import exported class as a different name

class CodeSamples extends Component {
  constructor(props) {
    super(props);

    // Todo: move this state to somewhere else
    this.state = {
      phones: [
        { id: 1, type: 'OnePlus', color: 'red', isSelected: false },
        { id: 2, type: 'Samsung', color: 'black', isSelected: true },
        { id: 3, type: 'iPhone', color: 'white', isSelected: false },
      ],
      showPhones: true,
      owners: [
        { id: 1, name: 'András' },
        { id: 2, name: 'Barni' },
        { id: 3, name: 'Anikó' },
      ],
      showOwners: false,
      version: { main: 1, sub: 1 },
    };
    console.log('Inside constructor()');
  }

  phoneClickHandler = (index) => {
    const newPhone = { ...this.state.phones[index] };
    newPhone.isSelected = !newPhone.isSelected; //toggle the opposite
    const newStateOfPhones = [...this.state.phones];
    newStateOfPhones[index] = newPhone;
    this.setState({ phones: newStateOfPhones });
  };

  deletePhoneHandler = (index) => {
    const newStateOfPhones = [...this.state.phones]; //create a copy of the state
    newStateOfPhones.splice(index, 1); // remove the item based on the index provided in the .map() method
    this.setState({ phones: newStateOfPhones }); // update the state
  };

  inputTypeHandler = (event, id) => {
    const indexOfPhoneToBeChanged = this.state.phones.findIndex((phone) => {
      return phone.id === id;
    }); // get the array index of the item for id
    const newPhone = { ...this.state.phones[indexOfPhoneToBeChanged] }; // create a copy object of that item
    newPhone.type = event.target.value; // change the value in the copy
    const newStateOfPhones = [...this.state.phones]; // create a new array
    newStateOfPhones[indexOfPhoneToBeChanged] = newPhone; // change the object at index to the new object
    this.setState({ phones: newStateOfPhones }); // update the state
  };

  render() {
    return (
      <div className="CodeSamples">
        <h1>Code Samples</h1>
        {/* <ClassBasedComponentLifecycle /> */}
        <Phones
        onClick={this.phoneClickHandler}
        onDelete={this.deletePhoneHandler}
        onInput={this.inputTypeHandler}
        phones={this.state.phones}
        />
      </div>
    );
  }
}

export default CodeSamples;
