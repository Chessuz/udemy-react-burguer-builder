import React from 'react';

import Layout from './components/Layout';
import BurguerBuilder from './containers/BurgerBuilder';

function App() {
    return (
        <div>
            <Layout>
                <BurguerBuilder />
            </Layout>
        </div>
    );
}

export default App;
