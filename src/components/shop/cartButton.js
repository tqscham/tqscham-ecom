import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function CartButton ({ className, symbol, onClick }) {
    return (
        <a onClick={onClick} className={`${className} cart-button`}>
            <FontAwesomeIcon icon={symbol} className={symbol} />
        </a>
    )
}

export default CartButton;