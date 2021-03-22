import React from 'react';

import Aux from '../../hoc/Auxillary';
import classes from './Burger.module.css';
import Ingredient from '../Burger/BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <Ingredient type='bread-top' />
            <Ingredient type='salad' />
            <Ingredient type='cheese' />
            <Ingredient type='bacon' />
            <Ingredient type='meat' />
            <Ingredient type='bread-bottom' />
        </div>
    );
}

export default burger;