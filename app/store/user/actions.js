import * as types from './actionTypes';
import HttpService from "../../service/HttpService";

export function loadTeaacher() {
    return async(dispatch) => {
        dispatch({ type: types.USER_LOADING, data: { loading: true } });

        HttpService
            .find('users/find-teacher')
            .then((teacher) => dispatch({ type: types.USER_LOADED, data: {teacher} }))
            .finally(() => dispatch({ type: types.USER_LOADING, data: { loading: false } }))
    };
}

export function loadingUser(loading) {
    return async(dispatch) => dispatch({ type: types.USER_LOADING, data: { loading } });
}

export const clear = () => async(dispatch) => dispatch({ type: types.USER_CLEARING });