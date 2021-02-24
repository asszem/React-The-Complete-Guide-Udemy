import React, { Component } from 'react';

const charComponent = (props) => {
    const stlye = {
        display: 'inline-block',
        padding: '16px',
        textalign: 'center',
        margin: '16px',
        border: '1px solid black'
    }
    return (
        <div style={stlye} onClick={props.onDelete}>
            <p>{props.content}</p>
        </div>
    );
}
export default charComponent;