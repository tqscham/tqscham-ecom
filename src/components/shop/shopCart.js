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

function CartFooter ({className, products}) {
    const price = 420.69;
    return (
        <div className={`${className} cart-footer`}>
            <a className='cart-footer__checkout'>
                Checkout
            </a>
            <div className='cart-footer__subtotal'>
                Subtotal
            </div>
            <div className='cart-footer__price'>
                ${price}
            </div>
        </div>
    )
}

function CartContent({className, products}){
    let count = products.length;
    let productsJSX = products.map(product => <h1 key={product} >{product}</h1>)
    return (
        <div className={`${className} cart-content`}>
            <div className='cart-content__title'>
                Cart ({count})
            </div>
            <div className='cart-content__products'>
                {productsJSX}
            </div>
            <CartFooter className='cart-content__footer' products={products} />
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
                <CartContent className='shop-cart__content' products={[4, 8, 90, 1, 78, 38, 29, 4, 8, 90, 1, 78, 38, 29, 90]} />
            </div>
        );
    }
}

export default ShopCart;