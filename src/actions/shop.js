import {
    SET_SHOP_CATEGORIES,
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID,
    FILTER_PRODUCTS_WITH_QUERY
} from './types';

export function filterProductswithQuery(fields) {
    return ({
        type: FILTER_PRODUCTS_WITH_QUERY,
        payload: fields
    })
}

export function filterProductsWithCategoryId(_id) {
    return ({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id
    })
}


export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'JavaScript in the Browser',
                description: 'Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. Its a Sith legend.',
                price: 1.99,
                belongsTo: [0, 1],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 1,
                title: 'Graph Database',
                description: 'Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. Its a Sith legend.',
                price: 1.99,
                belongsTo: [0, 5],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 2,
                title: 'Full Stack Development',
                description: 'Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. Its a Sith legend.',
                price: 1.99,
                belongsTo: [0, 1, 4],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 3,
                title: 'User Interface Design',
                description: 'Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. Its a Sith legend.',
                price: 1.99,
                belongsTo: [0, 2],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 4,
                title: 'JavaScript Development',
                description: 'Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. Its a Sith legend.',
                price: 1.99,
                belongsTo: [0, 1],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 5,
                title: 'Advanced Object Oriented Programming',
                description: 'Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. Its a Sith legend.',
                price: 1.99,
                belongsTo: [0, 6],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 6,
                title: 'User Experience Design',
                description: 'Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. Its a Sith legend.',
                price: 1.99,
                belongsTo: [0, 2],
                imageUrl: 'http://via.placeholder.com/80x80'
            }
        ]
    })
}

export function fetchShopCategories(done) {
    return ({
        type: SET_SHOP_CATEGORIES,
        payload: [
            {
                _id: 0,
                title: 'All',
                active: true
            },
            {
                _id: 1,
                title: 'JavaScript',
                active: false
            },
            {
                _id: 2,
                title: 'UI/UX',
                active: false
            },
            {
                _id: 3,
                title: 'Linux',
                active: false
            },
            {
                _id: 4,
                title: 'Python',
                active: false
            },
            {
                _id: 5,
                title: 'UML',
                active: false
            },
            {
                _id: 6,
                title: 'Ruby',
                active: false
            }
        ]
    })
}