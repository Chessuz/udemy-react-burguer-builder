import React, { useState, useEffect } from 'react';

import Modal from '../../components/UI/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return (props) => (
        <>
            <InternalWithErrorHandler axios={axios}>
                {WrappedComponent}
            </InternalWithErrorHandler>
        </>
    );
};

const InternalWithErrorHandler = (props) => {
    const [error, setError] = useState(null);
    const axios = props.axios;

    const BurguerBuilderChildren = props.children;

    useEffect(() => {
        let reqInterceptor = axios.interceptors.request.use((req) => {
            setError(null);
            return req;
        });
        let resInterceptor = axios.interceptors.response.use(
            (res) => res,
            (error) => {
                setError(error);
            }
        );

        return () => {
            axios.interceptors.request.eject(reqInterceptor);
            axios.interceptors.response.eject(resInterceptor);
        };
    }, [axios]);

    const errorConfirmedHandler = () => {
        console.log(error);
        setError(null);

        console.log(error);
    };

    return (
        <>
            <Modal show={error} modalClosed={errorConfirmedHandler}>
                {error ? error.message : null}
            </Modal>
            <BurguerBuilderChildren />
        </>
    );
};
export default withErrorHandler;
