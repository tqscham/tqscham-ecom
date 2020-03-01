import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS
} from './types';

export function setPurchaseDetail(_id) {
    return({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
                product: {
                    _id: 0,
                    title: 'JavaScript in the Browser',
                    description: 'Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. Its a Sith legend.',
                    price: 1.99,
                    belongsTo: [0, 1]
                },
                quantity: 2
            },
            {
                _id: 1,
                product: {
                    _id: 1,
                    title: 'Graph Database',
                    description: 'Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. Its a Sith legend.',
                    price: 1.99,
                    belongsTo: [0, 5]
                },
                quantity: 1
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

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 8.00,
                orderNumber: 'A00123',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Taylor Schamberger',
                    shippingAddress: '1234 West State Street',
                }

            },
            {
                _id: 1,
                total: 19.35,
                orderNumber: 'A00134',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Lyra Schamberger',
                    shippingAddress: '1234 West State Street',
                }

            },
            {
                _id: 2,
                total: 81.00,
                orderNumber: 'A00145',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Toby Schamberger',
                    shippingAddress: '1234 West State Street',
                }

            },
            {
                _id: 3,
                total: 4.33,
                orderNumber: 'A00156',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Zach Northy',
                    shippingAddress: '1234 West State Street',
                }

            },
            {
                _id: 4,
                total: 17.48,
                orderNumber: 'A00167',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Q-Ball',
                    shippingAddress: '1234 West State Street',
                }

            },
            {
                _id: 5,
                total: 32.00,
                orderNumber: 'A00178',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Dan Manson',
                    shippingAddress: '1234 West State Street',
                }

            },
            {
                _id: 6,
                total: 12.35,
                orderNumber: 'A00189',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Timmothy',
                    shippingAddress: '1234 West State Street',
                }

            },
            {
                _id: 7,
                total: 8.00,
                orderNumber: 'A00190',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jeff Jeffersonson',
                    shippingAddress: '1234 West State Street',
                }

            }
        ]
    })
}