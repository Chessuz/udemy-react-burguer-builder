import React, { Component } from 'react';

import Auxx from '../../hoc/Auxx';
import Burguer from '../../components/Burguer';

class BurguerBuilder extends Component {
    render() {
        return (
            <Auxx>
                <Burguer />
                <div>Build Controls</div>
            </Auxx>
        );
    }
}

export default BurguerBuilder;
