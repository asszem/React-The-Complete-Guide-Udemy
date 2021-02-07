import React, { Component } from 'react';
import './UserInput.css';

const userInput = (props) => {
  return (
    <div className="UserInput">
        <h3>This is UserInput component</h3>
      <input type="text" value={props.userName} onChange={props.changeUserName}></input>
    </div>
  );
};

export default userInput;
