import React from 'react';

import Auxxx from '../../hoc/Auxx';
import styles from './styles.module.css';

const layout = (props) => (
    <Auxxx>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styles.Content}>{props.children}</main>
    </Auxxx>
);

export default layout;
