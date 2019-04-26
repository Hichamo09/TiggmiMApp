import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import AppReducer from './../reducers/';
const store = createStore(AppReducer, {}, applyMiddleware(reduxThunk));
export default store;
