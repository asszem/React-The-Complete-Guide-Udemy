import React from 'react';

import classes from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={
            () => props.ingredientsRemoved(props.type)
        }>Less</button>
        <button className={classes.More} onClick={
            () => props.ingredientsAdded(props.type)}>More</button>
    </div>
);

export default buildControl;