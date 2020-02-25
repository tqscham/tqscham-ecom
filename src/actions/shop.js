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
                description: 'Filler',
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id: 1,
                title: 'Graph Database',
                description: 'Filler',
                price: 1.99,
                belongsTo: [0, 5]
            },
            {
                _id: 2,
                title: 'Full Stack Development',
                description: 'Filler',
                price: 1.99,
                belongsTo: [0, 1, 4]
            },
            {
                _id: 3,
                title: 'User Interface Design',
                description: 'Filler',
                price: 1.99,
                belongsTo: [0, 2]
            },
            {
                _id: 4,
                title: 'JavaScript Development',
                description: 'Filler',
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id: 5,
                title: 'Advanced Object Oriented Programming',
                description: 'Filler',
                price: 1.99,
                belongsTo: [0, 6]
            },
            {
                _id: 6,
                title: 'User Experience Design',
                description: 'Filler',
                price: 1.99,
                belongsTo: [0, 2]
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