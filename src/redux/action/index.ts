import { AxiosRequestConfig } from 'axios';
import { Dispatch } from 'redux';
import { ApiRequest } from '../../services/apiConfig';
import * as Type from '../types';


export const GetProduct = () => {
    return async (dispatch: Dispatch) => {
      dispatch({ type: Type.GET_PRODUCT_LOADING });
      const config: AxiosRequestConfig = {
        url: '/test.php?offset=20',
        method: 'GET',
      };
      try {
          const res = await ApiRequest(config);
          console.log("response of data",res.data)
        return dispatch({
          type: Type.GET_PRODUCT_SUCCESS,
          payload: res.data,
        });
      } catch (err) {
          console.log("error of data",err)
        return dispatch({
          type: Type.GET_PRODUCT_FAILED,
          payload: 'Something went wrong',
        });
      }
    };
};

  
