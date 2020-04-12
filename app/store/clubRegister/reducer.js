import * as types from './actionTypes'
import Immutable from 'seamless-immutable'

const initialState =Immutable({
    cep: '',
    name: '',
    telefone: '',
    email: '',
    password: ''
});

export default function reduce(state = initialState, action = {}){
    switch (action.type) {
        case types.CLUB_ADD_DADOS:
            return state.merge({
                cep: action.data.cep,
                name: action.data.nome,
                telefone: action.data.telefone,
                email: action.data.email,
                password: action.data.senha
            });
            default:
                return initialState
    }
}