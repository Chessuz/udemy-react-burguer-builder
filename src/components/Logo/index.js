import React from 'react';

import burguerLogo from '../../assets/Images/burger-logo.png';

import styles from './styles.module.css';

const logo = (prop) => (
    <div className={styles.Logo}>
        <img src={burguerLogo} alt="Burguer Builder" />
    </div>
);

export default logo;
