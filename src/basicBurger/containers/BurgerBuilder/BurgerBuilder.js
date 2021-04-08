import React, { Component } from 'react';

import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            bacon: 0,
            cheese: 0,
            meat: 0,
            salad: 0,
        },
        totalPrice: 4,
        purchasable: false,
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(ingredientKey => {
                return ingredients[ingredientKey]
            }) // returns [1,2,3,4]
            .reduce((sum, element) => {
                return sum + element; // increments the sum with the current element
            }, 0); // the 0 is the initial value of .reduce method
        // getting the sum in a different way
        // let sum2 = 0;
        // for (const item in ingredients) {
        //     sum2 += ingredients[item];
        // }
        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState(
            {
                totalPrice: newPrice,
                ingredients: updatedIngredients,
            },
        );
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredinentHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount === 0) {
            return;
        }
        //Note: do not make this mistake using [] instead of {}
        //const updatedIngredients = [...this.state.ingredients];
        let updatedCount = oldCount - 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const priceReduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceReduction;
        this.setState(
            {
                totalPrice: newPrice,
                ingredients: updatedIngredients
            },
        );
        this.updatePurchaseState(updatedIngredients);
    }

    render() {
        // Setup less button disabled based on ingredient amount
        // Create a new array based on state
        const disabledInfo = {
            ...this.state.ingredients
        };
        // change the value for each key to True or False
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal >
                    <OrderSummary ingredients={this.state.ingredients}></OrderSummary>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientsAdded={this.addIngredientHandler}
                    ingredientsRemoved={this.removeIngredinentHandler}
                    disabledStatus={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                // ingredients={this.state.ingredients}
                />
            </Aux>
        );

    }
}

export default BurgerBuilder;