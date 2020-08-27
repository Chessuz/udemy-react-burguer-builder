import React, { Component } from 'react';

import SideDrawer from '../Navigation/SideDrawer';
import Toolbar from '../Navigation/Toolbar';
import Auxxx from '../../hoc/Auxx';
import styles from './styles.module.css';

class Layout extends Component {
    state = {
        showSideDrawer: false,
    };

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    sideDrawerToogleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };
    render() {
        return (
            <Auxxx>
                <Toolbar drawerToggleClicked={this.sideDrawerToogleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={styles.Content}>{this.props.children}</main>
            </Auxxx>
        );
    }
}

export default Layout;
