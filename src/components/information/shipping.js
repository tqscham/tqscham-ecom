import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import PageTitle from '../pageTitle';
import * as actions from '../../actions';


class Shipping extends Component {

    
    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }


    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className='sign-in'>
                <PageTitle className='sign-in__page-title' title='Shipping Address' />
            </div>
        );
    }
}

Shipping = connect(null, actions)(Shipping)

export default Shipping;