import * as types from './actionTypes'

export function addDados (data){
    return async(dispatch) => dispatch({type:types.USER_ADD_DADOS, data});
}
export function addNivel (nivel){
    return async(dispatch) => dispatch({type:types.USER_ADD_NIVEL, nivel});
}
export function addPlans (plans){
    return async(dispatch) => dispatch({type:types.USER_ADD_PLANS, plans});
}
export function addDisponibilidade (disp){
    return async(dispatch) => dispatch({type:types.USER_ADD_DISPO, disp});
}

