import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAILURE,
    GET_ORDER_BY_ID_REQUEST,
    GET_ORDER_BY_ID_SUCCESS,
    GET_ORDER_BY_ID_FAILURE,
} from './ActionType';

const initialState = {
    orders: [],
    order: null,
    error: null,
    loading: false,
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CREATE_ORDER_SUCCESS:
            return {
                loading: false,
                error: null,
                order: action.payload,
            };
        case CREATE_ORDER_FAILURE:
            return {
                loading: false,
                error: action.payload,
            };
        case GET_ORDER_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ORDER_BY_ID_SUCCESS:
            return {
                loading: false,
                order: action.payload,
            };
        case GET_ORDER_BY_ID_FAILURE:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};


