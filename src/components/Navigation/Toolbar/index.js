import React from 'react';

import Logo from '../../Logo';
import styles from './styles.module.css';
import NavigationItems from '../NavigationItems';
import DrawerToogle from '../SideDrawer/DrawerToogle';

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <DrawerToogle clicked={props.drawerToggleClicked} />
        <div className={styles.Logo}>
            <Logo />
        </div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;
