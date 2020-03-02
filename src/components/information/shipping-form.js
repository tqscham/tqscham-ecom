import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import history from '../../history';


class ShippingForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;


        return (
            <form onSubmit={handleSubmit} className={`${className} shipping-form`}>
                <Field className='shipping-form__name' 
                name='name' 
                type='name' 
                title='Name' 
                placeholder='Name' 
                component={FormInput}/>

                <Field className='shipping-form__address' 
                name='address' 
                type='address' 
                title='Street Address' 
                placeholder='Street Address' 
                component={FormInput}/>

                <Field className='shipping-form__city' 
                name='city' 
                type='city' 
                title='City' 
                placeholder='City' 
                component={FormInput}/>
                
                <Field className='shipping-form__state' 
                name='state' 
                type='state' 
                title='State' 
                placeholder='State' 
                component={FormInput}/>

                <Field className='shipping-form__zipcode' 
                name='zipcode' 
                type='zipcode' 
                title='Zipcode' 
                placeholder='Zipcode' 
                component={FormInput}/>

                <div className='shipping-form__line'></div>
                
                <Field className='shipping-form__use-this-address' 
                onClick={() => history.push('/information/payment')}
                name='use-this-address' 
                type='submit' 
                title='Use This Address'
                component={FormButton}/>
                
                <Field className='shipping-form__back' 
                onClick={() => history.push('/shop')}
                name='back' 
                type='button' 
                title='Back'
                short={true}
                component={FormButton}/>
            </form>
        );
    }
}

ShippingForm = reduxForm({
    form: 'ShippingForm'
})(ShippingForm);

export default ShippingForm;