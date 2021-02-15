import React, { Component } from 'react';
import './CodeSamples.css';
import ListPhones from './Components/FunctionBasedComponent'; // import the default export
// import ClassBasedComponent as ListOwners './Components/ClassBasedComponent'; // import exported class as a different name

class CodeSamples extends Component {
  state = {
    phones: [
      { id: 1, type: 'OnePlus', color: 'red', isSelected: false },
      { id: 2, type: 'Samsung', color: 'black', isSelected: false },
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

  phoneClickHandler = (id) => {
    console.log('Phone clicked. ID = ' + id);
  };

  deletePhoneHandler = (index) => {
    //create a copy of the state
    const newStateOfPhones = [...this.state.phones];
    // remove the item based on the index provided in the .map() method
    newStateOfPhones.splice(index,1);
    // update the state
    this.setState({ phones: newStateOfPhones });
  };

  changeTypeHandler = (event, id) => {
    // get the index of the item with id
    const indexOfPhoneToBeChanged = this.state.phones.findIndex((phone) => {
      return phone.id === id;
    });
    // create a copy of that item
    const newPhone = { ...this.state.phones[indexOfPhoneToBeChanged] };
    // change the value in the copy
    newPhone.type = event.target.value;
    // create a new Phones object
    const newStateOfPhones = [...this.state.phones];
    // change the object at index to the new object
    newStateOfPhones[indexOfPhoneToBeChanged] = newPhone;
    // update the state
    this.setState({ phones: newStateOfPhones });
  };

  render() {
    let phones = (
      <div>
        {this.state.phones.map((phone, index) => {
          return (
            <ListPhones
              key={phone.id}
              onClick={() => this.phoneClickHandler(phone.id)}
              onDelete={this.deletePhoneHandler.bind(this, index)}
              onInput={(event) => {
                this.changeTypeHandler(event, phone.id);
              }}
              type={phone.type}
              color={phone.color}
              stylePhones="Phones"
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
