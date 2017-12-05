import { createStore, applyMiddleware } from 'redux';
import reducer from '../src/ducks/reducer';
import promiseMiddleware from 'redux-promise-middleware';

export default createStore( reducer, applyMiddleware( promiseMiddleware() ) )