import * as types from './actionTypes'

export function addDados (data){
    return async(dispatch) =>  dispatch({type: types.TEACHER_ADD_DADOS, data});
}

export function addNivel(nivel) {
    return async(dispatch) => dispatch({type:types.TEACHER_ADD_NIVEL, nivel});
}

export function addDisponibilidade(disp){
    return async(dispatch) => dispatch({type: types.TEACHER_ADD_DISPO,disp})
}

