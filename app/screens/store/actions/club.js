import { CLUB_ADD_DADOS, CLUB_ADD_DISPO } from './actionTypes'

export const addDados = club => {
    return {
        type: CLUB_ADD_DADOS,
        payload: club
    }
}
export const addDisponibilidade = club => {
    return {
        type: CLUB_ADD_DISPO,
        payload: club
    }
}

