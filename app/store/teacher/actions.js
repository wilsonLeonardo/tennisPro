import * as types from './actionTypes';
import HttpService from "../../service/HttpService";

export function loadMeTeacher() {
    return async(dispatch) => {
        dispatch({ type: types.USER_LOADING, data: { loading: true } });

        HttpService
            .find('meTeacher')
            .then((me) => dispatch({ type: types.USER_LOADED, me}))
            .finally(() => dispatch({ type: types.USER_LOADING, data: { loading: false } }))
    };
}

export function loadingUser(loading) {
    return async(dispatch) => dispatch({ type: types.USER_LOADING, data: { loading } });
}
export function loadImage(media){
    return (dispatch) => {
        dispatch({ type: types.USER_LOADING, data: { loading: true } });

        dispatch({ type: types.RELOAD_IMAGE, media });

        dispatch({ type: types.USER_LOADING, data: { loading: false } });
    };
}

export const clear = () => async(dispatch) => dispatch({ type: types.USER_CLEARING });