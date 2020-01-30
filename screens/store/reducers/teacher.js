import { TEACHER_ADD_DADOS, TEACHER_ADD_NIVEL, TEACHER_ADD_DISPO } from '../actions/actionTypes'

const inicialState = {
    cep: null,
    clube: null,
    email: null,
    senha: null,
    entrada: null,
    saida: null,
    p_min: null,
    p_max: null,
    niveis:{
        especialPro:null,
        especial: null,
        interA:null
    }
}

const reducer = (state = inicialState, action) => {
    switch (action.type) {
        case TEACHER_ADD_DADOS:
            return {
                ...state,
                cep: action.payload.cep,
                clube: action.payload.clube,
                email: action.payload.email,
                senha: action.payload.senha
            }
        case TEACHER_ADD_NIVEL:
            return{
                ...state,
                niveis:{
                    especialPro: action.payload.especialPro,
                    especial: action.payload.especial,
                    interA: action.payload.interA
                }
            }
        case TEACHER_ADD_DISPO:
            return {
                ...state,
                entrada: action.payload.entrada,
                saida: action.payload.saida,
                p_min: action.payload.p_min,
                p_max: action.payload.p_max,
                
            }
        default:
            return state
    }
}

export default reducer