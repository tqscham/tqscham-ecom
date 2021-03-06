import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

function FormSearchBar(props) {
    return (
        <input className={`${props.className} form-search-bar`} {...props.input} 
        type='text' 
        placeholder={props.placeholder} />
    )
}

class ShopSearchBar extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} shop-search-bar`}>
                <Field className='shop-search-bar__form-search-bar shop-search-bar__input' 
                placeholder='Search' 
                component={FormSearchBar} 
                name='query' />
            </form>
        );
    }
}

ShopSearchBar = reduxForm({
    form: 'ShopSerachBar'
})(ShopSearchBar)

export default ShopSearchBar;