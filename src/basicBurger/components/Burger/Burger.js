import React from 'react';

import Aux from '../../hoc/Auxillary';
import classes from './Burger.module.css';
import Ingredient from '../Burger/BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // Turn an object to array - the Ingredients object passed as a prop
    // original: {salad: 1, cheese: 1, bacon: 1, meat: 1} 
    // transformed: ["salad", "cheese", "bacon", "meat"]
    const transformedIngredients = Object.keys(props.ingredients)
        // Create a new array with as many elements as the current ingredients has 
        // The content of the element is not important, the length of the array is
        .map(ingKey => {
            return (
                // Array() is a JavaScript method to create array with n elments
                // ...is a spread operator to populate the array 
                // if ingKey='salad'
                // then props.ingredients[salad] = 1
                [...Array(props.ingredients[ingKey])]
                    // now return an Ingredient component for each element 
                    .map((_, i) => {  // _ means the current variable is not important, but the index i is
                        return <Ingredient key={ingKey + i} type={ingKey} />
                    }) // close inner ingredient map
            ); // close return
        }); //close transformedIngredients outer .map
    return (
        <div className={classes.Burger}>
            <Ingredient type='bread-top' />
            {transformedIngredients}
            <Ingredient type='bread-bottom' />
        </div>
    );
}

export default burger;