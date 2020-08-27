import React from 'react';

import Layout from './containers/Layout';
import BurguerBuilder from './containers/BurguerBuilder';
import classes from './App.module.css';

function App() {
    return (
        <div className={classes.App}>
            <Layout>
                <BurguerBuilder />
            </Layout>
        </div>
    );
}

export default App;
