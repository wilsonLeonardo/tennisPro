import * as types from './actionTypes.js'
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    data: []
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.TEACHER_ADD_NIVEL:
            return state.merge({
                data: action.nivel
            })
        case types.TEACHER_ADD_DADOS:
            return state.merge({
                data: state.data.concat(action.data)
            })
        case types.TEACHER_ADD_DISPO:
            return state.merge({
                data: state.data.concat(action.disp)
            })
        default:
            return state
    }
}