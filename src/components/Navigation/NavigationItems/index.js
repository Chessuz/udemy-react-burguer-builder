import React from 'react';

import NavigationItem from './NavigationItem';
import styles from './styles.module.css';

const navigationItems = (props) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" active>
            Burguer Builder
        </NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;
