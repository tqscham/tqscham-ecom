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

function CartContent({className, products}){
    let count = products.length;
    return (
        <div className={`${className} cart-content`}>
            <div className='cart-content__title'>
                Cart ({count})
            </div>
            <div className='cart-content__products'>

            </div>
            <div className='cart-content__footer'>

            </div>
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
                <CartContent className='shop-cart__content' products={[4, 8, 90, 1]} />
            </div>
        );
    }
}

export default ShopCart;