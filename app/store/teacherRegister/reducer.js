import * as types from './actionTypes.js'

const initialState = {
    nivel: '',
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.TEACHER_ADD_NIVEL:
            return {
                ...state,
                nivel: action.nivel
            }
        case types.TEACHER_ADD_DISPO:
            return state.merge({
                data: state.data.concat(action.disp)
            })
        default:
            return state
    }
}