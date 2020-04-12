import * as types from './actionTypes';
import HttpService from "../../service/HttpService";


export function loadCamps(){
    return async(dispatch) => {
        dispatch({ type: types.CLUB_LOADING, data: { loading: true } });

        Promise.all([
            HttpService
            .find('myProgressCamp'),
            HttpService
            .find('doneCamp'),
            HttpService
            .find('me'),
        ]).then(([camp, doneCamp, me]) =>{
            dispatch({ type: types.CAMP_LOADED, camp}),
            dispatch({ type: types.DONE_CAMP, doneCamp})
            dispatch({ type: types.ME_CLUB, me})
        })
        .finally(() => dispatch({ type: types.CLUB_LOADING, data: { loading: false } }))
        
    };
}

export const clear = () => async(dispatch) => dispatch({ type: types.CAMP_CLEARING });