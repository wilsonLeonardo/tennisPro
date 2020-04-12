import * as types from './actionTypes';
import HttpService from "../../service/HttpService";

export function loadGame() {
    return async(dispatch) => {
        dispatch({ type: types.LOADING_GAME, data: { loading: true } });
        HttpService
            .find('game/myGames')
            .then((game) => dispatch({ type: types.LOAD_GAME, game}))
            .finally(() => dispatch({ type: types.LOADING_GAME, data: { loading: false } }))
    };
}
export function loadPendingGame(){
    return async(dispatch) => {
        dispatch({ type: types.LOADING_GAME, data: { loading: true } });

        HttpService
                .find('game/pendingGames')
                .then((pending) => dispatch({ type: types.PENDING_GAME, pending}))
                .finally(() => dispatch({ type: types.LOADING_GAME, data: { loading: false } }))
        
    };
}
export function load(){
    return async(dispatch) => {
        dispatch({ type: types.LOADING_GAME, data: { loading: true } });

        Promise.all([
            HttpService
                .find('game/myGames'),
            HttpService
                .find('game/pendingGames')
        ]).then(([game, pending]) =>{
            dispatch({type: types.LOAD_GAME, game});
            dispatch({type: types.PENDING_GAME, pending});
        }).finally(() => dispatch({ type: types.LOADING_GAME, data: { loading: false } }))
    }
}
export const clear = () => async(dispatch) => dispatch({ type: types.GAME_CLEARING });