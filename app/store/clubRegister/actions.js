import * as types from './actionTypes'

export function addDados(data){
    return async(dispatch) => dispatch({type: types.CLUB_ADD_DADOS, data})
}

