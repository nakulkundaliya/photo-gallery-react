import * as Types from '../types';

const intialState = {
    data: [],
}

const ProductReducer = (state = intialState, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case Types.GET_PRODUCT_LOADING:
            return {
                ...state,
                loading:true
            }
        case Types.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                data:payload
            }
        case Types.GET_PRODUCT_FAILED:
            return {
                ...state,
                data: [],
                error:payload
            }
        default:
            return state;
    }
}
export default ProductReducer;