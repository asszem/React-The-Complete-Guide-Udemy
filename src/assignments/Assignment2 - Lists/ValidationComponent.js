import React, { Component } from 'react';

const validationComponent = (props) => {
    let message;
    if (props.inputLength<=5){
        message='text too short';
    } else {
        message='text long enough';
    }
    return (
        <div>
            <p>{message}</p>
        </div>
    );
}

export default validationComponent;