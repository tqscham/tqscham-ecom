

import {
    SET_HEADER_LINKS,
    SET_NAVBAR_LINKS
} from '../actions/types';

const INITIAL_STATE = {
    headerLinks: [
        {
            title: 'head accoutn'
        },
        {
            title: 'head purchases'
        }
    ],
    navbarLinks: [
        {
            title: 'account'
        },
        {
            title: 'purchases'
        }
    ]
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_HEADER_LINKS:
            return {
                ...state,
                headerLInks: action.payload
            }
        case SET_NAVBAR_LINKS:
            return {
                ...state,
                navbarLInks: action.payload
            }
        default: return state;
    }
}