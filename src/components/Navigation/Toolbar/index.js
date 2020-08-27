import React from 'react';

import Logo from '../../Logo';
import styles from './styles.module.css';

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>...</nav>
    </header>
);

export default toolbar;
