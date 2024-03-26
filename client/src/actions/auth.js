import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

// Pass router because we want the page to be redirected
export const signin = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        console.log('data', data);

        dispatch({ type: AUTH, data });
        router('/');
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
        const { data } = await api.signUp(formData);
        console.log('data', data);
        dispatch({ type: AUTH, data });
        router('/');
    } catch (error) {
        console.log(error);
    }
};