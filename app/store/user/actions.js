import * as types from './actionTypes';
import HttpService from "../../service/HttpService";


export function loadData() {
    return async(dispatch) => {
        dispatch({ type: types.USER_LOADING, data: { loading: true } });

        Promise.all([
            HttpService
                .find('game/myGames'),
            HttpService
                .find('users/find-teacher'),
            HttpService
                .find('game/statistic'),
            HttpService
                .find('me'),
            HttpService
                .find('meAccount'),
            HttpService
                .find('clubs'),
            HttpService
                .find('myClubs'),
            HttpService
                .find('users/myCamps'),
            HttpService
                .find('camps')         
        ]).then(([game, teacher, statistic, me, meAccount, clubs, myClubs, myCamps, camps]) =>{
            dispatch({type: types.LOAD_GAME, game});
            dispatch({type: types.USER_LOADED, teacher});
            dispatch({type: types.LOAD_STATISTIC, statistic});
            dispatch({type: types.LOAD_ME, me});
            dispatch({type: types.LOAD_ACCOUNT, meAccount});
            dispatch({type: types.LOAD_CLUBS, clubs});
            dispatch({type: types.LOAD_MYCLUBS, myClubs});
            dispatch({type: types.LOAD_MYCAMPS, myCamps});
            dispatch({type: types.LOAD_CAMPS, camps});
        }).finally(() => dispatch({ type: types.USER_LOADING, data: { loading: false } }))
    };
}
export function loadMoreTeacher(){
    return async(dispatch) => {
        dispatch({ type: types.USER_LOADING, data: { loading: true } });

        HttpService
            .find('users/find-teacher')
            .then((teacher) => dispatch({ type: types.USER_LOADED, teacher}))
            .finally(() => dispatch({ type: types.USER_LOADING, data: { loading: false } }))
        
    };
}
export function loadMe(){
    return (dispatch) => {
        dispatch({ type: types.USER_LOADING, data: { loading: true } });

        dispatch({ type: types.USER_LOADING, data: { loading: true } });

        HttpService
            .find('me')
            .then((me) => dispatch({ type: types.LOAD_ME, me}))
            .finally(() => dispatch({ type: types.USER_LOADING, data: { loading: false } }))
    };
}
export function loadCamps(){
    return async(dispatch) => {
        dispatch({ type: types.USER_LOADING, data: { loading: true } });

        HttpService
            .find('users/myCamps')
            .then((myCamps) => dispatch({ type: types.LOAD_MYCAMPS, myCamps}))
            .finally(() => dispatch({ type: types.USER_LOADING, data: { loading: false } }))
        
    };
}
export function loadClubs(){
    return async(dispatch) => {
        dispatch({ type: types.USER_LOADING, data: { loading: true } });

        HttpService
            .find('myClubs')
            .then((myClubs) => dispatch({ type: types.LOAD_MYCLUBS, myClubs}))
            .finally(() => dispatch({ type: types.USER_LOADING, data: { loading: false } }))
        
    };
}
export function loadAccount(){
    return async(dispatch) => {
        dispatch({ type: types.USER_LOADING, data: { loading: true } });

        HttpService
            .find('meAccount')
            .then((meAccount) => dispatch({ type: types.LOAD_ACCOUNT, meAccount}))
            .finally(() => dispatch({ type: types.USER_LOADING, data: { loading: false } }))
        
    };
}

export function updateGame(){
    return async(dispatch) => {
        dispatch({ type: types.USER_LOADING, data: { loading: true } });

        Promise.all([
            HttpService
            .find('game/myGames'),
            HttpService
                .find('game/statistic'),
        ]).then(([game,  statistic]) =>{
            dispatch({type: types.LOAD_GAME, game});
            dispatch({type: types.LOAD_STATISTIC, statistic});
        }).finally(() => dispatch({ type: types.USER_LOADING, data: { loading: false } }))
    };
}

export function loadingUser(loading) {
    return async(dispatch) => dispatch({ type: types.USER_LOADING, data: { loading } });
}

export const clear = () => async(dispatch) => dispatch({ type: types.USER_CLEARING });