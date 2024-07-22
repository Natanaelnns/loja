import React, { useEffect } from 'react';

function AlertProduct({ show, onClose }) {
    useEffect(() => {
        if (show) {
            setTimeout(() => {
                onClose();
            }, 3000);
        }
    }, [show, onClose]);

    return (
        <div
            className={`alert alert-success ${show ? 'show' : ''}`}
            role="alert"
            style={{ position: 'fixed', bottom: 10, right: 10, zIndex: 9999 }}
        >
            Produto adicionado ao carrinho!
        </div>
    );
}

export default AlertProduct;
