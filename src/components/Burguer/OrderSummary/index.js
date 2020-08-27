import React from 'react';

import Auxx from '../../../hoc/Auxx';
import Button from '../../UI/Button';

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
                {props.ingredients[igKey]}
            </li>
        );
    });

    return (
        <Auxx>
            <h3>Your Order</h3>
            <p>A delicious burguer with the following ingredients:</p>
            <ul>{ingredientsSummary}</ul>
            <p>
                <strong>Total Price: {props.totalPrice.toFixed(2)} </strong>
            </p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.canceled}>
                CANCEL
            </Button>
            <Button btnType="Success" clicked={props.confirmed}>
                CONTINUE
            </Button>
        </Auxx>
    );
};

export default OrderSummary;
