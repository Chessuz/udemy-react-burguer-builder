import React, { useEffect } from 'react';

import styles from './styles.module.css';
import Auxx from '../../../hoc/Auxx';
import Backdrop from '../Backdrop';

const Modal = (props) => {
    useEffect(() => {
        console.log('[Modal.js] UseEffect');
    });

    return (
        <Auxx>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className={styles.Modal}
                style={{
                    transform: props.show
                        ? 'translateY(0)'
                        : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                }}
            >
                {props.children}
            </div>
        </Auxx>
    );
};

export default React.memo(Modal, (props, nextProps) => {
    return (
        props.show === nextProps.show && props.children === nextProps.children
    );
});
