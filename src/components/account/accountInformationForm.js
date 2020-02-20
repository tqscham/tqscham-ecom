import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

import history from '../../history';


class AccountInformationForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className={`${className} account-information-form`}>
                <Field className='account-information-form__email' 
                name='email' 
                type='email' 
                title='Email' 
                placeholder='Email' 
                component={FormInput}/>

                <Field className='account-information-form__password' 
                name='password' 
                type='password' 
                title='Password' 
                placeholder='Password' 
                component={FormInput}/>

                <div className='account-information-form__line'></div>
                
                <Field className='account-information-form__login' 
                onClick={() => history.push('/account')}
                name='login' 
                type='submit' 
                title='Login'
                component={FormButton}/>
            </form>
        );
    }
}

AccountInformationForm = reduxForm({
    form: 'SignInform'
})(AccountInformationForm);

export default AccountInformationForm;