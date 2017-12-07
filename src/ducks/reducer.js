import axios from 'axios';

const initialState = {
    userData: {},
    products: [],
    shoppingCart: []
}

// Action Types/ Constants

const GET_USER = 'GET_USER';
const ADD_TO_SHOPPING_CART = 'ADD_TO_SHOPPING_CART'
const REMOVE_FROM_SHOPPING_CART = 'REMOVE_FROM_SHOPPING_CART'
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GET_ALL_PRODUCTS_PENDING = 'GET_ALL_PRODUCTS_PENDING'
const GET_ALL_PRODUCTS_FULFILLED = 'GET_ALL_PRODUCTS_FULFILLED'

// Action Creators

export function getUser() {
    const userInfo = axios.get('auth/verify')
        .then( res => {
            console.log(res.data);
            return res.data;
        })

        return {
            type: GET_USER,
            payload: userInfo
        }
}

export function addToShoppingCart( product ) {
    return {
        type: ADD_TO_SHOPPING_CART,
        payload: product
    }
}

export function removeFromShoppingCart( productIndex ) {
    return {
        type: REMOVE_FROM_SHOPPING_CART,
        payload: productIndex
    }
}

export function getAllProducts( products ) {
    return {
        type: GET_ALL_PRODUCTS,
        payload: axios.get( '/shop' )
}

// Reducer

export default function reducer( state = initialState, action ) {
    switch ( action.type ) {
        case GET_USER + '_FULFILLED':

            return Object.assign( {}, state, { userData: action.payload } )

        case GET_ALL_PRODUCTS + '_PENDING':
            return Object.assign( {}, state, { loading: true } )

        case GET_ALL_PRODUCTS + '_FULFILLED':
            return Object.assign( {}, state, { loading: false, products: action.payload.data } )

        case ADD_TO_SHOPPING_CART:
            return Object.assign( {}, state, { shoppingCart: [...state.shoppingCart, action.payload] } )

        case REMOVE_FROM_SHOPPING_CART:
            let newArray = state.shoppingCart.slice()
            newArray.splice( action.index, 1 )

            return Object.assign( {}, state, { shoppingCart: newArray } )

        default:
            return state;
    }
}