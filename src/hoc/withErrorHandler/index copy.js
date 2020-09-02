import React, { useState, useEffect } from 'react';

import Modal from '../../components/UI/Modal';
import Aux from '../Auxx';

const WithErrorHandler = () => {
    const [count, setCount] = useState(0);

    // const [error, setError] = useState(null);
    // setError = (newError) => {
    //     error = newError;
    // };

    // useEffect(() => {
    //     axios.interceptors.response.use(null, (error) => {
    //         setError(error);
    //     });
    // }, [axios.interceptors.response]);

    return (props) => {
        return (
            <Aux>
                <Modal>Something went wrong</Modal>
                <p>{count}</p>
                {/* <WrappedComponent {...props} /> */}
            </Aux>
        );
    };
};

export default WithErrorHandler;
