import React, { Component } from 'react';
import { connect } from 'react-redux';

function PurchaseDetailLable({className, title, value}) {
    return (
        <div className={`${className} purchase-detail-label`}>
            <div className='purchase-detail-label__title'>{title}</div>
            <div className='purchase-detail-label__value'>{value}</div>
        </div>
    )
}

class PurchaseDetail extends Component {
    render() {

        const { className, orderNumber, orderDate, user, total, creditCard } = this.props;
        const { name, shippingAddress } = user;

        return (
            <div className={`${className} purchase-detail`}>
                <PurchaseDetailLable className='purchase-detail__order-number'
                title='Order Number'
                value={orderNumber} />

                <PurchaseDetailLable className='purchase-detail__order-date'
                title='Order Date'
                value={orderDate} />
                
                <PurchaseDetailLable className='purchase-detail__shipping'
                title='Shipping Address'
                value={`${name}\n${shippingAddress}`} />
                
                <PurchaseDetailLable className='purchase-detail__total'
                title='Total'
                value={total} />
                
                <PurchaseDetailLable className='purchase-detail__credit-card'
                title='Credit Card'
                value={creditCard} />

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { purchaseDetail } = state.user;
    return {
        ...purchaseDetail
    }
}

PurchaseDetail = connect(mapStateToProps)(PurchaseDetail);

export default PurchaseDetail;