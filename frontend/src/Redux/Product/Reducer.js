import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType"

const initaialState = {
    products : [],
    product : null,
    loading : false,
    error : null
}


export const ProductReducer = (state=initaialState , action) => {

    switch(action.type){
        case FIND_PRODUCTS_REQUEST:
            case FIND_PRODUCT_BY_ID_REQUEST:
                return {...state,loading:true,products:[]};
        case FIND_PRODUCTS_SUCCESS:
            return {...state,products:action.payload,loading:false};
        case FIND_PRODUCTS_FAILURE:
            return {...state,products:[],loading:false,error:action.payload};
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return {...state,product:action.payload,loading:false};
        case FIND_PRODUCT_BY_ID_FAILURE:
            return {...state,product:null,error:action.payload,loading:false};
    }
}