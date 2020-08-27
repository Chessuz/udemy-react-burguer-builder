import React from 'react';

import Toolbar from '../Navigation/Toolbar';
import Auxxx from '../../hoc/Auxx';
import styles from './styles.module.css';

const layout = (props) => (
    <Auxxx>
        <Toolbar />
        <main className={styles.Content}>{props.children}</main>
    </Auxxx>
);

export default layout;
