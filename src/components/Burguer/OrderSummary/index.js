import React from 'react';

import Auxx from '../../../hoc/Auxx';

const orderSummary = (props) => {
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
            <p>Continue to Checkout?</p>
        </Auxx>
    );
};

export default orderSummary;