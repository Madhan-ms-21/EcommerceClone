import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import AuthReducer from './Auth/AuthReducer'
import {thunk} from 'redux-thunk'
import { ProductReducer } from './Product/Reducer';


const rootReducers=combineReducers({

    auth:AuthReducer,
    product:ProductReducer

});


const store = legacy_createStore(rootReducers,applyMiddleware(thunk));

export default store;
