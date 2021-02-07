import React, { Component } from 'react';

const userOutput = (props) => {
  return (
    <div style={props.style}>
      <p style={props.style}>This is UserOutput component {props.compNum}</p>
      <p>UserName = {props.userName}</p>
    </div>
  );
};

export default userOutput;