import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icons from '../helpers/icons';

class GreenPriceTag extends Component {
    constructor(props) {
        super(props);

        Icons();
    }
    render() {
        const { className, title } =this.props;
        return (
            <div className={`${className} green-price-tag`}>
                ${title}
            </div>
        );
    }
}

export default GreenPriceTag;