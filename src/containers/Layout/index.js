import React, { Component } from 'react';

import SideDrawer from '../../components/Navigation/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar';
// import Auxx from '../../hoc/Auxx';
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
            <>
                <Toolbar drawerToggleClicked={this.sideDrawerToogleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={styles.Content}>{this.props.children}</main>
            </>
        );
    }
}

export default Layout;
