import React, { Component } from 'react';
import './CodeSamples.css';
import ListPhones from './Components/FunctionBasedComponent'; // import the default export
// import ClassBasedComponent as ListOwners './Components/ClassBasedComponent'; // import exported class as a different name

class CodeSamples extends Component {
  state = {
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

  changeTypeHandler = (event, id) => {
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
    let phones = (
      <div>
        {this.state.phones.map((phone, index) => {
          const phoneClass = ['Phones']; // assign an empty class
          if (phone.isSelected) {
            phoneClass.push('PhoneSelected');
          }
          return (
            <ListPhones
              key={phone.id}
              onClick={() => this.phoneClickHandler(index)}
              onDelete={this.deletePhoneHandler.bind(this, index)}
              onInput={(event) => {
                this.changeTypeHandler(event, phone.id);
              }}
              type={phone.type}
              color={phone.color}
              stylePhones={phoneClass.join(' ')}
              stylePhone="Phone"
            >
              Index: {index}
            </ListPhones>
          );
        })}
      </div>
    );
    return (
      <div className="CodeSamples">
        <h1>Code Samples</h1>
        {phones}
      </div>
    );
  }
}

export default CodeSamples;
