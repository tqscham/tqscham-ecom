import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icons from '../helpers/icons';

class Quantity extends Component {
    constructor(props) {
        super(props);

        Icons();
    }
    render() {
        const { className, quantity } =this.props;
        return (
            <div className={`${className} quantity`}>
                <div className='quantity__count'>
                    {quantity}
                </div>
                <div className='quantity__plus'>
                    <FontAwesomeIcon className='fa fa-plus' icon='plus' />
                </div>
                <div className='quantity__minus'>
                    <FontAwesomeIcon className='fa fa-minus' icon='minus' />                    
                </div>
            </div>
        );
    }
}

export default Quantity;