import * as Types from '../types';

const intialState = {
  loading: false,
  data: [],
  error: ''
};

const ProductReducer = (state = intialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_PRODUCT_BEGIN:
      return {
        ...state,
        loading: true
      };
    case Types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...payload],
        loading: false
      };
    case Types.GET_PRODUCT_FAILURE:
      return {
        ...state,
        data: [],
        error: payload,
        loading: false
      };

    default:
      return state;
  }
};
export default ProductReducer;
