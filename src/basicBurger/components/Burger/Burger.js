import React from 'react';

import Aux from '../../hoc/Auxillary';
import classes from './Burger.module.css';
import Ingredient from '../Burger/BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        // Object.keys() urns an object to array based on it's keys
        // original object: {salad: 3, cheese: 1, bacon: 2, meat: 2} 
        // transformed array: ["salad", "cheese", "bacon", "meat"]
        // Create a new array with as many elements as the current ingredients has 
        // The content of the element is not important, the length of the array is
        .map(ingKey => {
            return (
                // Array() is a JavaScript method to create array with n elments
                // ...is a spread operator to populate the array 
                // if ingKey='salad'
                // then props.ingredients[salad] = 3
                [...Array(props.ingredients[ingKey])]
                    // now return an Ingredient component for each element 
                    .map((_, i) => {  // _ means the current variable is not important, but the index i is
                        return <Ingredient key={ingKey + i} type={ingKey} />
                    }) // close inner ingredient map
            ); // close return
        })//close transformedIngredients outer .map
        // flatten the transformed array 
        // from: [{array1}, {array2}, {array3}]
        // to:  [{…}, {…}, {…}, {…}, {…}, {…}] 
        .reduce((endResultArray, elements) => {
            return endResultArray.concat(elements);
        });
    console.log(transformedIngredients);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add some ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <Ingredient type='bread-top' />
            {transformedIngredients}
            <Ingredient type='bread-bottom' />
        </div>
    );
}

export default burger;