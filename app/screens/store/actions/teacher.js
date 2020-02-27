import { TEACHER_ADD_DADOS, TEACHER_ADD_NIVEL, TEACHER_ADD_DISPO } from './actionTypes'

export const addDados = teacher => {
    return {
        type: TEACHER_ADD_DADOS,
        payload: teacher
    }
}

export const addNivel = teacher => {
    return {
        type:TEACHER_ADD_NIVEL,
        payload: teacher
    } 
}

export const addDisponibilidade = teacher => {
    return {
        type: TEACHER_ADD_DISPO,
        payload: teacher
    }
}

