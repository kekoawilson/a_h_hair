import axios from 'axios';

const initialState = {
    userData: {},
    users: [],
    products: [],
    shoppingCart: [],
    servicesList: [],
    photos: [],
    servicesChosen: '',
    day: '',
    time: '',
    loginMessage: ''
}

// Action Types/ Constants

const GET_USER = 'GET_USER';
const GET_USERS = 'GET_USERS';
const ADD_TO_SHOPPING_CART = 'ADD_TO_SHOPPING_CART'
const REMOVE_FROM_SHOPPING_CART = 'REMOVE_FROM_SHOPPING_CART'
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GET_ALL_SERVICES = 'GET_ALL_SERVICES'
const GET_ALL_PHOTOS = 'GET_ALL_PHOTOS'
const GET_APPTS = 'GET_APPTS'

// Action Creators

export function getUser() {
    const userInfo = axios.get('auth/verify')
        .then( res => res.data )

        return {
            type: GET_USER,
            payload: userInfo
        }
}

export function getUsers() {
    const usersInfo = axios.get('/api/admin')
        .then( res => res.data )

        return {
            type: GET_USERS,
            payload: usersInfo
        }
}

export function addToShoppingCart( product ) {
    
    return {
        type: ADD_TO_SHOPPING_CART,
        payload: product
    }

}
       

export function removeFromShoppingCart( product_name ) {
    console.log( 'reducer', product_name );
    return {
        type: REMOVE_FROM_SHOPPING_CART,
        payload: product_name
    }
}

export function getAllProducts( products ) {
    let productInfo = axios.get( '/api/shop' )
        .then( res => res.data )

    return {
        type: GET_ALL_PRODUCTS,
        payload: productInfo
    }
}

export function getAllServices( services ) {
    let servicesInfo = axios.get( '/api/services' )
        .then( res => res.data )

    return {
        type: GET_ALL_SERVICES,
        payload: servicesInfo
    }
}

export function getAllPhotos( photoType ) {
    let photosInfo = axios.get( `/api/${photoType}` )
        .then( res => res.data )

    return {
        type: GET_ALL_PHOTOS,
        payload: photosInfo
    }
}

export function getAppts( appt ) {
    let apptInfo = axios.get( '/api/send' )
        .then( res => res.data )

    return {
        type: GET_APPTS,
        payload: apptInfo
    }
}

// Reducer

export default function reducer( state = initialState, action ) {
    switch ( action.type ) {
        case GET_USER + '_FULFILLED':
        console.log('action', action);
            return Object.assign( {}, state, { userData: action.payload[0] } )

        case GET_USER + '_REJECTED':
        console.log('action', action);
            return Object.assign( {}, state, { userData: action.payload } )

        case GET_USERS + '_FULFILLED':
            return Object.assign( {}, state, { loginMessage: 'Welcome admin', users: action.payload } )

        case GET_USERS + '_REJECTED':
            return Object.assign( {}, state, { loginMessage: 'Your are not admin!' } )

        case GET_ALL_PRODUCTS + '_PENDING':
            return Object.assign( {}, state, { loading: true } )

        case GET_ALL_PRODUCTS + '_FULFILLED':
            return Object.assign( {}, state, { loading: false, products: action.payload, loginMessage: '' } )

        case GET_ALL_PRODUCTS + '_REJECTED':
            return Object.assign( {}, state, { loading: false, loginMessage: 'Login Is Required' } )

        
            case ADD_TO_SHOPPING_CART:
            return Object.assign( {}, state, { shoppingCart: [...state.shoppingCart, action.payload] } )

        case ADD_TO_SHOPPING_CART + '_REJECTED':
            return Object.assign( {}, state, {loginMessage: 'Login Required'})
        
        case REMOVE_FROM_SHOPPING_CART:
            let newArray = state.shoppingCart.slice() // making a copy of state
            let newIndex = newArray.map( e => e.product_name ).indexOf( action.payload ) // mapping over the new copy of state and returning an obj. entering that obj using e.product_name to get that key off the obj. looking for the where that key exists and checking for matches from action.payload (product_name coming from front end)
            if( newIndex !== -1 ) {  // saying if there is a match splice it out, if not, do nothing.
                newArray.splice( newIndex, 1 )
            } else {
                console.log( 'does not exist' );
            }

            return Object.assign( {}, state, { shoppingCart: newArray } )

        case GET_ALL_SERVICES + '_PENDING':
            return Object.assign( {}, state, { loading: true } )

        case GET_ALL_SERVICES + '_FULFILLED':
            return Object.assign( {}, state, { loading: false, servicesList: action.payload, loginMessage: '' } )

        case GET_ALL_SERVICES + '_REJECTED':
            return Object.assign( {}, state, { loading: false, loginMessage: 'Login Is Required To Select Services' } )

        case GET_ALL_PHOTOS + '_PENDING':
            return Object.assign( {}, state, { loading: true } )

        case GET_ALL_PHOTOS + '_FULFILLED':
            return Object.assign( {}, state, { loading: false, photos: action.payload } )
            
        
        default:
            return state;
    }
}