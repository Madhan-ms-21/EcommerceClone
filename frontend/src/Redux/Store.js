import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import AuthReducer from './Auth/AuthReducer'
import {thunk} from 'redux-thunk'


const rootReducers=combineReducers({

    auth:AuthReducer

});


const store = legacy_createStore(rootReducers,applyMiddleware(thunk));

export default store;
