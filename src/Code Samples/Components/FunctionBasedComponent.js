import React, { Component } from 'react';
const functionBasedComponent = (props) => {
  const inputClassName = {
    backgroundColor: 'green',
    color: 'black',
    font: 'inherit',
    border: '3px solid black',
    padding: '10px',
    cursor: 'pointer',
    textAlign: 'center',
    margin: '10px auto',
  };
  return (
    <div className={props.stylePhones}>
      <p>{props.children}</p>
      <p className={props.stylePhone} onClick={props.onClick}>
        Type: {props.type} Color: {props.color}
      </p>
      <input style={inputClassName} type="text" value={props.type} onChange={props.onInput} />
      <button className="DeleteButton" onClick={props.onDelete}>Delete!</button>
    </div>
  );
};

export default functionBasedComponent;
