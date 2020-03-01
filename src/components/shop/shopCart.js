import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

import Icons from '../../helpers/icons';
import CartProduct from './cartProduct';
import * as actions from '../../actions';


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
    let productsJSX = products.map(product => <CartProduct key={product._id} />)
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
    componentDidMount() {
        this.props.fetchCartProducts();
    }
    constructor(props) {
        super(props);

        Icons();
    }
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} shop-cart`}>
                <CartButton className='shop-cart__toggle' symbol='fas fa-times'/>
                <CartContent className='shop-cart__content' products={this.props.cartProducts} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return {
        cartProducts
    }
}

ShopCart = connect(mapStateToProps, actions)(ShopCart);

export default ShopCart;