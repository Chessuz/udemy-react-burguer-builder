import React from 'react';

import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import styles from './styles.module.css';
import Backdrop from '../../UI/Backdrop';
import Auxx from '../../../hoc/Auxx';

const sideDrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    if (props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open];
    }
    return (
        <Auxx>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxx>
    );
};

export default sideDrawer;
