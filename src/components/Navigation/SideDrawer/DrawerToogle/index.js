import React from 'react';

import styles from './styles.module.css';

const drawerToogle = (props) => (
    <div className={styles.DrawerToogle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToogle;
