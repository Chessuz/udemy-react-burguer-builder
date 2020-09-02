import React, { Component } from 'react';

import Auxx from '../../hoc/Auxx';
import Burguer from '../../components/Burguer';
import BuilderControls from '../../components/Burguer/BuidControls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burguer/OrderSummary';
import withErrorHandler from '../../hoc/withErrorHandler';
import axios from '../../services/axios-orders';
import Spinner from '../../components/UI/Spinner';

// const INGREDIENT_PRICES = {
//     salad: 0.5,
//     cheese: 0.4,
//     meat: 1.3,
//     bacon: 0.7,
// };

class BurguerBuilder extends Component {
    state = {
        ingredients: null,
        ingredientsPrices: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false,
    };

    componentDidMount() {
        axios
            .get(
                'https://react-my-burguer-ea7c0.firebaseio.com/ingredients.json'
            )
            .then((response) => {
                let addedIngredients = { ...response.data };
                let priceIngredients = { ...response.data };
                Object.keys(response.data).forEach((igKey) => {
                    addedIngredients[igKey] = response.data[igKey].added;
                    priceIngredients[igKey] = response.data[igKey].value;

                    return igKey;
                });
                this.setState({
                    ingredients: addedIngredients,
                    ingredientsPrices: priceIngredients,
                });
            })
            .catch((error) => {
                this.setState({ error: true });
            });
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map((igKey) => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients,
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = this.state.ingredientsPrices[type];
        const newPrice = this.state.totalPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });
        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients,
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = this.state.ingredientsPrices[type];
        const newPrice = this.state.totalPrice - priceDeduction;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });
        this.updatePurchaseState(updatedIngredients);
    };

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    };

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    };

    purchaseContinueHandler = () => {
        this.setState({ loading: true });

        // alert('You continue');
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Chris',
                address: {
                    Street: 'Av. Principal',
                    zipCode: '12345678',
                    country: 'Brazil',
                },
                email: 'aba@aba.com',
            },
            deliveryMethod: 'fastest',
        };

        axios
            .post('/orders.jsonX', order)
            .then((response) => {
                console.log(response);
                this.setState({ loading: false, purchasing: false });
            })
            .catch((error) => {
                console.log(error);
                this.setState({ loading: false, purchasing: false });
            });
    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients,
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;
        let burguer = this.state.error ? (
            <p>Ingredients can't be loaded!'</p>
        ) : (
            <Spinner />
        );

        if (this.state.ingredients) {
            burguer = (
                <>
                    <Burguer ingredients={this.state.ingredients} />
                    <BuilderControls
                        price={this.state.totalPrice}
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                    />
                </>
            );

            orderSummary = (
                <OrderSummary
                    ingredients={this.state.ingredients}
                    totalPrice={this.state.totalPrice}
                    canceled={this.purchaseCancelHandler}
                    confirmed={this.purchaseContinueHandler}
                />
            );
        }

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <Auxx>
                {/* modalClosed */}
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}
                >
                    {orderSummary}
                </Modal>
                {burguer}
            </Auxx>
        );
    }
}

export default withErrorHandler(BurguerBuilder, axios);
