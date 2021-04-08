import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Salad', type: 'salad' },
];


const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Burger price: <strong>${props.totalPrice.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                type={ctrl.type}
                ingredientsAdded={props.ingredientsAdded}
                ingredientsRemoved={props.ingredientsRemoved}
                disabledStatus={props.disabledStatus[ctrl.type]}
            // ingredientAmount={props.ingredients[ctrl.type]}
            />))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}>Checkout
        </button>
    </div>
);

export default buildControls;