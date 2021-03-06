import React, { Component } from 'react';
import Phone from './Phone/Phone';

class Phones extends Component {
  render() {
    const phonesClass = {
      backgroundColor: 'dimgray',
      margin: '10px auto',
    };

    let phoneComponents = (
      <div>
        {this.props.phones.map((currentPhone, index) => {
          return (
            <Phone
              key={currentPhone.id}
              onClick={() => this.props.onClick(index)}
              onDelete={() => this.props.onDelete(index)}
              onInput={(event) => {
                this.props.onInput(event, currentPhone.id);
              }}
              type={currentPhone.type}
              color={currentPhone.color}
              isSelected={currentPhone.isSelected}
            >
              Phone Index: {index}
            </Phone>
          );
        })}
      </div>
    );

    return <div style={phonesClass}>{phoneComponents}</div>;
  }
}

export default React.memo(Phones);
