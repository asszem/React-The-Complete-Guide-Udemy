import React from 'react';

import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{props.ingredients[igKey]}
                </li>
            )
        });


    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total price: <strong>${props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button
                buttonClicked={props.cancelClickHandler}
                buttonType="Danger" >
                CANCEL
            </Button>
            <Button
                buttonType="Success"
                buttonClicked={props.continueClickHandler} >
                CONTINUE
            </Button>
        </Aux>
    );

};

export default orderSummary;