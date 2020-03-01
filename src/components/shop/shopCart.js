import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icons from '../../helpers/icons';

function CartButton ({ className, symbol }) {
    return (
        <div className={`${className} cart-button`}>
            <FontAwesomeIcon icon='times' className={symbol} />
        </div>
    )
}

function CartContent({className}){
return (
    <div className={`${className} cart-content`}>

    </div>
)
}

class ShopCart extends Component {
    constructor(props) {
        super(props);

        Icons();
    }
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} shop-cart`}>
                <CartButton className='shop-cart__toggle' symbol='fas fa-times'/>
                <CartContent className='shop-cart__content' />
            </div>
        );
    }
}

export default ShopCart;