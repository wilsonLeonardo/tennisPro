import { USER_ADD_DADOS, USER_ADD_NIVEL, USER_ADD_DISPO } from '../actions/actionTypes'

const inicialState = {
    cep: null,
    clube: null,
    email: null,
    senha: null,
    entrada: null,
    saida: null
}

const reducer = (state = inicialState, action) => {
    switch (action.type) {
        case USER_ADD_DADOS:
            return {
                ...state,
                cep: action.payload.cep,
                clube: action.payload.clube,
                email: action.payload.email,
                senha: action.payload.senha
            }
        case USER_ADD_NIVEL:
            return {
                ...state
            }

        case USER_ADD_DISPO:
            return {
                ...state,
                entrada: action.payload.entrada,
                saida: action.payload.saida
            }
        default:
            return state
    }
}

export default reducer