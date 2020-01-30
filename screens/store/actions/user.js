import { USER_ADD_DADOS, USER_ADD_NIVEL, USER_ADD_DISPO } from './actionTypes'

export const addDados = user => {
    return {
        type: USER_ADD_DADOS,
        payload: user
    }
}

export const addNivel = user => {
    return {
        type: USER_ADD_NIVEL,
        payload: user
    }
}

export const addDisponibilidade = user => {
    return {
        type: USER_ADD_DISPO,
        payload: user
    }
}

