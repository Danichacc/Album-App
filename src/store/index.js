import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './rootReducer';
import fetcherMiddleware from '../fetcherMiddleware';

const store = createStore(rootReducer, applyMiddleware(fetcherMiddleware));

export default store;
