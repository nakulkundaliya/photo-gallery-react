import { AxiosRequestConfig } from 'axios';
import { Dispatch } from 'redux';
import { ApiRequest } from '../../services/apiConfig';
import * as Type from '../types';

export const GetProduct = ({ offset }: { offset: number }) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: Type.GET_PRODUCT_BEGIN });

    const config: AxiosRequestConfig = {
      url: `/test.php?offset=${offset}`,
      method: 'GET'
    };

    try {
      const res = await ApiRequest(config);

      return dispatch({
        type: Type.GET_PRODUCT_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      return dispatch({
        type: Type.GET_PRODUCT_FAILURE,
        payload: 'Something went wrong'
      });
    }
  };
};
