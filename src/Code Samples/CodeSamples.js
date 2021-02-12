import React, { Component } from 'react';
import './CodeSamples.css';
import ListPhones from './Components/FunctionBasedComponent'; // import the default export
// import ClassBasedComponent as ListOwners './Components/ClassBasedComponent'; // import exported class as a different name

class CodeSamples extends Component {
  state = {
    phones: [
      { id: 1, type: 'OnePlus', color: 'red' },
      { id: 2, type: 'Samsung', color: 'black' },
      { id: 3, type: 'iPhone', color: 'white' },
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
  
  deletePhoneHandler = (phoneIndex, id) => {
    console.log('Delete phone clicked. ID = ' + id + ' index = ' + phoneIndex);

  };

  render() {
    let phones = (
      <div>
        {this.state.phones.map((phone, index) => {
          return (
            <ListPhones
              onClick={() => this.phoneClickHandler(phone.id)}
              onDelete={this.deletePhoneHandler.bind(this, index, phone.id)}
              type={phone.type}
              color={phone.color}
              stylePhones="Phones"
              stylePhone="Phone"
            >{index}</ListPhones>
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
